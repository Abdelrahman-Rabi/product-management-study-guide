---
title: "Expressing the Problem Space"
course: "The Product Management Course"
part: "Strategy"
part_number: 2
section: "The Problem Space"
section_number: 3
lecture_number: 28
content_type: "lecture"
material_level: 2
status: complete
source: "Udemy video transcript"
visuals: 5
related_concepts:
  - problem space
  - product strategy
  - technology agnostic
  - competitor analysis
  - business model failure
---

[← Previous Lecture](./27-problem-type-analysis.md)
·
[Section Overview](./README.md)
·
[Part Overview](../README.md)
·
[Next Lecture →](unavailable)

# Expressing the Problem Space

> **Material level:** Level 2 — Core lecture examining how to define a product's problem space in a timeless, technology-agnostic way, illustrated by the Blockbuster vs. Netflix case study.

## Lecture Overview

When defining your product's problem space, it is critical to separate the **timeless customer need** from the **transient technology solution**. This lecture examines how marrying a specific piece of technology or delivery medium can bankrupt a company, using the historic rise and fall of Blockbuster as a warning. By the end of this lecture, you should be able to:
* Explain the difference between technology-locked and technology-agnostic problem statements.
* Summarize the core reasons behind Blockbuster's commercial failure.
* Detail how Netflix leveraged a technology-agnostic vision to transition from DVDs-by-mail to streaming.
* Apply three framing rules to keep your problem space definition timeless.

## Central Argument

A product's opportunity space must be defined independently of technology, management fads, or specific partners. When companies define their business by the delivery medium (as Blockbuster did with VHS/DVD physical retail stores), they become vulnerable to disruption when technology moves on. To survive long-term, Product Managers must abstract their problem statements to focus on timeless human needs (such as convenient home video access), allowing the product's implementation to evolve as new technologies emerge.

---

## 1. The Blockbuster vs. Netflix Case Study

The history of the home video industry provides a stark warning about the dangers of technology lock-in:

### Blockbuster at its Peak (Late 1990s)
*   **Scale:** Owned over 9,000 retail video stores in the US and employed 84,000 people globally.
*   **Market Share:** Had 65 million registered users and was valued at $3 billion USD.
*   **Growth:** Opening a new store location every 17 hours.
*   **Revenue Model:** Earned $800 million USD in a single year from **customer late fees alone** (a model that relied on user friction and frustration).

![The Blockbuster Fall: A Decade of Decline](./visuals/28-hype-decline.png)
*Blockbuster business empire decline: comparison statistics from late 1990s peak to 2010 bankruptcy.*

### The Bankruptcy (2010)
Within a single decade, Blockbuster collapsed into bankruptcy with over $900 million USD in debt. Today, only a single Blockbuster franchise store remains in the United States.

```text
       Blockbuster (Technology-Locked)          Netflix (Technology-Agnostic)
   +---------------------------------------+  +---------------------------------------+
   | Married physical stores & DVD/VHS.    |  | Focused on the timeless problem of   |
   | Relied on late fees ($800M/year).    |  | convenient home movie access.         |
   | Passed on buying Netflix for $50M.    |  | Pivoted from Mail-DVD to Streaming.   |
   | Result: Bankruptcy ($900M debt).     |  | Result: Global industry leader.       |
   +---------------------------------------+  +---------------------------------------+
```

### The Strategic Failure
Blockbuster was fixated on its physical delivery medium: **distributing VHS tapes and DVDs via brick-and-mortar retail stores**. Because this retail model was highly profitable, leadership ignored the rise of digital video streaming. They even passed up an opportunity to buy Netflix in its early stages for $50 million USD.

Netflix, founded in 1997 by Reed Hastings (motivated by a frustration over paying a $40 Blockbuster late fee), started as a DVD-by-mail rental service. However, Netflix did not define its business by the mailing envelope. They recognized that the timeless customer need was **convenient, friction-free home video entertainment access**. As high-speed internet matured, Netflix transitioned seamlessly from DVDs to digital streaming, while Blockbuster was left holding obsolete real estate and physical inventory.

![Blockbuster vs. Netflix Strategic Pivot](./visuals/28-netflix-pivot.png)
*Strategic pivot paths: locked vs. agnostic routes resolving home video access.*

---

## 2. Guidelines for Timeless Problem Statements

To prevent your product from being held hostage to a technology that might become obsolete in five years, follow these three rules:

1.  **Do not tie the definition to a specific technology medium:** Abstract the statement to focus on the underlying utility (e.g., "moving data reliably" rather than "writing XML files to local hard drives").
2.  **Do not tie the definition to temporary management fads or trends:** Focus on core business and user values rather than transient buzzwords (e.g., gamification, blockchain integration).
3.  **Do not tie the definition to a single partner company:** Ensure the problem space remains valid even if your current infrastructure vendor or data provider ceases to exist.

