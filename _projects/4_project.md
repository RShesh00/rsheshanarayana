---
layout: page
title: "Rethinking Retrosynthesis: Curriculum Learning Reshapes Transformer-Based Small-Molecule Reaction Prediction"
description: Reshaping reaction prediction by controlling training difficulty with a chemically informed curriculum learning framework
importance: 4
year: 2025
img: assets/img/projects/JCIM.png
related_publications: true
---

Retrosynthesis prediction remains a central challenge in computational chemistry, particularly when models must generalize to rare or structurally complex reactions. This work presents a **curriculum learning (CL) framework** that reshapes model training by systematically controlling reaction difficulty during learning, directly addressing the challenge of chemical generalization.

In contrast to conventional generative approaches that treat all training reactions uniformly, the method introduces reactions in a chemically informed progression, gradually exposing the model to increasingly complex transformations based on synthetic accessibility, ring complexity, and molecular size. This difficulty-aware pacing allows the model to better capture reaction conditionality, preserve chemical plausibility, and avoid failure modes commonly observed in rare or underrepresented transformations.

Applied across three transformer-based architectures - ChemBERTa + DistilGPT2, ReactionT5v2, and BART - the framework yields substantial performance gains. Notably, the largest improvements are observed in the BART model, which lacks any chemical domain pretraining: CL improves its top-1 accuracy from 27.0% to **75.9% (+48.9%)**. In low-data regimes with only 50% of the training data, CL increases top-1 accuracy from 16.9% to **46.6% (+29.7%)**. Under scaffold-based splits, CL improves top-1 accuracy by up to **29%**, and in structurally dissimilar settings (Tanimoto similarity < 0.4), CL boosts top-1 accuracy from 18.2% to **69.4% (+51.2%)**, demonstrating strong robustness to distributional shifts.

These improvements are achieved without auxiliary labels, templates, or reaction class supervision. Looking forward, this CL framework may aid retrosynthetic route planning for pharmaceutical intermediates, catalysts, polymers, and functional materials.

*Featured as a [Supplementary Journal Cover](https://acs.silverchair-cdn.com/acs/content_public/journal/jcisd8/issue/65/20/2/jcisd8.2025.65.issue-20.xlargecover-3.jpeg?Expires=1790188147&Signature=Wsh~GcHSoVxO5xjejs~tRRgsHLkNXPLWYQy8aWQ9U9Hw4eionaGnojtwvdUb1DRKZ5DSalgAd2TgUzmSOyxTED7K-f5oxeHSKr9SF3sEdTe8ZFm7gGpK9ZNS8gs2qszD-S-b~CS9jbdHCtEUhtJJXASgyHF52fS0ZytOsL-z6Iiz7h6IqjJIQtMxXzcZpJ1Tqht9vGzTWk833IJv4-tfpYgdUlLGla~6LYqxvghxMfpkJ~atyMOMgZsrYl085co~D~VRwoSODjfBF-QBsun-vPKkd5jMPUioVrVCIMCeXy9Mbtl~8a2HQGIuUr8ooVKlbtMOq2V3x4PqvXKN9D10g__&Key-Pair-Id=APKAIE5G5CRDK6RD3PGA) in JCIM (2025).*

{% cite sheshanarayana2025retrosynthesis %}