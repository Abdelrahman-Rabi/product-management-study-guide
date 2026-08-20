---
title: "The Kano Model"
course: "The Product Management Course"
part: "Strategy"
part_number: 2
section: "The Problem Space"
section_number: 3
lecture_number: 24
content_type: "lecture"
material_level: 2
status: complete
source: "Udemy video transcript"
visuals: 5
related_concepts:
  - kano model
  - prioritization
  - roadmap prioritization
  - product quality
  - product strategy grid
---

[← Previous Lecture](./23-problem-space-definition.md)
·
[Section Overview](./README.md)
·
[Part Overview](../README.md)
·
[Next Lecture →](./25-the-strategy-grid.md)

# The Kano Model

> **Material level:** Level 2 — Core lecture detailing Noriaki Kano's prioritization model, Y-axis satisfaction/X-axis execution dimensions, must-haves, performance features, delighters, roadmap exclusions (indifferent/unwanted), and the temporal migration of expectations.

## Lecture Overview

Once a product team compiles a list of customer needs, they must decide which ones to prioritize with their limited resources. This lecture introduces the **Kano Model** as a prioritization framework. By the end of this lecture, you should be able to:
* Define the horizontal (Execution) and vertical (Satisfaction) axes of the Kano Model.
* Triage feature requests out of the roadmap using the **Indifferent** and **Unwanted** categories.
* Identify and build **Must-Have** features, noting how their satisfaction curve flattens out once met.
* Analyze **Performance** features that have a linear relationship with customer satisfaction.
* Design **Delighter** features that exceed expectations, and map how they decay into Must-Haves over time.

## Central Argument

Product Managers must never treat all feature requests equally. To construct a viable roadmap, PMs must categorize needs using the Kano Model, filtering out wasteful indifferent features and dangerous unwanted features first. Successful execution requires delivering functional must-haves (which prevent dissatisfaction but do not increase delight) and scaling performance features linearly, while selectively introducing delighters to capture market share. Because customer expectations are dynamic, yesterday's delighters (like mobile GPS maps) inevitably decay into today's must-haves, requiring continuous strategic innovation.

---

## 1. What is the Kano Model?

The Kano Model was developed by **Dr. Noriaki Kano**, a professor of quality management at the Tokyo University of Science, while researching the root factors driving customer satisfaction and loyalty. The model uses a two-dimensional grid to evaluate customer sentiment:

*   **The Horizontal Axis (Execution / Need Fulfillment):** Maps how fully the product satisfies a customer's need, ranging from **Need Not Met At All** (left) to **Need Fully Met** (right).
*   **The Vertical Axis (Customer Satisfaction):** Maps the user's emotional reaction to that execution, ranging from **Dissatisfied** (bottom) to **Satisfied/Delighted** (top).

![The Kano Model Diagram (Core Grid)](./visuals/24-kano-grid.png)
*Noriaki Kano's priority model curves showing must-have, performance, and delighter features.*

---

## 2. Roadmap Exclusions: Indifferent and Unwanted Needs

The Kano Model identifies two categories of features that should **never** make it onto a product roadmap:

![Excluded Roadmap Categories: Indifferent vs. Unwanted](./visuals/24-exclusions.png)
*Filtering useless waste (Indifferent) and active user dangers (Unwanted) out of the product roadmap.*

### 1. Indifferent Needs (The Useless Waste)
*   **Definition:** Features that the user simply does not care about. Meeting these needs creates zero satisfaction, while failing to meet them creates zero dissatisfaction.
*   **Uber Example:** Adding a feature that lets riders choose the exact exterior paint color of their Uber vehicle. It adds no customer value but consumes development resources.
*   **Strategic Action:** **Exclude.** Stop wasting engineering time on indifferent features.

### 2. Unwanted Needs (The Active Danger)
*   **Definition:** Features that users actively dislike or hate seeing in the product. Adding them decreases customer satisfaction and causes intense anger or backlash.
*   **Uber Example:** Sharing driver and rider marital status or home addresses publicly on profiles. This creates severe privacy and safety concerns.
*   **Strategic Action:** **Exclude & Protect.** Actively block these features from the codebase.

---

## 3. The Core Kano Categories: Must-Haves, Performance, and Delighters

