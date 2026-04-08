---
layout: project
title: GenFaceUI
description: Meta-Design of Generative Personalized Facial Expression Interfaces for Intelligent Agents
description_zh: 面向智能体的生成式个性化面部表情界面元设计
img: assets/img/genfaceui_teaser.jpg
importance: 1
category: research
team: Yate Ge, Lin Tian, Yi Dai, Shuhan Pan, Yiwen Zhang, Qi Wang, Weiwei Guo*, Xiaohua Sun*
role: First Author, System Design, User Study, Paper Writing
date_range: 2024 – 2026
note: Published at CHI 2026
related_publications: false
---

<div class="text-center mb-4">
<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;">
<iframe src="https://www.youtube.com/embed/N9BNgYHpFXk" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture;web-share" allowfullscreen class="rounded z-depth-1"></iframe>
</div>
</div>

## Motivation

Facial expressions are a key component of expressive intelligent agents — they improve usability, strengthen user engagement and trust, and support task performance. The rise of LLMs enables more flexible, personalized, and context-aligned expressive behaviors. However, the design space for **generative facial expression interfaces** remains underexplored, facing challenges of *control*, *coherence*, and *alignment* in run-time generation.

## GPFEI Framework

We propose the **Generative Personalized Facial Expression Interface (GPFEI)** framework from a meta-design perspective:

- **Design Time:** Designers specify elements, layouts, colors, shapes, and rules that bound and guide generation
- **Run Time:** The "AI designer" produces role-specific customization and context-sensitive variation
- **Meta-Design:** Designers guide and constrain the AI, rather than authoring every expression asset

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/genfaceui_framework.png" title="GPFEI Framework" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The GPFEI framework organizes rule-bounded spaces, character identity, and context-expression mapping.
</div>

## System Design

**GenFaceUI** is a proof-of-concept meta-design tool that operationalizes the GPFEI framework:

- **Template Composition:** Compose facial elements with semantic tags
- **Rule Authoring:** Define context-expression mapping rules
- **Iterative Testing:** Test generation outcomes with model-in-the-loop
- **Constraint Management:** Bound the generative space for coherence

<div class="row mt-3">
    <div class="col-md-6 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/genfaceui_architecture.png" title="System Architecture" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-md-6 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/genfaceui_overview.png" title="System Overview" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

## Design Canvas & Semantic Tags

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/genfaceui_canvas.png" title="Design Canvas" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The design canvas enables designers to create templates, apply semantic tags, define rules, and iteratively test outcomes.
</div>

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/genfaceui_semantic.png" title="Semantic Tags" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

## User Study & Findings

We evaluated GenFaceUI through a **qualitative study with 12 designers** across three design tasks:

1. Design a basic chatbot face
2. Customize roles for a service robot
3. Create a personalized AI companion

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/genfaceui_tasks.png" title="Design Tasks" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

**Key Findings:**

- Perceived gains in controllability and consistency
- Need for structured visual mechanisms
- Need for lightweight explanations of generation logic
