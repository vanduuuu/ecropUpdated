import React, { useEffect, useState } from "react";
import "./Sustainability.css";
import AOS from "aos";
import "aos/dist/aos.css";
import hhd from '../../assets/img/hhd.webp';
import leafovr from '../../assets/img/leaf-ovr.webp';
import sustimg1 from '../../assets/img/sust-img-1.png'
import sustimg2 from '../../assets/img/sust-img-2.png'
const cardData = [
  {
    id: 1,
    title: "Adaptation",
    image: require("../../assets/img/1_Adaptation.webp"),
    description:
      "Climate change adaptation refers to actions that help reduce vulnerability to the current or expected impacts of climate change like weather extremes and natural disasters, sea-level rise, biodiversity loss, or food and water insecurity. Many adaptation measures need to happen at the local level, so rural communities and cities have a big role to play. Such measures include planting crop varieties that are more resistant to drought and practicing regenerative agriculture, improving water storage and use, managing land to reduce wildfire risks, and building stronger defenses against extreme weather like floods and heat waves. However, adaptation also needs to be driven at the national and international levels. In addition to developing the policies needed to guide adaptation, governments need to look at large-scale measures such as strengthening or relocating infrastructure from coastal areas affected by sea-level rise, building infrastructure able to withstand more extreme weather conditions, enhancing early warning systems and access to disaster information, developing insurance mechanisms specific to climate-related threats, and creating new protections for wildlife and natural ecosystems.",
  },
  {
    id: 2,
    title: "Carbon removal vs. Carbon capture",
    image: require("../../assets/img/2_Carbon_removal.webp"),
    description1:
      "Involves extracting greenhouse gas emissions from the atmosphere.Utilizes natural solutions like reforestation and soil management.Also employs technological methods such as direct air capture and enhanced mineralization.Not a substitute for reducing emissions but can help mitigate climate change.Can assist in temporary overshoots of climate targets.",
    description2:
      "Entails trapping carbon emissions produced by fossil fuel power plants or industrial processes.Captured emissions are stored deep underground to prevent release into the atmosphere.Seen as a complementary strategy to the green energy transition.Particularly relevant for challenging sectors like cement, steel,and chemicals.Requires carefully designed policies and infrastructure for effective implementation.",

    h4_1: "Carbon Removal",
    h4_2: "Carbon Capture",
  },
  {
    id: 3,
    title: "Carbon footprint",
    image: require("../../assets/img/3_Carbon_Footprint.webp"),
    description:
      "A carbon footprint is a measure of the greenhouse gas emissions released into the atmosphere by a particular person, organization, product, or activity. A bigger carbon footprint means more emissions of carbon dioxide and methane, and therefore a bigger contribution to the climate crisis. Measuring a person’s or an organization’s carbon footprint entails looking at both the direct emissions resulting from the burning of fossil fuels for energy production, heating, and land and air travel, and indirect emissions resulting from the production and disposal of all food, manufactured goods, and services they consume. Carbon footprints can be reduced by shifting to low-carbon energy sources like wind and solar, improving energy efficiency, strengthening industry policies and regulations, changing purchasing and travel habits, and reducing meat consumption and food waste.",
  },
  {
    id: 4,
    title: "Carbon markets",
    image: require("../../assets/img/4_Carbon_Markets.webp"),
    description:
      "Carbon markets are trading schemes that create financial incentives for activities that reduce or remove greenhouse gas emissions. In these schemes, emissions are quantified into carbon credits that can be bought and sold. One tradable carbon credit equals one tons of carbon dioxide, or the equivalent amount of a different greenhouse gas reduced, sequestered or avoided. Carbon credits can be bought by countries as part of their NDC strategy, by corporations with sustainability targets, and by private individuals that want to compensate for their carbon footprint. The supply of carbon credits comes from private entities or governments that develop programs to reduce or remove emissions. These programs are certified by a third party and registered under a carbon market standard. For carbon markets to be successful, countries must work together to secure robust carbon accounting, ensure transparency for carbon market transactions, implement safeguards against human rights abuses and other adverse societal impacts, and combat greenwashing and the misrepresentation of carbon-neutral products and services.",
  },
  {
    id: 5,
    title: "Carbon sink",
    image: require("../../assets/img/5_Carbon_Sink.webp"),
    description:
      "A carbon sink is any process, activity, or mechanism that absorbs more carbon dioxide from the atmosphere than it releases. Forests, oceans, and soil are the world’s largest natural carbon sinks. Oceans absorb carbon dioxide from the atmosphere through marine ecosystems and the plant and animal life they harbor. Sequestering carbon in marine ecosystems is generally referred to as blue carbon. Forests and soil are the other main natural carbon sinks of the planet, storing carbon in trees and vegetation, wetlands and peat bogs, and plant litter. Today, human activity, like burning fossil fuels and deforestation, causes more carbon to be released into the atmosphere than the Earth’s natural carbon sinks can absorb, leading to global warming and climate change. Human activities and climate change are also causing the degradation of these natural carbon sinks, threatening the release of the carbon they store back into the atmosphere. Therefore, protecting carbon sinks and expanding their capability to absorb carbon and store it long-term is a key strategy for tackling climate change and stabilizing the climate.",
  },
  {
    id: 6,
    title: "Circular economy",
    image: require("../../assets/img/6_Circular_Economy.webp"),
    description:
      "Circular economy refers to models of production and consumption that minimize waste and reduce pollution, promote sustainable uses of natural resources, and help regenerate nature. Circular economy approaches are all around us. They can be employed in a number of different sectors from textiles to buildings and construction, and at various stages of a product’s lifecycle, including design, manufacturing, distribution, and disposal. Besides helping tackle the problem of pollution, circular economy approaches can play a critical role in solving other complex challenges such as climate change and biodiversity loss. They can help countries accelerate their transition to more resilient and lower carbon economies while also creating new green jobs. Currently, only 7.2 percent of used materials are cycled back into our economies after use. This has a significant burden on the environment and contributes to the climate, biodiversity, and pollution crises. As a result, we currently need about 1.7 Earths to deliver on all the worlds resource demands.",
  },
  {
    id: 7,
    title: "Climate crisis",
    image: require("../../assets/img/6_Circular_Economy.webp"),
    description:
      "The climate crisis refers to the serious problems that are being caused, or are likely to be caused, by changes in the planet’s climate, including weather extremes and natural disasters, ocean acidification and sea-level rise, loss of biodiversity, food and water insecurity, health risks, economic disruption, displacement, and even violent conflict. Since the 1800s, human activities have caused the Earth’s average temperature to increase by about 1.2° C – with more than two-thirds of this warming occurring since 1975. This is already causing significant damage to human societies and natural ecosystems in many parts of the world. More than 3 billion people live in places that are very vulnerable to the climate crisis, with lower income countries being disproportionately affected. Scientists expect that an increase beyond 1.5°C would begin to lead to a series of dangerous tipping points that would make many changes irreversible and pose a very serious threat to human civilization. This is why governments must act now to drastically reduce greenhouse gas emissions and chart a course for reaching net zero in the coming decades, invest in adaptation to the unavoidable impacts of climate change, and protect and restore natural ecosystems and biomes upon which the planet depends.",
  },
  {
    id: 8,
    title: "Climate finance",
    image: require("../../assets/img/7_Climate_Crisis.webp"),
    description:
      "Climate finance refers to financial resources and instruments that are used to support action on climate change. Climate finance is critical to addressing climate change because of the large-scale investments that are needed to transition to a low-carbon global economy and to help societies build resilience and adapt to the impacts of climate change.Climate finance can come from different sources, public or private, national or international, bilateral or multilateral. It can employ different instruments such as grants and donations, green bonds, debt swaps, guarantees, and concessional loans. And it can be used for different activities, including mitigation, adaptation, and resilience-building.Some multilateral funds that countries can access include the Green Climate Fund (GCF), the Global Environment Facility (GEF), and the Adaptation Fund (AF). High-income countries with a significant historical contribution to climate change have committed to raising US$100 billion every year to fund climate action in low-income countries. However, this target has not yet been reached and more funding is required for both mitigation and adaptation interventions.",
  },
  {
    id: 9,
    title: "Climate justice",
    image: require("../../assets/img/9_Climate_justice.webp"),
    description:
      "Climate justice means putting equity and human rights at the core of decision-making and action on climate change.One aspect of climate justice relates to the unequal historical responsibility that countries bear in relation to the climate crisis. The concept suggests that the countries, industries, and businesses that have become wealthy from activities that emitted the most greenhouse gas emissions have a responsibility to help mitigate the impacts of climate change on those affected, particularly the most vulnerable countries and communities, who often are the ones that have contributed the least to the crisis.Even within the same country, because of structural inequalities based on race, ethnicity, gender, and socioeconomic status, the responsibilities in addressing climate change need to be divided fairly, with the biggest responsibility resting on those who have contributed to, and benefitted from, causing the crisis the most.Another aspect of climate justice is the intergenerational one. Children and young people today have not contributed to the climate crisis in a significant way but will bear the full force of climate change impacts as they advance through life. Because their human rights are threatened by the decisions of previous generations, they must have a central role in all climate decision-making and action.",
  },
  {
    id: 10,
    title: "Climate overshoot",
    image: require("../../assets/img/10_Climate_overshoot.webp"),
    description:
      "Under the Paris Agreement, countries are expected to take the necessary measures to avoid dangerous climate change by limiting global warming to well below 2°C and pursuing efforts to limit it to 1.5°C. But even best-case scenarios now indicate a significant chance of overshooting these goals, even if temporarily. Climate overshoot refers to the period during which warming will have increased past 1.5° C, before falling back down. This period will probably occur around the middle of this century but troubling signs are emerging that it may occur even earlier.The longer the climate overshoot lasts, the more dangerous the world will become. A prolonged period of higher global temperatures will have devastating and irreversible impacts on natural ecosystems, biodiversity, and human communities, particularly in dry areas, coastal zones, and other vulnerable locations. Making deep emission cuts during this decade is of extreme importance to limiting the duration and impacts of the climate overshoot.",
  },
  {
    id: 11,
    title: "Climate security",
    image: require("../../assets/img/11_Climate_security.webp"),
    description:
      "Climate change can exacerbate food, water, and livelihood insecurity, with cascading effects such as displacement and migration and increased competition over natural resources, all of which can lead to increased tensions and instability in a country or a region.Furthermore, the impacts of climate change can aggravate or prolong existing violent conflicts and make it more difficult to deliver climate action and to reach and sustain peace.Climate security refers to evaluating, managing, and reducing the risks to peace and stability brought on by the climate crisis. This means ensuring that climate mitigation and adaptation goes beyond doing no harm and contributes positively to peace and stability. It also means that conflict prevention and peacebuilding interventions take climate impacts into account. The technical solutions to climate action and adaptation can serve as opportunities to build peace and mend the social fabric, especially in countries affected by conflict and fragility.Climate action can help alleviate the underlying drivers of conflict and fragility. For example, access to renewable energy can be a lifeline which supports clean water, light, warmth, and sustenance, as well as basic and emergency services. It also powers local economic development, while setting countries on a sustainable development pathway to recovery.",
  },
  {
    id: 12,
    title: "COP",
    image: require("../../assets/img/12_COP.webp"),
    description:
      "The annual United Nations conference dedicated to climate change, called “the Conference of the Parties” or “COP,” has been organized under the UN Framework Convention on Climate Change (UNFCCC) since 1995. At the 21st COP, or COP21, which took place in 2015, the Paris Agreement was signed.The conference now brings together all nations who are parties to the Paris Agreement to discuss their next steps to combat climate change and further establish legally binding agreements to support climate action.",
  },
  {
    id: 13,
    title: "Decarbonization",
    image: require("../../assets/img/13_Decarbonization.webp"),
    description:
      "Decarbonization means reducing the amount of greenhouse gas emissions that a society produces, as well as increasing the amount that is being absorbed. It entails changing many, if not all, aspects of the economy, from how energy is generated, to how goods and services are produced and delivered, to how buildings are built and how lands are managed.To meet the goals of the Paris Agreement and keep the 1.5° target alive, governments and businesses must rapidly decarbonize by 2030. Meaningful decarbonization requires substantial investments in low-carbon infrastructure and transportation, renewable energy sources, circular economy and resource efficiency, and land and soil restoration. It also requires a rethinking of current economic models that are focused on growth at all costs.",
  },
  {
    id: 14,
    title: "Feedback loop",
    image: require("../../assets/img/14_Feedback_loop.webp"),
    description:
      "Climate feedback loops happen when one change in the climate triggers further changes, in a chain reaction that reinforces itself as time goes on. Ultimately, feedback loops can trigger tipping points, at which point the changes to our planet’s climate systems become severe and irreversible.Currently, scientists are aware of some serious feedback loops that are driving global warming. For example, as sea ice in the Arctic melts, more heat is being absorbed by the darker ocean waters, thus speeding up the warming process and leading to more ice melting. Similarly, as wildfires burn down forests, they release greenhouse gases leading to more warming and more wildfires. Other feedback loops include the thawing of the permafrost, forest dieback, and insect outbreaks.",
  },
  {
    id: 15,
    title: "Global warming vs. Climate change",
    image: require("../../assets/img/12_COP.webp"),
    description:
      "Global warming is an increase in the Earth’s average surface temperature that occurs when the concentration of greenhouse gases in the atmosphere increases. These gases absorb more solar radiation and trap more heat, thus causing the planet to get hotter. Burning fossil fuels, cutting down forests, and farming livestock are some human activities that release greenhouse gases and contribute to global warming.Climate change refers to the long-term changes in the Earth’s climate that are warming the atmosphere, ocean and land. Climate change is affecting the balance of ecosystems that support life and biodiversity, and impacting health. It also causes more extreme weather events, such as more intense and/or frequent hurricanes, floods, heat waves, and droughts, and leads to sea level rise and coastal erosion as a result of ocean warming, melting of glaciers, ad loss of ice sheets.",
  },
  {
    id: 16,
    title: "Green jobs",
    image: require("../../assets/img/16_Green_Jobs.webp"),
    description:
      "Green jobs are decent jobs that contribute to protecting and restoring the environment and addressing climate change. Green jobs can be found in both the production of green products and services, such as renewable energy, and in environmentally friendly processes, such as recycling. Green jobs help improve energy and raw material efficiency, limit greenhouse gas emissions, minimize waste and pollution, protect and restore ecosystems, and support adaptation to the impacts of climate change.As the market for green jobs is expanding, countries must ensure that the workforce is equipped with the specific skills and education required to carry them out. This can be achieved by investing in training young people for future green jobs and by retraining workers from carbon-intensive industries. The latter is a key part of ensuring countries are pursuing a just transition and leave no one behind.",
  },
  {
    id: 17,
    title: "Greenhouse gas emissions",
    image: require("../../assets/img/17_Greenhouse_gas_emissions.webp"),
    description:
      "Greenhouse gases are gases that trap heat from the sun in our planet’s atmosphere, keeping it warm. Since the industrial era began, human activities have led to the release of dangerous levels of greenhouse gases, causing global warming and climate change.The main greenhouse gases released by human activities are carbon dioxide, methane, nitrous oxide, and fluorinated gases used for cooling and refrigeration. Carbon dioxide is the primary greenhouse gas resulting from human activities, particularly from burning fossil fuels, deforestation, and changing the way land is used. Our reliance on fossil fuels has led to a 50 percent increase in the concentrations of carbon dioxide in the atmosphere over the last 200 years. Methane is another important greenhouse gas that is responsible for 25 percent of global warming. Methane is released during the extraction and transport of coal, gas, and oil, and by waste landfills and agricultural practices.To prevent catastrophic climate change, the world’s governments must work together to significantly reduce greenhouse gas emissions now and in the coming decades and keep global warming below the dangerous threshold of 1.5°C.",
  },
  {
    id: 18,
    title: "Greenwashing",
    image: require("../../assets/img/18_Greenwashing.webp"),
    description:
      "With public pressure to address the climate crisis rising, private sector companies are joining the transition to a low-carbon global economy. However, their efforts can sometimes turn into more of a marketing exercise than real, meaningful action.Greenwashing refers to situations where a company makes misleading claims about their positive environmental impact or the sustainability of their products and services to convince consumers that they are acting on climate change. In some cases, greenwashing can be unintentional, because of lack of knowledge on environmental issues. However, it can also be carried out intentionally as a marketing and public relations exercise, exploiting public support towards environmental policies for profit.Greenwashing can erode public confidence in sustainability and allow negative environmental impacts to continue unabated.",
  },
  {
    id: 19,
    title: "Indigenous knowledge",
    image: require("../../assets/img/19_Indigenous_knowledge.webp"),
    description:
      "Indigenous Peoples’ ways of life are inherently low-carbon and emphasize balance between humans and the natural world. Their traditional practices have low impact on the environment and are responsive to it, fostering self-sustaining ecosystems.Indigenous Peoples were among the first to notice climate change and their knowledge and practices help navigate and adapt to its impacts. Indigenous knowledge, which is intergenerational and community based, is a great source of meaningful climate solutions that can advance mitigation, enhance adaptation, and build resilience. It can also complement scientific data with precise landscape information that is critical to evaluating climate change scenarios.Indigenous Peoples protect an estimated 80 percent of the world’s remaining biodiversity yet continue to be largely excluded from almost all global decision-making processes on climate change. Their collective knowledge, valuable insights, and rights to their ancestral lands, territories and resources, and their way of life must be recognized and included across climate policies and actions.",
  },
  {
    id: 19,
    title: "IPCC",
    image: require("../../assets/img/20_IPCC.webp"),
    description:
      "The Intergovernmental Panel on Climate Change (IPCC) is an independent body founded under the auspices of the World Meteorological Organization (WMO) and the United Nations Environment Programme (UNEP).The IPCC’s main role is to assess the scientific literature and findings on climate change and provide vital scientific information and evidenced-based recommendations to policymakers and the public. It is widely recognized as the most credible source of information related to the science of climate change and its complex analysis of impacts, risks, and adaptation and mitigation options.",
  },
  {
    id: 20,
    title: "Just transition",
    image: require("../../assets/img/21_Just_transition.jpg"),
    description:
      "In the context of climate change, transitioning to a low-carbon or net-zero economy requires massive transformation of our economic systems. Such transformation runs the risk of further increasing social inequality, exclusion, civil unrest, and less competitive businesses, sectors, and markets.As countries work to meet their climate goals, it’s vital that they ensure the whole-of-society – all communities, all workers, all social groups – are brought along and part of the structural change that takes place.Ensuring a just transition means that countries choose to green their economy through transition pathways and approaches that reinforce equality and inclusivity. This means looking at the impacts of the transition on different groups of workers across the economy and providing opportunities for training and reskilling that support decent work and aim to leave no one behind.",
  },
  {
    id: 21,
    title: "Loss and damage",
    image: require("../../assets/img/22_Loss_and_damage.jpg"),
    description:
      'There is no agreed definition of "Loss and damage" in the international climate negotiations. However, the term can refer to the unavoidable impacts of climate change that occur despite, or in the absence of, mitigation and adaptation. Importantly, it highlights that there are limits to what adaptation can accomplish; when tipping point thresholds are crossed, climate change impacts can become unavoidable.Loss and damage can refer to both economic and non-economic losses. Economic loss and damage can include things like the costs of rebuilding infrastructure that has repeatedly been damaged due to cyclones or floods, or the loss of coastline land (and homes and businesses) due to sea-level rise and coastal erosion.Non-economic loss and damage include negative impacts that can’t be easily assigned a monetary value. This can include things such as trauma from experiencing a climate-related natural disaster, loss of life, the displacement of communities,loss of history and culture orloss of biodiversity.',
  },
  {
    id: 22,
    title: "Long-term strategies",
    image: require("../../assets/img/23_Long_term_strategies.jpg"),
    description:
      "Under the Paris Agreement, countries are invited to communicate long-term strategies (LTS) for emissions reductions that envision a whole-of-society transformation over several decades, usually up to 2050. LTS documents align to the long-term objectives of limiting global warming and achieving net-zero by 2050. Long-term strategies provide a long-term vision that gives coherence and direction to shorter-term national climate pledges like the NDCs.They guide countries to pursue low-carbon development and prevent fossil fuel-intensive investments, demonstrating the socio-economic benefits of the green transition. They boost innovation and can help drive investment in low-carbon solutions and sustainable infrastructure. And they help facilitate and promote just and equitable transitions for the people who are most affected, making sure that climate solutions are fair and inclusive. When countries officially communicate their LTS to the UNFCCC it iscalled a Long-Term Low Emission Development Strategy (LT-LEDS).",
  },
  {
    id: 23,
    title: "Mitigation",
    image: require("../../assets/img/24_Mitigation.jpg"),
    description:
      "Climate change mitigation refers to any action taken by governments, businesses, or people to reduce or prevent greenhouse gas emissions, or to enhance carbon sinks that remove these gases from the atmosphere.Reducing or preventing greenhouse gas emissions can be achieved by transitioning to renewable energy sources like wind and solar, using energy more efficiently, adopting low carbon or carbon-free transportation modalities, promoting sustainable agriculture and land use, and changing production and consumption models and diet behaviors. Enhancing carbon sinks can be achieved by restoring forests, wetlands, and marshlands, maintaining soil health, and protecting terrestrial and marine ecosystems. In order for mitigation actions to be successful, it is crucial that countries develop supportive environments through legislation, policies, and investments. To limit global warming to 1.5° C, which is the critical goal of the Paris Agreement, the world must implement climate change mitigation actions to reduce greenhouse gas emissions by 45 percent before 2030 and reach net-zero greenhouse gas emissions by mid-century.",
  },
  {
    id: 24,
    title: "Nationally Determined Contributions",
    image: require("../../assets/img/25_Nationally_Determined_Contributions.jpg"),
    description:
      "Nationally Determined Contributions (NDCs) are climate pledges and action plans that each country is required to develop in line with the Paris Agreement goal of limiting global warming to 1.5° C. NDCs represent short to medium-term plans that are updated every five years with higher ambition on climate.NDCs outline mitigation and adaptation priorities a country will pursue to reduce greenhouse gas emissions, build resilience, and adapt to climate change, as well as financing strategies and monitoring and verification approaches. In 2023, the first in a series of global “stock takes” will conclude that assesses progress on theimplementation of NDCs and Paris Agreement goals.",
  },
  {
    id: 25,
    title: "National Adaptation Plans",
    image: require("../../assets/img/26_National_Adaptation_Plans.jpg"),
    description:
      "National Adaptation Plans (NAPs) help countries plan and implement actions to reduce vulnerability to the impacts of climate change and strengthen adaptive capacity and resilience. NAPs link to Nationally Determined Contributions (NDCs) and other national and sectoral policies and programmes. For NAPs to be successful they need to be participatory, inclusive, gender-responsive, and transparent. This means that at the design stage, NAPs need to evaluate the specific needs and vulnerabilities of different groups in the country, paying particular attention to those most vulnerable to climate change impacts and involving them in developing and implementing strategies and programmes.",
  },
  {
    id: 26,
    title: "Nature-based solutions",
    image: require("../../assets/img/27_Nature_based_solutions.jpg"),
    description:
      "Nature-based solutions are actions to protect, conserve, restore, and sustainably use and manage ecosystems to support climate change adaptation and mitigation efforts, preserve biodiversity, and enable sustainable livelihoods. They are actions that prioritize the importance of ecosystems and biodiversity and are designed and implemented with the full engagement and consent of local communities and Indigenous Peoples, who hold generational knowledge on protecting nature. Nature-based solutions are used in many ways, across terrestrial, freshwater, coastal, and marine ecosystems. Restoring wetlands protects communities from floods, while conserving mangrove forests supports food sources and minimizes the impact of storms. Forests absorb carbon dioxide, allow biodiversity to thrive, increase water security, and combat landslides, while urban parks and gardens help cool down cities and limit the impact of heatwaves. Regenerative agriculture practices increase the amount of carbon captured by the soil and restore its health and productivity. Nature-based solutions are seen as a win-win for people and nature, addressing multiple problems at once. They can create jobs, provide new and more resilient livelihood opportunities, and increase income while also protecting the planet and addressing climate change.",
  },
  {
    id: 27,
    title: "Net zero",
    image: require("../../assets/img/28_Net_zero.jpg"),
    description:
      "Reaching net zero requires us to ensure that carbon dioxide emissions from human activity are balanced by human efforts to remove carbon dioxide emissions (for example, by creating carbon sinks to absorb carbon dioxide) - thereby stopping further increases in the concentration of greenhouse gases in the atmosphere. Transitioning to net zero requires a complete transformation of our energy, transportation, and production and consumption systems. This is necessary to avert the worst consequences of climate change. To keep global warming below 1.5° C, the world’s governments need to ensure that all greenhouse gas emissions peak by 2025, and reach net zero in the second half of this century. The IPCC has recommended to reduce CO2 emissions globally by 45% before 2030 (compared to 2010 levels) and reach net zero by mid-century.",
  },
  {
    id: 28,
    title: "Paris Agreement",
    image: require("../../assets/img/29_Paris_Agreement.jpg"),
    description:
      "The Paris Agreement is a legally binding international treaty aiming to limit global warming to well below 2° C, preferably to 1.5° C, compared to pre-industrial levels. It was adopted by 196 Parties in 2015 at COP21 in Paris and entered into force in 2016. The Paris Agreement is a landmark achievement in international cooperation on climate change because it is a binding agreement for all Parties to scale up efforts to combat climate change and adapt to its effects. It also provides the instruments for developed nations to assist developing nations in their climate mitigation and adaptation efforts, while creating a framework for transparent monitoring and reporting of results.",
  },
  {
    id: 29,
    title: "Reforestation vs. Afforestation",
    image: require("../../assets/img/30_REDD+.jpg"),
    description:
      "Forests provide immense benefits by removing carbon dioxide and pollutants from the atmosphere, preventing soil erosion, filtering water, and housing half of the world’s land species of animals, plants and insects. Reforestation and afforestation are two of the most effective nature-based solutions in fighting climate change and limiting its impacts. Reforestation is the process of replanting trees in areas that had recent tree cover but where forests were lost, due to wildfires, drought, disease, or human activity such as agricultural clearing. Afforestation is the process of planting trees in areas that have not been forested in recent history. Afforestation helps restore abandoned and degraded agricultural lands, prevent desertification, create carbon sinks, and generate new economic opportunities for local communities.",
  },
  {
    id: 30,
    title: "REDD+",
    image: require("../../assets/img/30_REDD+.jpg"),
    description:
      'Forest conservation and restoration can provide more than one quarter of the greenhouse gas emissions reductions needed to avoid the worst impacts of climate change. REDD+ is a framework agreed by countries in the international climate negotiations that aims to curb climate change by reducing deforestation and forest degradation, and sustainably managing and conserving forests in developing countries. REDD stands for "Reducing Emissions from Deforestation and forest Degradation”. The “+” signifies the role of conservation, sustainable management of forests and enhancement of forest carbon stocks.',
  },
  {
    id: 31,
    title: "Regenerative agriculture",
    image: require("../../assets/img/31_Regenerative_agriculture.webp"),
    description:
      "Regenerative agriculture is a way of farming that nurtures and restores soil health, and therefore reduces water use, prevents land degradation, and promotes biodiversity. By minimizing land ploughing, practicing rotating crops, and using animal manure and compost, regenerative agriculture ensures that the soil stores more carbon, conserves more moisture, and is healthier due to thriving fungal communities. Intensive agriculture is responsible for a third of global greenhouse gas emissions, uses 70 percent of the fresh water we consume, and leads to soil degradation through its use of heavy machinery, chemical fertilizers, and pesticides. It is also the biggest contributor to biodiversity loss. By contrast, regenerative agriculture helps lower greenhouse gas emissions, conserves water, and restores land. Moreover, healthy soil produces more food and better nutrition and has other positive impacts on ecosystems and biodiversity.",
  },
  {
    id: 32,
    title: "Renewable energy",
    image: require("../../assets/img/32_Renewable_energy.jpg"),
    description:
      "Renewable energy is energy derived from natural sources that are constantly being replenished, such as wind, sunlight, the flow of moving water, and geothermal heat. In contrast to energy sourced from fossil fuels like coal, oil, and gas, which accounts for 75 percent of the harmful greenhouse gas emissions that are causing climate change, energy from renewable sources is cheap, clean, sustainable, and generates more jobs. Transitioning from fossil fuels to renewable energy in all sectors – power, heating and cooling, transportation, and industry – is key to addressing the climate crisis. To stay under 1.5°C of global warming, the world needs to immediately phase out fossil fuel use and undergo a profound transformation of the energy system through rapid electrification and sourcing energy from renewable sources. In 2022, renewable sources provided 29 percent of global electricity. With the right investments, electricity from renewable sources could provide 65 percent of the world’s total electricity supply by 2030",
  },
  {
    id: 33,
    title: "Resilience",
    image: require("../../assets/img/33_Resilience.jpg"),
    description:
      "Climate resilience is the capacity of a community or environment to anticipate and manage climate impacts, minimize their damage, and recover and transform as needed after the initial shock. To best safeguard societal wellbeing, economic activity, and the environment, people, communities, and governments need to be equipped to deal with the unavoidable impacts of climate change. This can be done by training people to obtain new skills and diversify the sources of their household income, building more robust disaster response and recovery capacities, enhancing climate information and early warning systems, and working on long-term planning, among others. Ultimately, a truly climate-resilient society is a low-carbon one, because drastically reducing greenhouse gas emissions is the best way to limit how severe climate impacts will be in the future. It is also a society based in equity and climate justice that prioritizes support for people and communities most exposed to climate impacts or least able to cope with them.",
  },
  {
    id: 34,
    title: "Rewilding",
    image: require("../../assets/img/34_Rewilding.jpg"),
    description:
      "Rewilding is the mass restoration of ecosystems that have been damaged by human activity. More than conservation, which focuses on saving specific species through dedicated human intervention, rewilding refers to setting aside large areas for the natural world to regenerate in on its own terms. This sometimes requires the reintroduction of key species that have been driven extinct in a particular region, such as beavers, wolves, or large herbivores, who help shape entire ecosystems. Rewilding can help combat climate change by removing more carbon dioxide from the atmosphere through healthy natural processes such as natural woodland regeneration. It also helps prevent species extinction by creating nature-rich habitats that allow wildlife to adapt to climate change and migrate as warming intensifies.",
  },
  {
    id: 35,
    title: "Tipping point",
    image: require("../../assets/img/35_Tipping_point.jpg"),
    description:
      "A tipping point is a threshold after which certain changes caused by global warming and climate change become irreversible, even if future interventions are successful in driving down average global temperatures. These changes may lead to abrupt and dangerous impacts with very serious implications for the future of humanity and our planet. As the world gets hotter, several tipping points are becoming very likely. One of them is the collapse of the Greenland and West Antarctic ice sheets, which would lead to significant sea level rise and threaten coastal communities and ecosystems. Another is the thawing of the permafrost in the tundra regions, which will release huge quantities of trapped greenhouse gases, further accelerating global warming and climate change. Mass coral bleaching events and the destruction of rainforests are two other major tipping points with immense implications for both biodiversity and human societies.",
  },
  {
    id: 36,
    title: "Transparency",
    image: require("../../assets/img/36_Transparency.jpg"),
    description:
      "Under the Paris Agreement, countries must regularly report on the implementation of their Nationally Determined Contributions. It is crucial that this reporting is done with transparency to allow the global community to accurately assess collective progress and build trust that everyone is playing their part. Transparent reporting allows governments and international bodies to have access to reliable data and make evidence-based decisions. It also enhances our scientific understanding of climate change and the actions and policies needed to mitigate it and adapt to its impacts. Ultimately, transparency is key to unlocking the full potential of the Paris Agreement, by promoting trust, collaboration and knowledge transfer and encouraging further ambition on climate targets.",
  },
  {
    id: 37,
    title: "UNFCCC",
    image: require("../../assets/img/37_UNFCCC.jpg"),
    description:
      "The United Nations Framework Convention on Climate Change (UNFCCC) is an international environmental treaty adopted in 1992 to combat dangerous human interference with the climate system. It entered into force in 1994 and enjoys near universal membership, having been signed by 198 parties. It is the parent treaty of both the Paris Agreement and the Kyoto Protocol. The UNFCCC secretariat is the United Nations entity tasked with supporting the global response to the threat of climate change. The secretariat facilitates intergovernmental climate change negotiations by organizing between two and four negotiating sessions each year, the largest and most important of which is the Conference of the Parties (COP). It also provides technical expertise and assists in the analysis and review of climate change information and maintains the registry of Nationally Determined Contributions (NDC)",
  },
  {
    id: 38,
    title: "Weather vs. Climate",
    image: require("../../assets/img/38_Weather_vs_Climate.jpg"),
    description:
      "Weather refers to atmospheric conditions at a particular time in a particular location, including temperature, humidity, precipitation, cloudiness, wind, and visibility. Weather conditions do not happen in isolation, they have a ripple effect. The weather in one region will eventually affect the weather hundreds or thousands of kilometers away. Climate is the average of weather patterns in a specific area over a longer period of time, usually 30 or more years, that represents the overall state of the climate system. Human activity in the industrial age, and particularly during the last century, is significantly altering our planet’s climate through the release of harmful greenhouse gases.",
  },
  // Add more objects as needed
];

