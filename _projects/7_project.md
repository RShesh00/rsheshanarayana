---
layout: page
title: "Tailoring nanoporous graphene via machine learning: Predicting probabilities and formation times of arbitrary nanopore shapes"
description: Predicting nanopore formation probability and time in graphene using a two-stage ML framework on kinetic Monte Carlo data
importance: 7
year: 2022
img: assets/img/projects/NanoporesML.png
related_publications: true
---

Nanopores in graphene, a 2D material, are currently being explored for various applications, such as gas separation, water desalination, and DNA sequencing. The shapes and sizes of nanopores play a major role in determining the performance of devices made out of graphene. However, given an arbitrary nanopore shape, anticipating its creation probability and formation time is a challenging inverse problem, solving which could help develop theoretical models for nanoporous graphene and guide experiments in tailoring pore sizes and shapes.

This work develops a **machine learning framework** to predict formation probabilities and times based on data generated using kinetic Monte Carlo simulations and chemical graph theory. This enables rapid quantification of the ease of formation of a given nanopore shape in graphene via silicon-catalyzed electron-beam etching, providing an experimental handle to realize it in practice. Structural features include the number of carbon atoms removed, the number of edge atoms, the diameter of the nanopore, and its shape factor - all of which can be readily extracted from the nanopore shape.

The trained models accurately predict nanopore probabilities and formation times with **R² values of 0.97 and 0.95**, respectively, on the test set. **SHAP-based feature importance** analysis provides physical insight into the working of the model, revealing the role played by the various structural features in modulating nanopore formation. Overall, this work provides a solid foundation for experimental studies to manipulate nanopore sizes and shapes and for theoretical studies to consider realistic nanopore structures.

{% cite sheshanarayana2022nanopore %}