---
layout: project
title: GenFaceUI
description: GenFaceUI explores generative personalized facial expression interfaces for intelligent agents from a meta-design perspective. Built on the GPFEI framework, it helps designers create facial templates, apply semantic tags, define context-expression rules, and iteratively test run-time generation within coherent, rule-bounded design spaces. A qualitative study with 12 designers showed gains in controllability and consistency while also revealing the need for better visual structure and lightweight explanations; I led the project's system design, prototype development, and paper writing. The research was successfully published at CHI 2026.
description_zh: GenFaceUI 从元设计视角探索面向智能体的生成式个性化面部表情界面。基于 GPFEI 框架，系统支持设计师创建表情模板、添加语义标签、定义情境—表情规则，并在受约束且保持一致性的设计空间中迭代测试运行时生成。我们通过 12 位设计师的定性研究发现，该系统提升了可控性与一致性，同时也揭示了对更清晰视觉机制与轻量解释支持的需求；我主导了项目的系统设计、原型开发与论文撰写。该项目研究成果顺利发表于 CHI 2026。
img: assets/img/genfaceui_teaser.jpg
importance: 1
category: research
team: Yate Ge, Lin Tian, Yi Dai, Shuhan Pan, Yiwen Zhang, Qi Wang, Weiwei Guo*, Xiaohua Sun*
role: Team Leader, System Design, Development, User Study, Paper Writing
date_range: 2024 – 2026
note: Published at CHI 2026 (CCF A)
related_publications: false
---

<div class="text-center mb-4">
<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;">
<iframe src="https://www.youtube.com/embed/N9BNgYHpFXk" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture;web-share" allowfullscreen class="rounded z-depth-1"></iframe>
</div>
</div>

<div class="row mt-5">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/genfaceui_framework.png" title="GPFEI Framework" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  The <strong>Generative Personalized Facial Expression Interface (GPFEI)</strong> framework organizes the design space across two temporal phases. At <em>design time</em>, human designers author templates — defining facial element compositions, semantic tags, color palettes, and context-to-expression mapping rules that bound the generative space. At <em>run time</em>, an LLM-powered "AI designer" interprets context signals (dialogue content, user state, task type) and produces character-specific, situation-sensitive facial expressions within those designer-defined constraints. The framework reframes the designer's role from authoring every expression asset to <em>meta-designing</em> the rules that govern AI generation — enabling scalable personalization without sacrificing coherence.
</div>

<div class="row mt-5">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/genfaceui_architecture.png" title="GenFaceUI System" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  <strong>GenFaceUI</strong> is a proof-of-concept meta-design tool that operationalizes the GPFEI framework through four tightly integrated components. The <em>Template Composer</em> allows designers to build facial element assemblies and annotate each element with semantic tags (e.g., <code>eye-happy</code>, <code>brow-angry</code>), establishing a structured vocabulary for generation. The <em>Rule Authoring Panel</em> enables definition of context-expression mapping rules — logical conditions that link dialogue or interaction states to specific emotional outputs. The <em>LLM Backend</em> (GPT-4o) interprets these rules at run time, selects and recombines tagged elements, and generates expression sequences that satisfy the authored constraints. The <em>Iterative Testing Console</em> closes the loop by letting designers preview generated outputs inline, identify misalignments, and refine rules without leaving the tool.
</div>

<div class="row mt-5">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/genfaceui_overview.png" title="GenFaceUI Interface" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  The GenFaceUI design canvas provides a unified workspace for template composition, semantic tagging, and rule authoring. The left panel exposes a library of facial elements organized by region (eyes, brows, mouth, accessories) and emotional valence. The central canvas supports direct manipulation — designers drag elements onto a character template, resize and layer components, and assign semantic tags via a contextual menu. The right panel hosts the rule editor, where context conditions and expression outputs are configured through a structured form. A live preview pane renders the current generation state in response to user-specified test inputs, enabling rapid iteration. The toolbar provides one-click access to constraint management — locking elements that must remain stable across generated variants to preserve character identity.
</div>

<div class="row mt-5">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/genfaceui_tasks.png" title="Design Task Outputs" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Output examples from three design tasks completed by study participants, each probing a distinct point in the design space. <strong>Task 1 (Basic Chatbot)</strong> demonstrates how the framework handles a minimal character: a simple round face with two expressive states generated from a single rule set — illustrating that the tool remains approachable even for constrained scenarios. <strong>Task 2 (Service Robot)</strong> shows role-differentiated customization: participants designed two distinct character skins (receptionist vs. technical support) that share an underlying rule set but diverge visually through tagged element substitution — demonstrating how GPFEI separates identity configuration from behavioral logic. <strong>Task 3 (AI Companion)</strong> presents the richest outputs, with participants authoring nuanced multi-condition rule trees that produce varied affective responses to emotional dialogue cues — evidence that the meta-design approach scales to high-complexity, personalization-heavy scenarios without losing designer control.
</div>
