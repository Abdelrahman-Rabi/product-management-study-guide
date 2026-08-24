---
title: "Exercise #7 Problem Type Analysis"
course: "The Product Management Course"
part: "Strategy"
part_number: 2
section: "The Problem Space"
section_number: 3
lecture_number: 27
content_type: "lecture"
material_level: 2
status: complete
source: "Udemy video transcript"
visuals: 5
related_concepts:
  - problem type analysis
  - product viability
  - target group sizing
  - sales models
  - cost to serve
  - competitive positioning
---

[← Previous Lecture](./26-getting-product-strategy-right.md)
·
[Section Overview](./README.md)
·
[Part Overview](../README.md)
·
[Next Lecture →](./28-expressing-the-problem-space.md)

# Exercise #7: Problem Type Analysis

> **Material level:** Level 2 — Core lecture detailing the application of validation matrices to 5 business case studies (Slack, Udemy, Nespresso, Airbnb, Uber), the 3 core sizing questions, and aligning pricing margins with cost-to-serve touch levels.

## Lecture Overview

This lecture covers the seventh practical exercise of the course: building a **Problem Type Analysis** for your product. It applies the validation matrices from the previous lecture to analyze the business models of leading brands. By the end of this lecture, you should be able to:
* Size a problem space using the three customer-centric questions.
* Categorize Slack, Udemy, Nespresso, Airbnb, and Uber on the Problem Size vs. Frequency Grid.
* Map these companies on the Price vs. Cost-to-Serve Matrix.
* Evaluate product pricing in terms of margins rather than absolute dollar value.
* Apply this comparative framework to analyze your chosen product.

## Central Argument

To validate a product strategy, PMs must evaluate the problem space from the customer's perspective rather than the company's development effort. Sizing a problem requires analyzing customer motivation, market volume, and competitive gaps. By mapping key case studies across size, frequency, price, and cost-to-serve matrices, PMs can identify viable business model configurations—such as B2B enterprise software, consumer marketplaces, or retail pod systems—and copy established pricing-to-touchpoint alignments to ensure their own product's commercial viability.

---

## 1. Sizing the Problem Space: The Three Questions

When evaluating problem size, Product Managers must look through the eyes of the customer. The size is not determined by how technically difficult the solution is to write, but by three key market questions:

1.  **How big a deal is it to the customer to solve this problem?** (Measures user pain, motivation, and willingness to pay).
2.  **How many people face this problem?** (Measures total addressable market volume).
3.  **To what degree is this problem still unsolved?** (Measures competitor gaps and points of differentiation).

![Sizing the Problem Space: The Three Questions](./visuals/27-sizing-questions.png)
*Sizing the problem space checklist: Motivation, Market Size, and Competitor Gaps.*

---

## 2. Case Studies: Size vs. Frequency

We evaluate five major product cases on the **Problem Size vs. Frequency Grid**:

### 1. Slack (Workplace messaging)
*   **Problem:** Large & Frequent. Day-to-day team collaboration is critical to B2B operations, and employees use it continuously throughout the workday. It replaces inefficient email.

### 2. Udemy (Online education marketplace)
*   **Problem:** Large & Infrequent (Sporadic). Learning new professional skills is a major goal (high pain/motivation), but product usage is sporadic. Users must disrupt their daily life routines to take courses.

### 3. Nespresso (Coffee machines & pods)
*   **Problem:** Small & Frequent. Making morning coffee is a small daily routine task, but it happens frequently (often multiple times per day).

### 4. Airbnb (Vacation homestays)
*   **Problem:** Large & Infrequent. Booking holiday accommodation is a high-motivation, stressful B2C event, but travel occurs rarely for most consumers.

### 5. Uber (Ride-sharing)
*   **Problem:** Large & Infrequent/Rare. Getting from point A to B safely when you are stranded is an important decision (must-have). However, most average consumers do not take rides daily.

![Problem Type Matrix (Slack, Udemy, Nespresso, Airbnb, Uber)](./visuals/27-problem-matrix.png)
*Problem Type coordinate grid mapping: comparing B2B software, marketplaces, and physical routines.*

---

