---
layout: project
title: GenComUI
description: >-
  GenComUI explores generative visual aids as a communication medium to support
  task-oriented human-robot interaction. Powered by LLMs, the system dynamically
  generates contextual visual aids (map annotations, path indicators, and
  animations) on the robot's screen to complement verbal task communication and
  facilitate end-user robot programming. A formative study of human visual
  communication practices informed the design, and a within-subjects user study
  (n=20) demonstrated that generative visual aids enhance communication quality
  by providing continuous visual feedback and supporting iterative task
  refinement. I led the project's system design, development, and paper writing.
description_zh: >-
  GenComUI 探索将生成式视觉辅助作为沟通媒介来支持面向任务的人机交互。系统借助 LLM 在机器人
  屏幕上动态生成上下文相关的视觉辅助（地图标注、路径指示和动画），以补充语音任务沟通并支持
  终端用户机器人编程。一项针对人际视觉沟通实践的形成性研究指导了系统设计，20 人组内用户实验
  表明生成式视觉辅助通过提供持续的视觉反馈和支持迭代式任务修正，有效提升了沟通质量。本人主导了
  项目的系统设计、开发与论文撰写。
img: assets/img/publication_preview/gencomui.webp
hero_stacked: true
hero_avoid_scaling: true
importance: 4
category: research
team: Yate Ge, Meiying Li, Xipeng Huang, Yuanda Hu, Qi Wang, Xiaohua Sun, Weiwei Guo*
role: Team Leader, System Design, Development, User Study, Paper Writing
date_range: Jun 2024 – Oct 2024
note: Published at CHI 2025 (CCF A)
related_publications: false
tags: [human-robot interaction, generative UI, LLM]
---

## Motivation

In service robotics, verbal communication allows non-expert users to naturally express their needs. However, speech-based robot programming remains limited by ambiguity, speech recognition errors, and difficulty describing spatial movements verbally. While visual aids are widely used in human-to-human communication to enhance comprehension, their potential in human-robot interaction remains underexplored. GenComUI investigates how **dynamically generated visual aids** can serve as a communication medium to bridge the gap between natural language instructions and robot understanding.

<div class="row mt-3">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/gencomui_teaser.webp" title="GenComUI Overview" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>
<div class="caption">Overview of GenComUI: generative visual aids support verbal task communication between humans and robots.</div>

## Formative Study

To inform the design of GenComUI, we conducted an observational study examining how humans use external visual tools (paper maps and pens) to assist verbal communication in spatial tasks. The study revealed three key design considerations: **(DC1)** visual aids should provide timely and progressive feedback during communication; **(DC2)** visual aids should interpret and externalize user task intentions; **(DC3)** visual aids should integrate with speech to improve clarity and intuitiveness; **(DC4)** the system should support iterative task refinement through visual confirmation.

<div class="row mt-3">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/gencomui_formative.webp" title="Formative Study" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>
<div class="caption">Formative study: observing how humans use visual tools to support verbal spatial task communication.</div>

## GenComUI System

Based on the design considerations, we developed **GenComUI**, an LLM-based robot end-user development system that incorporates generative visual aids. Implemented on the Temi V2 robot, the system consists of four core modules:

- **Voice Interaction Module**: Handles bidirectional voice communication via speech-to-text and text-to-speech conversion.
- **User Intention Understanding Module**: Analyzes input and dialogue context to track task specifications and plan responses, including visual aid generation.
- **Generative Visual Aids Module**: Generates visual interface elements and animations on spatial maps according to the communication context.
- **Task Program Synthesis and Deployment Module**: Generates and deploys executable robot code with built-in testing for iterative refinement.

<div class="row mt-3">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/gencomui_architecture.webp" title="GenComUI Architecture" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>
<div class="caption">GenComUI system architecture: (A) Voice Interaction, (B) User Intention Understanding, (C) Generative Visual Aids, (D) Task Program Synthesis and Deployment.</div>

<div class="row mt-3">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/gencomui_interface.webp" title="GenComUI Communication Process" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>
<div class="caption">The communication process in GenComUI: (A) multi-turn task specification with progressive visual feedback, (B) visual confirmation of complete task flow, (C) task testing and deployment.</div>

## User Study

We conducted a **within-subjects user study with 20 participants** (12 female, 8 male, aged 18–60) comparing GenComUI with a voice-only baseline system. Participants completed tasks in a simulated office environment using both systems in counterbalanced order, combining think-aloud protocols with semi-structured interviews.

The results showed that generative visual aids **enhanced communication quality** by providing immediate feedback and supporting iterative refinement of task specifications. While visual aids did not significantly reduce task completion time, they promoted more natural and effective human-robot communication, particularly in complex tasks involving spatial movements and multi-step logic.

<div class="row mt-3">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/gencomui_baseline.webp" title="User Study Setup" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>
<div class="caption">Experimental setup: (Left) paper floor plan for baseline condition, (Right) comparison between baseline system and GenComUI.</div>
