---
layout: page
title: "Knowledge Distillation for Molecular Property Prediction: A Scalability Analysis"
description: Compressing large graph neural networks into efficient student models without sacrificing predictive accuracy
importance: 2
year: 2025
img: assets/img/projects/KD.png
related_publications: true
---

Knowledge distillation (KD) is a powerful model compression technique that transfers knowledge from complex teacher models to compact student models, reducing computational costs while preserving predictive accuracy. This study investigates KD's efficacy in molecular property prediction across domain-specific and cross-domain tasks, leveraging state-of-the-art graph neural networks (SchNet, DimeNet++, and TensorNet).

In the domain-specific setting, KD improved regression performance across diverse quantum mechanical properties in the QM9 dataset, with DimeNet++ student models achieving up to a **90% improvement** in R² compared to non-KD baselines. Notably, in certain cases, smaller student models achieved comparable or even superior R² improvements while being **2× smaller**, highlighting KD's ability to enhance efficiency without sacrificing predictive performance.

Cross-domain evaluations further demonstrated KD's adaptability, where embeddings from QM9-trained teacher models enhanced predictions for ESOL ($$\log S$$) and FreeSolv ($$\Delta G_\text{hyd}$$), with SchNet exhibiting the highest gains of approximately **65% in $$\log S$$ predictions**. Embedding analysis revealed substantial student-teacher alignment gains, with the relative shift in cosine similarity distribution peaks reaching up to 1.0 across student models. These findings highlight KD as a robust strategy for enhancing molecular representation learning, with implications for cheminformatics, materials science, and drug discovery.

*Featured as a [Frontispiece](https://advanced.onlinelibrary.wiley.com/doi/abs/10.1002/advs.202570174) in Advanced Science (2025).*

*Featured in the [Cornell Chronicle](https://news.cornell.edu/stories/2025/05/smarter-faster-ai-models-explored-molecular-materials-discovery).*

{% cite sheshanarayana2025kd %}