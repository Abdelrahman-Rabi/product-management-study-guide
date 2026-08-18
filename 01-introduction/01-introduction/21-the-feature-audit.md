---
title: "Exercise #4 The Feature Audit"
course: "The Product Management Course"
part: "Introduction"
part_number: 1
section: "Introduction"
section_number: 1
lecture_number: 21
content_type: "lecture"
material_level: 2
status: complete
source: "Udemy video transcript"
visuals: 5
related_concepts:
  - feature audit
  - product analytics
  - hypothesis validation
  - product sunsetting
  - risk assessment
---

[← Previous Lecture](./20-evaluating-your-product.md)
·
[Section Overview](./README.md)
·
[Part Overview](../README.md)
·
[Next Lecture →](../../02-strategy/02-strategy/22-what-is-product-strategy.md)

# Exercise #4: The Feature Audit

> **Material level:** Level 2 — Core lecture detailing the practical steps to audit an existing product using hypotheses, analyzing the Uber (2020) Rider App case study, and evaluating non-data business risks.

## Lecture Overview

This lecture introduces the fourth practical exercise of the course: performing a feature audit on your chosen study product. It covers how to structure feature hypotheses, check for metrics correlations, and evaluate external business risks. By the end of this lecture, you should be able to:
* Formulate a feature-usage hypothesis when direct product analytics are unavailable.
* Identify the necessity and methods of validating personal hypotheses with quantitative and qualitative data.
* Analyze metrics correlations between intersecting features (e.g., tracking vs. chat).
* Evaluate non-data risks (health/safety, branding, regulations) when deciding whether to kill or improve a feature.

## Central Argument

In professional product environments, feature audits are driven by quantitative product analytics. When accessing internal company data is impossible, product managers must start by forming structured usage hypotheses based on personal experience. However, a PM is rarely a typical user; these hypotheses must be validated through hard numbers and user interviews. Furthermore, the decision to sunset or improve a feature must incorporate broader business risks—such as safety hazards, branding backlash, and government regulations—rather than relying solely on metrics.

---

## 1. Auditing Without Internal Analytics

In professional product environments, Product Managers perform feature audits by analyzing product usage data using analytics platforms (e.g., Amplitude, Mixpanel) to track clicks, session events, and user flows.

When you do not have access to a product's internal analytics, you must follow a structured **hypothesis-driven audit workflow**:

