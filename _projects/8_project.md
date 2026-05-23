---
layout: page
title: Attention-Based Vehicle Smoke Detection
description: Boosting surveillance-based vehicular emission detection with transformer attention and synthetic data augmentation
importance: 8
category: Earlier Research
related_publications: true
---

Detecting excessive vehicular smoke from surveillance cameras is hampered by scarce labeled data and low visual contrast. This project tackled both problems: a **dual-level synthetic smoke generation pipeline** (mask patterns + filtering) increased training data coverage by 5×, while a custom **λ-attention transformer head** grafted onto a YOLOv5 backbone boosted detection accuracy by up to 12% mAP across three public datasets.

The work demonstrates that targeted architectural attention and domain-specific data synthesis can substantially close the gap between lab performance and real-world deployment.

*Published in **IEEE Transactions on Industry Applications** (2022, Vol. 59, No. 2).*

{% cite kundu2022smoke %}