---
title: "Exercise #5 Problem Space Definition"
course: "The Product Management Course"
part: "Strategy"
part_number: 2
section: "The Problem Space"
section_number: 3
lecture_number: 23
content_type: "lecture"
material_level: 2
status: complete
source: "Udemy video transcript"
visuals: 5
related_concepts:
  - problem space
  - goal reframing
  - safety ethics
  - collaborative discovery
  - user needs decomposition
---

[← Previous Lecture](../../02-strategy/02-strategy/22-what-is-product-strategy.md)
·
[Section Overview](./README.md)
·
[Part Overview](../README.md)
·
[Next Lecture →](./24-the-kano-model.md)

# Exercise #5: Problem Space Definition

> **Material level:** Level 2 — Core lecture detailing how to run a Problem Space Definition exercise, decomposing customer needs using action verbs, applying goal reframing techniques, and managing safety boundaries.

## Lecture Overview

This lecture covers the fifth practical exercise of the course: drilling down into the problem space of your chosen study product. It teaches how to write user needs from the customer's perspective and reframe goals when technology hits a physical limit. By the end of this lecture, you should be able to:
* Explain the role of collaborative co-creation in customer discovery.
* Structure user needs statements using **action verbs** from the user's perspective.
* Decompose a high-level customer goal into detailed sub-needs (using Uber 2009 as a case study).
* Apply the concept of **Goal Reframing** to solve user pains when direct execution is limited.
* Differentiate between areas where reframing is valuable and where safety requires strict, non-negotiable real-world solutions.

## Central Argument

A PM cannot define the problem space in isolation; it must be co-created with customers and cross-functional teams. To keep the problem space actionable, needs must be written using action verbs from the user's perspective rather than listing feature solutions. When physical or technological limits prevent further product optimization, a skilled PM must reframe the goal to satisfy the underlying human need (e.g., entertaining a passenger during a slow ride). However, safety represents a strict ethical boundary: PMs must never reframe safety or use "security theater" to create a false perception of trust.

---

## 1. The Collaborative and Hypothesis-Driven Problem Space

In professional product management, a PM never defines the problem space alone:

*   **Co-Creation:** PMs must collaborate with customers, designers, tech leads, and customer-facing teams to bring diverse perspectives into the problem space.
*   **Hypothesis-Driven Exercise:** When working on a case study or a new product without immediate data, think of your problem space map as a **hypothesis** based on personal usage. This hypothesis must be validated later using qualitative user research (interviews, observations) and quantitative data.

---

## 2. Structuring Action-Verb Needs

When mapping user needs, follow two strict rules to keep them actionable:

1.  **Use Action Verbs:** Write needs as active behaviors (doing something to create value) rather than listing passive features.
2.  **User's Perspective:** Write statements from the rider's or user's point of view, focusing on their goals rather than your software constraints.

---

## 3. Case Study: Uber Cabs (2009) Needs Decomposition

Decomposing a problem space is like peeling an onion. A top-level need like *"Take me where I want to go"* is too broad to be actionable. A PM must decompose it into four core categories: **Faster, Cheaper, Cleaner, and Safer**.

![Problem Space Decomposed: Uber (2009) Action-Verb Needs Tree](./visuals/23-needs-tree.png)
*Uber decomposed rider needs tree structure using action verbs and written from the user's perspective.*

### 1. Faster (The Speed Category)
*   **Decomposed Needs:**
    *   Make a booking with a single click.
    *   Get upfront estimates for the trip duration.
    *   Minimize wait time before the car arrives.
    *   Have the driver find and take the most optimal route.
    *   See where the car is at all times.
*   **The Technology Limit:** A ride-sharing app cannot control traffic congestion or municipal speed limits. The product can only optimize speed so far before hitting physical constraints.

### 2. Cheaper (The Cost Category)
*   **Decomposed Needs:**
    *   Get an upfront fare calculation to avoid billing surprises.
    *   Prevent the driver from taking longer routes to artificially inflate the fare.

### 3. Cleaner (The Quality Category)
*   **Decomposed Needs:**
    *   Step into a vehicle that is clean, smells good, and has no interior damage.
    *   Ensure seasonal utilities (like air conditioning in summer or working windows) are functional.
*   **The Operational Limit:** Uber cannot physically inspect thousands of driver-partner cars on a daily basis.

