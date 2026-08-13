---
title: "Evaluating Your Product"
course: "The Product Management Course"
part: "Introduction"
part_number: 1
section: "Introduction"
section_number: 1
lecture_number: 20
content_type: "lecture"
material_level: 2
status: complete
source: "Udemy video transcript"
visuals: 5
related_concepts:
  - feature audit
  - feature adoption
  - feature sunsetting
  - product disruption
  - technical debt
---

[← Previous Lecture](./19-create-a-product-vision-board.md)
·
[Section Overview](./README.md)
·
[Part Overview](../README.md)
·
[Next Lecture →](unavailable)

# Evaluating Your Product

> **Material level:** Level 2 — Core lecture detailing the Feature Audit Matrix (Adoption vs. Frequency of Use), product vulnerability to disruption, and the four strategic choices for handling low-adoption features.

## Lecture Overview

Most Product Managers inherit existing products rather than building them from scratch. Before planning new features, a PM must audit the existing product to understand how users interact with its capabilities. By the end of this lecture, you should be able to:
* Construct and interpret a **Feature Audit Matrix** using user adoption and frequency of use.
* Identify the strategic significance of the four quadrants in the Feature Audit Matrix.
* Explain why feature bloat makes a product vulnerable to disruption by simpler competitors.
* Apply the **Four Choices for Low-Adoption Features** framework to manage product capabilities.

## Central Argument

Product success can be a lousy teacher, leading teams to build unnecessary features that result in feature bloat. An inherited product must be evaluated through a feature audit to identify which features deliver core value and which are underperforming. Unused features must be improved, marketed, or killed; carrying unnecessary features dilutes product focus, increases code maintenance costs, and makes the product vulnerable to simpler, highly optimized disruptors.

---

## 1. The Feature Audit Matrix

When inheriting an existing product, a PM must perform a **feature audit** rather than immediately adding new features. The simplest way to evaluate feature usage is to plot all features onto a two-axis matrix:

1. **Adoption (X-Axis):** How many people use the feature (percentage of the customer base).
2. **Frequency (Y-Axis):** How often they use the feature (e.g., daily, monthly, annually).

![The Feature Audit Matrix (2x2 Grid)](./visuals/20-feature-audit-matrix.png)
*The Feature Audit Matrix plots feature adoption against frequency of use to categorize capabilities.*

### The Four Quadrants of the Matrix

1. **Top-Right (Stars / Core Value):** High Adoption, High Frequency. These features represent what users actually buy and use your product for. They are critical to the business and **must never be neglected**.
2. **Bottom-Right (Administrative / Essential):** High Adoption, Low Frequency. These are utility features used by almost everyone but very rarely (e.g., password reset, account creation). Although their usage is low-frequency, they are essential for the product to function and **cannot be removed**.
3. **Top-Left (Niche / Spin-Off Opportunities):** Low Adoption, High Frequency. A small segment of users uses these features very often. This highlights niche markets. PMs can:
   * Spin off the feature into a separate product for a new demographic.
   * Emphasize the use case to the majority of users who have not discovered it yet.
   * Use qualitative feedback to determine the best direction when data is unclear.
4. **Bottom-Left (Kill Candidates):** Low Adoption, Low Frequency. These features are rarely used by very few people. Unless they are new and untested, **they represent a problem and should be killed (removed from the product)**.

*Note: Features that only certain types of users can access should be excluded from this grid and evaluated separately.*

---

## 2. Real-World Product Adoption and Feature Bloat

In an ideal product, a bar chart of feature adoption would show high, consistent adoption across all capabilities. However, real-world products are messy and often suffer from **feature bloat**:

*   **How Bloat Happens:** A product starts with solid messaging and core features (e.g., document editing and document storage) that users love. Confident in this success, the product team keeps building more features (e.g., adding a calendar and a chat room) without validation.
*   **The Consequence:** The chat room launch is botched, and the calendar fails—no user creates more than one event, and it is not even mentioned on the marketing site. The product is left carrying multiple low-adoption features that add complexity without value.

