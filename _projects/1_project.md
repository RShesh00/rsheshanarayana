---
layout: page
title: Inverse Radical Design via BDE-Conditioned Generative Models
description: Steering radical molecular design using bond dissociation energy as a generative conditioning signal
importance: 1
category: Molecular Design & ML
related_publications: true
---

Designing radicals with targeted reactivity is central to applications ranging from polymer synthesis to free-radical-based PFAS remediation. This project develops a **bond dissociation energy (BDE)-conditioned transformer** for inverse molecular design — a generative model that learns to sample molecules whose bond strengths follow a user-specified BDE distribution.

By framing BDE as a conditioning signal rather than a post-hoc filter, the model achieves distributional control over radical reactivity, producing molecules with 81–94% validity and 84–92% novelty across BDE targets. This approach opens a principled path to designing molecules with thermochemically tailored radical behavior.

{% cite sheshanarayana2026bde %}