"use strict";

/*
 * Replace these two placeholder functions when the game actions are known.
 * They remain separate so the + and - buttons can behave independently.
 */
const magnetTileActions = {
  positive(button) {
    console.info("[Magnet Field] Positive tile action placeholder", button);
  },

  negative(button) {
    console.info("[Magnet Field] Negative tile action placeholder", button);
  },
};

document.querySelectorAll(".magnet-tile[data-magnet-action]").forEach((button) => {
  button.addEventListener("click", () => {
    const action = magnetTileActions[button.dataset.magnetAction];

    if (typeof action === "function") {
      action(button);
    }
  });
});
