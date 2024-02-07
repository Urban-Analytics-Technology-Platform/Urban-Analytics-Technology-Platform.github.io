---
name: "Agent-based Simulation of ePIdemics at Country Scale (ASPICS)"
description: "SEIR model meant to work with SPC that models a pandemic in Great Britain"
image:
  url: "/images/aspics.png"
  alt: "aspics logo"
tags: ["modelling", "epidemics", "SEIR"]
github: "https://github.com/alan-turing-institute/uatk-aspics"
link: "https://pubmed.ncbi.nlm.nih.gov/34717286/"
tier: 2
pi:
  - mark_birkin
team:
  - hadrien_salat
  - fernando_benitez
funders: "Formerly RAMP"
---

The Agent-based Simulation of ePIdemics at Country Scale (ASPICS) models the spread of an epidemic within any area of England. It is an extension to the national level of an earlier model called [DyME](https://www.sciencedirect.com/science/article/pii/S0277953621007930) (Dynamic Microsimulation for epidemics), with improvements to some elements of the modelling and much faster runtimes. It is currently pre-calibrated to run a simulation of the COVID-19 virus and is meant to use SPC's outputs as input.
