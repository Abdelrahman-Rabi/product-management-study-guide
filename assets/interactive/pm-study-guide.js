(() => {
  "use strict";

  const selectAll = (selector, root = document) => [...root.querySelectorAll(selector)];

  const initializeReveals = () => {
    selectAll("[data-reveal-target]").forEach((button) => {
      const target = document.getElementById(button.dataset.revealTarget);
      if (!target) return;

      button.addEventListener("click", () => {
        const willOpen = target.hidden;
        target.hidden = !willOpen;
        button.setAttribute("aria-expanded", String(willOpen));
        button.textContent = willOpen
          ? button.dataset.hideLabel || "Hide explanation"
          : button.dataset.showLabel || "Reveal explanation";
      });
    });
  };

  const initializeChoices = () => {
    selectAll('[data-widget="choice"]').forEach((widget) => {
      const feedback = widget.querySelector("[data-choice-feedback]");
      const buttons = selectAll("[data-choice]", widget);

      buttons.forEach((button) => {
        button.addEventListener("click", () => {
          buttons.forEach((candidate) => {
            candidate.removeAttribute("data-state");
            candidate.setAttribute("aria-pressed", "false");
          });

          const isCorrect = button.dataset.correct === "true";
          button.dataset.state = isCorrect ? "correct" : "incorrect";
          button.setAttribute("aria-pressed", "true");

          if (feedback) {
            feedback.textContent = isCorrect
              ? button.dataset.feedbackCorrect || "That choice fits the lesson's reasoning."
              : button.dataset.feedbackIncorrect || "Reconsider the evidence and consequence before choosing.";
          }
        });
      });
    });
  };

  const initializeTabs = () => {
    selectAll('[data-widget="tabs"]').forEach((widget) => {
      const tabs = selectAll('[role="tab"]', widget);
      const panels = selectAll('[role="tabpanel"]', widget);

      const activate = (tab) => {
        tabs.forEach((candidate) => {
          const selected = candidate === tab;
          candidate.setAttribute("aria-selected", String(selected));
          candidate.tabIndex = selected ? 0 : -1;
        });
        panels.forEach((panel) => {
          panel.hidden = panel.id !== tab.getAttribute("aria-controls");
        });
      };

      tabs.forEach((tab, index) => {
        tab.addEventListener("click", () => activate(tab));
        tab.addEventListener("keydown", (event) => {
          if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
          event.preventDefault();
          let next = index;
          if (event.key === "ArrowLeft") next = (index - 1 + tabs.length) % tabs.length;
          if (event.key === "ArrowRight") next = (index + 1) % tabs.length;
          if (event.key === "Home") next = 0;
          if (event.key === "End") next = tabs.length - 1;
          activate(tabs[next]);
          tabs[next].focus();
        });
      });
    });
  };

  const initializeProgress = () => {
    const bar = document.querySelector("[data-progress-bar]");
    if (!bar) return;

    const update = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const percent = scrollable > 0 ? Math.min(100, (window.scrollY / scrollable) * 100) : 100;
      bar.style.width = `${percent}%`;
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
  };

  const initializeVisualPlaceholders = () => {
    selectAll("[data-visual-placeholder]").forEach((figure) => {
      const image = figure.querySelector("img");
      const fallback = figure.querySelector("[data-visual-fallback]");
      if (!image || !fallback) return;

      const showImage = () => {
        image.hidden = false;
        fallback.hidden = true;
        figure.dataset.visualState = "ready";
      };

      const showFallback = () => {
        image.hidden = true;
        fallback.hidden = false;
        figure.dataset.visualState = "awaiting-asset";
      };

      image.addEventListener("load", showImage);
      image.addEventListener("error", showFallback);

      if (image.complete) {
        image.naturalWidth > 0 ? showImage() : showFallback();
      }
    });
  };

  initializeReveals();
  initializeChoices();
  initializeTabs();
  initializeProgress();
  initializeVisualPlaceholders();
})();
