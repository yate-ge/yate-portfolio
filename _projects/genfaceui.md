---
layout: project
title: GenFaceUI
description: GenFaceUI explores generative personalized facial expression interfaces for intelligent agents from a meta-design perspective. Built on the GPFEI framework, it helps designers create facial templates, apply semantic tags, define context-expression rules, and iteratively test run-time generation within coherent, rule-bounded design spaces. A qualitative study with 12 designers showed gains in controllability and consistency while also revealing the need for better visual structure and lightweight explanations; I led the project's system design, prototype development, and paper writing. An early version was presented as a poster at UIST 2025, and the full research was published at CHI 2026.
description_zh: GenFaceUI 以元设计视角切入，探索如何让设计师为智能体打造生成式个性化表情界面。我们提出 GPFEI 框架，让设计师可以创建表情模板、标注语义、制定情境与表情的映射规则，并在可控的设计空间中反复测试运行时的生成效果。12 位设计师参与的定性研究表明，系统显著提升了表情的可控性与一致性，也指出了对更直观的视觉结构和轻量化解释的需求。本人主导了系统设计、原型开发与论文撰写。早期成果以 Poster 形式发表于 UIST 2025，完整研究发表于 CHI 2026。
img: assets/img/genfaceui_teaser.webp
importance: 1
category: research
team: Yate Ge, Lin Tian, Yi Dai, Shuhan Pan, Yiwen Zhang, Qi Wang, Weiwei Guo*, Xiaohua Sun*
role: Team Leader, System Design, Development, User Study, Paper Writing
date_range: Jun 2025 – Sep 2025
note: Poster at UIST 2025, Full Paper at CHI 2026 (CCF A)
related_publications: false
tags: [human-robot interaction, human-agent interaction, LLM, generative UI, meta-design]
---

<div class="text-center mb-4">
<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;">
<iframe src="https://www.youtube.com/embed/N9BNgYHpFXk" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture;web-share" allowfullscreen class="rounded z-depth-1"></iframe>
</div>
</div>

## GPFEI Framework

Generative facial expression interfaces introduce a different design problem from traditional asset-authored expression systems. Instead of fully specifying every facial state before deployment, designers need to define the conditions, constraints, and visual vocabulary that will guide generation at run time. To address this, we proposed the **Generative Personalized Facial Expression Interface (GPFEI)** framework from a meta-design perspective.

GPFEI structures the design space around three core elements: **rule-bounded generative spaces**, **character identity**, and **context-expression mapping**. At design time, designers define facial elements, layouts, colors, semantic tags, and mapping rules that constrain the space of possible outputs. At run time, the AI system interprets interaction context and generates facial expressions that remain aligned with those authored constraints. This reframes the designer's role from manually authoring every expression asset to designing the rules and structures through which the system can evolve expressively over time.

<div class="row mt-3">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/genfaceui_framework.webp" title="GPFEI Framework" class="img-fluid rounded" zoomable=true %}
  </div>
</div>
<div class="caption">Overview of the GPFEI framework.</div>

## GenFaceUI System

To operationalize the framework, we developed **GenFaceUI**, a proof-of-concept meta-design tool for generative personalized facial expression interfaces. The system supports the full workflow of facial expression interface design: creating facial templates, assigning semantic tags to visual elements, authoring context-expression rules, and testing generation outcomes with the model in the loop. Rather than treating generation as an opaque backend process, GenFaceUI makes the structure of the design space visible and editable to designers.

The system combines a design canvas, semantic element management, rule authoring, and iterative preview into one environment. Designers can compose faces from modular visual elements, define how expressions should change across contexts, and preserve character consistency by explicitly constraining what can or cannot vary. This makes the system suitable not only for expressive chatbot faces, but also for role-specific service agents and more personalized AI companions.

<div class="row mt-3">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/genfaceui_architecture.webp" title="GenFaceUI Architecture" class="img-fluid rounded" zoomable=true %}
  </div>
</div>
<div class="caption">GenFaceUI architecture.</div>

<div class="row mt-3">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/genfaceui_overview.webp" title="GenFaceUI Interface" class="img-fluid rounded" zoomable=true %}
  </div>
</div>
<div class="caption">GenFaceUI interface.</div>

## Designer Study

We evaluated GenFaceUI through a **qualitative study with 12 designers** using three representative tasks: designing a basic chatbot face, customizing a service robot with role-specific visual identities, and creating a personalized AI companion. These tasks were chosen to cover different levels of complexity and different forms of character adaptation, allowing us to examine how designers engaged with meta-design practices in realistic scenarios.

The study showed that designers perceived clear gains in **controllability** and **consistency** when working with rule-based generative expressions, while also surfacing important limitations. Participants needed more structured visual mechanisms for understanding the design space and lighter-weight explanations of how system outputs were produced. These findings suggest that future generative facial expression tools should support not only flexible generation, but also stronger interpretability and designer-facing scaffolding.

<div class="row mt-3">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/genfaceui_tasks.webp" title="Designer Study Tasks" class="img-fluid rounded" zoomable=true %}
  </div>
</div>
<div class="caption">Three design tasks used in the study.</div>
