(function () {
  function copyText(text) {
    if (!text) return;
    navigator.clipboard.writeText(text).then(() => {
      // маленькая обратная связь без алертов
    }).catch(() => {});
  }

  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".copy");
    if (!btn) return;

    const text = btn.getAttribute("data-copy") || "";
    copyText(text);

    const old = btn.textContent;
    btn.textContent = "Copied";
    setTimeout(() => btn.textContent = old, 900);
  });
})();