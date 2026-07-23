  // ==UserScript==
  // @name         RVSQ Auto Search
  // @match        https://www.rvsq.gouv.qc.ca/prendrerendezvous/Recherche.aspx*
  // @grant        none
  // @run-at       document-idle
  // ==/UserScript==

  (() => {
    "use strict";

    const INTERVAL_MS = 15_000;

    function runSearch() {
      // Re-query every time because the site may replace the button after an
      // asynchronous search.
      const button = document.getElementById("searchbutton");

      if (!button) {
        console.warn("[RVSQ Auto Search] Search button not found.");
        return;
      }

      if (button.disabled || button.getAttribute("aria-disabled") === "true") {
        console.log("[RVSQ Auto Search] Search is still in progress.");
        return;
      }

      console.log(
        `[RVSQ Auto Search] Clicking Search at ${new Date().toLocaleTimeString()}`
      );

      button.click();
    }

    console.log("[RVSQ Auto Search] Started; searching every 15 seconds.");

    // Wait 15 seconds before the first automatic search.
    window.setInterval(runSearch, INTERVAL_MS);
  })();