![Feature Adoption: Clean vs. Messy Reality](./visuals/20-clean-vs-messy-adoption.png)
*Overconfidence leads to building unvalidated additions, bloating the product with underperforming features.*

---

## 3. Disruption and the Threat of Feature Bloat

Evaluating feature usage is not just about cleaning up the interface; it is a critical defense against business threats.

### The Disruption Risk
If a product's feature adoption looks like a single high-adoption core feature surrounded by multiple unused features (like a bloated messaging app that also contains unvisited chat rooms and calendars), it is highly vulnerable to **disruption**:

*   **The Competitor Strategy:** A new competitor can build a simple, focused product that does *just one thing*—focusing entirely on that single high-adoption core feature—and makes it superior in usability or speed.
*   **The Bloat Disadvantage:** The established product will struggle to compete because it is carrying the design and operational weight of all its unwanted "junk" features.
*   *Historical Example:* Hangouts inside Google Plus was weighed down by the social network's overall complexity, making it vulnerable to focused, single-purpose communication apps.

![Disruption Vulnerability: The Bloated Product vs. The Simple Disruptor](./visuals/20-disruption-vulnerability.png)
*Established products carrying unwanted features struggle to compete with lean, focused competitors.*

---

## 4. The Four Choices for Low-Adoption Features

For any feature identified as having low adoption, a Product Manager has four strategic choices. These are divided into **product development** initiatives (requiring the engineering team) and **marketing** initiatives:

```text
                     Low-Adoption Feature Choices
                                  |
         +------------------------+------------------------+
         |                                                 |
[Product Development]                                 [Marketing]
  - Kill It (Remove)                                    - Increase Adoption (Awareness)
  - Improve It (Usability/Perf)                         - Increase Frequency (Reminders/Push)
```

![The Four Choices for Low-Adoption Features](./visuals/20-low-adoption-choices.png)
*PMs must decide whether to deprecate or improve code, or leverage growth marketing to drive adoption and frequency.*

### Product Development Initiatives (Work with Dev Team)
1. **Kill It:** Admit defeat and remove the feature entirely. This reduces code complexity, interface clutter, and code maintenance overhead.
2. **Improve It:** Make the feature quantifiably better. This involves modifying the software to improve its usability, accessibility, or performance for the users who need it.

### Marketing Initiatives (Work with Marketing/Growth Team)
3. **Increase Adoption:** If the feature works well but has low awareness, work to increase its adoption rate. Show new users the feature through onboarding, screenshots, or product tours to get more people to use it.
4. **Increase Frequency:** If users are aware of the feature but do not use it to its full potential, drive up their frequency of use. Use reminders, email alerts, or push notifications to prompt regular engagement.

---

## Comparison: Product vs. Marketing Feature Initiatives

| Strategic Choice | Primary Owner | Target Metric | Typical Action |
|---|---|---|---|
| **Kill It** | Product / Engineering | Core Code Complexity | Deprecate feature, remove UI entry, clean up codebase. |
| **Improve It** | Product / Engineering | Feature Usability / Performance | Redesign workflows, optimize load times, fix bugs. |
| **Increase Adoption** | Product / Marketing | User Adoption Rate (%) | Update product tour, highlight feature in marketing campaigns. |
| **Increase Frequency** | Product / Marketing | Sessions per User / Event Frequency | Implement email triggers, push notifications, or UI badges. |

---

## Practical Product Management Example

### Situation
A PM inherits a **collaborative project management tool** that has been on the market for three years. The product has solid document sharing and file storage features (used by 92% of active users daily). However, the team has also built a time-tracking widget (used by 12% of users daily) and a group calendar feature (used by 3% of users monthly). The calendar code is fragile and frequently causes system slowdowns.

### Decision
The PM conducts a feature audit and classifies the features:
*   **Document Sharing & Storage:** Stars.
*   **Time-Tracking Widget:** Niche (used frequently by a small subset of freelance agencies).
*   **Group Calendar:** Kill candidate (low adoption, low frequency, causing technical debt).