### 4. Safer (The Trust Category)
*   **Decomposed Needs:**
    *   Do not feel threatened or unsafe around the driver.
    *   Trust that the driver acts honestly and in the rider's best interest.
    *   Access emergency support and know the vehicle is monitored in real-time.

---

## 4. The Concept of Goal Reframing

When a product or service reaches its technical or operational limits, a PM must apply **Goal Reframing**:

> **Goal Reframing** is the process of redefining a customer's problem by examining their underlying emotional or psychological needs, allowing the team to solve the problem in a different way when direct optimization is blocked.

### Reframing Wait Times (Speed vs. Engagement)
*   **The Problem:** Ride wait times are bottlenecked by physical traffic.
*   **The Reframing Question:** *Why does the user hate waiting?* Because waiting in a silent car is boring and unproductive.
*   **The Reframed Solution:** Keep the user engaged and entertained. Uber can introduce in-car Wi-Fi, streaming content, or interactive screens to make the transit time feel faster.

![Reframing the Goal: Speed vs. Engagement](./visuals/23-reframe-speed.png)
*Solving wait time boredom by introducing Wi-Fi and interactive content rather than physical speed adjustments.*

### Reframing Cleaner Cars (Cleanliness vs. Hospitality)
*   **The Problem:** Uber cannot operationalize daily cleaning inspections for every car.
*   **The Reframing Question:** *How can we compensate for a slightly imperfect car?* By delivering an exceptionally warm, friendly driver experience.
*   **The Reframed Solution:** Train and incentivize drivers to provide friendly service. A warm hospitality experience often mitigates minor vehicle cleanliness issues.

![Reframing Cleaner Cars: The Nice Driver Experiment](./visuals/23-reframe-clean.png)
*Compensating for cleanliness inspection limits through a friendly driver hospitality experiment.*

---

## 5. The Ethical Safety Boundary

While reframing speed or cleanliness is a valuable product growth technique, **safety must never be reframed**.

*   **No Perception Hacks:** PMs must avoid using "security theater" (such as adding fake security animations or green checkmarks in the UI) to create a false perception of safety when underlying validation has not occurred.
*   **Real Solutions Only:** Safety is a strict ethical constraint. The company must implement real-world, verified safety frameworks, including:
    *   Rigorous driver background checks.
    *   Real-time vehicle GPS monitoring.
    *   Integrated emergency assistance alert buttons.

![The Safety Boundary: Real Security vs. Security Theater](./visuals/23-safety-boundary.png)
*Safety must not be reframed. Real security infrastructure is required, avoiding visual perception shortcuts.*

---

## Strategic Action Matrix: Uber (2009) Reframing Choices

| Need Category | Underlying Customer Pain | Technical / Operational Limit | Reframed Goal Strategy |
|---|---|---|---|
| **Faster** | Waiting in a car is boring and unproductive. | Limited by city traffic and physical vehicle speed. | **Reframe:** Make the travel time productive/entertaining (e.g., provide in-car Wi-Fi). |
| **Cheaper** | Fear of driver route manipulation and fare inflation. | Muted profit margins under commodity fare pricing. | **Reframe:** Compete on non-price factors (e.g., convenience, vehicle class) to avoid commoditization. |
| **Cleaner** | Entering dirty, uncooled, or damaged vehicles. | Impossible to inspect thousands of partner cars daily. | **Reframe:** Emphasize driver friendliness and hospitality to offset minor cleanliness issues. |
| **Safer** | Anxiety regarding driver trust and physical security. | **Ethical Boundary:** Zero shortcuts allowed. | **No Reframing:** Implement strict background checks and real emergency monitoring. |

---

## Practical Product Management Example

### Situation
A PM at a **grocery delivery app** is reviewing customer complaints. The data shows that the primary user pain point is delivery speed during peak hours (e.g., Friday evenings), where deliveries take up to 90 minutes. The logistics team states that delivery times cannot be reduced further because of local traffic bottlenecks and a shortage of delivery drivers.

### Decision
The PM holds a collaborative session with the lead developer and designer. They realize that the direct solution (hiring more drivers) has reached a financial limit. They decide to **reframe the goal**. 

