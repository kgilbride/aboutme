<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Kyle Gilbride — Revenue Operations & GTM Strategy</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Outfit:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
  :root {
    --navy:        #1e3a5f;
    --navy-light:  #2d5080;
    --navy-dim:    #e8eef5;
    --sage:        #4a7c59;
    --sage-light:  #6a9e79;
    --sage-dim:    #eef4f0;
    --white:       #ffffff;
    --off-white:   #f8f9fa;
    --text:        #1a1a2e;
    --text-mid:    #4a5568;
    --text-dim:    #8a9ab0;
    --rule:        #e2e8f0;
    --rule-strong: #cbd5e0;
  }

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }

  body {
    background: var(--white);
    color: var(--text);
    font-family: 'Outfit', sans-serif;
    font-weight: 300;
    line-height: 1.7;
    overflow-x: hidden;
  }

  /* ── ANIMATIONS ── */
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes lineGrow {
    from { width: 0; }
    to   { width: 60px; }
  }

  .reveal {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.7s ease, transform 0.7s ease;
  }
  .reveal.visible {
    opacity: 1;
    transform: translateY(0);
  }

  /* ── NAV ── */
  nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    background: rgba(255,255,255,0.92);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--rule);
    padding: 0 48px;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .nav-logo {
    font-family: 'Lora', serif;
    font-weight: 600;
    font-size: 17px;
    color: var(--navy);
    text-decoration: none;
    letter-spacing: -0.01em;
  }

  .nav-links {
    display: flex;
    gap: 36px;
    list-style: none;
  }

  .nav-links a {
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--text-mid);
    text-decoration: none;
    transition: color 0.2s;
  }
  .nav-links a:hover { color: var(--navy); }

  /* ── LAYOUT ── */
  .container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 48px;
  }

  section {
    padding: 96px 0;
  }

  section:nth-child(even) {
    background: var(--off-white);
  }

  /* ── HERO ── */
  .hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    padding-top: 64px;
    background: var(--white);
    position: relative;
    overflow: hidden;
  }

  .hero::before {
    content: '';
    position: absolute;
    top: -100px;
    right: -200px;
    width: 700px;
    height: 700px;
    background: radial-gradient(ellipse, rgba(30,58,95,0.04) 0%, transparent 70%);
    pointer-events: none;
  }

  .hero::after {
    content: '';
    position: absolute;
    bottom: -100px;
    left: -100px;
    width: 500px;
    height: 500px;
    background: radial-gradient(ellipse, rgba(74,124,89,0.05) 0%, transparent 70%);
    pointer-events: none;
  }

  .hero-inner {
    max-width: 760px;
  }

  .hero-eyebrow {
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--sage);
    margin-bottom: 24px;
    animation: fadeUp 0.7s ease forwards 0.3s;
    opacity: 0;
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .hero-eyebrow::before {
    content: '';
    display: block;
    width: 0;
    height: 1px;
    background: var(--sage);
    animation: lineGrow 0.8s ease forwards 0.6s;
  }

  .hero h1 {
    font-family: 'Lora', serif;
    font-size: clamp(38px, 5.5vw, 68px);
    font-weight: 700;
    line-height: 1.1;
    color: var(--text);
    letter-spacing: -0.02em;
    margin-bottom: 8px;
    animation: fadeUp 0.8s ease forwards 0.5s;
    opacity: 0;
  }

  .hero h1 em {
    font-style: italic;
    color: var(--navy);
  }

  .hero-sub {
    font-family: 'Lora', serif;
    font-size: clamp(16px, 2vw, 22px);
    font-style: italic;
    color: var(--text-mid);
    margin-bottom: 40px;
    animation: fadeUp 0.8s ease forwards 0.7s;
    opacity: 0;
  }

  .hero-body {
    font-size: 17px;
    line-height: 1.8;
    color: var(--text-mid);
    max-width: 620px;
    margin-bottom: 48px;
    animation: fadeUp 0.8s ease forwards 0.9s;
    opacity: 0;
  }

  .hero-body strong {
    color: var(--text);
    font-weight: 500;
  }

  .hero-ctas {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
    animation: fadeUp 0.8s ease forwards 1.1s;
    opacity: 0;
  }

  .btn-primary {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: var(--navy);
    color: var(--white);
    text-decoration: none;
    font-family: 'Outfit', sans-serif;
    font-size: 14px;
    font-weight: 500;
    padding: 14px 28px;
    border-radius: 2px;
    transition: background 0.2s, transform 0.15s;
    letter-spacing: 0.02em;
  }
  .btn-primary:hover { background: var(--navy-light); transform: translateY(-1px); }

  .btn-secondary {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: var(--navy);
    text-decoration: none;
    font-family: 'JetBrains Mono', monospace;
    font-size: 12px;
    font-weight: 500;
    padding: 14px 0;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    border-bottom: 1px solid var(--navy);
    transition: color 0.2s, border-color 0.2s;
  }
  .btn-secondary:hover { color: var(--sage); border-color: var(--sage); }

  /* ── SECTION LABELS ── */
  .label {
    font-family: 'JetBrains Mono', monospace;
    font-size: 10px;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--sage);
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .label::after {
    content: '';
    display: block;
    height: 1px;
    width: 40px;
    background: var(--sage);
    opacity: 0.4;
  }

  .section-heading {
    font-family: 'Lora', serif;
    font-size: clamp(28px, 3.5vw, 42px);
    font-weight: 700;
    line-height: 1.15;
    color: var(--text);
    letter-spacing: -0.02em;
    margin-bottom: 16px;
  }

  .section-heading em {
    font-style: italic;
    color: var(--navy);
  }

  .section-rule {
    width: 48px;
    height: 2px;
    background: var(--sage);
    margin-bottom: 32px;
  }

  .section-body {
    font-size: 17px;
    line-height: 1.8;
    color: var(--text-mid);
    max-width: 680px;
    margin-bottom: 48px;
  }

  /* ── POV SECTION ── */
  .pov-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 48px;
    align-items: start;
  }

  .pov-left {
    font-size: 17px;
    line-height: 1.85;
    color: var(--text-mid);
  }

  .pov-left p + p {
    margin-top: 20px;
  }

  .pov-left strong {
    color: var(--text);
    font-weight: 500;
  }

  .pov-callout {
    background: var(--navy);
    color: rgba(255,255,255,0.85);
    padding: 40px;
    border-radius: 2px;
    font-family: 'Lora', serif;
    font-size: 19px;
    font-style: italic;
    line-height: 1.6;
    position: relative;
  }

  .pov-callout::before {
    content: '"';
    font-size: 80px;
    color: var(--sage);
    opacity: 0.4;
    position: absolute;
    top: 8px;
    left: 32px;
    line-height: 1;
    font-family: 'Lora', serif;
  }

  .pov-callout p {
    position: relative;
    z-index: 1;
  }

  /* ── TIMELINE ── */
  .timeline {
    position: relative;
    padding-left: 32px;
  }

  .timeline::before {
    content: '';
    position: absolute;
    left: 0;
    top: 8px;
    bottom: 8px;
    width: 1px;
    background: linear-gradient(to bottom, var(--navy-dim), var(--rule-strong), var(--navy-dim));
  }

  .timeline-item {
    position: relative;
    padding-bottom: 52px;
  }

  .timeline-item:last-child {
    padding-bottom: 0;
  }

  .timeline-item::before {
    content: '';
    position: absolute;
    left: -37px;
    top: 8px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: var(--white);
    border: 2px solid var(--navy);
    transition: background 0.2s, border-color 0.2s;
  }

  .timeline-item:hover::before {
    background: var(--navy);
  }

  .timeline-meta {
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--sage);
    margin-bottom: 6px;
  }

  .timeline-role {
    font-family: 'Lora', serif;
    font-size: 20px;
    font-weight: 600;
    color: var(--text);
    margin-bottom: 4px;
    letter-spacing: -0.01em;
  }

  .timeline-company {
    font-size: 13px;
    color: var(--text-dim);
    font-weight: 400;
    margin-bottom: 14px;
    letter-spacing: 0.02em;
  }

  .timeline-body {
    font-size: 15.5px;
    line-height: 1.8;
    color: var(--text-mid);
    max-width: 680px;
    margin-bottom: 14px;
  }

  .timeline-body strong {
    color: var(--text);
    font-weight: 500;
  }

  .timeline-proof {
    display: inline-flex;
    flex-wrap: wrap;
    gap: 6px;
  }

  .proof-tag {
    font-family: 'JetBrains Mono', monospace;
    font-size: 10px;
    letter-spacing: 0.08em;
    background: var(--sage-dim);
    color: var(--sage);
    padding: 3px 10px;
    border-radius: 2px;
    text-transform: uppercase;
  }

  /* ── OFFER SECTION ── */
  .offer-card {
    background: var(--white);
    border: 1px solid var(--rule-strong);
    border-top: 3px solid var(--navy);
    padding: 48px;
    border-radius: 2px;
    max-width: 760px;
  }

  .offer-card h3 {
    font-family: 'Lora', serif;
    font-size: 26px;
    font-weight: 700;
    color: var(--text);
    margin-bottom: 8px;
    letter-spacing: -0.01em;
  }

  .offer-tagline {
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--sage);
    margin-bottom: 28px;
  }

  .offer-body {
    font-size: 16px;
    line-height: 1.8;
    color: var(--text-mid);
    margin-bottom: 28px;
  }

  .offer-pillars {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-bottom: 32px;
  }

  .pillar {
    padding: 20px;
    background: var(--off-white);
    border-radius: 2px;
    border-left: 2px solid var(--navy);
  }

  .pillar h4 {
    font-family: 'Outfit', sans-serif;
    font-size: 13px;
    font-weight: 600;
    color: var(--navy);
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin-bottom: 8px;
  }

  .pillar p {
    font-size: 14px;
    line-height: 1.6;
    color: var(--text-mid);
  }

  .offer-outcome {
    background: var(--sage-dim);
    border-left: 3px solid var(--sage);
    padding: 20px 24px;
    font-size: 15px;
    line-height: 1.7;
    color: var(--text-mid);
    margin-bottom: 32px;
    border-radius: 0 2px 2px 0;
  }

  .offer-outcome strong {
    color: var(--text);
    font-weight: 500;
  }

  /* ── CAPABILITIES GRID ── */
  .cap-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2px;
    background: var(--rule);
    border: 1px solid var(--rule);
  }

  .cap-cell {
    background: var(--white);
    padding: 32px 28px;
    transition: background 0.2s;
  }

  .cap-cell:hover {
    background: var(--navy-dim);
  }

  .cap-icon {
    font-size: 20px;
    color: var(--navy);
    margin-bottom: 14px;
    display: block;
    opacity: 0.6;
  }

  .cap-cell h3 {
    font-family: 'Lora', serif;
    font-size: 17px;
    font-weight: 600;
    color: var(--text);
    margin-bottom: 10px;
    letter-spacing: -0.01em;
  }

  .cap-cell p {
    font-size: 14px;
    line-height: 1.7;
    color: var(--text-mid);
  }

  /* ── OPEN TO SECTION ── */
  .open-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    margin-top: 40px;
  }

  .open-card {
    padding: 36px;
    border: 1px solid var(--rule-strong);
    border-radius: 2px;
    position: relative;
    overflow: hidden;
    transition: border-color 0.2s, transform 0.2s;
  }

  .open-card:hover {
    border-color: var(--navy);
    transform: translateY(-2px);
  }

  .open-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
  }

  .open-card.w2::before { background: var(--navy); }
  .open-card.advisory::before { background: var(--sage); }

  .open-card h3 {
    font-family: 'Lora', serif;
    font-size: 20px;
    font-weight: 600;
    color: var(--text);
    margin-bottom: 12px;
    letter-spacing: -0.01em;
  }

  .open-card p {
    font-size: 15px;
    line-height: 1.75;
    color: var(--text-mid);
  }

  .open-tag {
    font-family: 'JetBrains Mono', monospace;
    font-size: 10px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    margin-bottom: 12px;
    display: block;
  }

  .w2 .open-tag { color: var(--navy); }
  .advisory .open-tag { color: var(--sage); }

  /* ── CLOSING ── */
  .closing {
    background: var(--navy);
    color: rgba(255,255,255,0.8);
    padding: 96px 0;
  }

  .closing .label {
    color: var(--sage-light);
  }

  .closing .label::after {
    background: var(--sage-light);
  }

  .closing-headline {
    font-family: 'Lora', serif;
    font-size: clamp(26px, 3.5vw, 42px);
    font-weight: 700;
    line-height: 1.2;
    color: var(--white);
    letter-spacing: -0.02em;
    margin-bottom: 24px;
    max-width: 680px;
  }

  .closing-headline em {
    font-style: italic;
    color: var(--sage-light);
  }

  .closing-body {
    font-size: 17px;
    line-height: 1.8;
    color: rgba(255,255,255,0.65);
    max-width: 560px;
    margin-bottom: 48px;
  }

  .contact-line {
    display: flex;
    align-items: center;
    gap: 24px;
    flex-wrap: wrap;
  }

  .contact-line a {
    font-family: 'JetBrains Mono', monospace;
    font-size: 13px;
    color: rgba(255,255,255,0.7);
    text-decoration: none;
    letter-spacing: 0.05em;
    border-bottom: 1px solid rgba(255,255,255,0.2);
    padding-bottom: 2px;
    transition: color 0.2s, border-color 0.2s;
  }

  .contact-line a:hover {
    color: var(--white);
    border-color: var(--sage-light);
  }

  .contact-divider {
    width: 1px;
    height: 16px;
    background: rgba(255,255,255,0.2);
  }

  /* ── RESPONSIVE ── */
  @media (max-width: 768px) {
    nav { padding: 0 24px; }
    .nav-links { display: none; }
    .container { padding: 0 24px; }
    section { padding: 64px 0; }
    .pov-grid { grid-template-columns: 1fr; }
    .offer-pillars { grid-template-columns: 1fr; }
    .cap-grid { grid-template-columns: 1fr 1fr; }
    .open-grid { grid-template-columns: 1fr; }
    .offer-card { padding: 32px 24px; }
  }

  @media (max-width: 480px) {
    .cap-grid { grid-template-columns: 1fr; }
  }
