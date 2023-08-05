let animals = [
    [    
        {
            "name": "Deer",
            "id": "Enclosure",
            "model": "./deer/scene.gltf",
            "scale": "1 1 1",
            "sc_name": "Cervidae",
            "rotation": "0 0 0",
            "position": "-0.7 0 -1",
            "habitats": "wetlands, forests, grasslands, rainforests,\n\n scrublands, mountains"
        },
        {
            "name": "Lion",
            "id": "Enclosure",
            "model": "./lion/scene.gltf",
            "scale": "2 2 2",
            "sc_name": "Panthera leo",
            "rotation": "0 0 0",
            "position": "-0.7 -0.3 -1",
            "habitats": "grassland, savanna, dense scrub, open woodland"
        },
        {
            "name": "Giraffe",
            "id": "nclosure",
            "model": "./giraffe/scene.gltf",
            "scale": "0.21 0.21 0.21",
            "sc_name": "Giraffa camelopardalis",
            "rotation": "20 180 0",
            "position": "-0.7 -0.13 -1",
            "habitats": "savanna, woodlands"
        },     
        {
            "name": "Tiger",
            "id": "Enclosure",
            "model": ".tiger/scene.gltf",
            "scale": "0.35 0.35 0.35",
            "sc_name": "Panthera tigris",
            "rotation": "0 0 0",
            "position":"-0.7 -0.3 1",
            "habitats":"lowland evergreen forests, taiga, grasslands,\n\n tropical forests, mangrove swamps"
        },
        {
            "name": "Zebra",
            "id":"Enclosure",
            "model":"./zebra/scene.gltf",
            "scale":"2.5 2.5 2.5",
            "sc_name":"Hippotigris",
            "rotation": "0 90 0",
            "position":"-0.8 -0.3 -1",
            "habitats":"savannahs, grasslands, woodlands"
        }
    ],
    [
        {
            "name": "Chimpanzee",
            "id": "",
            "model": "",
            "scale": "",
            "sc_name": "",
            "position": "",
            "habitats":""
        },     
        {
            "name": "Sloth",
            "id": "",
            "model": "",
            "scale": "",
            "sc_name": "",
            "position": "",
            "habitats":""
        },
        {
            "name": "Rhinoceros",
            "id": "",
            "model": "",
            "scale": "",
            "sc_name": "",
            "position": "",
            "habitats":""
        },
        {
            "name": "Hippopotamus",
            "id": "",
            "model": "",
            "scale": "",
            "sc_name": "",
            "position": "",
            "habitats":""
        },     
        {
            "name": "Dhole",
            "id": "",
            "model": "",
            "scale": "",
            "sc_name": "",
            "position": "",
            "habitats":""
        }
    ],
    [
        {
            "name": "Swan",
            "id": "",
            "model": "",
            "scale": "",
            "sc_name": "",
            "position": "",
            "habitats":""
        },     
        {
            "name": "Ostrich",
            "id": "",
            "model": "",
            "scale": "",
            "sc_name": "",
            "position": "",
            "habitats":""
        },
        {
            "name": "Crane",
            "id": "",
            "model": "",
            "scale": "",
            "sc_name": "",
            "position": "",
            "habitats":""
        },
        {
            "name": "Junglefowl",
            "id": "",
            "model": "",
            "scale": "",
            "sc_name": "",
            "position": "",
            "habitats":""
        },     
        {
            "name": "Cockatoo",
            "id": "",
            "model": "",
            "scale": "",
            "sc_name": "",
            "position": "",
            "habitats":""
        }
    ],
    [
        {
            "name": "Snake",
            "id": "",
            "model": "",
            "scale": "",
            "sc_name": "",
            "position": "",
            "habitats":""
        },     
        {
            "name": "Tortoise",
            "id": "",
            "model": "",
            "scale": "",
            "sc_name": "",
            "position": "",
            "habitats":""
        },
        {
            "name": "Gecko",
            "id": "",
            "model": "",
            "scale": "",
            "sc_name": "",
            "position": "",
            "habitats":""
        },
        {
            "name": "Alligator",
            "id": "",
            "model": "",
            "scale": "",
            "sc_name": "",
            "position": "",
            "habitats":""
        },     
        {
            "name": "Monitor",
            "id": "",
            "model": "",
            "scale": "",
            "sc_name": "",
            "position": "",
            "habitats":""
        }
    ],
    [
        {
            "name": "Catfish",
            "id": "",
            "model": "",
            "scale": "",
            "sc_name": "",
            "position": "",
            "habitats":""
        },     
        {
            "name": "Starfish",
            "id": "",
            "model": "",
            "scale": "",
            "sc_name": "",
            "position": "",
            "habitats":""
        },
        {
            "name": "Eel",
            "id": "",
            "model": "",
            "scale": "",
            "sc_name": "",
            "position": "",
            "habitats":""
        },
        {
            "name": "Salmon",
            "id": "",
            "model": "",
            "scale": "",
            "sc_name": "",
            "position": "",
            "habitats":""
        },     
        {
            "name": "Jellyfish",
            "id": "",
            "model": "",
            "scale": "",
            "sc_name": "",
            "position": "",
            "habitats":""
        }
    ],
]


AFRAME.registerComponent("show", {
    schema: {
        show: {default: 0, type: "number"}
    },
    init: function(){

        let searchParams = new URLSearchParams(window.location.search);
        let loc;
        if(searchParams.has("location")){
            loc = searchParams.get("location");
            console.log(loc)
            if(loc === "Enclosure"){
                loc = 0
            }else if(loc === "Mammals"){
                loc = 1
            }else if(loc === "Birds"){
                loc = 2
            }else if(loc === "Reptiles"){
                loc = 3
            }else if(loc === "Fish"){
                loc = 4
            }
        }

        var el = animals[loc][0]
        var model =document.querySelector("#animal")
        model.setAttribute("gltf-model", el.model);
        model.setAttribute("scale", el.scale);
        model.setAttribute("position", el.position);
        model.setAttribute("rotation", el.rotation)
        document.querySelector("#name").setAttribute("text", "value", el.name)
        document.querySelector("#sc-name").setAttribute("text", "value", el.sc_name)
        document.querySelector("#habitat").setAttribute("text", "value", el.habitats)
        document.querySelector("#number").setAttribute("text", "value", `#01`)


        document.querySelector("#label").setAttribute("text", "value", searchParams.get("location"))
        window.addEventListener("keydown",(e)=>{

            if(e.key === "ArrowLeft"){
                if(this.data.show > 0){
                  this.data.show -= 1                    
                }
            }
            if(e.key === "ArrowRight"){
                console.log(animals[loc])
                if(this.data.show <= ( animals[loc].length-1)){
                    this.data.show += 1     
                    console.log(this.data.show)               
                }else{
                    this.data.show = 0
                }
            }
            var elNew = animals[loc][this.data.show]
            //var model =document.querySelector("#animal")
            model.setAttribute("gltf-model", elNew.model);
            model.setAttribute("scale", elNew.scale);
            model.setAttribute("position", elNew.position);
            model.setAttribute("rotation", elNew.rotation)
            document.querySelector("#name").setAttribute("text", "value", elNew.name);
            
            document.querySelector("#sc-name").setAttribute("text", "value", elNew.sc_name)
            document.querySelector("#habitat").setAttribute("text", "value", elNew.habitats)
            document.querySelector("#number").setAttribute("text", "value", `#0${this.data.show + 1}`)
        })
    },
})