The PM decides to **kill the Group Calendar** entirely and remove it from the product. For the **Time-Tracking Widget**, the PM decides to **increase adoption** by updating the user onboarding tour to showcase it to new freelance agency signups.

### Reasoning
The calendar is not essential (administrative) and has failed to gain adoption. Retaining it increases technical debt, performance risk, and support tickets, making the product vulnerable to simpler document-sharing disruptors. The time-tracking widget has verified utility for a specific segment, so driving awareness is a high-leverage growth tactic.

### Consequence
Removing the calendar simplifies the user interface and immediately resolves the system slowdowns, reducing engineering maintenance tickets by 15%. Updating the onboarding tour increases time-tracking adoption from 12% to 28% within three months, locking in freelance clients who now use the platform as their primary agency workflow tool.

### Transferable Lesson
Do not let sentimentality or sunk costs keep dead features alive. Kill features that fail to achieve adoption to protect product performance and focus resources on core value and high-leverage niche features.

---

## Common Misunderstandings

### "Every feature with low frequency of use should be killed"
**Correction:** Frequency of use must be evaluated alongside user adoption and necessity. Administrative features like password reset or account deletion have extremely low frequency of use, but they are essential for operations. Only kill features that have *both* low adoption and low frequency and are not operationally essential.

### "Killing a feature is a waste of the engineering hours spent building it"
**Correction:** This is the **Sunk Cost Fallacy**. Keeping a failed feature in the product does not recover the cost of building it. Instead, it creates ongoing costs: developers must test it during updates, write documentation for it, fix its bugs, and carry it as technical debt, which slows down future development.

### "A feature audit is a one-time launch task"
**Correction:** A feature audit is an ongoing lifecycle activity. Products naturally accumulate feature bloat over time as teams attempt to solve new problems. PMs must run feature audits periodically to keep the product focused, performant, and safe from disruptors.

---

## Key Concepts and Definitions

| Concept | Simple definition |
|---|---|
| **Feature Audit Matrix** | A strategic 2x2 grid that plots features based on user adoption (percentage of users) and frequency of use to determine product health. |
| **Feature Bloat** | The accumulation of unnecessary features that add product complexity, complicate the user interface, and increase technical debt without adding value. |
| **Sunk Cost Fallacy** | The tendency to continue investing in a failed feature or project because of the resources (time, money, effort) already spent on it. |
| **Disruption Vulnerability** | The risk of losing market share to a simpler, faster competitor who focuses entirely on doing one core thing exceptionally well. |

---

## Key Takeaways

1. **PMs almost always inherit products** rather than starting from scratch, making a feature audit the necessary first step on the job.
2. **The Feature Audit Matrix** plots features based on user adoption (X-axis) and frequency of use (Y-axis) to diagnose product health.
3. **Core value "Star" features** have high adoption and frequency, representing the primary reasons users choose the product.
4. **Administrative features** have high adoption but low frequency, and because they are operationally essential, they must not be removed.
5. **Niche features** (low adoption, high frequency) offer opportunities to spin off separate products or drive adoption to the mainstream.
6. **Feature bloat** occurs when teams continually build new features without validation, leaving the product carrying failed, complex codebases.
7. **Bloated products are vulnerable to disruption** by simple competitors who optimize a single core feature and avoid carrying unwanted feature weight.
8. **Handling low-adoption features** requires choosing to kill or improve them (Product Development), or increase their adoption or frequency (Marketing).

---

## Visual Summary

![Feature Audit Matrix and Strategic Decisions](./visuals/20-visual-summary.png)
*Visual Summary: Process mapping of the Feature Audit Matrix quadrants and the subsequent strategic paths for low-adoption features.*

---

## One-Minute Review

*   **Plot Feature Usage:** Perform a feature audit by mapping features on a 2x2 grid of Adoption (how many use it) vs. Frequency (how often).
*   **Sunsetting is Strategy:** Core stars must be protected, administrative items are kept, niche items are optimized, and low-adoption/low-frequency features should be sunsetted (killed) to eliminate technical debt.
*   **Four Strategic Choices:** For underperforming features, choose to **Kill** or **Improve** them (working with engineering), or **Increase Adoption** or **Increase Frequency** (working with marketing/growth).