function Sustainability() {
  const [activeContent, setActiveContent] = useState(null);

  const handleMoreClick = (index) => {
    setActiveContent(index);
  };

  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <>
      <div className="feature-one feature-one--two padding-box">
        <div className="container">
          <div
            className="section-common-title fadeInDown wow text-center"
            data-wow-delay="500ms"
            data-aos="fade-down"
          >
            <h2 className="feature-one--two__title food-chose-title">
              What is Sustainability?
            </h2>
            <p>
              Sustainability refers to the ability to meet the needs of the
              present without compromising the ability of future generations to
              meet their own needs. It encompasses environmental, social, and
              economic aspects, often referred to as the "three pillars" of
              sustainability.
            </p>
          </div>
          <div>
            <ul className="sustain-list d-flex flex-wrap">
              <div className="row mx-auto">
                <div className="col-lg-4 col-md-6 mb-3" data-aos="fade-up">
                  <li>
                    <span>
                      <u>Environmental Sustainability:</u>
                    </span>
                    <br /> This aspect prioritizes the preservation of natural
                    resources, reduction of pollution and waste, and protection
                    of ecosystems. It involves adopting practices that minimize
                    environmental harm, such as conserving energy and water,
                    using renewable resources, and embracing eco-friendly
                    technologies.
                  </li>
                </div>
                <div className="col-lg-4 col-md-6 mb-3" data-aos="fade-up">
                  <li>
                    <span>
                      <u>Social Sustainability:</u>
                    </span>
                    <br /> Social sustainability focuses on promoting equity,
                    justice, and well-being within communities. It aims to
                    ensure fair treatment and opportunities for everyone,
                    irrespective of factors like race, gender, or socioeconomic
                    status. Socially sustainable practices include advocating
                    for diversity, investing in education and healthcare, and
                    empowering communities through engagement.
                  </li>
                </div>
                <div className="col-lg-4 col-md-6 mb-3" data-aos="fade-up">
                  <li>
                    <span>
                      <u>Economic Sustainability:</u>
                    </span>
                    <br /> Economic sustainability centers on maintaining
                    long-term economic growth while ensuring efficient and
                    equitable resource use. It involves fostering stable,
                    prosperous economies, encouraging responsible consumption
                    and production, and addressing income inequality and poverty
                    through inclusive policies and practices.
                  </li>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
      {/* -------------------------------------- */}
      <section className="sus-overview-out">
        <div className="container">
          <div className="row">
            <div className="col-md-8 mb-md-5 col-lg-6 mx-auto">
              <div className="outer-sust">
                <img src={hhd} className="w-100" alt="" loading="lazy"/>
                <div className="leaf-shape1">
                  <img src={leafovr} alt="" loading="lazy"/>
                </div>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1 col-md-12">
              <h1>Sustainability Overview</h1>
              <p>
                Sustainability remains a key watchword of our times. For{" "}
                <b>Precision Grow</b>, sustainability is of abiding concern as
                the company understands that 'sustainability' will determine the
                level of its economic success and the nation's well-being.
              </p>
              <p>
                <b>Precision Grow</b> has been conducting its business in a
                socially and environmentally responsible manner. Sustainable
                practices are integral to Precision Grow’s business strategies,
                manufacturing value chain, and community development
                initiatives.
              </p>
              <div className="animate-border"></div>
              <p style={{color:'green'}}>
                <b>
                  Over the years, its investments in drivers of top-line growth
                  and earnings have continued apace, together with investments
                  in building environmental and social capital.
                </b>
              </p>
            </div>
          </div>
        </div>
      </section>
    <section className="sust-goal">
    <div className="container-fixed">
<div className="row">
  <h1>Agriculture And <br /> The Global Goals</h1>
<div className="col-lg-5 offset-lg-6 col-12 col-md-12">
 <div className="rotate-circle">
<img src={sustimg2} className="w-100" alt="" loading="lazy"/>
        </div>
        <div className="inn-small-circle">
  <img src={sustimg1} alt="" loading="lazy"/>
</div>
    </div>
</div>
</div>
        </section>
        <section className="sust-info">
            <div class="container">
                <div class="col-md-10 mx-auto">
                <p>It has successfully mainstreamed sustainability by embedding it in its corporate DNA and creating awareness about it across the organization. The positive impacts of its sustainability initiatives, especially its efforts to create pioneering benchmarks, are well acknowledged in the industry. Furthermore, Precision Grow is committed to Environmental, Social, and Governance (ESG) compliance, ensuring that its operations meet the highest standards of ethical conduct, environmental stewardship, and social responsibility.</p>
            <p>By aligning its operations with the United Nations Sustainable Development Goals (SDGs), Precision Grow actively contributes to global efforts to combat climate change, reduce inequality, and promote responsible consumption and production. The company’s robust ESG framework encompasses comprehensive measures to reduce carbon emissions, enhance energy efficiency, and minimize waste across its production processes.</p>
            <p>Additionally, Precision Grow invests in innovative technologies and sustainable agricultural practices that enhance productivity while conserving natural resources. These efforts not only improve operational efficiency but also foster long-term environmental sustainability. The company’s dedication to sustainability is reflected in its transparent reporting practices, regularly publishing detailed sustainability reports that outline its progress and commitments.</p>
                </div>
            </div>
          
        </section>
        <section className="third-section-sust">
            <div className="container">
                <div className="col-lg-4 dd col-md-12">
                <p>Precision Grow’s resilience in incorporating sustainability into its core operations ensures that it remains at the forefront of industry standards, setting a model for others to follow. This commitment positions Precision Grow not just as a business leader but as a responsible corporate citizen dedicated to fostering a sustainable future for all. Moreover, Precision Grow actively engages with stakeholders, including employees, customers, suppliers, and the communities in which it operates, to ensure that its sustainability efforts are inclusive and impactful.</p>
                <p>Through educational programs, partnerships with environmental organizations, and community outreach initiatives, the company promotes sustainability awareness and action at multiple levels.</p>
                </div>
            </div>
        </section>
        <div className="cont-para">
        <div className="container">
            <p>Precision Grow’s supply chain management also reflects its commitment to sustainability. The company collaborates with suppliers to ensure that sustainable practices are upheld throughout the supply chain, from sourcing raw materials to delivering finished products. This approach not only strengthens the company’s sustainability credentials but also supports global efforts to promote ethical and sustainable business practices. In its pursuit of continuous improvement, Precision Grow regularly evaluates and updates its sustainability strategies to address emerging challenges and opportunities. By fostering a culture of innovation and continuous learning, the company ensures that it remains adaptable and resilient in the face of changing environmental and social landscapes.</p>
            <p>Ultimately, Precision Grow’s holistic approach to sustainability – encompassing environmental protection, social equity, and economic viability – ensures that it can deliver long-term value to its shareholders while contributing positively to society and the planet. This unwavering commitment to sustainability positions Precision Grow as a leader in the industry and a trusted partner in building a more sustainable future.</p>
            </div>
        </div>
      {/* -------------------------------------- */}

      {/* Dictionary div */}

      <div className="padding-box">
        <div className="container-fluid">
          <h2
            className="food-chose-title fadeInLeft wow"
            data-wow-delay="200ms"
            data-aos="fade-up"
          >
            Dictionary Of Sustainability
          </h2>
          <div className="row mx-auto">
            {cardData.map((card, index) => (
              <div
                className="mx-auto col-lg-4 col-md-6"
                key={card.id}
                data-aos="fade-up"
              >
                <div className="img-sust">
                  <img src={card.image} alt={card.title} loading="lazy"/>
                </div>
                <div className="latest-work-one__btm-info">
                  <h5 className="latest-work-one__work-title">{card.title}</h5>
                  <button
                     
                    className="latest-work--btn more-link"
                    onClick={() => handleMoreClick(index)}
                  >
                    <span>More</span>
                    <i className="icon-right-arrow latest-work-btn--arrow"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Render different content based on activeContent state */}
          {activeContent !== null && (
            <div className="popup-overlay2">
              <div
                className="popup-content2"
                id={`content${activeContent + 1}`}
              >
                <div className="container">
                  <h3>{cardData[activeContent].title}</h3>
                  <div className="row">
                    <div className="col-md-6">
                      <div>
                        <img src={cardData[activeContent].image} alt="" loading="lazy"/>
                      </div>
                    </div>
                    <div className="col-md-6 sust-cont-info1">
                     <div>
                     <p>{cardData[activeContent].description}</p>
                      <h4>{cardData[activeContent].h4_1}</h4>
                      <p>{cardData[activeContent].description1}</p>
                      <h4>{cardData[activeContent].h4_2}</h4>
                      <p>{cardData[activeContent].description2}</p>
                     </div>
                    </div>
                  </div>
                </div>
                <button onClick={() => setActiveContent(null)}> x </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Sustainability;
