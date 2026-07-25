{
  inputs = { };

  outputs =
    { ... }:
    let
      forAllSystems = f: { x86_64-linux = f "x86_64-linux"; };
    in
    {
      devShells = forAllSystems (
        system:
        let
          pkgs = import <nixpkgs> { inherit system; };
          bunScripts = pkgs.symlinkJoin {
            name = "bun-scripts";
            paths = map (cmd: pkgs.writeShellScriptBin cmd "bun run ${cmd} -- \"$@\"") [
              "serve"
              "build"
              "prepare-dev"
              "sync-files"
              "watch"
              "update-pages"
              "update-scripts"
              "fetch-google-reviews"
              "clean"
              "test"
            ];
          };
        in
        {
          default = pkgs.mkShell {
            packages = with pkgs; [
              bun
              vips
              stdenv.cc.cc.lib
              bunScripts
            ];

            shellHook = ''
              export LD_LIBRARY_PATH="${pkgs.stdenv.cc.cc.lib}/lib:$LD_LIBRARY_PATH"

              install_precommit_hook() {
                if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
                  return
                fi

                hook_path="$(git rev-parse --git-path hooks/pre-commit)"
                hook_marker="# Installed by tickets flake.nix"

                if [ -e "$hook_path" ] && ! grep -Fqx "$hook_marker" "$hook_path"; then
                  echo "  pre-commit hook already exists; leaving it unchanged"
                  return
                fi

                mkdir -p "$(dirname "$hook_path")"
                printf '%s\n' '#!/usr/bin/env sh' "$hook_marker" 'exec bun run precommit "$@"' > "$hook_path"
                chmod +x "$hook_path"
                echo "  installed pre-commit hook - bun run precommit"
              }
              install_precommit_hook

              cat <<EOF

              Available commands:
               serve                - Start development server
               build                - Build the project
               prepare-dev          - Prepare development environment
               sync-files           - Synchronize files
               watch                - Watch for changes
               update-pages         - Update pages
               update-scripts       - Update chobble-client scripts
               fetch-google-reviews - Fetch Google Maps reviews
               clean                - Clean build directory
               test                 - Run tests

              EOF
              git pull
            '';
          };
        }
      );
    };
}
