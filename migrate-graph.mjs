// migrate-graph.mjs
// Run from the repo root:  node migrate-graph.mjs
//
// Finishes the half-done 8-area restructure so the Quartz graph forms a clean
// tree: index -> 8 area notes -> their sub-skills.
//
// What it does:
//   1. Renames the one spaced parent note  "Enters New Domains Fast.md" -> "Enters-New-Domains-Fast.md"
//   2. Creates the 6 missing parent notes (type: cluster) with Strengths + Related Areas
//   3. Repoints every sub-note from the dead old clusters (Thinks in Systems, etc.)
//      to its real parent area (the folder it lives in), and renames the
//      frontmatter field  cluster:  ->  area:
//   4. Renames headings  "...in this Cluster" -> "...in this Area"  and
//      "Related Clusters" -> "Related Areas"
//   5. Fixes the 2 existing parent notes' dead "Related" links to live areas
//
// SAFE: this only edits/creates files. Nothing is committed. Review with
// `git status` / `git diff` and the localhost preview BEFORE committing.
// To undo everything:  git checkout .   then   git clean -fd content

import fs from "fs";
import path from "path";

const contentDir = path.join(process.cwd(), "content");

const OLD_CLUSTERS = [
  "Thinks in Systems",
  "Builds and Organizes",
  "Leads Through Logic",
  "Revenue Engine Builder",
  "Builds Go-To-Market Motions",
];

let created = 0, updated = 0, renamed = 0;

// ---------- Phase 1: rename the spaced parent note ----------
const spacedEnters = path.join(contentDir, "Enters-New-Domains-Fast", "Enters New Domains Fast.md");
const hyphenEnters = path.join(contentDir, "Enters-New-Domains-Fast", "Enters-New-Domains-Fast.md");
if (fs.existsSync(spacedEnters) && !fs.existsSync(hyphenEnters)) {
  fs.renameSync(spacedEnters, hyphenEnters);
  renamed++;
  console.log("RENAMED  Enters New Domains Fast.md -> Enters-New-Domains-Fast.md");
}

// ---------- Phase 2: create the 6 missing parent notes ----------
const parents = {
  "Forecasting-and-Visibility": `---
type: cluster
---
# Forecasting & Visibility

I build the systems that give leadership a single, trustworthy version of the truth — turning scattered data into a forecast the CRO and CFO can both stand behind. Not just a number, but the models, cadence, and reporting architecture that make the number defensible.

This area shows up when leadership can't trust the forecast, when functions are looking at different numbers, and when no one can explain why.

## Strengths in this Area

- [[Board-Level Financial Modeling]]
- [[Capacity Modeling]]
- [[Scenario Analysis]]
- [[Trend Surfacing]]
- [[Decision-Ready Reporting]]
- [[Program Visibility]]
- [[Shared KPIs]]
- [[Data to Narrative]]
- [[Financial Narrative]]

## Related Areas

[[GTM-Planning]] — the forecast is only as good as the plan it's built on
[[Analytical-Storytelling]] — the number means nothing until it drives a decision
`,

  "GTM-Planning": `---
type: cluster
---
# GTM Planning

I design planning cycles that connect capacity, territory, quota, and comp into one coherent operating commitment — not a spreadsheet exercise that falls apart by Q2, but a plan the whole team executes against.

This area shows up when annual planning is disconnected from execution, when the inputs don't tie together, and when the plan stops mattering the moment the year starts.

## Strengths in this Area

- [[Model from Scratch]]
- [[Highest Leverage Segment]]
- [[Territory Design]]
- [[Role Clarity]]
- [[Planning Infrastructure]]
- [[Strategy to Execution]]
- [[Outbound Engine]]
- [[Revenue Gap Program]]
- [[Acquisition Screening]]

## Related Areas

[[Forecasting-and-Visibility]] — a plan you can't measure is a plan you can't trust
[[Comp-and-Incentive-Design]] — the plan only works if incentives point the same way
`,

  "Cross-Functional-Alignment": `---
type: cluster
---
# Cross-Functional Alignment

I build the shared definitions, joint reviews, and operating cadences that get every function moving from the same picture of the business — so meetings produce decisions, not debate.

This area shows up when Sales, Finance, and CS are operating from different versions of reality, when handoffs break, and when alignment depends on heroics instead of structure.

## Strengths in this Area

- [[Coalition Building]]
- [[Executive Sponsorship]]
- [[Executive Communication]]
- [[Making the Invisible Visible]]
- [[Assumption Dismantling]]
- [[Cross-Functional Revenue Program]]
- [[Cross-Functional Team Building]]

## Related Areas

[[Systems-and-Process-Design]] — alignment holds only when the process underneath supports it
[[Analytical-Storytelling]] — shared facts are what end the debate
`,

  "Systems-and-Process-Design": `---
type: cluster
---
# Systems & Process Design

I design the workflows that keep revenue moving cleanly from lead to renewal — diagnosing where the process has gaps, workarounds, and tribal knowledge baked in, then rebuilding it to scale as the business grows.

This area shows up when the revenue process works until it doesn't, when growth exposes the cracks, and when the operating model hasn't kept pace with the business.

## Strengths in this Area

- [[Discovery to Diagnosis]]
- [[Pattern Recognition]]
- [[Full-Stack Problem Solving]]
- [[Operating Model Redesign]]
- [[Process Design]]
- [[Tool Consolidation]]
- [[Shared Reality Framework]]

## Related Areas

[[Cross-Functional-Alignment]] — process and alignment are two sides of the same system
[[GTM-Planning]] — the operating model is where the plan actually runs
`,

  "Comp-and-Incentive-Design": `---
type: cluster
---
# Comp & Incentive Design

I simplify and redesign compensation structures that align incentives to strategy — turning plans that are complex, inconsistent, and driving the wrong behaviors into ones that point every role at the right outcomes.

This area shows up when the comp plan has grown into a tangle of exceptions, when reps optimize for the wrong things, and when incentives quietly work against the strategy.

## Strengths in this Area

- [[Comp Redesign]]
- [[Rep Behavior Change]]
- [[Customer Segmentation]]

## Related Areas

[[GTM-Planning]] — comp is the sharp end of the plan
[[Cross-Functional-Alignment]] — incentives only align behavior when everyone reads them the same way
`,

  "Analytical-Storytelling": `---
type: cluster
---
# Analytical Storytelling

I turn complex data into clear narratives that earn alignment from boards, executives, and cross-functional teams — bridging the gap between the data existing and anyone agreeing on what it means or what to do next.

This area shows up when the data is there but the decision isn't, when analysis stalls in debate, and when the story the numbers tell hasn't been made legible to the people who act on it.

## Strengths in this Area

- [[Business Case Writing]]
- [[Discovery to Business Case]]
- [[Show Don't Tell]]
- [[Strategic Risk Recognition]]
- [[Tool to Narrative]]
- [[External Advisor Coordination]]

## Related Areas

[[Forecasting-and-Visibility]] — the story has to rest on numbers leadership trusts
[[Cross-Functional-Alignment]] — a shared narrative is how alignment actually happens
`,
};

