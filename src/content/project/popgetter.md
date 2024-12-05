---
name: "Popgetter"
description: "Get all the census you need or want using popgetter"
image:
  url: "/images/popgetter.png"
  alt: "Screenshot showing the Popgetter application"
tags: ["data", "census"]
github: "https://github.com/Urban-Analytics-Technology-Platform/poppusher"
link: "https://urban-analytics-technology-platform.github.io/popgetter-browser/"
tier: 1
team:
  - dustin_carlino
  - stuart_lynn
  - andy_smith
  - penelope_yong
  - sam_greenbury
---

A project that helps us extract population data from different country's censuses. Popgetter is split over several related subcomponents:

- [Poppusher](https://github.com/Urban-Analytics-Technology-Platform/poppusher/): a data pipeline using Dagster for processing and uploading metadata, metrics and geometries in standardized formats (see [documentation](https://poppusher.readthedocs.io/en/latest/) for more details).
- [Popgetter](https://github.com/Urban-Analytics-Technology-Platform/popgetter-cli/): CLI and Python interfaces using a core Rust library for searching metadata and downloading metrics and geometries.
- [Popgetter browser](https://github.com/Urban-Analytics-Technology-Platform/popgetter-browser/): a Svelte web app for searching, visualising and downloading data.
