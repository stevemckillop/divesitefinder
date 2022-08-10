/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.seed = async function (knex) {
    await knex("sea_life").del();
    await knex("sea_life").insert([
            {name: "reef manta ray"},
            {name: "white tip reef shark"},
            {name: "green turtle"},
            {name: "sea snake"}, 
            {name: "clarks anemonefish"},
            {name: "parrotfish"}, 
            {name: "trumpetfish"}, 
            {name: "cuttlefish"},
            {name: "garden eel"},
            {name: "electric clam"},
            {name: "yellow fusilier"}, 
            {name: "giant trevally"},
            {name: "bamboo shark"}, 
            {name: "blue spotted stingray"}, 
            {name: "mantis shrimp"}, 
            {name: "squid"}, 
            {name: "mola-mola (ocean sunfish)"}, 
            {name: "reef shark"}, 
            {name: "barracuda"}, 
            {name: "frogfish"}, 
            {name: "sweetlips"}, 
            {name: "titan triggerfish"}, 
            {name: "napolean wrasse"}, 
            {name: "giant moray eel"}, 
            {name: "thresher shark"}, 
            {name: "bannerfish"}, 
            {name: "yellow jackfish"}
    ])
 };