for (const [name, body] of Object.entries(parents)) {
  const folder = path.join(contentDir, name);
  if (!fs.existsSync(folder)) {
    console.log("WARN  folder not found, skipping parent note: " + name);
    continue;
  }
  const file = path.join(folder, name + ".md");
  if (fs.existsSync(file)) {
    console.log("SKIP (already exists):", path.relative(process.cwd(), file));
  } else {
    fs.writeFileSync(file, body, "utf8");
    created++;
    console.log("CREATED  " + path.relative(process.cwd(), file));
  }
}

// ---------- Phase 3: walk every area folder, fix each note ----------
const folders = fs
  .readdirSync(contentDir, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => d.name);

for (const folder of folders) {
  const dir = path.join(contentDir, folder);
  const files = fs.readdirSync(dir).filter((f) => f.toLowerCase().endsWith(".md"));
  for (const f of files) {
    const base = f.replace(/\.md$/i, "");
    const full = path.join(dir, f);
    let c = fs.readFileSync(full, "utf8");
    const before = c;

    const isParent = base === folder; // parent note basename matches its folder

    if (!isParent) {
      // Sub-note: repoint any dead-cluster wikilink to this note's real parent area.
      for (const old of OLD_CLUSTERS) {
        c = c.split(`[[${old}]]`).join(`[[${folder}]]`);
      }
      // Rename the frontmatter field cluster: -> area:
      c = c.replace(/^cluster:/m, "area:");
    }

    // Heading cleanup (applies to parent notes; harmless elsewhere)
    c = c.split("Strengths in this Cluster").join("Strengths in this Area");
    c = c.split("Related Clusters").join("Related Areas");

    if (c !== before) {
      fs.writeFileSync(full, c, "utf8");
      updated++;
      console.log("UPDATED  " + path.relative(process.cwd(), full));
    }
  }
}

// ---------- Phase 4: fix the 2 existing parent notes' dead "Related" links ----------
function replaceRelatedLine(file, oldLink, newLine) {
  if (!fs.existsSync(file)) return;
  let c = fs.readFileSync(file, "utf8");
  const esc = oldLink.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp("^\\[\\[" + esc + "\\]\\].*$", "m");
  const next = c.replace(re, newLine);
  if (next !== c) {
    fs.writeFileSync(file, next, "utf8");
    updated++;
    console.log("UPDATED  " + path.relative(process.cwd(), file) + "  (Related Areas link)");
  }
}

const develops = path.join(contentDir, "Develops-People-and-Teams", "Develops-People-and-Teams.md");
replaceRelatedLine(develops, "Builds and Organizes",
  "[[Systems-and-Process-Design]] — team development is inseparable from the operating structure around it");
replaceRelatedLine(develops, "Revenue Engine Builder",
  "[[GTM-Planning]] — scaling the plan means scaling the people who run it");

const enters = path.join(contentDir, "Enters-New-Domains-Fast", "Enters-New-Domains-Fast.md");
replaceRelatedLine(enters, "Thinks in Systems",
  "[[Systems-and-Process-Design]] — transferable frameworks are what make fast domain entry possible");
replaceRelatedLine(enters, "Revenue Engine Builder",
  "[[Forecasting-and-Visibility]] — the full-stack capability travels across industries");

console.log(`\nDone. Created ${created} parent notes, renamed ${renamed} file, updated ${updated} files.`);
console.log("Review with `git status` and `git diff`, check localhost, then commit if it looks right.");
