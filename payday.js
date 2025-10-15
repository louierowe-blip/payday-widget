(function () {
  // ---- Configure your payday list (ISO yyyy-mm-dd) ----
  const PAYDAYS = [
    "2025-10-27",
    "2025-11-27",
    "2025-12-23",
    "2026-01-27",
    "2026-02-27",
    "2026-03-27",
    "2026-04-27",
    "2026-05-27",
    "2026-06-26"
  ];

  // Create a container if one doesn’t exist
  let el = document.getElementById("payday");
  if (!el) {
    el = document.createElement("div");
    el.id = "payday";
    el.style.cssText =
      "font-family:Arial,sans-serif;font-size:16px;color:#01A2D9;text-align:center;margin:10px 0;";
    document.body.appendChild(el);
  }

  // Find next upcoming date
  const now = new Date();
  const next = PAYDAYS.map(d => new Date(d + "T00:00:00"))
                      .find(d => d >= now);

  if (next) {
    const formatted = next.toLocaleDateString("en-GB", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "Europe/London"
    });
    el.textContent = "Next Payday: " + formatted;
  } else {
    el.textContent = "No upcoming paydays found.";
  }
})();
