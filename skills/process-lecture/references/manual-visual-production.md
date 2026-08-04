# Manual Visual Production

Use this reference after Gate 2 approves one or more visuals. Produce prompts for the user to run in ChatGPT or another image-generation interface. Do not call an image-generation tool.

## Prompt Package

Provide one independently usable prompt block per approved visual. Begin with a manifest:

| Visual | Expected filename | Exact destination | Status |
|---|---|---|---|
| Visual title | `00-descriptive-name.png` | `<part>/<section>/visuals/00-descriptive-name.png` | Awaiting user asset |

For each visual, include:

1. **Visual title and learning job** — the single idea the image must teach.
2. **Exact filename and destination** — fixed before the user generates the image.
3. **Generation prompt** — ready to paste without requiring repository context.
4. **Exact on-image text** — list every title, label, step, caption, and key-idea sentence verbatim.
5. **Negative constraints** — content, layout, wording, and style failures to avoid.
6. **Export specification** — PNG, required aspect ratio, readable resolution, and no filename variation.

## Professional Prompt Structure

Write prompts in this order:

```text
Create a polished educational infographic for a Product Management study guide.

Learning objective:
<one idea the learner should understand or recall>

Format and composition:
<aspect ratio, layout, hierarchy, major regions, reading direction>

Content and relationships:
<transcript-grounded concepts, sequence, comparison, arrows, emphasis>

Exact text to render:
<all visible text verbatim and kept concise>

Visual system:
<off-white, navy, blue, teal, muted orange, typography, cards, icons, whitespace>

Accuracy constraints:
<correct order, direction, distinctions, attribution, and any prohibited inference>

Avoid:
<decorative clutter, photorealism, tiny text, invented claims, duplicate panels, logos, watermarks>

Export:
<PNG, dimensions/aspect ratio, exact filename>
```

Make every prompt self-contained. Do not rely on phrases such as “as described above” or require the image model to infer lecture facts.

## Placeholder Contract

When an approved HTML companion exists, create one `<figure data-visual-placeholder>` per approved visual during the post-Gate-2 local draft. Point its `<img>` to the final relative path and provide:

- descriptive alt text
- expected filename
- one-sentence learning purpose
- a fallback card stating that the asset is awaiting manual generation

The shared JavaScript hides a failed image and shows the fallback. On reload, the browser shows the image automatically when the correctly named file exists.

Do not add a missing image link to canonical Markdown. Add the Markdown embed only after the file is verified.

## Handoff and Resume

After creating the branch, draft files, HTML placeholders, and prompt package:

1. Tell the user to generate each image separately.
2. Tell the user to export each image with the exact approved filename.
3. Tell the user to place it in the exact section-level `visuals/` destination.
4. Pause and wait for the user to confirm that the files were added.
5. On resume, verify every file rather than trusting confirmation alone.

Do not commit, push, or open a pull request while any approved visual remains absent or invalid.

## Asset Verification

For each approved file, verify:

- exact filename and extension
- exact section-level destination
- non-zero file size
- readable PNG signature and dimensions
- approved count equals supplied count
- one separate file per approved visual unless a combined visual was explicitly approved
- reasonable aspect ratio and resolution for the approved format
- visible text, process order, arrow direction, terminology, and style by inspecting the image

If a file is missing or incorrect, report the exact failure and keep waiting for a corrected asset. Preserve valid supplied assets.
