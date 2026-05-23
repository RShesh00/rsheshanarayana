---
layout: page
title: Knowledge Distillation for Molecular Property Prediction
description: Compressing large graph neural networks into efficient student models without sacrificing predictive accuracy
importance: 2
category: Molecular Design & ML
related_publications: true
---

Scaling molecular property prediction to large datasets demands both accuracy and computational efficiency. This project investigates **knowledge distillation (KD)** - transferring rich embeddings from large teacher GNNs (SchNet, DimeNet++) into 2× smaller student networks - across domain-specific and cross-domain molecular property prediction tasks.

Across benchmarks including QM9, ESOL, and FreeSolv, distilled student models achieve up to **90% R² improvement** relative to training from scratch, demonstrating that teacher embeddings carry transferable structural priors. The work provides a scalability analysis with implications for cheminformatics, drug discovery, and materials design.

*Published in **Advanced Science** (2025) - Journal Frontispiece.*

{% cite sheshanarayana2025kd %}