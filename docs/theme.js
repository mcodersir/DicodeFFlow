(() => {
  const root = document.documentElement;
  const toggle = document.getElementById("theme-toggle");
  const label = document.getElementById("theme-label");
  const themeColor = document.querySelector('meta[name="theme-color"]');
  if (!toggle || !label) return;

  const applyTheme = (theme, persist = false) => {
    const activeTheme = theme === "light" ? "light" : "dark";
    const nextThemeLabel = activeTheme === "dark" ? "تم روشن" : "تم تاریک";
    root.dataset.theme = activeTheme;
    label.textContent = nextThemeLabel;
    toggle.title = `تغییر به ${nextThemeLabel}`;
    toggle.setAttribute("aria-pressed", String(activeTheme === "dark"));
    if (themeColor) themeColor.content = activeTheme === "dark" ? "#081321" : "#f7f9fc";
    if (persist) {
      try { localStorage.setItem("dicodefflow-theme", activeTheme); } catch (_) {}
    }
  };

  applyTheme(root.dataset.theme);
  toggle.addEventListener("click", () => {
    applyTheme(root.dataset.theme === "dark" ? "light" : "dark", true);
  });
})();
