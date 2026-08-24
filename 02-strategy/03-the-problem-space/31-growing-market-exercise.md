---
title: "Exercise #9: Are you in a Growing Market?"
course: "The Product Management Course"
part: "Strategy"
part_number: 2
section: "The Problem Space"
section_number: 3
lecture_number: 31
content_type: "exercise"
material_level: 2
status: complete
source: "Udemy video transcript"
visuals: 3
related_concepts:
  - market growth
  - product strategy
  - biometrics
  - target market sizing
  - risk assessment
---

[← Previous Lecture](./30-growing-market-new-companies.md)
·
[Section Overview](./README.md)
·
[Part Overview](../README.md)
·
[Next Lecture →](unavailable)

# Exercise #9: Are you in a Growing Market?

> **Material level:** Level 2 — Hands-on exercise evaluating 5-year B2B and B2C market trajectories under the impact of emerging technologies, changing demographics, and regulations.

## Exercise Overview

This exercise guides you through diagnosing a product's market trajectory (Growing, Shrinking, or Stable) over a **five-year timeframe**. Five years is the standard strategic horizon for software product organizations planning their product vision and long-term roadmap. By completing this exercise, you will be able to:
* Evaluate market trajectories under the pressure of technology transitions.
* Detail the mechanics and flaws of password-replacement technologies.
* Analyze B2C opportunities (like ride hailing) for growth drivers vs. regulatory barriers.
* Audit your own product's market trajectory.

---

## Part A: Warm-Up Market Evaluations

Evaluate these four distinct markets to see how technology, demography, and hardware form factors control 5-year growth trajectories:

![Warm-Up Market Evaluations Trajectories](./visuals/31-market-evaluations.png)
*Warm-up market trajectory evaluations across four sectors and their primary drivers.*

### 1. Password Managers (e.g., 1Password, LastPass)
*   **Trajectory:** **Shrinking**
*   **The Driver:** Passwords represent the weakest link in computer security due to poor user choices. The industry is moving toward passwordless authentication, which will force password managers to reinvent their core utility or become obsolete.
*   **Emerging Replacements:**
    *   *Biometrics:* Fingerprints, iris scans, and face readers. *Security Flaw:* Unlike passwords, biometrics are unchangeable. If your eye print dataset is compromised, you cannot change your iris.
    *   *Zero Login:* Using unique behavioral patterns (typing rhythm, device location, typical tasks) to authenticate silently.
    *   *Implanted Microchips:* Subdermal chips replacing cards and passwords. *Barrier:* High customer perception and ethical hurdles.
    *   *Brain Passwords:* Reading unique electroencephalogram (EEG) prints of a person's brain activity when looking at specific images.
    *   *DNA Identification:* Unique genetic matching.

![Future Authentication Alternatives](./visuals/31-future-authentication.png)
*Future password-replacement alternatives and their corresponding security loopholes.*

### 2. Appointment Scheduling for Dentists (e.g., Zocdoc)
*   **Trajectory:** **Growing**
*   **The Driver:** Demographics (an aging population) expand the core patient base. Furthermore, the dentistry profession requires high physical dexterity and fine motor control, making it extremely difficult to automate via robotics or ML over the next 5 years. There are also high customer perception hurdles against allowing a robot to work on your face.

### 3. Virus Protection for Desktops (e.g., Norton, McAfee)
*   **Trajectory:** **Shrinking**
*   **The Driver:** A structural decline in the desktop PC market over the last decade in favor of mobile devices, tablets, and lightweight thin clients.

### 4. Marketplace for Secondhand Cars (e.g., CarMax, Cars.com)
*   **Trajectory:** **Stable (Stagnant)**
*   **The Driver:** Saturated, mature transaction volumes. Emerging market growth has flattened, and declines in new car manufacturing lead directly to static transaction rates in the used car market.

---

## Part B: The Uber Ride Hailing Case Study

Let's evaluate the ride-hailing industry over a 5-year strategic horizon:

*   **Trajectory:** **Growing**
*   **Upside Drivers (Growth):**
    *   *Urbanization:* Rapid migration of global populations into major cities increases density, making private vehicle ownership expensive and inconvenient.
    *   *Connectivity:* The growth of high-speed mobile internet and smartphone ownership makes ride-hailing software accessible to a broader audience.
*   **Downside Drivers (Risks):**
    *   *Regulations:* Local municipalities and taxi commissions often enforce regulatory bans, capping driver numbers or closing company operations in specific regions.

---

## Part C: Market Trajectory Worksheet

Audit your own product's market trajectory over a 5-year strategic timeframe. Spend 10 to 15 minutes answering these three checks:

