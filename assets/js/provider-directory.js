(() => {
  const root = document.querySelector("[data-provider-directory]");
  if (!root) return;

  const fieldset = root.querySelector("[data-pd-fieldset]");
  const inputs = Array.from(root.querySelectorAll("[data-pd-filter]"));
  const items = Array.from(root.querySelectorAll("[data-pd-item]"));
  const count = root.querySelector("[data-pd-count]");
  const total = items.length;

  const attributesOf = (item) =>
    (item.getAttribute("data-attributes") || "").split(/\s+/).filter(Boolean);

  const update = () => {
    const selected = inputs
      .filter((input) => input.checked)
      .map((input) => input.value);
    let shown = 0;
    for (const item of items) {
      const attributes = attributesOf(item);
      const matches = selected.every((key) => attributes.includes(key));
      item.classList.toggle("provider-directory__item--hidden", !matches);
      if (matches) shown += 1;
    }
    count.textContent =
      selected.length === 0
        ? "Showing all " + total + " platforms."
        : "Showing " + shown + " of " + total + " platforms.";
  };

  fieldset.hidden = false;
  for (const input of inputs) {
    input.addEventListener("change", update);
  }
})();
