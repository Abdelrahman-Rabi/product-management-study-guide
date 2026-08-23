---
title: "Exercise #6 The Strategy Grid"
course: "The Product Management Course"
part: "Strategy"
part_number: 2
section: "The Problem Space"
section_number: 3
lecture_number: 25
content_type: "lecture"
material_level: 2
status: complete
source: "Udemy video transcript"
visuals: 5
related_concepts:
  - product strategy grid
  - competitive analysis
  - differentiation
  - minimum viable product (mvp)
  - prioritization
---

[← Previous Lecture](./24-the-kano-model.md)
·
[Section Overview](./README.md)
·
[Part Overview](../README.md)
·
[Next Lecture →](./26-getting-product-strategy-right.md)

# Exercise #6: The Strategy Grid

> **Material level:** Level 2 — Core lecture detailing Noriaki Kano's prioritization model applied to competitive strategy, the Strategy Grid structure, binary vs. relative scales, identifying points of differentiation, and defining MVP bounds.

## Lecture Overview

This lecture covers the sixth practical exercise of the course: building a **Product Strategy Grid**. It teaches how to map your product's performance and delighters against primary competitors to identify points of differentiation. By the end of this lecture, you should be able to:
* Construct a Product Strategy Grid using appropriate measurement scales (binary vs. relative).
* Formulate competitive columns to map points of parity and differentiation.
* Apply strategic trade-offs (deciding where to play offense and where to concede).
* Analyze Uber's original 2009 Strategy Grid compared to traditional taxis and limousine car services.
* Utilize the completed Strategy Grid to define the boundaries of your Minimum Viable Product (MVP).

## Central Argument

Product strategy requires making hard choices about where to focus limited engineering resources; a product team cannot be the best at everything. By mapping customer needs onto a Strategy Grid alongside competitors, PMs can identify underserved performance benefits and unique delighters to play offense and win market share. Meanwhile, the team must maintain defensive parity on must-haves without over-engineering them. This visual positioning tool prevents scope creep and defines the exact feature boundaries required to launch a successful MVP.

---

## 1. What is the Product Strategy Grid?

The Product Strategy Grid is a competitive positioning tool that applies the Kano Model framework to compare your product's execution directly against competitors. It serves two main purposes:

1.  **For Existing Products:** It isolates your points of differentiation and reveals why customers choose (or abandon) your product.
2.  **For New Products:** It identifies the minimum requirements (table stakes) needed to compete and highlights opportunities to stand out.

![The Product Strategy Grid Layout (Blank Template)](./visuals/25-grid-layout.png)
*Blank template structure of the Strategy Grid showing columns for competitor scoring.*

---

## 2. Structuring Grid Scales

To keep the Strategy Grid clean and actionable, use two different measurement scales depending on the Kano category:

*   **Binary Scale (Yes / No):** Applied to **Must-Haves** and **Delighters**. You either satisfy these needs or you do not.
*   **Relative Scale (High / Medium / Low):** Applied to **Performance Benefits**. These represent metrics that scale proportionally with effort, allowing you to grade execution quality relatively.

---

## 3. Case Study: Uber's 2009 Strategy Grid

To illustrate the grid in action, we analyze Uber's launch strategy in 2009. Uber compared itself against two primary competitors: **Traditional Taxis** (cheap but low quality/unreliable) and **Limo Car Services** (premium quality but expensive and slow to book).

| Kano Category | User Need (Problem Statement) | Uber (2009) | Traditional Taxis | Limo Car Services |
|---|---|---|---|---|
| **Must-Have** | *"Take me where I want to go"* | **Yes** | **Yes** | **Yes** |
| **Performance** | *"Let me get a ride quickly"* | **High** | Low | Medium |
| **Performance** | *"Save me money"* | **Medium** | Medium | Low |
| **Performance** | *"Give me a nice experience"* | **Medium** | Low | High |
| **Performance** | *"Make me feel safer"* | **High** | Low | High |
| **Delighter** | *"Book without making a phone call"* | **Yes** | No | No |
| **Delighter** | *"See where my car is in real time"* | **Yes** | No | No |