Once indifferent and unwanted items are filtered out, the remaining needs map onto three distinct curves:

```text
                  [Delighted] ^ Customer Satisfaction
                              |          
                              |         / [Performance (Linear)]
           [Delighter Curve]  |        / 
                  \           |       /  
                   \          |      /   
                    \         |     /    
                     \________|____/__________________> Need Fulfillment
                              |   /                   [Fully Met]
         [Not Met]            |  / 
                              | /  
                              |/__________ [Must-Have Curve (Flattens out)]
                              |
               [Dissatisfied] v
```

### 1. Must-Haves (Basic Expectations)
*   **Definition:** The absolute minimum requirements for a product to be competitive in the market. Users take these features for granted and do not praise them. However, if they are missing or broken, it causes extreme dissatisfaction.
*   **The Flattening Curve:** Once a must-have is fully met, investing more resources into it does **not** increase customer satisfaction.
*   **Uber Example:** Seat belts in the vehicle. A rider expects seat belts. If they are missing, it is a deal-breaker. However, adding two seat belts to a single seat does not make the rider twice as happy—satisfaction remains flat.

![Must-Have Flattening Metaphor (The Seat Belt Rule)](./visuals/24-seatbelt-rule.png)
*Diminishing returns of must-haves: over-engineering expected basics does not increase satisfaction.*

### 2. Performance Features (One-Dimensional / Linear)
*   **Definition:** Features that deliver a direct, linear correlation between investment and customer satisfaction. The better they perform, the happier the customer is.
*   **Uber Example:** ETA accuracy or vehicle fuel efficiency. The more accurate the ETA or the cheaper the ride cost, the higher the customer satisfaction.
*   **Dr. Kano's Term:** "One-dimensional" because satisfaction scales in direct proportion to execution.

### 3. Delighters (Attractive Quality)
*   **Definition:** Unexpected features that surprise the customer. Since users do not expect them, their absence causes zero dissatisfaction. However, if they are present and functional, they generate high levels of delight and customer value.
*   **Uber Example:** Real-time visual car tracking on a map when it first launched in 2009. Prior to this, users were accustomed to waiting blindly for traditional taxis. The visual map was a massive delighter.

---

## 4. The Dynamic Decay of Delighters

A critical rule of the Kano Model is that **needs are not static**. Over time, features decay and migrate downward from Delighters to must-haves:

1.  **Innovation Phase:** A feature launches as a **Delighter** (e.g., GPS navigation in cars in the early 2000s, replacing cumbersome paper maps).
2.  **Market Standard Phase:** Competitors copy the feature, turning it into a **Performance** metric (e.g., screen size, route speed, and map refresh times dictate phone satisfaction).
3.  **Commodity Phase:** The feature becomes an expected **Must-Have** (e.g., today, a mapping application without turn-by-turn GPS navigation is considered broken and uninstalled).

![The Delighter Decay: GPS Navigation Migration Timeline](./visuals/24-decay-timeline.png)
*Expectation migration timeline: how yesterday's innovative delighters become today's expected must-haves.*

*Key Lesson:* The speed of this downward migration is driven by technology evolution and competitor innovation. PMs must continuously generate new delighters to maintain a competitive advantage.

---

## Practical Product Management Example

### Situation
A PM at an **email client startup** is planning the next quarter's roadmap. The engineering team has proposed two major initiatives:
1.  *Initiative A (Delighter):* An AI-powered email summary widget that drafts response templates.
2.  *Initiative B (Must-Have):* Resolving an active database bug that causes push notifications to drop 8% of incoming emails on mobile devices.

The sales team is pushing hard for Initiative A because they believe the AI features will drive marketing buzz and attract new sign-ups.

### Decision
The PM maps both initiatives on the **Kano Model**. 
*   Initiative A is a **Delighter** (unexpected, high satisfaction if present, but zero dissatisfaction if absent).
*   Initiative B is a **Must-Have** (expected basic quality; dropping emails causes extreme dissatisfaction).

The PM rejects the sales team's request to prioritize the AI widget and schedules Initiative B (fixing notification delivery) as the top priority.

### Reasoning
According to the Kano Model, **must-haves must be satisfied first**. A broken must-have (dropped notifications/lost emails) creates massive customer dissatisfaction. Even if the team ships a state-of-the-art AI email summaries widget (delighter), it cannot compensate for a product that fails to deliver basic emails. Delight cannot exist on top of a broken foundation.

