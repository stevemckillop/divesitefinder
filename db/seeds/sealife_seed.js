/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.seed = async function (knex) {
    await knex("dive_sites").del();
    await knex("dive_sites").insert([
            "reef manta ray",
            "white tip reef shark",
            "green turtle",
            "sea snake", 
            "clarks anemonefish",
            "parrotfish", 
            "trumpetfish", 
            "clownfish", 
            "cuttlefish",
            "garden eel",
            "electric clam",
            "yellow fusilier", 
            "white tip reef shark",
            "giant trevally",
            "bamboo shark", 
            "blue spotted stingray", 
            "mantis shrimp", 
            "squid", 
            "mola-mola (ocean sunfish)", 
            "reef shark", 
            "barracuda", 
            "frogfish", 
            "sweetlips", 
            "titan triggerfish", 
            "napolean wrasse", 
            "giant moray eel", 
            "thresher shark", 
            "bannerfish", 
            "yellow jackfish"
        ])
 };