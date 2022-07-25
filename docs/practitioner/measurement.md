---
sidebar_position: 5
---

# Measurement

:::tip Principle

*What you can't measure, you can't improve.*

:::

## Introduction

The Greenhouse Gas (GHG) protocol is the most commonly-used method for organizations to measure their total carbon emissions. Understanding GHG scopes and how to measure your software against industry standards will help you see to what extent you are applying Green Software principles and how far you have to go to improve.

To complement the GHG protocol, you can also use the Software Carbon Intensity (SCI) specification. While the GHG is a more generic measurement suitable for all types of organizations, the SCI is specifically for measuring a rate of software emissions and designed to incentivize the elimination of those emissions.

The GHG is a protocol to measure total emissions, the SCI is a tool to enable the elimination of software driven emissions.

We will look at each of the measurement methodologies and explain how to calculate in either case.

## The GHG protocol

The [Greenhouse Gas protocol](https://ghgprotocol.org) is the most widely used and internationally recognized greenhouse gas accounting standard. [92%](https://ghgprotocol.org/about-us) of Fortune 500 companies use the GHG protocol when calculating and disclosing their carbon emissions. 

The GHG protocol divides emissions into three scopes:

* **Scope 1**: Direct emissions from **operations** owned or controlled by the reporting organization, such as on-site fuel combustion or fleet vehicles.
* **Scope 2**: Indirect emissions related to **emission generation of purchased energy**, such as heat and electricity.
* **Scope 3**: Other indirect emissions from all the other activities you are engaged in. Including all **emissions from an organization's supply chain;** business travel for employees, and the electricity customers may consume when using your product.

Scope 3, sometimes referred to as value chain emissions, is the most significant source of emissions and the most complex to calculate for many organizations. These encompass the full range of activities needed to create a product or service, from conception to distribution. In the case of a laptop, for example, every raw material used in its production emits carbon when being extracted and processed. Value chain emissions also include emissions from the use of the laptop, meaning the emissions from the energy used to power the laptop after it has been sold to a customer. 

Through this approach, it's possible to sum up all the GHG emissions from every organization and person in the world and reach a global total.

### What scope does my application fall into?

We have already seen how the GHG protocol asks us to bucket software emissions according to scopes 1-3. But how does this work when it comes to software?

Most organizations have many applications running with different architectures and in different environments. As such, the scope your emissions fall into, both in terms of energy generated as well as embodied carbon, depending on your specific scenario.  

<!-- ![alt_text](images/image21.png "image_tooltip") -->

* **For cloud applications running on servers that you own**, the energy usage of your software falls into scope 2, and the embodied carbon of all your servers falls into scope 3.
* **For cloud applications running on a public cloud**, both the energy usage of your application and the embodied carbon fall into scope 3.
* In scenarios where **you are running a hybrid private/public cloud application**, part of its emissions will fall into scope 2 and part will fall into scope 3.
* Similarly, for your customer-facing **front-end application**, energy usage falls into your organization's scope 3, since your customer will purchase the energy to power their device.

For software, regardless of whether it's run on infrastructure you own, rent, or consumers own, there are three parameters to consider for bucketing emissions:

* How much energy it consumes
* How clean or dirty that electricity is
* How much hardware it needs to function

### Is it possible to calculate a total for software carbon emissions?

To calculate a total for software carbon emissions, you need access to detailed data regarding the energy consumption, carbon intensity, and hardware that your software is running on. This is challenging data to gather, even in the case of an organization's own closed-source software products where they can track its usage with telemetry or logs.

Open-source software maintainers don't have the same visibility into how and where their software is used, how much energy is consumed, and on what hardware.

Open-source projects typically have multiple contributors from multiple organizations. As a result, it’s unclear who should be responsible for calculating the emissions as well as who is accountable for eliminating them. When you also consider that open-source software makes up 90% of a typical enterprise stack, it is clear that there is going to be a large amount of carbon emissions that are not accounted for.

### Do totals tell the whole story?

A total is only one metric that describes the state of something. To make the right decisions, you need to look at many different metrics.

Imagine a scenario where you are the leader of an organization and charged with reducing the emissions of your software. You measure the emissions in Q1 and come out with a total of 34 tonnes. After making some investments into projects that eliminate emissions, you find that by Q2 the emissions have increased to 45 tonnes. Does this mean your efforts failed?

Not necessarily. We know that a total by itself doesn't tell the whole story and must look at other metrics to find out if an emissions-reduction project has been successful. For example, if you measured the carbon intensity as well as the carbon total, you might come out with a different perspective. In the same project, if the carbon intensity was 3.3g CO2eq/user in Q1, and 2.9g CO2eq/user in Q2, you might consider the project a success and continue to invest further.

While the total informed you that your organization's carbon emissions had increased overall, the intensity gave a more complete perspective that would help you to make a more informed decision on how to proceed.

## Software Carbon Intensity specification

The [Software Carbon Intensity (SCI) specification](https://grnsft.org/sci) is a methodology developed by the Standards Working Group in the Green Software Foundation, designed to score a software application along a dimension of sustainability and to encourage action towards eliminating emissions.

It's not a replacement for the GHG protocol, but an additional metric that helps software teams understand how their software behaves in terms of carbon emissions so they can make more informed decisions. While the GHG protocol calculates the **total emissions**, the SCI is about calculating the **rate of emissions**. In automotive terms, the SCI is more like a miles per gallon measurement and the GHG protocol is more like the total carbon footprint of a car manufacturer and all their cars they produce every year.

Instead of bucketing the carbon emissions of software into scopes 1-3, it buckets them into **operational emissions** (carbon emissions from the running of software) and **embodied emissions** (carbon emissions from the physical resources required to run the software). It's also an intensity rather than a total, which is more inclusive of open-source software.

An important thing to note is that it is not possible to reduce your SCI score by purchasing offsets in the form of neutralizations, compensations, or by offsetting electricity in the form of renewable energy credits. This means that an organization that makes no efforts towards reducing their emissions but simply spends money on carbon credits cannot achieve a good SCI score.

Offsets are an essential component of any climate strategy; however, offsets are not eliminations and therefore are not included in the SCI metric.

If you make your application more **energy efficient, hardware efficient**, or **carbon aware**, your SCI score will decrease. The only way to reduce your SCI score is to invest time or resources into one of those three principles. As such, adopting the SCI as a metric for your software application along with the GHG protocol, will drive investment into one of the three pillars of green software.

### The SCI equation

The SCI is a method of scoring any software application, not limited to just cloud or not just end-user applications, but all types of applications in between. It provides a common language to describe how software behaves with respect to carbon emissions and how a proposed change might eliminate some of them.

The equation to calculate an SCI score is elegantly simple. This simplicity means it can be applied in a number of different scenarios.

<!-- ![alt_text](images/image22.png "image_tooltip") -->

`SCI = ((E *I) * M) per R`

`E` = Energy consumed by a software system
`I` = Location-based marginal carbon emissions_
`M` = Embodied emissions of a software system._
`R` = Functional unit (e.g. carbon per additional user, API-call, ML job, etc)

This summarizes to:

`SCI = C per R` (Carbon per `R`)

`R` is the core characteristic of the SCI and turns it into an intensity rather than a total. This is what we call a *functional unit*.

## How to calculate your SCI score

Follow these four steps to calculate your SCI score.

1. Decide what to include

What software components to include or exclude in the SCI score means defining the boundaries of your software; where it starts and where it ends.

For every software component you include, you will need to measure its impact. For every major component you exclude, you need to explain why.

The SCI specification doesn't currently make any demands regarding what to include and what not to include. However, you must include all supporting infrastructure and systems that significantly contribute to the software operation.

Your SCI score might decrease because you tightened your software boundary and excluded more software components. Conversely, your SCI score might increase because you are including software components you previously excluded. Therefore, when you report your SCI score, especially any improvements in the score, it's essential to disclose your software boundary.

2. Choose your functional unit

As we have seen, the SCI is a rate rather than a total and measures the intensity of emissions according to the chosen functional unit. The specification currently doesn't prescribe the functional unit and you are free to pick whichever best describes how your application scales. For example, if your application scales by the number of users, then pick users as your functional unit.

Future iterations of the SCI might prescribe specific functional units for different types of applications to aid with comparability. For instance, we might ask streaming applications to choose minutes as their functional unit in order to standardize measurement across all streaming applications.

3. Decide how to measure your emissions

Now you have a list of the software components you want to measure and the functional unit you will use to measure them. The next step is to decide how you will quantify the emissions of each software component.

There are two methods of quantification; measurement and calculation.

* **Measurement** is using counters of some form. For example, measuring the energy consumption of your software component by using a hardware device in the wall socket. Or using counters on hardware that directly measure energy consumption. If you can directly count your units, you should use the measurement approach.
* **Calculation** involves indirect counting, often using a model of some form. For instance, if you cannot directly measure your application's energy consumption but instead have a model that estimates the energy consumption based on the CPU utilization, this is considered calculation rather than measurement.

These resources can help you to decide on measurement and calculation methods:

* Look at [existing case studies](https://todo.com) in the Software Carbon Intensity specification. See how others have chosen to measure similar software components with similar context to yours.
* Look at the [Software Carbon Intensity Data](https://todo.com) project. This project is responsible for providing advice on how to quantify different software components' emissions.
  
1. Quantify

Now you are ready to execute. Using the methodology described in the previous steps, start to quantify the SCI score for each software component in your boundary. Your total SCI score of your software application is the combined score of all the different components.

You may calculate multiple SCI scores for the same application. The SCI score is helpful information to understand how your application behaves with respect to carbon emissions in different scenarios. For example, a streaming application might choose carbon per minute as a metric. It might also calculate the carbon per user per day. The carbon per $ revenue metric might give another helpful dimension.

## Summary

* The GHG protocol is a metric for measuring an organization's total carbon emissions and is used by organizations all over the world.
* The GHG protocol puts carbon emissions into three scopes. Scope 3, also known as value chain emissions, refers to the emissions from organizations that supply others in a chain. In this way, one organization's scope 1 and 2 will sum up into another organization's scope 3.
* Calculating software-driven emissions using the GHG protocol is possible but can be difficult for open-source software.
* The SCI is a metric designed specifically to calculate software emissions and is a rate rather than a total.
* The functional unit of measurement is not prescribed in the SCI and you should choose something that reflects your application.