## 3. Case Studies: Price vs. Cost-to-Serve

Next, we map these companies' business models onto the **Price vs. Cost-to-Serve Matrix** (evaluating price in terms of **gross margins** rather than absolute transaction tags):

```text
               Price / Margins
                     ^
                     | 
                     |  [Airbnb]             |  [Slack] [Nespresso]
                     |  - High transaction   |  - High touch sales, boutiques,
                     |    value, low touch   |    large enterprise pricing
                     |    match platform     |    or massive retail margins
                     |                       |  
                     |-----------------------|-----------------------
                     |                       |  
                     |                       |  [Udemy] [Uber]
                     |                       |  - Self-serve, automated
                     |                       |    marketplace operations
                     |                       |  
                     +-----------------------------------------------> Cost-to-Serve
                                                                     (Touch Level)
```

### 1. Slack: High Price / High Touch
*   **Model:** Charging $8/employee/month adds up to massive enterprise contract pricing. However, they face a long B2B sales cycle to displace Microsoft Teams or legacy email setups, requiring sales reps and corporate account support.

### 2. Nespresso: High Price / High Touch
*   **Model:** Although a single pod costs around $2, Nespresso has massive gross margins (the markup price far exceeds coffee bean production and packaging costs). They maintain high-touch retail boutiques and manage a complex physical supply chain.

![Price vs. Margin: The Nespresso Pod Metric](./visuals/27-pod-margins.png)
*Margin analysis: high markup margins represent high-tier price strategies regardless of low checkout tags.*

### 3. Airbnb: High Price / Low Touch
*   **Model:** Vacation bookings represent high transaction values. Airbnb is a B2C matching marketplace; once they onboard and verify hosts (which is high touch initially), the day-to-day transaction matching is automated and low touch.

### 4. Udemy: Low Price / Low Touch
*   **Model:** Individual courses are low priced. Udemy operates a self-serve B2C matching platform. Support costs are delegated to the instructors (a key feature of their two-sided marketplace), keeping Udemy's internal Cost-to-Serve extremely low.

### 5. Uber: Low Price / Low Touch
*   **Model:** Single rides represent low price points. Uber runs a B2C matching engine with automated dispatching, billing, and routing. Customer support is handled entirely through automated, self-serve in-app reporting, minimizing human intervention.

![Sales Model Matrix (Slack, Udemy, Nespresso, Airbnb, Uber)](./visuals/27-sales-matrix.png)
*Sales Model Matrix mapping: ensuring pricing strategies match cost touch levels.*

---

## Practical Product Management Example

### Situation
A PM is designing a **remote usability testing tool** where designers can hire testers to review prototypes. The target pricing is set at **$15 per test**. The operations team proposes that for every test, a customer success representative should manually review the screencast video to verify audio quality before releasing it to the designer.

### Decision
The PM maps the product on the **Price vs. Cost-to-Serve Matrix**:
*   *Price:* Low ($15/test).
*   *Proposed Cost-to-Serve:* High (requires human labor to watch every video).

The PM rejects the operations team's proposal. They pivot the strategy and direct the engineering team to build an automated, client-side mic tester in the recorder app. This script checks audio levels and ambient noise programmatically before the tester can submit the video.

### Reasoning
Watching every video manually places the startup in **The Danger Zone** (low price with high touch). An automated mic check tool ensures basic quality programmatically. This keeps the touchpoint level at **Low Touch**, matching the B2C marketplace model of Udemy and Uber where quality verification is automated or crowdsourced.

### Consequence
The automated mic check tool successfully blocks silent or noisy recordings before submission. Usability testing video quality remains high, and customer refund requests drop to under 1%. The startup scales to 5,000 monthly tests without hiring additional review staff, preserving its B2C self-serve profitability margins.

### Transferable Lesson
Never scale a low-price B2C marketplace using manual, human verification steps. You must automate quality checks and support workflows to maintain low touch-level operations.

---

## Common Misunderstandings

### "A low-price product means we cannot afford high-end branding"
**Correction:** Nespresso sells a simple consumer product (coffee), which is technically low cost. However, they wrap it in high-end branding, luxurious retail boutiques, and premium packaging, allowing them to charge a massive margin markup. Do not confuse low cost-of-goods-sold with low-tier pricing. Evaluate your sales model by margins.

