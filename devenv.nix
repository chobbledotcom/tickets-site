{
  pkgs,
  lib,
  config,
  ...
}:

let
  # sharp (image resizing) loads libstdc++ at runtime.
  libraryPath = lib.optionalString pkgs.stdenv.isLinux (
    lib.makeLibraryPath [ pkgs.stdenv.cc.cc.lib ]
  );

  precommitHook = pkgs.writeShellApplication {
    name = "tickets-site-precommit-hook";
    runtimeInputs = [
      pkgs.bun
      pkgs.git
    ];
    text = ''
      export LD_LIBRARY_PATH="${libraryPath}:''${LD_LIBRARY_PATH:-}"
      exec bun run precommit "$@"
    '';
  };
in
{
  packages = with pkgs; [
    bun
    git
    vips
  ];

  scripts = {
    serve = {
      description = "Start the development server";
      exec = ''exec bun run serve "$@"'';
    };
    build = {
      description = "Build the site";
      exec = ''exec bun run build "$@"'';
    };
    prepare-dev = {
      description = "Prepare the development environment";
      exec = ''exec bun run prepare-dev "$@"'';
    };
    sync-files = {
      description = "Synchronise files";
      exec = ''exec bun run sync-files "$@"'';
    };
    watch = {
      description = "Watch for changes";
      exec = ''exec bun run watch "$@"'';
    };
    update-pages = {
      description = "Update pages";
      exec = ''exec bun run update-pages "$@"'';
    };
    update-scripts = {
      description = "Update chobble-client scripts";
      exec = ''exec bun run update-scripts "$@"'';
    };
    fetch-google-reviews = {
      description = "Fetch Google Maps reviews";
      exec = ''exec bun run fetch-google-reviews "$@"'';
    };
    clean = {
      description = "Clean the build directory";
      exec = ''exec bun run clean "$@"'';
    };
    test = {
      description = "Run tests";
      exec = ''exec bun run test "$@"'';
    };
    pc = {
      description = "Run the precommit checks";
      exec = ''exec bun run precommit "$@"'';
    };
  };

  git-hooks.hooks.precommit = {
    enable = true;
    entry = "${precommitHook}/bin/tickets-site-precommit-hook";
    pass_filenames = false;
  };

  # The devenv task `devenv:git-hooks:run` executes the precommit on every
  # shell entry, and the precommit builds the site. The commit-time Git hook
  # already runs it, so shell entry never needs to. A `status` command that
  # exits 0 tells the task runner the hook run is already satisfied. The task
  # only exists while the git-hooks module is enabled.
  tasks = lib.mkIf config.git-hooks.enable {
    "devenv:git-hooks:run".status = "exit 0";
  };

  # The .env file is loaded by the scripts that need it, not the shell.
  dotenv.disableHint = true;

  enterShell = ''
    export LD_LIBRARY_PATH="${libraryPath}:''${LD_LIBRARY_PATH:-}"

    echo "tickets-site dev shell: serve, build, test, pc (precommit), and the other bun run commands"

    # prek renames the pre-existing flake-installed hook to
    # pre-commit.legacy, then runs it at commit time. Remove that leftover,
    # but leave any hook the old flake did not install alone.
    hook="$(git rev-parse --git-path hooks/pre-commit.legacy 2>/dev/null || true)"
    if [ -n "$hook" ] && [ -f "$hook" ] && grep -Fq "# Installed by tickets flake.nix" "$hook"; then
      rm -f "$hook"
    fi
  '';
}