![Technology-Agnostic vs. Technology-Locked Problem Definition](./visuals/28-locked-agnostic.png)
*Locked vs. Agnostic reframing checklist comparison card.*

### The Web Developer Abstraction Analogy
For software developers, defining a strategy around a transient technology stack is similar to marrying a specific library:
*   A developer who built their core state management and DOM updates directly around **jQuery** in 2010 got locked out when high-performing virtual DOM libraries took over.
*   Defining requirements around timeless **Web Standard DOM APIs** (like native selectors and asynchronous data requests) keeps the application modular and independent of framework lifecycles.

![Web Developer Abstraction Analogy](./visuals/28-web-analogy.png)
*Web standards abstraction: building around native specifications protects codebase scalability.*

### Framing Comparisons
| Industry | Technology-Locked Statement (Transient) | Technology-Agnostic Statement (Timeless) |
|---|---|---|
| **Video Rental** | "Help users rent VHS tapes and DVDs from convenient local retail stores." | "Provide users with convenient, friction-free access to home video entertainment." |
| **Music** | "Manufacture and distribute compact discs (CDs) to music retail outlets." | "Provide music listeners with instant, high-quality access to global audio libraries." |
| **Logistics** | "Build a dispatch system to call taxi cabs via telephone operators." | "Help passengers get from point A to point B quickly, safely, and reliably." |
| **Finance** | "Help customers write paper checks and deposit them at physical bank branches." | "Help account owners transfer monetary value securely and immediately." |

---

## Practical Product Management Example

### Situation
A PM is working for a startup that provides **medical transcription software**. The original problem statement in their repository was: *"Medical practitioners struggle to type handwritten patient notes into local hospital database desktop systems."* The engineering team has optimized the interface for desktop keyboard input. However, hospitals are starting to adopt tablet computers and mobile charting apps, and physicians are demanding voice-to-text systems.

### Decision
The PM realizes the problem statement is technology-locked (typing, local hospital databases, desktop systems). They rewrite the problem statement: *"Medical practitioners experience high administrative overhead when documenting patient encounters during clinical rounds."* They redirect engineering bandwidth away from desktop keyboard shortcuts to build a cloud-based API that takes audio inputs and converts them into structured medical records.

### Reasoning
By reframing the problem from "typing on desktops" to "documenting patient encounters during rounds," the PM abstracts away the input hardware and storage location. Documenting encounters is the **timeless user need**; whether they type on a desktop, tap on a tablet, or speak to a microphone are merely transient implementation details.

### Consequence
When the hospital clients shift from desktop workstations to mobile tablets, the startup's cloud API integrates into the new tablet apps. The startup retains 95% of its enterprise contracts, whereas competitors who were locked into desktop local installations lose their market share.

### Transferable Lesson
Define your product by the user's objective (documenting an encounter), not the hardware device or input method they currently use (typing on desktops). Devices change; objectives remain.

---

## Common Misunderstandings

### "A technology-agnostic statement is too vague to guide developers"
**Correction:** A timeless statement does not replace specific technical requirements during a sprint. The engineering team still builds specific features using modern tech stacks. However, the *product strategy* remains timeless, ensuring that when the tech stack shifts (e.g., from server-rendered HTML to client-side single-page apps), the team understands *why* they are rebuilding the feature.

### "We should ignore emerging technology changes until they are mature"
**Correction:** Blockbuster ignored streaming because it was initially low resolution and slow. Ignoring technology changes is a fatal strategy. A timeless problem statement enables you to evaluate new technologies objectively: *Does this new method (streaming) solve our timeless problem (video access) better than our current method (DVD retail)?* If yes, you must pivot.

### "If our current partner is stable, we can build them into our core problem definition"
**Correction:** Even major infrastructure partners (e.g., Salesforce, Google Maps) can change their API terms, pricing, or product focus. If your problem statement is *"Help sales teams sync data with Salesforce,"* you are vulnerable. Frame it as *"Help sales teams sync data with CRM databases,"* ensuring you can swap vendors if terms become unfavorable.

---

## Key Concepts and Definitions

| Concept | Simple definition |
|---|---|
| **Technology-Agnostic** | Framing requirements and strategies around user objectives rather than specific hardware, software, or media. |
| **Delivery Medium** | The physical or digital channel used to distribute a solution (e.g., DVD stores, mail envelopes, cloud streaming platforms). |
| **Late Fee Paradox** | A business model flaw where company revenue relies on customer friction, creating a high incentive for competitor disruption. |
| **Timeless Need** | A human or business objective (e.g., transportation, communication) that remains constant regardless of technology changes. |
| **Tool Lock-In** | An architectural or strategic mistake where a company's product is tightly coupled to a single vendor or framework. |

---

## Key Takeaways