### "If users don't use our product daily, the strategy is failing"
**Correction:** Udemy, Airbnb, and Uber solve infrequent problems. Travel and professional learning are not daily routines. Infrequent products are highly successful if the problem is **large** (high customer motivation to solve it when it happens). Do not force daily notifications or fake gamification loops onto a naturally infrequent product.

### "We should handle customer support manually to build empathy"
**Correction:** Manual support is vital during the early discovery phase to understand user friction. However, once you enter the scaling phase for a low-price B2C product, manual support must be replaced by automated self-serve flows. Empathy must be built into the product design itself, not delivered via expensive human support lines.

---

## Key Concepts and Definitions

| Concept | Simple definition |
|---|---|
| **Problem Type Analysis** | The practice of evaluating a product's market viability based on its size, frequency, pricing, and touch level. |
| **Touch Level** | The amount of manual human interaction (sales, support, success calls) required per customer. |
| **Sizing Metrics** | Sizing a customer problem based on pain severity, market volume, and competitive gaps rather than code complexity. |
| **Margin-Led Pricing** | Defining "high price" by high gross margins (revenue minus operational cost) rather than checkout tag alone. |
| **Two-Sided Delegation** | Reducing Cost-to-Serve by delegating support/supply quality verification to marketplace participants (e.g. Udemy instructors). |

---

## Key Takeaways

1. **Size problems by customer pain,** market volume, and competitor gaps rather than code complexity.
2. **Slack represents a Large & Frequent B2B problem** with a High Price / High Touch enterprise business model.
3. **Udemy represents a Large & Infrequent problem** that is viable due to Low Price / Low Touch marketplace delegation.
4. **Nespresso represents a Small & Frequent problem** supported by high margin retail markup (High Price / High Touch).
5. **Airbnb represents a Large & Infrequent B2C problem** utilizing a High Price / Low Touch matching platform.
6. **Uber represents a Large & Rare B2C problem** supported by a Low Price / Low Touch automated dispatch model.
7. **Infrequent products are highly viable** if the problem size/motivation is large (Airbnb, Udemy).
8. **Automate onboarding and quality checks** for low-price products to avoid scaling into the Danger Zone.

---

## Visual Summary

![Problem Type Analysis Sequence](./visuals/27-visual-summary.png)
*Visual Summary: Process flowchart mapping the 5 steps of performing a problem type analysis.*

---

## One-Minute Review

*   **Ask the 3 Sizing Questions:** Analyze customer motivation, market size, and parity gaps to calculate the problem space volume.
*   **Coordinate the Matrix:** Map where your product sits relative to case studies (Slack, Udemy, Nespresso, Airbnb, Uber).
*   **Align the Model:** Ensure low pricing is backed by self-serve low-touch operations, and high human touch is supported by enterprise-grade pricing margins.

---

## Visuals in This Lecture

* [Sizing the Problem Space: The Three Questions](./visuals/27-sizing-questions.png)
* [Problem Type Matrix (Slack, Udemy, Nespresso, Airbnb, Uber)](./visuals/27-problem-matrix.png)
* [Sales Model Matrix (Slack, Udemy, Nespresso, Airbnb, Uber)](./visuals/27-sales-matrix.png)
* [Price vs. Margin: The Nespresso Pod Metric](./visuals/27-pod-margins.png)
* [Problem Type Analysis Sequence](./visuals/27-visual-summary.png)

---

## Interactive Lesson

* [Open the interactive companion](./interactive/27-problem-type-analysis.html)

## Source

* [Original lecture transcript](../../sources/02-strategy/03-the-problem-space/27-problem-type-analysis-transcript.md)

## Continue Learning

* Previous: [Getting Product Strategy Right](./26-getting-product-strategy-right.md)
* Section: [The Problem Space](./README.md)
* Part: [Strategy](../README.md)
* Next: [Expressing the Problem Space](./28-expressing-the-problem-space.md)
* Course index: [Full Course Index](../../COURSE-INDEX.md)