</style>
</head>
<body>

<!-- NAV -->
<nav>
  <a href="#" class="nav-logo">Kyle Gilbride</a>
  <ul class="nav-links">
    <li><a href="#pov">Perspective</a></li>
    <li><a href="#arc">Career</a></li>
    <li><a href="#offer">Work with me</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</nav>

<!-- HERO -->
<section class="hero">
  <div class="container">
    <div class="hero-inner">
      <p class="hero-eyebrow">Revenue Operations &amp; GTM Strategy</p>
      <h1>Revenue execution breaks<br>where <em>shared logic ends.</em></h1>
      <p class="hero-sub">I build the operating systems that fix it.</p>
      <p class="hero-body">
        Most mid-market B2B revenue problems aren't strategy failures. They're context failures —
        <strong>functions operating from different versions of the business.</strong>
        I've spent 13 years finding where that shared logic is broken and building
        the infrastructure that connects it.
      </p>
      <div class="hero-ctas">
        <a href="#offer" class="btn-primary">See how I work →</a>
        <a href="#contact" class="btn-secondary">Get in touch</a>
      </div>
    </div>
  </div>
</section>

<!-- POV -->
<section id="pov">
  <div class="container">
    <p class="label">The problem I solve</p>
    <h2 class="section-heading">Context failures,<br><em>not strategy failures.</em></h2>
    <div class="section-rule"></div>

    <div class="pov-grid reveal">
      <div class="pov-left">
        <p>
          Sales, Finance, and CS are each operating from a different version of the business —
          different ICP, different pipeline criteria, different success metrics.
          Every tool you add and every hire you make <strong>underperforms because the shared
          logic underneath isn't there.</strong>
        </p>
        <p>
          The result is a forecast nobody fully trusts, a GTM team that's busy but misaligned,
          and transformations that don't stick.
        </p>
        <p>
          The pattern is consistent across organizations ranging from $40M to over $1B in revenue:
          when functions operate from fragmented definitions, execution underperforms regardless of effort.
          <strong>Fix the shared logic first</strong> — ICP, pipeline criteria, operating cadence,
          customer journey — and downstream outcomes improve.
        </p>
      </div>
      <div class="pov-callout reveal">
        <p>
          At one company, the ICP meant something different to Sales, CS, Finance, and Product —
          four functions, four versions of who to pursue. A cross-functional diagnostic built one
          shared framework from retention data and pipeline analysis. New logo average deal size increased.
        </p>
        <br>
        <p>
          At another, a revenue shortfall traced back to the same root cause: no shared definitions
          for pipeline stages, roles, or opportunity criteria. Building the shared logic got people
          executing from the same context and pipeline moving in a positive direction.
        </p>
        <br>
        <p><strong>Different companies. Different symptoms. Same underlying problem.</strong></p>
      </div>
    </div>
  </div>