1. **Express your problem space** in a timeless and technology-agnostic way to prevent technology hostage situations.
2. **Blockbuster collapsed** because it defined its business by a transient delivery medium (VHS/DVD retail stores).
3. **Netflix succeeded** because it focused on the timeless customer need of convenient movie access.
4. **Do not marry a piece of technology,** a temporary management fad, or a single partner company.
5. **A timeless statement** allows your product implementation to evolve as new technologies emerge.
6. **Focus on the user's core objective** (e.g., transferring value) rather than their current task (e.g., writing paper checks).
7. **Timeless strategies** guide long-term roadmaps, while sprint requirements define short-term code details.
8. **Evaluate new technologies** by how much better they solve the timeless customer need than current methods.

---

## Visual Summary

![How to Express a Timeless Problem Space](./visuals/28-visual-summary.png)
*Visual Summary: Process flowchart mapping the 5 steps to formulate a timeless problem statement.*

---

## One-Minute Review

*   **Separate Need from Medium:** Define what the customer is trying to accomplish, not the physical or digital format they use.
*   **Study Blockbuster:** Avoid business models built on customer friction (like late fees) and delivery channels that can be virtualized.
*   **Keep it Agnostic:** Strip out specific hardware, coding languages, fads, or vendor names from your long-term product strategy.

---

## Recommended Visual Illustrations

### Illustration 1: Technology-Agnostic vs. Technology-Locked Problem Definition
*   **Concept:** Comparison chart of framing statements.
*   **Purpose:** Teaches the learner how to audit their own problem statements.
*   **Suggested structure:** Split-column comparison card:
    *   Left Column: Technology-Locked (CDs, VHS tapes, Paper Checks, Taxi operators).
    *   Right Column: Technology-Agnostic (Global audio access, Home movie access, Secure monetary transfer, Reliable point A to B transit).

### Illustration 2: The Blockbuster Fall: A Decade of Decline
*   **Concept:** Blockbuster's growth stats vs. bankruptcy timeline.
*   **Purpose:** Highlights the scale and speed of failure due to lock-in.
*   **Suggested structure:** Infographic showing:
    *   Peak Stats (Late 90s): 9,000 retail stores, 65M users, $3B valuation, $800M late fees.
    *   Arrow of decline (2010): Bankrupt, $900M debt, 1 store left.

### Illustration 3: Blockbuster vs. Netflix Strategic Pivot
*   **Concept:** Path comparison matching delivery channels to the timeless problem.
*   **Purpose:** Illustrates how Netflix evolved its technology while keeping the problem statement constant.
*   **Suggested structure:** Split-path timeline:
    *   Core Node: "Timeless Problem: Home Video Access"
    *   Blockbuster Path: Locked to VHS -> Locked to DVD -> Bankrupt.
    *   Netflix Path: DVDs-by-Mail -> Streaming app -> Original content.

### Illustration 4: Web Developer Abstraction Analogy (Framework vs. DOM)
*   **Concept:** Relates strategy to software design patterns.
*   **Purpose:** Bridges business strategy with developer mental models.
*   **Suggested structure:** Stack layer graphic:
    *   Top layer: Transient Libraries (jQuery, Backbone, MooTools) -> Obsolete.
    *   Bottom layer: Timeless Web Standards (DOM APIs, fetch, event listeners) -> Permanent.
    *   Strategic Lesson: Define core product capabilities at the standards layer, not the library layer.

### Illustration 5: How to Express a Timeless Problem Space (Visual Summary)
*   **Concept:** Flowchart for auditing problem statements.
*   **Purpose:** Provides a concrete check process.
*   **Suggested structure:** Flowchart:
    *   Step 1: Write raw draft -> Step 2: Strip delivery channels -> Step 3: Remove technology buzzwords -> Step 4: Verify vendor independence -> Step 5: Timeless problem statement.

---

## Related Concepts

* [What is Product Strategy?](./22-what-is-product-strategy.md)
* [Exercise #5: Problem Space Definition](./23-problem-space-definition.md)

## Visuals in This Lecture

* [Technology-Agnostic vs. Technology-Locked Problem Definition](./visuals/28-locked-agnostic.png)
* [The Blockbuster Fall: A Decade of Decline](./visuals/28-hype-decline.png)
* [Blockbuster vs. Netflix Strategic Pivot](./visuals/28-netflix-pivot.png)
* [Web Developer Abstraction Analogy](./visuals/28-web-analogy.png)
* [How to Express a Timeless Problem Space](./visuals/28-visual-summary.png)

## Interactive Lesson

* [Open the interactive companion](./interactive/28-expressing-the-problem-space.html)

## Source

* [Original lecture transcript](../../sources/02-strategy/03-the-problem-space/28-expressing-the-problem-space-transcript.md)

## Continue Learning

* Previous: [Exercise #7: Problem Type Analysis](./27-problem-type-analysis.md)
* Section: [The Problem Space](./README.md)
* Part: [Strategy](../README.md)
* Next: [Next Lecture](unavailable)
* Course index: [Full Course Index](../../COURSE-INDEX.md)