---

## Recommended Visual Illustrations

### Illustration 1: The Feature Audit Matrix (2x2 Grid)
*   **Concept:** Plotted 2x2 matrix analyzing feature performance.
*   **Purpose:** Helps the learner visually categorize features by adoption and frequency.
*   **Suggested structure:** Y-axis: "Frequency of Use (Daily/Weekly vs. Yearly)". X-axis: "Adoption (% of Users, Low to High)". 
    *   Top-Left Quadrant: "Niche / Spin-Off Opportunities" (e.g., specific workflows).
    *   Top-Right Quadrant: "Stars (Core Value)" (e.g., document editing).
    *   Bottom-Left Quadrant: "Kill Candidates" (e.g., calendar).
    *   Bottom-Right Quadrant: "Administrative" (e.g., password reset).

### Illustration 2: Bar Chart: Clean Adoption vs. Messy Product Reality
*   **Concept:** Contrasts a clean adoption pattern with the reality of feature bloat.
*   **Purpose:** Illustrates how products accumulate unused features.
*   **Suggested structure:** Side-by-side bar charts.
    *   Chart A ("Ideal/Clean"): 4 clean bars, all showing >80% adoption.
    *   Chart B ("Messy Reality"): 2 high bars (Document Edit, Storage at 90%), 2 low bars (Chat Room at 15%, Calendar at 3%), and 1 medium bar (Time Tracking at 25%).

### Illustration 3: Disruption Vulnerability (The Bloated Product vs. The Simple Disruptor)
*   **Concept:** The competitive disadvantage of carrying feature bloat.
*   **Purpose:** Explains why carrying unused features makes a product vulnerable to simple competitors.
*   **Suggested structure:** Two compared runner characters:
    *   Runner A ("Bloated Product"): Carrying a massive, heavy backpack labeled "Junk Features (Calendar, Chat, Tasks, Notes)" and struggling to jog.
    *   Runner B ("Simple Disruptor"): Running fast with no backpack, carrying a single glowing baton labeled "Core Feature (Fast Document Edit)".

### Illustration 4: The Four Choices for Low-Adoption Features (Decision Tree)
*   **Concept:** The strategic options for managing underperforming features.
*   **Purpose:** Summarizes the PM's options and their operational owners.
*   **Suggested structure:** A central node "Low-Adoption Feature" branching into two pathways:
    *   Path 1: "Product Development (Engineering)" -> branches into "Kill It (Remove code)" and "Improve It (Redesign UI/Perf)".
    *   Path 2: "Marketing (Growth)" -> branches into "Increase Adoption (Awareness/Tours)" and "Increase Frequency (Push/Reminders)".

---

## Related Concepts

* [What's a Product?](./07-whats-a-product.md)
* [Why do so many product initiatives fail?](./11-why-product-initiatives-fail.md)
* [How Effective Product Teams Work](./12-how-effective-product-teams-work.md)

## Visuals in This Lecture

* [The Feature Audit Matrix (2x2 Grid)](./visuals/20-feature-audit-matrix.png)
* [Feature Adoption: Clean vs. Messy Reality](./visuals/20-clean-vs-messy-adoption.png)
* [Disruption Vulnerability: The Bloated Product vs. The Simple Disruptor](./visuals/20-disruption-vulnerability.png)
* [The Four Choices for Low-Adoption Features](./visuals/20-low-adoption-choices.png)
* [Feature Audit Matrix and Strategic Decisions](./visuals/20-visual-summary.png)

## Interactive Lesson

* [Open the interactive companion](./interactive/20-evaluating-your-product.html)

## Source

* [Original lecture transcript](../../sources/01-introduction/01-introduction/20-evaluating-your-product-transcript.md)

## Continue Learning

* Previous: [Exercise #3: Create a Product Vision Board](./19-create-a-product-vision-board.md)
* Section: [Introduction](./README.md)
* Part: [Introduction](../README.md)
* Next: [Next Lecture](unavailable)
* Course index: [Full Course Index](../../COURSE-INDEX.md)