</section>

<!-- CAREER ARC -->
<section id="arc">
  <div class="container">
    <p class="label">Career arc</p>
    <h2 class="section-heading">Not a straight line.<br><em>A deliberate one.</em></h2>
    <div class="section-rule"></div>
    <p class="section-body">
      My path from finance into operations was intentional — each role adding know-how the next one required.
      Across every chapter, the pattern has been the same: when teams lack shared context, execution fragments.
      My work has been to diagnose where the shared logic is breaking, then build the operating systems
      that help people execute with clarity.
    </p>

    <div class="timeline reveal">

      <div class="timeline-item">
        <div class="timeline-meta">2005 – 2012 · Foundation</div>
        <div class="timeline-role">Finance and Business Fluency</div>
        <div class="timeline-company">Thomas Weisel Partners · Ferrer Freeman · Wharton MBA</div>
        <div class="timeline-body">
          Started in healthcare investment banking and private equity. Financial modeling, M&A advisory, board work.
          Gained the insight that <strong>operational know-how is the long-term value creator.</strong>
          Wharton gave me the strategic framework to pursue that conviction.
        </div>
        <div class="timeline-proof">
          <span class="proof-tag">Financial modeling</span>
          <span class="proof-tag">M&A advisory</span>
          <span class="proof-tag">Strategic frameworks</span>
        </div>
      </div>

      <div class="timeline-item">
        <div class="timeline-meta">2012 – 2019 · Athenahealth & Healthagen</div>
        <div class="timeline-role">From Deals to Operations</div>
        <div class="timeline-company">Healthagen (Aetna) · athenahealth</div>
        <div class="timeline-body">
          Corporate development sharpened the build/buy/partner lens — technology partnerships,
          letters of intent, strategic assessment. Then athenahealth: Chief of Staff to the COO gave me
          a broad view of the business through <strong>cross-functional problem solving</strong> across
          Sales, Operations, and Product. Product Operations put me in the seat of actually running
          a business line, growing a new service from early stage to meaningful scale.
          Culminated in leading corporate development work through a major company transaction.
        </div>
        <div class="timeline-proof">
          <span class="proof-tag">Major transaction</span>
          <span class="proof-tag">New business line scaled</span>
          <span class="proof-tag">Cross-functional operator</span>
        </div>
      </div>

      <div class="timeline-item">
        <div class="timeline-meta">2019 – 2022 · Pegasystems</div>
        <div class="timeline-role">GTM Strategy at Scale</div>
        <div class="timeline-company">Pegasystems</div>
        <div class="timeline-body">
          Moved from corporate development to revenue operations by design —
          <strong>closer to customers and driving revenue impact.</strong>
          Led corporate strategy for the largest business unit by ACV, then pivoted into GTM leadership.
          Designed and ran the firm's operating cadence, contributed to significant ACV growth
          through a cloud pricing transformation, and built a pre-sales workshop program that
          influenced a meaningful share of annual bookings.
        </div>
        <div class="timeline-proof">
          <span class="proof-tag">Significant ACV growth</span>
          <span class="proof-tag">Bookings influence</span>
          <span class="proof-tag">Hundreds of sellers enabled</span>
        </div>
      </div>

      <div class="timeline-item">
        <div class="timeline-meta">2022 – 2026 · Automation Anywhere, Mural & Transfr</div>
        <div class="timeline-role">Revenue Operations, Full Ownership</div>
        <div class="timeline-company">Automation Anywhere · Mural · Transfr</div>
        <div class="timeline-body">
          At Automation Anywhere: Senior Director RevOps for a large ARR business.
          Designed sales methodology that drove <strong>meaningful year-over-year productivity improvement.</strong>
          At Mural: optimized revenue processes after the company grew 10x — unifying two revenue streams,
          building a deal desk, and substantially improving forecast reliability.
          At Transfr: first RevOps hire in company history. Stood up foundational GTM infrastructure
          end-to-end: annual planning, ICP framework built from retention analysis,
          <strong>compensation simplification from a complex multi-plan structure to four role-based plans,</strong>
          enablement function, territory management. Increased new logo average deal size.
        </div>
        <div class="timeline-proof">
          <span class="proof-tag">Large ARR business</span>
          <span class="proof-tag">Forecast accuracy improvement</span>
          <span class="proof-tag">ICP framework</span>
          <span class="proof-tag">Comp simplification</span>
          <span class="proof-tag">New logo ADS increase</span>
          <span class="proof-tag">Built from zero</span>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- WHAT I BUILD -->