### Consequence
The development team fixes the notification bug. Mobile churn rates drop by 22% over the next month. Once the basic must-have is stabilized, the PM allocates the next sprint to build a light version of the AI summary widget, which successfully wins positive reviews in industry tech blogs.

### Transferable Lesson
Always satisfy must-haves before investing in delighters. A product with delightful extras but broken basics will fail, as users will abandon it because of the frustration of unfulfilled core expectations.

---

## Common Misunderstandings

### "Must-have features are where we should spend most of our marketing budget"
**Correction:** Must-haves are table stakes. Customers expect them and take them for granted. You do not win customers by marketing that your car has seat belts or that your email app sends emails. Spend marketing resources highlighting your **performance metrics** (faster compile times) and your unique **delighters** (AI integrations).

### "Once a must-have feature is built, we should keep optimizing it"
**Correction:** Must-have satisfaction curves flatten out. Once a must-have is functional and meets the market standard, additional investment yields diminishing returns. Shift engineering capacity to performance features and delighters rather than over-engineering basic expectations once met.

### "We should let customers vote on delighters"
**Correction:** Customers rarely ask for delighters because they do not know they are possible. If you ask customers what they want, they will request faster execution of existing features (performance) or basic missing items (must-haves). PMs must identify delighters through observation, customer empathy, and technological capability.

---

## Key Concepts and Definitions

| Concept | Simple definition |
|---|---|
| **Kano Model** | A prioritization framework mapping Execution (X-axis) to Customer Satisfaction (Y-axis) to categorize user needs. |
| **Must-Have** | A basic requirement that causes high dissatisfaction if missing, but yields neutral satisfaction if present. |
| **Performance Feature** | A feature where customer satisfaction scales in a direct, linear relationship with the level of execution. |
| **Delighter** | An unexpected feature that generates high satisfaction if present, but causes no dissatisfaction if absent. |
| **Indifferent Need** | A feature that the user does not care about, representing waste that should be excluded from the roadmap. |
| **Unwanted Feature** | A feature that users actively dislike or fear (such as privacy violations), which must be excluded. |
| **Delighter Decay** | The natural temporal migration of features moving from Delighters down to must-haves over time. |

---

## Key Takeaways

1. **Prioritize needs using Kano** to prevent treating all roadmap requests as having equal value.
2. **Filter out Indifferent and Unwanted needs first** to protect development resources and protect customer trust.
3. **Must-haves are essential table stakes;** they must work perfectly to prevent customer abandonment.
4. **Must-have satisfaction curves flatten;** do not waste resources over-engineering basic expectations once met.
5. **Performance features scale linearly;** invest in them to deliver proportionate increases in customer value.
6. **Delighters are unexpected value-adds;** they drive marketing buzz and customer delight.
7. **Yesterday's delighters become today's must-haves;** the decay of delighters requires continuous product innovation.
8. **Uber's visual map was a 2009 delighter;** today, it is a must-have table stake for any ride-sharing platform.

---

## Visual Summary

![Kano Model Strategy Grid](./visuals/24-visual-summary.png)
*Visual Summary: Flowchart mapping the customer needs triage process and product strategy grid categorization.*

---

## One-Minute Review

*   **Cover the Basics:** Fix must-haves first. If seat belts are missing, a passenger does not care if the car has a cooler in the back.
*   **Scale the Performance:** Invest in performance features where execution linearly increases satisfaction (speed, efficiency).
*   **Innovate to Delight:** Deliver unexpected delighters to stand out, but remember they will decay into must-haves over time.

---

## Recommended Visual Illustrations

### Illustration 1: The Kano Model Diagram (Core Grid)
*   **Concept:** Graphic showing Noriaki Kano's axes and curves.
*   **Purpose:** The central visual for understanding must-haves, performance, and delighters.
*   **Suggested structure:** A two-axis graph:
    *   Y-axis: "Customer Satisfaction" (Top: Delighted/Satisfied, Bottom: Dissatisfied).
    *   X-axis: "Need Fulfillment / Execution" (Left: Absent/Not met, Right: Fully met).
    *   Line 1 (Must-Have): Lies entirely below the neutral line, rising from bottom-left and flattening out just below the midline on the right. Labeled "Must-Haves: basic expectation (seat belts)".
    *   Line 2 (Performance): Diagonal straight line from bottom-left to top-right. Labeled "Performance (ETA accuracy)".
    *   Line 3 (Delighter): Starts at neutral midline on the left and curves sharply upward to the top-right. Labeled "Delighters (visual tracking map)".

