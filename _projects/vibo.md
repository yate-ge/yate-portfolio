---
layout: project
title: Virtual Design Platform for Service Robot
description: >-
  A simulation design platform for service robots, developed as my master's thesis
  project. The platform leverages virtual reality, mixed reality, and component-based
  prototyping to support three key phases of service robot interaction design:
  conceptual character design through virtual bodystorming, interface and flow design
  through a visual interaction prototype builder, and usability testing through
  mixed-reality user simulation. Built with Unity and tested with designers, the
  platform lowers the cost of robot prototyping and enables rapid iteration across
  the full design cycle. Part of this work was published at AHFE 2023.
description_zh: >-
  面向服务机器人的模拟设计平台，是本人的硕士毕业课题。该平台结合虚拟现实、混合现实与组件化原型
  构建技术，支持服务机器人交互设计的三个关键阶段：通过虚拟 Bodystorming 进行交互角色概念设计、通过
  可视化交互原型构建器进行界面与流程设计、以及通过混合现实用户模拟进行可用性测试。平台基于
  Unity 开发，经设计师测试验证，有效降低了机器人原型构建成本，支持贯穿完整设计周期的快速迭代。
  部分成果发表于 AHFE 2023。
img: assets/img/publication_preview/codesign.webp
importance: 7
category: research
team: Yate Ge, Yuanda Hu, Xiaohua Sun*
role: System Design, Development, User Study, Thesis Writing
date_range: Sep 2019 – Jun 2020
note: Master's Thesis, Tongji University; Published at AHFE 2023
related_publications: false
tags: [VR, human-robot interaction, Unity]
---

<div class="text-center mb-4">
<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;">
<iframe src="https://www.youtube.com/embed/VW3O3hk8tFs" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture;web-share" allowfullscreen class="rounded z-depth-1"></iframe>
</div>
</div>

## Platform Framework

Service robot interaction design lacks mature design methods and tools. Existing approaches such as paper prototyping and Wizard of Oz are limited in their ability to simulate the multimodal, spatial, and embodied nature of robot interactions. The platform addresses this by proposing a simulation design platform built on virtual simulation technologies, covering the full design cycle through three integrated modules:

- **Virtual Bodystorming** supports the conceptual character design phase. Designers collaboratively build robot application scenes and robot prototypes in a shared VR environment, then perform role-play (both robot and user) to explore and validate design concepts.
- **Virtual HRI Flow Composer** supports the interface and flow design phase. Designers build interaction flow prototypes using a component-based approach with three levels of abstraction: interaction templates, behavior blocks, and behavior components.
- **Mixed Reality HRI Testing** supports the usability testing phase. By combining virtual content with physical robot hardware through mixed reality, designers can conduct low-cost user testing in real-world environments without building full engineering prototypes.

<div class="row mt-3">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/vibo_framework.webp" title="The platform Platform Framework" class="img-fluid rounded" zoomable=true %}
  </div>
</div>
<div class="caption">
  The three modules of the The platform simulation design platform.
</div>

## Virtual Bodystorming

In the VR environment, multiple designers enter a shared virtual space to co-design robot service scenarios. The process unfolds in two stages: first, **scene construction** — designers select preset environments, add props, and configure virtual human agents to build the application context; second, **role-play** — designers perform robot role-play via Wizard of Oz controls (movement, head rotation, voice, display) and user role-play through embodied interaction, to evaluate service and social character design concepts.

The platform supports modular robot prototype building: robot morphology is decomposed into head, body, arms, and base modules with configurable attachments, enabling rapid assembly and iteration of robot form factors directly in VR.

<div class="row mt-3">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/vibo_woz.webp" title="Wizard of Oz Configuration" class="img-fluid rounded" zoomable=true %}
  </div>
</div>
<div class="caption">
  Wizard of Oz configuration and robot role-play in VR.
</div>

<div class="row mt-3">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/vibo_roleplay.webp" title="Robot Behavior Simulation" class="img-fluid rounded" zoomable=true %}
  </div>
</div>
<div class="caption">
  Robot behavior simulation: controlling movement, facial expressions, and interactions in the virtual scene.
</div>

## Interaction Flow Composer

The Interaction Composer enables designers to build robot interaction flow prototypes through a visual, component-based tool without programming. Three levels of building blocks are provided: **behavior components** (atomic interaction units such as voice output, movement, and screen display), **behavior blocks** (combinations of components representing a complete interaction step), and **interaction templates** (design patterns such as question-answer, command-action, and greeting-response).

Designers drag components onto a canvas, assemble behavior blocks, connect them into interaction flows, and test the prototype directly in the virtual environment.

<div class="row mt-3">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/vibo_components.webp" title="Behavior Components" class="img-fluid rounded" zoomable=true %}
  </div>
</div>
<div class="caption">
  Behavior components: atomic interaction units covering input (human observation, gesture detection) and output (voice, locomotion, face expression, screen display).
</div>

<div class="row mt-3">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/vibo_composer.webp" title="Interaction Composer" class="img-fluid rounded" zoomable=true %}
  </div>
</div>
<div class="caption">
  The Interaction Composer: connecting behavior blocks into an interaction flow prototype.
</div>

## System Implementation

The platform is built on Unity, with the host application managing assets (3D environments, props, robot models), project configuration, and interaction prototype authoring. The VR application runs on Oculus Rift headsets with OptiTrack optical tracking for multi-user body tracking and avatar synchronization. The MR application uses HoloLens to overlay virtual robot interaction prototypes onto physical robot hardware via IoT data synchronization.

<div class="row mt-3">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/vibo_host_unity.webp" title="Host Application" class="img-fluid rounded" zoomable=true %}
  </div>
</div>
<div class="caption">
  The host application running in Unity, with scene management and asset library.
</div>

<div class="row mt-3">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/vibo_scenarios.webp" title="Virtual Scenarios" class="img-fluid rounded" zoomable=true %}
  </div>
</div>
<div class="caption">
  Robot service scenarios in different virtual environments: home, shopping mall, and supermarket.
</div>

<div class="row mt-3">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/vibo_exhibition.webp" title="Thesis Exhibition" class="img-fluid rounded" zoomable=true %}
  </div>
</div>
<div class="caption">
  Graduation thesis exhibition at Tongji University College of Design and Innovation.
</div>