![Competitor Positioning: Uber (2009) Strategy Grid](./visuals/25-uber-strategy.png)
*Completed 2009 Strategy Grid showing Uber's points of parity and competitive differentiation.*

---

## 4. Playing Offense vs. Playing Defense

An essential rule of product management is that you cannot set all performance metrics to "High" and all delighters to "Yes." Attempting to build the ultimate product with no trade-offs results in delayed releases, resource exhaustion, and complex interfaces.

![Strategic Focus: Playing Offense vs. Defense](./visuals/25-offense-defense.png)
*Roadmap focus: playing offense on differentiators while maintaining defensive parity on basics.*

### Playing Defense (Points of Parity)
*   **Must-Haves:** You must achieve parity (**Yes**). However, once met, do not waste resources over-engineering them.
*   **Non-Target Performance Metrics:** Concede or maintain average levels (**Medium** or **Low**) in areas that do not support your primary value proposition. For example, Uber (2009) chose not to compete with upscale limo services on the luxury experience tier, settling for a "Medium" experience.

### Playing Offense (Points of Differentiation)
*   **Underserved Performance Benefits:** Identify areas where competitors are weak and invest heavily to achieve a **High** rating. Uber targeted **Speed** (getting a ride quickly) and **Safety** (background checks, tracking) where taxis were weak.
*   **Unique Delighters:** Introduce new-to-market features (**Yes**) that competitors lack. Uber introduced **one-click mobile booking** and **real-time map tracking**, creating a massive competitive gap.

![The Developer Trade-Off Analogy (RAM vs. CPU vs. Business Strategy)](./visuals/25-dev-analogy.png)
*Analogous mapping comparing software constraints to strategic product trade-offs.*

---

## 5. From Strategy Grid to MVP Bounds

The Strategy Grid acts as the architectural blueprint for your **Minimum Viable Product (MVP)**. It prevents scope creep by establishing strict feature boundaries:

1.  **Must-Have Parity:** Include the bare minimum features to achieve a **Yes** on must-haves.
2.  **Offensive Performance Focus:** Build only the high-value performance features selected for differentiation.
3.  **Delighter Hook:** Deliver the core delighter features that provide the primary hook for early adopters.
4.  **Concessions Cut:** Strip out low-priority performance features and all indifferent/unwanted features from the initial release backlog.

---

## Practical Product Management Example

### Situation
A PM at a **collaborative document editor** startup is planning the MVP. The engineering team is divided: some developers want to optimize local document loading speeds to sub-10ms (High Performance), while others want to build custom audio-calling rooms inside the editor (Delighter). 

### Decision
The PM facilitates a session to build a **Product Strategy Grid** compared to the dominant competitor, Google Docs:

*   *Must-Have:* Text formatting and document saving (Parity required: **Yes**).
*   *Performance (Speed):* Document loading time. Google Docs is **High** (very fast). The PM decides to target **Medium** (fast enough, matching Google Docs) rather than wasting 3 months of dev time chasing sub-10ms speeds.
*   *Performance (Collaboration):* Real-time co-authoring. Google Docs is **High**. Parity required: **High**.
*   *Delighter:* Markdown autocomplete with git-branch version control integration. Google Docs is **No** (has basic history, but no git integration). The PM targets **Yes** here.

The PM halts the audio-calling room project and the sub-10ms speed optimization. They focus the roadmap on text editing basics, real-time collaboration parity, and the git version control integration.

### Reasoning
Google Docs dominates on speed and scale. Competing directly on raw compiler/loading speeds (trying to go "high, high, high") would exhaust resources without winning customers. By keeping loading speed at **Medium** (parity) and version control at **Yes** (differentiation), the startup targets software developers who value git versioning over minor loading speed increases.

### Consequence
The MVP launches within 4 months. While document load times are average, early adopter developers rave about the git-version control integration (the delighter). The startup converts 15% of beta sign-ups into paid users within the first quarter.

### Transferable Lesson
Never compete on a competitor's terms if they have a structural advantage. Use the Strategy Grid to identify where to concede (maintaining parity) and where to play offense (differentiation). This protects your engineering bandwidth and clarifies your product's unique value.

