---
layout: project
title: Cocobo
description: >-
  Cocobo is an LLM-powered end-user programming system for service robot task
  customization. Drawing on the theory of multiple representations in end-user
  development, the system leverages LLMs' code generation, general knowledge,
  and knowledge representation capabilities to let non-technical users create
  and modify robot programs through natural language, while providing interactive
  flowcharts for visual verification and MagicDebug for node-level debugging.
  A user study with 16 participants validated that non-programmers can
  independently create and refine robot service programs. I led the system
  design, development, and paper writing. The work was published at IEEE
  VL/HCC, the flagship conference in visual languages and end-user development.
description_zh: >-
  Cocobo 是一个基于大语言模型的终端用户机器人编程系统，面向服务机器人任务定制。系统结合终端用户
  开发中多重表征的理论，利用 LLM 的代码生成、通用知识与知识表达能力，让非技术用户通过自然语言
  对话创建和修改机器人服务程序，同时提供交互式流程图进行可视化验证以及 MagicDebug 节点级调试。
  16 名参与者的用户研究验证了无编程背景的用户也能独立完成机器人服务程序的创建与修改。
  本人在该项目中主导了系统设计、开发与论文撰写。成果发表于可视化语言与终端用户开发领域旗舰会议
  IEEE VL/HCC。
img: assets/img/publication_preview/cocobo.jpg
hero_stacked: true
importance: 5
category: research
team: Yate Ge, Yi Dai, Run Shan, Kechun Li, Yuanda Hu, Xiaohua Sun*
role: Team Leader, System Design, Development, User Study, Paper Writing
date_range: Sep 2023 – May 2024
note: Published at IEEE VL/HCC 2024
related_publications: false
tags: [visual programming, human-robot interaction, LLM]
---

## System Overview

End-user development (EUD) enables non-technical users to tailor service robots to their needs. Among EUD methods, natural language programming is intuitive but often imprecise, leading to misinterpretations between user intentions and program outcomes. Cocobo addresses this by seamlessly integrating natural language and flow-based programming through LLMs, facilitating easier program creation, debugging, and modification while lowering the learning curve for users.

The system's UI consists of two main views: **(A) Flowchart View**, which includes a node library, interactive flowchart, node properties panel, and action buttons (Auto Layout, Magic Debug, Sync Change); and **(B) Conversational View**, which enables natural language interaction between users and the system. Programs can be deployed directly to a physical Temi service robot.

<div class="row mt-3">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/cocobo_overview.jpeg" title="Cocobo System Overview" class="img-fluid rounded" zoomable=true %}
  </div>
</div>
<div class="caption">
  Overview of Cocobo: (A) Flowchart View with node library, interactive flowchart, and node properties; (B) Conversational View; (D-F) backend components and robot deployment.
</div>

## Authoring and Modifying Programs

Cocobo supports three complementary ways to create and modify robot programs:

**Authoring via conversation:** Users specify their customization requirements through multi-turn dialogue. The system generates code, flowcharts, and textual explanations. Users can further refine the program by describing modifications in natural language, and Cocobo regenerates the program and flowchart accordingly.

**Modifying via flowchart editor:** Users can visually confirm that the program aligns with their intentions and directly edit the executable code by adjusting the flowchart — adding or removing nodes, adjusting connections, and modifying node attributes using natural language descriptions rather than code.

**Modifying via MagicDebug:** Users select one or more flowchart nodes and activate the MagicDebug function. The system provides explanations about the selected nodes' behaviors through the conversational interface, then enables targeted inquiries and modifications via text dialogue.

<div class="row mt-3">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/cocobo_authoring.jpeg" title="Authoring Programs via Conversation" class="img-fluid rounded" zoomable=true %}
  </div>
</div>
<div class="caption">
  Authoring programs via conversation: users describe requirements in natural language; the system generates code, flowcharts, and textual explanations.
</div>

<div class="row mt-3">
  <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/cocobo_flowchart.jpeg" title="Flowchart Editing" class="img-fluid rounded" zoomable=true %}
  </div>
  <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/cocobo_magicdebug.jpeg" title="MagicDebug" class="img-fluid rounded" zoomable=true %}
  </div>
</div>
<div class="caption">
  <strong>(Left)</strong> Flowchart editing: add/remove nodes and links, edit node properties via natural language. <strong>(Right)</strong> MagicDebug: select nodes, inspect behaviors, and modify through targeted dialogue.
</div>

## System Architecture

The backend is developed using Node.js, integrating GPT-4 API for LLM-powered functions and controlling the robot by sending WebSocket messages. The frontend employs AntV X6 for flowchart rendering. Cocobo uses Mermaid as an intermediary flowchart description language for its simplicity and scalability, converting it to JSON format for frontend rendering. The prompt preamble is organized into six key segments: [Role], [Context], [Rules], [Workflow], [Output Format], and [Example].

<div class="row mt-3">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/cocobo_pipeline.jpeg" title="LLM Pipeline" class="img-fluid rounded" zoomable=true %}
  </div>
</div>
<div class="caption">
  The prompt chaining of each LLM-powered function in Cocobo.
</div>

## User Study

We conducted a user study with 16 participants (8 males, 8 females, aged 16-30, mean age 22.9) with limited programming experience and varied familiarity with LLM-based tools. The study comprised four phases: introduction, training, testing, and feedback. Participants were given three robot service programming tasks with a 25-minute time limit each.

The SUS score was **72.3**, indicating good usability. All participants completed all three tasks, and over half (10/16) finished within the allotted time. Most participants (15/16) reported that the conversational interface felt natural and intelligent. The flowchart interface was found intuitive for representing code by the majority (12/16), helping users quickly understand the main steps and key information. All users agreed that the conversational UI and flowchart UI complement each other well.