<section id="capabilities">
  <div class="container">
    <p class="label">What I build</p>
    <h2 class="section-heading">The revenue operating<br><em>system.</em></h2>
    <div class="section-rule"></div>
    <p class="section-body">
      Most problems I'm drawn to don't fit neatly into a single function.
      They sit at the intersection of strategy, data, process, and people — and that's exactly where I do my best work.
    </p>

    <div class="cap-grid reveal">
      <div class="cap-cell">
        <span class="cap-icon">◎</span>
        <h3>Forecasting & Visibility</h3>
        <p>Not just a number — a system. Cadences, data models, and dashboard architecture that give the CRO and CFO a single version of truth from pipeline through revenue.</p>
      </div>
      <div class="cap-cell">
        <span class="cap-icon">◈</span>
        <h3>GTM Planning</h3>
        <p>Annual and quarterly cycles that connect capacity, territory, quota, and comp into a coherent plan — not a spreadsheet exercise, but a shared operating commitment.</p>
      </div>
      <div class="cap-cell">
        <span class="cap-icon">◇</span>
        <h3>Cross-Functional Alignment</h3>
        <p>Finance and Sales don't speak the same language by default. I build the bridges — shared KPIs, joint reviews, and operating cadences that make handoffs work.</p>
      </div>
      <div class="cap-cell">
        <span class="cap-icon">⬡</span>
        <h3>Systems & Process Design</h3>
        <p>Lead-to-renewal, quote-to-cash — the workflows that keep revenue moving cleanly. Built across multiple CRM and GTM stacks; the principles transfer regardless of tooling.</p>
      </div>
      <div class="cap-cell">
        <span class="cap-icon">△</span>
        <h3>Comp & Incentive Design</h3>
        <p>Plans that actually align behavior to strategy — not just quotas on a spreadsheet. Designed and simplified compensation structures across multiple companies and revenue models.</p>
      </div>
      <div class="cap-cell">
        <span class="cap-icon">□</span>
        <h3>Analytical Storytelling</h3>
        <p>Boards and executives don't need more data — they need the right insight, framed clearly. I build the reports and write the narrative that makes them actionable.</p>
      </div>
    </div>
  </div>