### Illustration 2: Excluded Roadmap Categories: Indifferent vs. Unwanted
*   **Concept:** Identifying waste and danger categories using Uber examples.
*   **Purpose:** Prevents waste and security risk items from entering roadmaps.
*   **Suggested structure:** Split graphic:
    *   Left panel (Indifferent): A car icon colored in a color-selector swatch wheel. Labeled "Indifferent Need (e.g. Choose car paint color). Creates no satisfaction or dissatisfaction. Wastes time."
    *   Right panel (Unwanted): Two profiles showing rider and driver home addresses publicly. Crossed out with a red circle-slash. Labeled "Unwanted Feature (e.g. Profile address sharing). Violates safety/privacy, causing user anger."

### Illustration 3: Must-Have Flattening Metaphor (The Seat Belt Rule)
*   **Concept:** Satisfaction levels for must-haves flatten out.
*   **Purpose:** Illustrates why over-engineering basic needs is wasteful.
*   **Suggested structure:** Side-by-side comparison:
    *   Left Car Seat: Labeled with a green checkmark. Shows one standard functional seat belt. Text: "1 Seat Belt = Need Fully Met. User feels safe and neutral (expected)."
    *   Right Car Seat: Labeled with a red warning sign. Shows five seat belts piled on a single seat. Text: "5 Seat Belts = Waste. User is not 5x happier. Satisfaction curve has flattened."

### Illustration 4: The Delighter Decay: GPS Navigation Migration Timeline
*   **Concept:** The temporal migration of features down the Kano curves.
*   **Purpose:** Teaches that Kano is a dynamic snapshot in time.
*   **Suggested structure:** Timeline arrow pointing from left to right:
    *   2000: "Delighter" (High-end GPS dashboard, replacing paper maps).
    *   2010: "Performance" (Screen resolution, map speed, and route quality dictate satisfaction).
    *   2020+: "Must-Have" (Expected standard. An app without integrated maps is uninstalled).

### Illustration 5: Kano Model Strategy Grid (Visual Summary)
*   **Concept:** Flowchart showing how to triage needs using Kano.
*   **Purpose:** Summarizes the roadmap triage workflow.
*   **Suggested structure:** Flowchart:
    *   Box 1: "Identify User Needs List"
    *   Box 2: "Triage Out Waste (Indifferent & Unwanted)"
    *   Box 3: "Classify Core Triad (Must-Have, Performance, Delighter)"
    *   Box 4 [Teal]: "Map Competitor Strategy Grid"

---

## Related Concepts

* [Exercise #5: Problem Space Definition](./23-problem-space-definition.md)
* [What is Product Strategy?](../../02-strategy/02-strategy/22-what-is-product-strategy.md)

## Visuals in This Lecture

* [The Kano Model Diagram (Core Grid)](./visuals/24-kano-grid.png)
* [Excluded Roadmap Categories: Indifferent vs. Unwanted](./visuals/24-exclusions.png)
* [Must-Have Flattening Metaphor (The Seat Belt Rule)](./visuals/24-seatbelt-rule.png)
* [The Delighter Decay: GPS Navigation Migration Timeline](./visuals/24-decay-timeline.png)
* [Kano Model Strategy Grid](./visuals/24-visual-summary.png)

## Interactive Lesson

* [Open the interactive companion](./interactive/24-the-kano-model.html)

## Source

* [Original lecture transcript](../../sources/02-strategy/03-the-problem-space/24-the-kano-model-transcript.md)

## Continue Learning

* Previous: [Exercise #5: Problem Space Definition](./23-problem-space-definition.md)
* Section: [The Problem Space](./README.md)
* Part: [Strategy](../README.md)
* Next: [Exercise #6: The Strategy Grid](./25-the-strategy-grid.md)
* Course index: [Full Course Index](../../COURSE-INDEX.md)
