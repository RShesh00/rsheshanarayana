---
layout: page
title: "Vehicle Smoke Synthesis and Attention-based Deep Approach for Vehicle Smoke Detection"
description: Boosting surveillance-based vehicular emission detection with transformer attention and synthetic data augmentation
importance: 8
img: assets/img/projects/Vehicle.png
related_publications: true
---

Third-world countries are suffering from extreme vehicular air pollution due to the dominating number of fossil fuel-driven vehicles on the road. Therefore, in these countries, automatic surveillance systems are in high demand for close monitoring to identify and penalize vehicles emitting excessive smoke. In recent times, deep learning-based computer vision systems have been rigorously applied to this problem, but their accuracy strongly depends on the number of training images taken under various imaging conditions. However, very few publicly available vehicle smoke datasets exist, and capturing on-road videos to build datasets is another challenging and time-consuming task.

To aid and enhance vehicular smoke monitoring systems, this work proposes a **holistic dual-level framework** for dataset enhancement via smoke generation along with a transformer network for efficient identification. A realistic vehicle smoke generation algorithm using a range of mask patterns and filtering was created, which enables training deep neural models by generating sufficient synthetic data - **increasing training coverage by 5×**.

A **lambda-attention transformer head** was also proposed on the YOLOv5 backbone, which efficiently identifies the smoke region and the smoky vehicle from the image frame simultaneously. The lambda-attention-based detection network outperforms other state-of-the-art techniques, boosting detection accuracy by up to **12% mAP across three public benchmark datasets**.

{% cite kundu2022smoke %}