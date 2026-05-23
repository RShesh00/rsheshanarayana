---
layout: page
title: "Harnessing homolytic bond energetics to steer inverse radical design"
description: Treating bond dissociation energy as a continuous generative coordinate to steer radical molecular design
importance: 1
related_publications: true
---

Homolytic bond dissociation energy (BDE) governs radical formation and bond-breaking thermodynamics, yet in molecular design it is typically evaluated only *after* candidate structures are proposed. This project flips that logic: we treat **BDE as a continuous generative design coordinate** rather than a post-hoc descriptor, enabling distributional control over bond strength at the regime level rather than exact set-point attainment.

A BDE-conditioned transformer generates radical fragment pairs steered toward prescribed single-bond strength regimes (50-130 kcal·mol⁻¹), achieving monotonic, rank-resolved energetic control with **81-94% validity** and **84-92% novelty** across targets. At the screening level, an MPNN trained on the same data provides high-throughput energetic ranking consistent with regime-level steering.

DFT validation at the M06-2X/def2-TZVP level on randomly sampled novel generations yields a target-attainment MAE of 7.7-12.7 kcal·mol⁻¹, consistent with regime-level steering and isolating generative accuracy from inter-functional offsets. Cross-functional evaluation at ωB97X-D3BJ/def2-TZVP preserves energetic ordering (DFT-calculated means spanning ~64 to ~119 kcal·mol⁻¹), indicating the learned BDE axis reflects **transferable thermodynamic structure** rather than functional-specific artifacts.

Spin-delocalization analysis further reveals a statistically significant correlation between radical localization and bond strength across the DFT-validated set. Motivated by PFAS remediation, the framework is extensible to higher-energy C-F bond strength regimes.

{% cite sheshanarayana2026bde %}