![Market Trajectory Diagnostic Flowchart](./visuals/31-audit-flowchart.png)
*Flowchart outlining the step-by-step process of auditing a product's market trajectory.*

```text
+-------------------------------------------------------------------------------+
|                           Market Trajectory Worksheet                         |
+-------------------------------------------------------------------------------+
|                                                                               |
|  Product Name: ________________________   Market Name: ______________________ |
|                                                                               |
|  1. 5-Year Trajectory Estimate:   [ ] Growing    [ ] Shrinking   [ ] Stable   |
|                                                                               |
|  2. Emerging Technologies:                                                    |
|     (What new technologies are likely to replace or disrupt your product?)    |
|     ________________________________________________________________________  |
|                                                                               |
|  3. Primary Trends & Drivers:                                                 |
|     (Demographics, regulations, hardware form factor shifts, etc.)            |
|     ________________________________________________________________________  |
|                                                                               |
+-------------------------------------------------------------------------------+
```

### Strategic Action:
If your market is **stable** or **shrinking**, you must pivot your product strategy toward adjacent growing domains (e.g., desktop antivirus pivoting to cloud network security) to protect long-term business viability.

---

## Common Misunderstandings

### "Biometric security is the perfect replacement for passwords"
**Correction:** While biometrics remove login friction, they introduce a major vulnerability: **permanence**. If database hackers leak your cryptographic biometric prints, you cannot reset your face or fingerprint. Modern security must combine biometrics with multi-factor encryption layers.

### "Market size is the same as market growth"
**Correction:** A market can be massive but shrinking (e.g., desktop PC antivirus). Massive shrinking markets are highly competitive and undergo price wars. A growing market can be small today but offers high margins and a stream of new buyers who are easy to acquire.

---

## Key Concepts and Definitions

| Concept | Simple definition |
|---|---|
| **Zero Login** | Authentication utilizing passive behavioral metrics (typing rhythm, location) to log in without user action. |
| **Biometric Permanence** | The security risk where physical characteristics (fingerprints, iris) cannot be reset if compromised. |
| **Market Trajectory** | The direction of a market's value, prevalence, and volume over a strategic timeframe (Grow, Shrink, Stable). |
| **Form Factor Shift** | Changes in the dominant hardware devices used by consumers (e.g., from desktop towers to smartphones). |

---

## One-Minute Review

*   **Define Trajectory:** Decide whether your target market is Growing, Shrinking, or Stable over a 5-year planning cycle.
*   **Analyze Alternative Disruption:** Audit emerging tech (such as biometric scans, zero logins, or subdermal chips) to identify where legacy software utilities could face obsolescence.
*   **Balance upside and risk:** Balance growth vectors (urbanization, smartphone usage) against structural downfalls (local regulatory bans).

---

## Recommended Visual Illustrations

### Illustration 1: Warm-Up Market Evaluations
*   **Concept:** Infographic card comparing the 4 warmup scenarios.
*   **Suggested structure:** 4 cards side-by-side: Password managers (Shrinking), Dentist booking (Growing), Desktop Antivirus (Shrinking), Used cars (Stable).

### Illustration 2: Future Authentication Alternatives
*   **Concept:** Overview of emerging authentication technologies and their vulnerabilities.
*   **Suggested structure:** 2x2 grid showing Biometrics, Zero Login, Subdermal Chips, and Brain Passwords.

### Illustration 3: Steps to Audit a Market Trajectory (Visual Summary)
*   **Concept:** Flowchart guiding strategic trajectory diagnostic audits.
*   **Suggested structure:** Flow blocks from market definition to strategy formulation.

---

## Related Concepts

* [Growing Market = New Companies](./30-growing-market-new-companies.md)
* [Getting Product Strategy Right](./26-getting-product-strategy-right.md)

## Visuals in This Lecture

* [Warm-Up Market Evaluations Trajectories](./visuals/31-market-evaluations.png)
* [Future Authentication Alternatives](./visuals/31-future-authentication.png)
* [Market Trajectory Diagnostic Flowchart](./visuals/31-audit-flowchart.png)

## Interactive Lesson

* [Open the interactive companion](./interactive/31-growing-market-exercise.html)

## Source

* [Original lecture transcript](../../sources/02-strategy/03-the-problem-space/31-growing-market-exercise-transcript.md)

## Continue Learning

* Previous: [Growing Market = New Companies](./30-growing-market-new-companies.md)
* Section: [The Problem Space](./README.md)
* Part: [Strategy](../README.md)
* Next: [Next Section Overview](../04-goal-setting/README.md) *(Section 4: Goal Setting)*
* Course index: [Full Course Index](../../COURSE-INDEX.md)
