---
name: "Clim Recal"
description: "Collection of methods to de-bias climate projection data (sub-component of DyME-CHH but also used as independent codebase)"
image:
  url: "https://www.turing.ac.uk/sites/default/files/styles/hero/public/2021-12/marek-piwnicki-2kqxgrgunzq-unsplash.jpg?itok=FXDUcYO4"
  alt: "Image of hills with trees and the glow of a fire behind them"
tags: ["modelling", "quality of life", "land use"]
github: "https://github.com/alan-turing-institute/clim-recal"
link: "https://alan-turing-institute.github.io/clim-recal"
tier: 2
funders: "Turing ASG, SoCaR"
pis:
  - mark_birkin
  - gavin_shaddick
team:
  - ruth_bowyer
  - jennifer_ding
  - sam_greenbury
  - stuart_lynn
  - harry_meacher
  - greg_mingas
  - griffith_rees
  - andy_smith
  - camila_rangel_smith
  - bowen_zhang
---

Regional climate models (RCMs) contain systematic errors, or biases in their output [^1]. Biases arise in RCMs for a number of reasons, such as the assumptions in the general circulation models (GCMs), and in the downscaling process from GCM to RCM.

Researchers, policy-makers and other stakeholders wishing to use publicly available RCMs need to consider a range of "bias correction” methods (sometimes referred to as "bias adjustment" or "recalibration"). Bias correction methods offer a means of adjusting the outputs of RCM in a manner that might better reflect future climate change signals whilst preserving the natural and internal variability of climate [^2].

The aim of **clim-recal** is therefore to:

- To provide non-climate scientists with an extensive guide to the application, disadvantages/advantages and use of BC methods
- To provide researchers with a collated set of resources for how to technically apply the BC methods, with a framework for open additions
- To create accessible information on bias adjustment methods for non quantitative researchers and lay-audience stakeholders

We are working in partnership with the MetOffice to ensure the propriety, quality, and usability of our work. We're focusing on the UKCP18 suite of products, with the first dataset of focus their ground-breaking local-scale (2.2km) [Convection Permitting Model (CPM)](https://www.metoffice.gov.uk/pub/data/weather/uk/ukcp18/science-reports/UKCP-Convection-permitting-model-projections-report.pdf).

[^1]: Senatore et al., 2022, <https://doi.org/10.1016/j.ejrh.2022.101120>
[^2]: Ayar et al., 2021, <https://doi.org/10.1038/s41598-021-82715-1>
