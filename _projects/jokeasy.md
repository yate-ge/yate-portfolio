---
layout: project
title: Jokeasy
description: >-
  Jokeasy is a search-enabled human-AI collaboration tool for thematic joke writing.
  It integrates a dual-role LLM agent as both material scout and prototype writer,
  providing a visual canvas where retrieved web content becomes editable inspiration
  blocks within a multistage workflow. A qualitative study with 18 participants
  (hobbyists, professional comedians, and HCI/AI specialists) showed that the approach
  enriches ideation while preserving author agency. The interactive prototype
  was built as a Figma widget plugin for rapid testing. I led research design,
  system development, and paper writing as a TA for a graduate course on
  Human-AI Collaborative Intelligence (人机智能协同).
description_zh: >-
  Jokeasy 是一个搜索增强的人机协作主题笑话创作工具。系统内置的 LLM 智能体同时充当"素材猎手"
  和"初稿写手"，将实时检索到的网络内容转化为可视化画布上可编辑的灵感卡片，创作者通过多阶段
  工作流逐步打磨作品。18 位参与者（含职业喜剧演员和 HCI/AI 学者）的定性研究显示，这一流程
  有效激发灵感且不削弱创作者的主导权。我们通过 Figma 插件的形式构建交互原型进行测试。
  本人作为研究生课程"人机智能协同"的助教，主导了研究设计、系统开发与论文撰写。
img: assets/img/publication_preview/jokeasy.webp
importance: 3
category: research
team: Yate Ge, Lin Tian, Chiqian Xu, Luyao Xu, Meiying Li, Yuanda Hu, Weiwei Guo*
role: Research Design, System Development, Paper Writing
date_range: Dec 2024 – Mar 2025
note: Published at IASDR 2025
related_publications: false
tags: [human-AI co-creation, LLM, visual programming]
---

<div class="text-center mb-4">
<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;">
<iframe src="https://www.youtube.com/embed/5nUYwufk3-U" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture;web-share" allowfullscreen class="rounded z-depth-1"></iframe>
</div>
</div>

## System Overview

Thematic joke writing is inherently context-driven: creators hunt for timely stories, memes, and references, frame them into angles that can support a setup, and then weave a concise setup-punchline structure. Although LLMs can generate jokes conversationally, ordinary chat interfaces seldom give creators enough agency, control, or timely access to such source material. Jokeasy addresses this gap by coupling a search-enabled LLM agent with a structured visual canvas.

The system is built around three interrelated design considerations: **(DC1)** a dual-role LLM agent that acts as both a material scout and a prototype writer; **(DC2)** a multistage collaboration workflow built on editable inspiration blocks derived from search results; and **(DC3)** a visual, object-based canvas that externalizes the conversation into tangible, manipulable elements.

<div class="row mt-3">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/jokeasy_interface.webp" title="Jokeasy Main Interface" class="img-fluid rounded" zoomable=true %}
  </div>
</div>
<div class="caption">
  The main interface of Jokeasy: <strong>(A)</strong> Topic Ideation Panel, <strong>(B)</strong> Joke Generation Results with three parallel joke maps, <strong>(C)</strong> Echo Assistant Panel.
</div>

## Multistage Workflow

The joke creation process unfolds in four sequential phases. In **Topic Ideation**, the user enters a creation topic along with preferred styles and comedic techniques; Jokeasy generates a structured topic summary for review. During **Inspiration Generation and Initial Prototype Creation**, the LLM agent derives three inspiration themes, expands each into search queries, retrieves web content via the Tavily API, and distills the results into concise *inspiration blocks* that populate an inspiration pool. Each pool is merged with the topic summary to produce a provisional joke title and prototype joke content, together forming a *joke map*. Three such maps are presented side by side on the canvas.

In the **Inspiration Validation and Collaborative Refinement** phase, the writer inspects and refines each joke map. Selecting any inspiration block opens the Echo Assistant, which displays the retrieved source material and an echo summary explaining its relevance. Writers can modify, add, or remove blocks; every change triggers the system to re-run the search and regenerate the echo summary. Finally, in **Joke Synthesis**, after iterative refinement the system produces the final draft of each thematic joke.

<div class="row mt-3">
  <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/jokeasy_inspiration.webp" title="Inspiration Modification" class="img-fluid rounded" zoomable=true %}
  </div>
  <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/jokeasy_jokemap.webp" title="Joke Maps Modification" class="img-fluid rounded" zoomable=true %}
  </div>
</div>
<div class="caption">
  <strong>(A)</strong> Inspiration block modification: modify, add, or remove blocks. <strong>(B)</strong> Joke map-level reorganization: remove, manually add, or AI-generate entire maps.
</div>

## System Architecture

The front-end of Jokeasy is developed as a Figma widget plugin; the back-end is built using Node.js with moonshot-v1-auto 3 as the LLM backbone. The system implements core functions using an LLM-chain method with structured output. The prompt preamble is organized into six key fields: [Role], [Input Context], [Overall Rules], [Output Formatting], [Workflow], and [Example]. The search functionality is implemented using the Tavily API.

<div class="row mt-3">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/jokeasy_pipeline.webp" title="LLM Pipeline" class="img-fluid rounded" zoomable=true %}
  </div>
</div>
<div class="caption">
  The LLM-based pipeline: multistage content generation (left) and search-driven echo mechanism (right).
</div>

## User Study

We recruited 18 participants: 13 hobbyists and 5 expert users (including professional comedians with over five years of stand-up experience, an HCI specialist, and an AI researcher). Participants interacted with both Jokeasy and a conversational baseline system in counter-balanced order, each completing a stand-up comedy joke creation task. Sessions lasted approximately one hour, combining think-aloud protocols with semi-structured interviews.

Most participants (13/18) favoured Jokeasy over the baseline. They described its four-stage workflow as "organised and sequential from inspiration to the final product" and felt it "integrated several small functions involved in joke writing." Fourteen participants praised the canvas for its structured clarity, comparing it to a mind map. Integrated search helped users "continuously spark new ideas" and "trace back why the AI generated this inspiration."

<div class="row mt-3">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/jokeasy_study.webp" title="User Study" class="img-fluid rounded" zoomable=true %}
  </div>
</div>
<div class="caption">
  User study scenarios with hobbyist and expert participants.
</div>

<div class="row mt-3">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/jokeasy_baseline.webp" title="Baseline System" class="img-fluid rounded" zoomable=true %}
  </div>
</div>
<div class="caption">
  The conversational baseline system used for comparison.
</div>

<div class="row mt-3">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/jokeasy_usecase.webp" title="Use Case Comparison" class="img-fluid rounded" zoomable=true %}
  </div>
</div>
<div class="caption">
  Step-by-step interaction comparison between the baseline (C1) and Jokeasy (C2) for participant P7.
</div>
