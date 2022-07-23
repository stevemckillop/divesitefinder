/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    await knex("dive_sites").del();
    await knex("dive_sites").insert([
        {
            "name": "manta_point",
            "location": "penida",
            "common sealife": ["reef manta ray", "bamboo shark", "stingray", "mantis shrimp", "squid"] 
        },
        {
            "name": "crystal_bay",
            "location": "penida",
            "common sealife": ["mola-mola", "reef sharks", "barracuda", "frogfish", "sweetlips"] 
        },
        {
            "name": "sd_point",
            "location": "penida",
            "common sealife": ["batfish", "titan triggerfish", "napoleon wrasse", "giant moray eel"] 
        },
        {
            "name": "toyopekah",
            "location": "penida",
            "common sealife": ["mola-mola", "thresher shark", "bannerfish", "yellow jackfish"] 
        },
        {
            "name": "kabira_bay",
            "location": "ishigaki",
            "common sealife": ["reef manta rays", "green turtles", "clarks anemonefish", "parrotfish", "sea snakes"] 
        },
        {
            "name": "oosaki",
            "location": "ishigaki",
            "common sealife": ["sea snakes", "green turtles", "trumpetfish", "parrotfish", "clownfish", "cuttlefish"] 
        },
        {
            "name": "taketomi",
            "location": "ishigaki",
            "common sealife": ["cuttlefish", "garden eels", "electric clams", "yellow fusiliers"] 
        },
        {
            "name": "panari",
            "location": "ishigaki",
            "common sealife": ["reef manta rays", "green turtles", "white tip reef shark", "giant trevally"] 
        }
    ])
};