---

## Common Misunderstandings

### "We should try to beat our competitors in every category"
**Correction:** This is the recipe for product failure. A startup has limited capital and engineering bandwidth. If you attempt to match limo services on luxury, taxis on price, and tech apps on booking speed, you will build an over-complicated, expensive product that fails to launch. Strategy is about choosing what **not** to do.

### "Points of parity are not important; we should only build delighters"
**Correction:** Delighters capture attention, but must-haves retain users. If your ride-sharing app has a beautiful map tracking interface (delighter) but the car never arrives or lacks seat belts (must-have parity failure), the user will uninstall the app immediately.

### "We can use the Strategy Grid as a static sales comparison chart"
**Correction:** The grid is an internal strategic tool, not marketing collateral. Marketing charts often pretend the company is "High" in every category and competitors are "Low". The PM's Strategy Grid must be honest; admitting where your product is **Medium** or **Low** is essential to focus resource allocation.

---

## Key Concepts and Definitions

| Concept | Simple definition |
|---|---|
| **Strategy Grid** | A Kano-based competitive matrix comparing your product's performance and delighters against key competitors. |
| **Point of Parity** | A feature or capability where your product matches the competitor's execution to remain viable. |
| **Point of Differentiation** | A unique performance benefit or delighter where your product outperforms competitors to win users. |
| **Offensive Strategy** | Allocating engineering resources to excel in underserved performance metrics and unique delighters. |
| **Defensive Strategy** | Maintaining basic quality on must-haves and average performance without over-engineering. |

---

## Key Takeaways