</section>

<!-- OFFER -->
<section id="offer">
  <div class="container">
    <p class="label">Work with me</p>
    <h2 class="section-heading">The GTM Foundation<br><em>Assessment.</em></h2>
    <div class="section-rule"></div>
    <p class="section-body">
      A structured diagnostic for mid-market B2B companies that have real revenue ambition
      but a foundation that hasn't caught up. Four weeks. Built to diagnose and begin.
    </p>

    <div class="offer-card reveal">
      <h3>GTM Foundation Assessment</h3>
      <p class="offer-tagline">4-week engagement · Process · Technology · People</p>

      <p class="offer-body">
        You have a revenue team, a CRM, and a growth target — but the pipeline is unpredictable,
        functions are measuring different things, and every new hire lands on top of processes
        that were never fully defined. The gaps that exist today don't stay the same size
        as your business grows. They compound.
      </p>

      <div class="offer-pillars">
        <div class="pillar">
          <h4>Process</h4>
          <p>Sales stages, ICP definition, expansion sequencing, customer journey non-negotiables</p>
        </div>
        <div class="pillar">
          <h4>Technology</h4>
          <p>CRM configuration, reporting infrastructure, data model gaps, AI workflow opportunities</p>
        </div>
        <div class="pillar">
          <h4>People</h4>
          <p>Role clarity, hiring sequencing, accountability structure, incentive alignment</p>
        </div>
      </div>

      <div class="offer-outcome">
        <strong>What becomes possible after:</strong> Leadership agrees on what the number means
        and how to move it. New hires land in a defined system instead of amplifying existing gaps.
        The board gets a forecast it can defend. The next 90 days have a clear sequence.
      </div>

      <a href="#contact" class="btn-primary">Start a conversation →</a>
    </div>

    <div class="open-grid reveal" style="margin-top: 64px;">
      <div class="open-card w2">
        <span class="open-tag">Full-time Operating Roles</span>
        <h3>Senior Leadership</h3>
        <p>
          Open to roles in RevOps, GTM Strategy, Business Operations,
          or broader commercial leadership at B2B companies that need sharper operating discipline.
          Best fit: real revenue complexity, cross-functional scope, room to build.
        </p>
      </div>
      <div class="open-card advisory">
        <span class="open-tag">Advisory & Fractional</span>
        <h3>Consulting Engagements</h3>
        <p>
          Available for structured diagnostic and advisory engagements with growth-stage
          or mid-market B2B companies. GTM strategy, forecasting, segmentation,
          operating cadence, and execution — project-based or fractional.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- CLOSING -->
<section id="contact" class="closing">
  <div class="container">
    <p class="label">Let's talk</p>
    <h2 class="closing-headline">
      If your pipeline is unpredictable,<br>
      your functions are misaligned,<br>
      or you're about to scale operations<br>
      onto a foundation that isn't ready —<br>
      <em>let's talk.</em>
    </h2>
    <div class="contact-line">
      <a href="mailto:kyle@kgilbride.com">kyle@kgilbride.com</a>
      <div class="contact-divider"></div>
      <a href="https://www.linkedin.com/in/kyle-gilbride/" target="_blank">LinkedIn</a>
      <div class="contact-divider"></div>
      <a href="https://kgilbride.com" target="_blank">kgilbride.com</a>
    </div>
  </div>
</section>

<script>
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -32px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
</script>

</body>
</html>