Instead of focusing on physical transit speed, they examine the user's anxiety during the wait. They reframe the problem from *"Get the food here faster"* to *"Make the waiting time predictable and stress-free."*

### Reasoning
The user's real frustration is not just the 90-minute wait; it is the uncertainty of when the food will arrive, which prevents them from planning their evening. 

### Consequence
The engineering team builds a **real-time visual delivery tracker** (similar to Uber's tracking map) showing the driver's vehicle progress, along with an interactive game/recipe selector in the app. 

While the physical delivery still takes 90 minutes, support tickets regarding late orders drop by 45%, and customer satisfaction scores for peak hours increase by 30%. The user's psychological need for control and predictability was successfully satisfied through reframing.

### Transferable Lesson
When physical or technical bottlenecks block direct optimization, reframe the goal to address the underlying psychological anxiety or user experience. Satisfying the user's need for transparency or engagement can resolve the pain point without changing the physical constraints.

---

## Common Misunderstandings

### "Reframing a problem is a way to trick the user"
**Correction:** Reframing is not about deception. It is about understanding the root human need (e.g., reducing boredom or anxiety) and satisfying it through alternative features when physical limits are reached. Deceptive practices (like fake UI loading animations that hide service errors) damage trust and represent poor product management.

### "The PM should write down the exact database schema in the needs document"
**Correction:** Needs must remain strictly in the problem space. Describing a need as *"We need a MySQL table for driver ratings"* is a solution-space error. Express the need from the user's perspective using action verbs (*"As a rider, I want to rate my driver so that I can reward good service"*), leaving the engineering team free to choose the best database structure.

### "Safety features can be optimized or skipped if they have low usage metrics"
**Correction:** Safety is a non-negotiable ethical boundary. Even if an emergency button has 0.01% usage, it must not be removed or deprioritized. Product safety must be solved with real-world infrastructure, not metrics-driven cost cuts.

---

## Key Concepts and Definitions

| Concept | Simple definition |
|---|---|
| **Goal Reframing** | Redefining a customer's problem by looking at their underlying psychological needs to solve it in a new way. |
| **Action-Verb Needs** | Defining customer requirements using active, user-centric verbs (e.g., "track car") rather than passive features. |
| **Operational Limit** | The boundary where a company cannot directly control or monitor physical services on a day-to-day basis. |
| **Security Theater** | Implementing superficial UI indicators to create a perception of safety without backing it with real security. |

---

## Key Takeaways

1. **Problem space definition is collaborative;** co-create needs maps with cross-functional teams and customers to gather diverse viewpoints.
2. **State needs using action verbs** from the customer's point of view to avoid premature solution-space commitments.
3. **Decompose broad goals** ("Get a ride") into actionable sub-needs (Faster, Cheaper, Cleaner, Safer) using onion-peeling.
4. **Reframe the goal** when physical traffic or technical bottlenecks prevent direct speed or cost optimization.
5. **Reframing speed to engagement** (like providing Wi-Fi or tracking map entertainment) makes waiting times feel faster.
6. **Reframe cleanliness to hospitality** (emphasizing driver friendliness) to mitigate minor car maintenance issues.
7. **Safety is an ethical boundary;** it must never be reframed, and security theater must be avoided in favor of real security.
8. **Uber Cabs (2009) prioritized trust and security** using background checks and monitoring rather than UI tricks.

---

## Visual Summary

![Problem Space Exploration Process](./visuals/23-visual-summary.png)
*Visual Summary: Process flowchart mapping the progression from high-level goal definition to action-verb decomposition, technology bottleneck identification, reframing choices, and safety boundaries.*

---

## One-Minute Review

*   **Use Active Verbs:** Define your problem space using active, user-centric statements. Focus on what the user wants to do, not the software files you plan to build.
*   **Reframe on Limits:** When physical or technological boundaries block speed or quality improvements, reframe the problem to solve the underlying psychological pain.
*   **Safety is Absolute:** Never reframe safety. Implement verified, real-world security frameworks rather than visual UI shortcuts.

---

## Recommended Visual Illustrations

### Illustration 1: Problem Space Decomposed: Uber (2009) Action-Verb Needs Tree
*   **Concept:** Tree diagram showing Uber's decomposed user needs using action verbs.
*   **Purpose:** Teaches how to structure active, user-centric problem statements.
*   **Suggested structure:** A central node: "Overarching Need: Take me where I want to go". Four branches extend:
    *   Branch 1: "Faster" -> sub-branches: "Make booking in 1 click", "Get upfront duration estimate", "Minimize wait time", "Take optimal route".
    *   Branch 2: "Cheaper" -> sub-branches: "Get upfront fare calculation", "Prevent driver route inflation".
    *   Branch 3: "Cleaner" -> sub-branches: "Enter a clean/silent car", "Verify functioning AC/windows".
    *   Branch 4: "Safer" -> sub-branches: "Access emergency support", "Trust driver background check".

### Illustration 2: Reframing the Goal: Speed vs. Engagement
*   **Concept:** Graphic showing how to reframe wait times to solve boredom.
*   **Purpose:** Illustrates goal reframing in action.
*   **Suggested structure:** Split comparison:
    *   Left side (Direct Goal - Blocked): Labeled "Speed Optimization (Blocked by traffic congestion)". A car stuck behind other vehicles with a red stop sign.
    *   Right side (Reframed Goal - Active): Labeled "Engagement Optimization (Providing Wi-Fi/Content)". A passenger inside the car browsing on their tablet with a Wi-Fi wave icon, smiling.

### Illustration 3: Reframing Cleaner Cars: The Nice Driver Experiment
*   **Concept:** Decomposing and reframing physical cleanliness limits.
*   **Purpose:** Teaches operational reframing boundaries.
*   **Suggested structure:** A balance scale:
    *   Left scale pan (Operational Constraint): "Clean Car Inspections (Impossible to inspected 1000s of cars daily)".
    *   Right scale pan (Hospitality Offset): "Friendly Driver Initiative (Train drivers to provide a warm welcome to offset minor car dust)".

### Illustration 4: The Safety Boundary: Real Security vs. Security Theater
*   **Concept:** Safety as a strict ethical constraint.
*   **Purpose:** Highlights why safety must not be reframed.
*   **Suggested structure:** Split shield illustration:
    *   Left side (Prohibited - Security Theater): Labeled with a red 'X'. Labeled "Perception UI tricks (Fake scanning animations, green status checkmarks with no real checks)".
    *   Right side (Required - Real Security): Labeled with a green checkmark. Labeled "Infrastructure Security (Real background checks, GPS route monitoring, 911 alert buttons)".

### Illustration 5: Problem Space Exploration Process (Visual Summary)
*   **Concept:** Circular or sequential flowchart of the Exercise 5 workflow.
*   **Purpose:** Summarizes the learning steps of Problem Space Definition.
*   **Suggested structure:** Flowchart:
    *   Box 1: "Define High-Level User Goal"
    *   Box 2: "Decompose into Action-Verb Categories"
    *   Box 3: "Identify Physical/Tech Constraints"
    *   Box 4: "Reframe Goals (except Safety)"
    *   Box 5: "Establish Strategic Safety Boundaries"

---

## Related Concepts

* [What is Product Strategy?](../../02-strategy/02-strategy/22-what-is-product-strategy.md)
* [Exercise #1: Choose Your Product](../../01-introduction/01-introduction/10-choose-your-product.md)

## Visuals in This Lecture

* [Problem Space Decomposed: Uber (2009) Action-Verb Needs Tree](./visuals/23-needs-tree.png)
* [Reframing the Goal: Speed vs. Engagement](./visuals/23-reframe-speed.png)
* [Reframing Cleaner Cars: The Nice Driver Experiment](./visuals/23-reframe-clean.png)
* [The Safety Boundary: Real Security vs. Security Theater](./visuals/23-safety-boundary.png)
* [Problem Space Exploration Process (Visual Summary)](./visuals/23-visual-summary.png)

## Interactive Lesson

* [Open the interactive companion](./interactive/23-problem-space-definition.html)

## Source

* [Original lecture transcript](../../sources/02-strategy/03-the-problem-space/23-problem-space-definition-transcript.md)

## Continue Learning

* Previous: [What is Product Strategy?](../../02-strategy/02-strategy/22-what-is-product-strategy.md)
* Section: [The Problem Space](./README.md)
* Part: [Strategy](../README.md)
* Next: [The Kano Model](./24-the-kano-model.md)
* Course index: [Full Course Index](../../COURSE-INDEX.md)