1. **Strategy is about trade-offs;** you cannot be the best at everything, so choose where to win and where to concede.
2. **Structure the Strategy Grid** using binary scales (Yes/No) for must-haves and delighters, and relative scales (High/Med/Low) for performance.
3. **Map primary competitors** (e.g. Uber 2009 vs. Taxis vs. Car Services) to visualize points of parity and differentiation.
4. **Play offense on underserved performance benefits** (like Uber's safety and booking speed) to stand out.
5. **Play defense on must-haves;** satisfy them to achieve parity (**Yes**), but do not waste bandwidth exceeding basic expectations.
6. **Deploy unique delighters** (like Uber's 2009 map tracking) to provide the primary value hook for early adopters.
7. **Define MVP bounds using the grid;** strip out non-essential performance metrics to launch quickly.
8. **Original Uber price strategy** targeted cost parity with taxis (**Medium**), though surge pricing later modified this balance.

---

## Visual Summary

![Strategy Grid to MVP Workflow](./visuals/25-visual-summary.png)
*Visual Summary: Process flowchart mapping the progression from Kano categorization to competitor mapping, trade-off choices, and MVP scope definition.*

---

## One-Minute Review

*   **Map Competitors:** List your must-haves, performance metrics, and delighters. Rate your product and your competitors on binary (Yes/No) and relative (High/Med/Low) scales.
*   **Focus Your Offense:** Choose 1–2 performance benefits to dominate (High) and 1–2 unique delighters (Yes).
*   **Accept Defense:** Settle for average execution (Medium/Low) in non-core categories, and satisfy must-haves without over-engineering them.

---

## Recommended Visual Illustrations

### Illustration 1: The Product Strategy Grid Layout (Blank Template)
*   **Concept:** Structural table layout showing grid scales and categories.
*   **Purpose:** Teaches the formatting rules of Exercise 6.
*   **Suggested structure:** A table template:
    *   Columns: "Kano Category", "User Need (Problem Statement)", "Our Product", "Competitor A", "Competitor B".
    *   Row 1 (Must-Have): Labeled "Binary scale: Yes / No".
    *   Row 2 (Performance): Labeled "Relative scale: High / Medium / Low".
    *   Row 3 (Delighter): Labeled "Binary scale: Yes / No".

### Illustration 2: Competitor Positioning: Uber (2009) Strategy Grid
*   **Concept:** The completed strategic grid for Uber's launch compared to Taxis and Limo Services.
*   **Purpose:** Visualizes the core case study values.
*   **Suggested structure:** Completed table:
    *   Must-Have (Take me there): Uber: Yes | Taxi: Yes | Limo: Yes.
    *   Performance (Speed): Uber: High | Taxi: Low | Limo: Med.
    *   Performance (Cost): Uber: Med | Taxi: Med | Limo: Low.
    *   Performance (Experience): Uber: Med | Taxi: Low | Limo: High.
    *   Performance (Safety): Uber: High | Taxi: Low | Limo: High.
    *   Delighter (Book without call): Uber: Yes | Taxi: No | Limo: No.
    *   Delighter (Visual tracking): Uber: Yes | Taxi: No | Limo: No.

### Illustration 3: Strategic Focus: Playing Offense vs. Defense
*   **Concept:** Separating offensive differentiators from defensive parity items.
*   **Purpose:** Illustrates resource focus and roadmap prioritization.
*   **Suggested structure:** Two compared columns:
    *   Left Column (Offensive Zone - "Play to Win"): Highlighted in green. Labeled: "1. Unique Delighters (Yes) & 2. Underserved Performance Benefits (High). Invest engineering resources here to stand out."
    *   Right Column (Defensive Zone - "Play to Defend"): Grayed out. Labeled: "1. Must-Have Parity (Yes) & 2. Non-Core Performance Benefits (Medium/Low). Maintain standard quality; avoid over-engineering."

### Illustration 4: The Developer Trade-Off Analogy (RAM vs. CPU vs. Business Strategy)
*   **Concept:** Connecting business trade-offs to technical memory/CPU optimization.
*   **Purpose:** Bridges strategic product trade-offs to developer experience.
*   **Suggested structure:** Split panel comparison:
    *   Left panel (Technical constraints): Labeled "Software Optimization. Cannot maximize RAM caching, CPU speed, bundle size, and code readability at 100%. You must trade RAM for rendering speed."
    *   Right panel (Strategic constraints): Labeled "Product Strategy Grid. Cannot excel at Cost, Speed, Luxury, Safety, and Innovation all at once. You must trade luxury experience for cost parity."

### Illustration 5: Strategy Grid to MVP Workflow (Visual Summary)
*   **Concept:** Flowchart showing how to translate the strategy grid into an MVP scope.
*   **Purpose:** Summarizes the learning steps of Exercise 6.
*   **Suggested structure:** Sequential flowchart:
    *   Box 1: "Categorize User Needs (Kano Model)"
    *   Box 2: "Map Execution Scales (Binary & Relative)"
    *   Box 3: "Grade Competitors on the Grid"
    *   Box 4: "Select Offensive Focus (Differentiators)"
    *   Box 5 [Teal]: "Define MVP Feature Boundaries"

---

## Related Concepts

* [The Kano Model](./24-the-kano-model.md)
* [Exercise #5: Problem Space Definition](./23-problem-space-definition.md)

## Visuals in This Lecture

* [The Product Strategy Grid Layout (Blank Template)](./visuals/25-grid-layout.png)
* [Competitor Positioning: Uber (2009) Strategy Grid](./visuals/25-uber-strategy.png)
* [Strategic Focus: Playing Offense vs. Defense](./visuals/25-offense-defense.png)
* [The Developer Trade-Off Analogy (RAM vs. CPU vs. Business Strategy)](./visuals/25-dev-analogy.png)
* [Strategy Grid to MVP Workflow](./visuals/25-visual-summary.png)

## Interactive Lesson

* [Open the interactive companion](./interactive/25-the-strategy-grid.html)

## Source

* [Original lecture transcript](../../sources/02-strategy/03-the-problem-space/25-the-strategy-grid-transcript.md)

## Continue Learning

* Previous: [The Kano Model](./24-the-kano-model.md)
* Section: [The Problem Space](./README.md)
* Part: [Strategy](../README.md)
* Next: [Getting Product Strategy Right](./26-getting-product-strategy-right.md)
* Course index: [Full Course Index](../../COURSE-INDEX.md)