1.  **Select a Familiar Product:** Leverage your own experience using a technology product you are highly familiar with (as recommended in [Exercise #1](./10-choose-your-product.md)).
2.  **Formulate a Hypothesis:** Identify which features you believe are used the most and least based on your personal usage patterns.
3.  **Acknowledge Bias:** Recognize that you are likely not a typical user of the product. Your personal experience is a guess that **must be validated** in a real job.
4.  **Plan Validation:** Map out how you would validate these hypotheses using:
    *   **Quantitative validation:** Hard metrics, database queries, and click tracking.
    *   **Qualitative validation:** User interviews and usability testing to understand the "why" behind the numbers.

![The Validation Loop (Hypothesis to Hard Numbers)](./visuals/21-validation-loop.png)
*Flowchart mapping the progression from a single-user hypothesis to formal quantitative and qualitative validation.*

*Note: For the purpose of this exercise, focus on mapping the outliers (the most and least used features) rather than listing every minor capability.*

---

## 2. Metrics Correlations Between Intersecting Features

When auditing features, product managers must look for relationships and **metrics correlations** between different capabilities. Features do not operate in isolation; the performance of one can directly impact the usage metrics of another.

### Case Study: Uber Tracker vs. In-App Chat
In the Uber Rider App, there is a strong correlation between the **Track Driver (real-time map)** feature and the **In-App Chat** feature:

*   **When Tracking Works Well:** Users can see the driver's location in real-time, know exactly when they will arrive, and do not need to coordinate. In-app chat usage **drops**.
*   **When Tracking Glitches/Fails:** Users cannot see where the driver is, feel anxious, and are forced to contact them. In-app chat usage **spikes**.

Identifying these correlations helps PMs diagnose underlying technical issues. A sudden spike in chat volume is often a leading indicator of tracking framework lag or GPS signal failures.

![Correlation: Track Driver vs. In-App Chat Usage](./visuals/21-metrics-correlation.png)
*Tracking map accuracy and support chat volume exhibit an inverse correlation driven by user anxiety.*

---

## 3. Case Study: Uber Rider App (2020) Feature Audit

This case study maps a hypothesized feature audit for the **Uber Rider App in 2020** (focusing on passenger-facing features and excluding driver-side workflows):

![Uber (2020) Rider App Feature Audit Matrix](./visuals/21-uber-2020-audit.png)
*Plotted matrix mapping the outliers of the Uber 2020 Rider App feature set based on adoption and frequency.*

### Most Used Features (High Adoption / High Frequency)
*   **Book Now:** Core value hook. Most users prefer immediate booking over scheduled rides (assumed ~90/10 split).
*   **Track Driver:** High-frequency utility used immediately after booking to monitor driver location.
*   **Rate Driver:** High adoption, but primarily triggered when users have strong emotional reactions (highly positive or highly negative).

### Least Used Features (Low Adoption / Low Frequency)
*   **Add Multiple Drop-offs:** Complex ride-sharing configuration used infrequently for group trips.
*   **Trip History:** Historical logs accessed only when a transaction fails, a receipt is needed, or a bill is disputed.
*   **In-App Chat:** Secondary communication channel used primarily when real-time tracking fails.
*   **Enter Promo Code:** Marketing widget accessed only during onboarding or promotional campaigns.
*   **Emergency Button:** Safety feature designed for low-frequency, high-importance situations.

---

## 4. Evaluating Sunsetting Candidates Beyond the Data

Deciding whether to **kill (sunset)** a feature goes beyond looking at adoption charts. Product Managers must evaluate strategic business risks that data tables cannot capture.

For example, when auditing Uber's **Add Multiple Drop-offs (Group Rides)** feature in 2020, several non-data risks heavily favored killing or restricting the feature:

1.  **Health & Safety Hazards:** During the 2020 COVID-19 pandemic, group rides created physical proximity risks, threatening passenger and driver safety.
2.  **Brand Backlash:** Promoting ride-sharing features during health lockdowns could lead to negative publicity and brand damage.
3.  **Government Regulation:** Physical distancing mandates and municipal transit lockdowns created immediate compliance and regulatory risks.

![Decision Factors Beyond Usage (Add Multiple Drop-offs in 2020)](./visuals/21-non-data-risks.png)
*Sunsetting group rides in 2020 was driven by safety, brand backlash, and government lockdown regulations.*

### Phased Action Matrix: Uber Case Study

| Feature | Audit Hypothesis | Proposed Choice | Strategic Justification |
|---|---|---|---|
| **Add Multiple Drop-offs** | Low adoption, high health hazard. | **Kill / Restrict** | High COVID-19 safety risk, brand backlash, and government lockdown regulations. |
| **Track Driver** | High adoption, high utility. | **Improve** | Invest in GPS tracking accuracy to reduce in-app chat support overhead. |
| **Book for Later** | Low adoption, low awareness. | **Increase Adoption** | Shift customer perception of Uber from on-demand only to scheduled transit. |
| **Rate Driver** | Mid-adoption, emotionally biased. | **Increase Frequency** | Prompt ratings for average, middle-of-the-road experiences to gather unbiased driver data. |

---

## Practical Product Management Example

### Situation
A PM at an **ed-tech video streaming platform** is reviewing a feature called "Group Study Room" (which lets users watch lectures together and chat). Internal database records show that only 1.8% of active users utilize the feature. However, the engineering team spends 20% of their maintenance sprint fixing websocket connection drops and audio lag bugs related to the study room code.

### Decision
The PM drafts a feature audit. They form a hypothesis that users prefer individual study with simple discussion boards. They validate this hypothesis by looking at telemetry data (showing high discussion board usage) and running 10 user interviews. The interviews reveal that users find the group video study rooms awkward.

Furthermore, the PM identifies a **regulatory risk**: hosting open, unmoderated student video chats creates compliance risks under child safety laws (COPPA). The PM decides to **kill the Group Study Room** feature.

### Reasoning
The feature has low adoption and low frequency. Retaining it represents a double threat: high engineering maintenance costs (technical debt) and a severe child safety compliance risk. The value does not justify the risk.

### Consequence
The PM removes the feature. The developer team immediately reallocates 20% of their time to optimizing the core video player load speed (which is a Star feature used by 95% of users daily). Student safety risks are eliminated, and page-load performance increases by 25%.

### Transferable Lesson
sunsetting decisions must evaluate engineering maintenance costs (technical debt) and external risks (compliance, safety, brand) alongside usage metrics. A low-adoption feature that carries high risk is a prime candidate to be killed.

---

## Common Misunderstandings

### "A PM's personal usage pattern is representative of the target market"
**Correction:** This is the **Self-Referential Design Bias**. Product managers are power users who understand the product inside out. Your usage is almost never representative of the average user. Always validate your personal experience hypotheses with quantitative user logs and qualitative testing.

### "If a feature has low adoption, we must immediately kill it"
**Correction:** Not all low-adoption features should be killed. The feature might be a **niche feature** (low adoption, high frequency) that is highly valuable to your most profitable customers, or it could be an **essential utility** (like the Emergency Button on Uber) that must remain for safety and compliance.

### "Features operate independently of one another"
**Correction:** Features exist within an ecosystem. A change in one feature can cause a ripple effect in another's metrics. For example, improving Uber's map tracking automatically decreases in-app chat volume because the user's need to ask "where are you?" is resolved.

---

## Key Concepts and Definitions

| Concept | Simple definition |
|---|---|
| **Hypothesis-Driven Audit** | The process of evaluating feature usage by forming an initial hypothesis based on experience, and then validating it with data. |
| **Metrics Correlation** | A statistical relationship between two features where changes in the usage of one correspond to changes in the other. |
| **Self-Referential Bias** | The cognitive bias where a product creator mistakenly assumes that their preferences and behaviors match those of the average user. |
| **Non-Data Risks** | External factors (such as government regulations, branding backlash, and safety hazards) that influence product decisions. |

---

## Key Takeaways

1. **Hypotheses are starting points, not facts;** personal experience must be validated with quantitative logs and user interviews.
2. **Metrics correlations** reveal how features interact (e.g., laggy map tracking directly spikes in-app chat support tickets).
3. **Ratings features naturally capture emotional extremes** (very happy or very unhappy users), leaving average experiences undocumented.
4. **Sunsetting decisions must evaluate non-data risks** (safety, branding, regulatory) that metrics tables cannot capture.
5. **Add Multiple Drop-offs** was restricted by Uber in 2020 due to COVID-19 health hazards, branding risks, and lockdowns.
6. **Book for Later** represents an adoption growth opportunity to change Uber's perception from purely on-demand to scheduled travel.
7. **Trip History and Emergency Buttons** are low-frequency but essential utilities that must be retained for billing and safety.
8. **Audit outlier features first** (the most and least used) to identify high-leverage optimization and sunsetting candidates quickly.

---

## Visual Summary

![The Feature Audit Workflow](./visuals/21-visual-summary.png)
*Visual Summary: Flowchart mapping the Exercise #4 hypothesis formation, correlation analysis, verification, risk assessment, and decision routing.*

---

## One-Minute Review

*   **Hypothesis to Validation:** Start an audit by listing outlier features based on experience, but always validate these hypotheses using telemetry data and user interviews to eliminate bias.
*   **Correlation & Ecosystems:** Understand how features interact; a glitch in a primary feature (real-time tracking) directly drives up usage in secondary support channels (in-app chat).
*   **Evaluate Broader Risks:** When deciding whether to sunset a low-adoption feature, look beyond the numbers. Consider health and safety hazards, branding backlash, and government regulations.

---

## Recommended Visual Illustrations

### Illustration 1: Uber (2020) Rider App Feature Audit Matrix
*   **Concept:** Completed matrix showing the hypothesized positions of Uber features in 2020.
*   **Purpose:** Provides a concrete application of the Feature Audit Matrix to a familiar product.
*   **Suggested structure:** 2x2 Feature Audit Matrix (Y-axis: Frequency, X-axis: Adoption).
    *   Top-Right (Stars): "Book Now", "Track Driver", "Rate Driver".
    *   Bottom-Right (Administrative): "Trip History" (Utility), "Account Profile".
    *   Top-Left (Niche): None listed (not focused on niche in this exercise).
    *   Bottom-Left (Kill Candidates): "Add Multiple Drop-offs", "In-App Chat" (unless tracking fails), "Enter Promo", "Emergency Button" (retained for safety/compliance).

### Illustration 2: Correlation: Track Driver vs. In-App Chat Usage
*   **Concept:** The inverse relationship between tracking performance and chat volume.
*   **Purpose:** Teaches metrics correlation and features as interconnected systems.
*   **Suggested structure:** Side-by-side flow diagrams:
    *   Left side ("System A: High Tracking Performance"): A smartphone showing a smooth driver map path. An arrow points to a muted chat icon labeled "Chat Volume: LOW (No coordination needed)".
    *   Right side ("System B: Tracking Glitch/Lag"): A smartphone showing a spinning loading spinner on the map. An arrow points to a flashing chat icon labeled "Chat Volume: SPIKE (Anxious passenger coordinates location)".

### Illustration 3: Decision Factors Beyond Usage (Sunsetting Add Multiple Drop-offs in 2020)
*   **Concept:** Non-data risks in product decisions.
*   **Purpose:** Illustrates why some low-adoption features carry hidden business costs that demand they be killed.
*   **Suggested structure:** A central feature card labeled "Add Multiple Drop-offs (Group Rides) - 2020". Three warning icons branch out:
    *   Icon 1 (Medical cross): "Health & Safety Hazard (COVID-19 Proximity)".
    *   Icon 2 (Megaphone/Backlash): "Brand Damage (Publicity backlash during lockdowns)".
    *   Icon 3 (Gavel/Law): "Regulatory Risk (Non-compliance with municipal distancing mandates)".

### Illustration 4: The Validation Loop (Hypothesis to Hard Numbers) (Visual Summary)
*   **Concept:** The complete workflow of auditing and validating product features.
*   **Purpose:** Summarizes the learning steps of Exercise 4.
*   **Suggested structure:** A horizontal pipeline showing:
    *   Step 1: "Form Hypothesis" (Personal Experience & Bias Check)
    *   Step 2: "Validate Metrics" (Quantitative click tracking & database queries)
    *   Step 3: "Validate Sentiment" (Qualitative user interviews)
    *   Step 4: "Assess Risks" (Branding, Safety, Compliance checks)
    *   Step 5: "Strategic Route" (Kill, Improve, Grow Adoption, or Grow Frequency)

---

## Related Concepts

* [Evaluating Your Product](./20-evaluating-your-product.md)
* [Exercise #1: Choose Your Product](./10-choose-your-product.md)

## Visuals in This Lecture

* [The Validation Loop (Hypothesis to Hard Numbers)](./visuals/21-validation-loop.png)
* [Correlation: Track Driver vs. In-App Chat Usage](./visuals/21-metrics-correlation.png)
* [Uber (2020) Rider App Feature Audit Matrix](./visuals/21-uber-2020-audit.png)
* [Decision Factors Beyond Usage (Add Multiple Drop-offs in 2020)](./visuals/21-non-data-risks.png)
* [The Feature Audit Workflow](./visuals/21-visual-summary.png)

## Interactive Lesson

* [Open the interactive companion](./interactive/21-the-feature-audit.html)

## Source

* [Original lecture transcript](../../sources/01-introduction/01-introduction/21-the-feature-audit-transcript.md)

## Continue Learning

* Previous: [Evaluating Your Product](./20-evaluating-your-product.md)
* Section: [Introduction](./README.md)
* Part: [Introduction](../README.md)
* Next: [What is Product Strategy?](../../02-strategy/02-strategy/22-what-is-product-strategy.md)
* Course index: [Full Course Index](../../COURSE-INDEX.md)
