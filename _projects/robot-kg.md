---
layout: project
title: Visual Analytics for Service Robot Personalized Knowledge Graphs
description: >-
  This project explores user-in-the-loop visual analytics for building and
  refining personalized knowledge graphs that support service robots in
  individualized environments. I participated in the visualization interface
  and interaction design, focusing on how to visually represent working
  knowledge graphs so that users can inspect potential errors, input domain
  knowledge, and iteratively refine the graph.
description_zh: >-
  本项目探索基于用户参与的可视分析方法来构建与修正服务机器人个性化知识图谱。
  本人参与了可视化界面与交互设计，重点研究如何将工作知识图谱进行可视化呈现，
  使用户能够检视潜在错误、输入领域知识，并通过交互界面迭代修正图谱。
img: assets/img/kg_preview.png
importance: 9
category: design work
role: Visualization Interface & Interaction Design
date_range: Oct 2017 – Apr 2018
tags: [visualization, interaction design, human-robot interaction]
---

## Background

Service robots operating in homes, offices, and care facilities need personalized knowledge graphs that capture environment-specific information about people, objects, spatial layouts, and their relationships. Unlike large-scale general knowledge graphs, these personalized graphs are built from small data in specific settings and require continuous updating — making them prone to missing information, conflicts, and errors. This project introduces **working knowledge graphs**, task-centric subgraphs grounded from the personalized knowledge graph, as the interface through which users can visually inspect and refine robot knowledge.

## Visualization Design

The visualization maps the working knowledge graph onto a spatial layout, encoding node types (people, objects, spaces, relationships) with distinct colors and shapes, and using edge styles to distinguish knowledge sources (general knowledge base, personalized knowledge, and sensor data). A concentric ring layout organizes nodes by their topological distance from the current task, making task-relevant concepts visually prominent while preserving structural context.

<div class="row mt-3">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/kg_preview.png" title="工作知识图谱可视化初步设计" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>
<div class="caption">Working knowledge graph visualization: concentric rings (a.1–a.3) organize task-relevant concepts by topological distance; node colors encode entity types (people, objects, spaces); edge colors distinguish knowledge sources and relationship types; the spatial floor plan (e) provides environmental context.</div>
