---
title: "Announcing the release of the V2 Technology Platform "
slug: "platform_v2_release"
draft: true
authors:
  - stuart_lynn
publish_date: 2024-05-08
projects:
  - popgetter
tags:
  - release
  - platform
image:
  url: https://www.enterpriseai.news/wp-content/uploads/2022/08/geospatial-data_shutterstock-2078842243_900x-370x290.jpg
  alt: Some dumb GEOAI image

summary: Debiased climate projections for cities, geospatial chatbots, a speedier SPC and so much more! Learn about what's new in the Urban Analytics Technology Platform
---

## Technology platform 2.0 release blog

The Urban Analytics team has made significant strides with the Technology Platform over the past six months, consolidating its resources, enhancing its tools, and planning for future developments. This blog post will summarise the latest progress, categorised under "What's New," "What's Improved," and "What's Next."

---

### What's new?

We have added several new components to the platform as well as a few new applications for end users.

#### Popgetter v0.2 release

In the process of building the various applications and components on the platform, we almost always hit the challenge of needing to source high quality information about what populations live where.

This is not a trivial matter especially if we want our solutions to be portable to new regions and countries.

[Popgetter](/projects/popgetter/) is our answer to this problem. It's a new component that seeks to lower the friction of accessing fine grained census data at a range of geographic scales and countries.

It consists of two parts:

1. A [pipeline](https://github.com/Urban-Analytics-Technology-Platform/popgetter), written using the Open Source Tool Dagster, which allows us to process census data from a number of countries.
2. A [library](https://github.com/Urban-Analytics-Technology-Platform/popgetter-cli) and command line application to easily request exactly the population data you want in a region at a specific geographic scale.

We currently support the UK (Scotland, England, North Ireland and Wales), Belgium, and the US.

![popgetter gif](/blog_content/v2_release/popgetter.gif)

If you're interested in having your country in Popgetter, we would love to work with you – reach out and we can help you through the process!

#### Clim-recal: A climate bias correction dataset for 3 cities

Climate change, and the increase in frequent extreme weather events, is one of the largest challenges that urban areas will face over the next 30 years.
One of the key tools to understanding how climate will change in the future is large physics-based simulations. The Met Office provides a number of these
down to a 2km grid scale, which could help us understand and prepare for climate change at the city scale. Unfortunately, for a number of reasons
(limited spatial resolution, simplified thermodynamics, etc), the projections at a small scale can be systematically off. Bias correction is a suite of
methods that aims to correct these systematic errors by comparing simulations to historic observations of the climate. It uses the discrepancies between
the simulation and the models to find ways to correct them that can be applied to future predictions.

There exists a large number of different ways of doing this kind of bias correction and it's hard to know which to apply when, especially for non-climate experts. These methods also need the historic data and simulations to be aligned both spatially and temporally.

![Clim recal diagram](/blog_content/v2_release/clim_recal_process.png)

That's why we are releasing a set of combined observation and simulation datasets for 3 cities in the UK and inviting authors of bias correction methods to benchmark their methods for those cities.

You can find the data here and the metrics for scoring the data here (TODO add links once Griff has the website up).

Once we have these metrics, we plan to release bias-corrected climate projections for the whole of the UK and make them accessible for a number of use cases.

#### Vulnerable populations explorer

Understanding how climate will affect people in the future requires us to understand, not just the hazards they will face (extreme temperature), but also who is vulnerable to those hazards and who will be exposed to them.

This requires us to combine projections of climate change with fine-grained population, building, and health data and make that information accessible to people working in health and policy while ensuring individual privacy.

We are launching an early prototype of the Vulnerable Populations Explorer; a tool that aims to combine projections on which areas are going to be hit by extreme weather events with our Synthetic Population Catalyst (SPC).

We are working on getting an interactive version of the site live but, while you wait, check out this video to see what the tool does and check out the code on [github](https://github.com/Urban-Analytics-Technology-Platform/VulnerablePopulationsExplorer).

<div>
  <div style="position:relative;padding-top:56.25%;">
	<iframe src="https://www.youtube.com/embed/4qZ4Me9Vz5I" frameborder="0" allowfullscreen
  	style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe>
  </div>
</div>

If you're interested in helping us develop this more, have a use case for it, or want to give us feedback, please drop us a line at (TODO add email).

#### App templates

Communicating the results of our work to a large array of stakeholders often requires us to develop interactive dashboards and web-based tools. As we have built these tools for a number of different projects, we have started noticing common patterns and requirements. Our applications often have similar layouts, interaction models, and processing requirements and so, to accelerate our ability to produce new tools as quickly as possible and to more easily maintain existing tools, we have started developing a set of application templates. These currently consist of:

- A svelte based web application.
- Common layouts for our applications.
- An optional web assembly rust backend.
- An optional python (Pyodide) based backend.
- Some guidance on charts and graphs.
- Common UI styling.

We think these templates are a good starting point for anyone who might be interested in building urban analytics applications and so we are making them available to the winder community to use and improve on.

To get started check out our repo here: https://github.com/Urban-Analytics-Technology-Platform/web-app-template

As part of this work, we have been helping build some features upstream into the [svelte-map-libre](https://svelte-maplibre.vercel.app/) library that powers our maps. It's a great project that we have loved contributing to.

#### New ways to access SPC

- python toolkit
- parquet datasets
- SPC explorer (?not sure if this is new)

---

#### Demoland now UK-wide with new experimental features

Demoland is our prototype tool for exploring the strategic trade-offs that come with land use planning decisions. Built in collaboration with the Geospatial Commission and Newcastle City Council, it allows users to change land use signatures and see the predicted impact of those changes on four quality of life metrics (house prices, access to jobs, access to greenspace, and air quality).

Though initally built for Newcastle, we have been hard at work developing a pipeline that allows us to spin up a Demoland app for any part of the UK. You can check out a version of the app
for the Isle of White running [here](https://urban-analytics-technology-platform.github.io/demoland-web/dev/isle_of_wight/). If you are interested in running Demoland for your local area, reach out to us to let us know. You might also notice another new feature in this demo: hex bin geographies. Now users can choose between the Urban Grammar geometries that were part of the original Demoland and the hex bin geometries you can see here.

Users can now also generate their own scenarios, see the impacts of those scenarios, and share them with others.

##### Experiments in Demoland

Recently, we have been working with the Geospatial Commission to explore how new AI-based approaches might impact land use planning. We have been focusing on using satellite imagery along with foundational models as complementary data for the input to the Demoland model. We have been surprised at how well this has worked in producing accurate predictions for air quality, so much so that we built a small [game](https://are-you-smarter-than-a-foundational-model.vercel.app/) for people to try and beat the model. It's harder than you might think!

[![Foundation model game](/blog_content/v2_release/Foundation_model_game.png)](https://are-you-smarter-than-a-foundational-model.vercel.app/)

We have also been exploring how large language models (LLMs) may provide a complementary interface to understand scenario changes. To do this, we developed a geospatially-aware LLM agent that is capable of answering a user's question about the scenario they produced in Demoland. This agent has access to Python for spatial and non-spatial calculations, a number of contextualising
datasets and the open street map overpass API to lookup features. We were surprised at how well the LLM did at answering in-depth questions. You can see it in action here:

 <video width="320" height="240" controls>
  <source src="/blog_content/v2_release/chat.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>

### What's gotten better?

#### Making spenser faster!

---

### What's next?

#### Activity base model for SPC

#### LLM toolkit

We learnt a lot by integrating a chatbot-like interface into Demoland and we want to make building similar interfaces in future as easy as possible. To do that, we are currently working on a geospatial LLM agent and geospatial LLM toolkit. This toolkit will allow us and others to use a number of LLM techniques such as Retrieval Augmented Generation and Chaining and Function Calling in concert with
a suite of tools that will allow the LLM to perform spatial computations, understand the context of a space, and interact with external knowledge stores to build geographically-aware agents for a
wide variety of different tasks.

We think there is a lot to explore in this area so watch this space.

#### Popgetter v2

With the release of Popgetter v1, we are making it easier for our projects to access census data from multiple countries in a consistent and predictable way. There is, however, so much more we want to do with Popgetter. Over the next few months, we are planning on adding even more data: expanding the number of countries covered, adding data products for the existing countries, and exploring other types of data that we can bring into the platform.

Beyond census data, two high priorities datasets we are planning on working on next is the data that went into producing the Urban Grammer signatures, along with the signatures themselves, and our
synthetic population data from the SPC project.

On the tooling side of Popgetter, we are planning on building a number of different ways for users to interact with the platform. To make it easier to find and create a list of the datasets you
want from Popgetter, we are planning to build out a terminal user interface and web interface. We also think there is great utility in making Popgetter available in the data science and web tooling
contexts. To enable those use cases, we will be developing Python and JavaScript interfaces for the Popgetter library.

####
