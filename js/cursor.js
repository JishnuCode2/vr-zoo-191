AFRAME.registerComponent("cursor-event", {
    init: function(){
        window.addEventListener("mouseenter", (e) =>{
            var cursor = document.querySelector("#cursor");

            if(cursor.getAttribute("visible")){

                if(e.target.getAttribute("class") != null && e.target.getAttribute("class") === "marker"){
                    console.log(e.target)
                    var id= e.target.getAttribute("id");
                    
                    var displayName = document.querySelector("#display-name");
                    displayName.setAttribute("text", {value: id})

                    if(id != "Visitor Centre"){


                        document.querySelector(".visit-button").setAttribute("visible", true);

                        var pos = e.target.getAttribute("position");
                        pos.z = 5
                        document.querySelector(".visit-button").setAttribute("position", pos);
                    }else{
                        document.querySelector(".visit-button").setAttribute("visible", false); 
                    }
                }else{
                    console.log("not marker")
                }
            }
        })
        window.addEventListener("click", (e)=>{
            if(e.detail.intersectedEl != undefined){
                var elClass = e.detail.intersectedEl.getAttribute("class");
                if(elClass === "visit-button"){
                    var id = document.querySelector("#display-name").getAttribute("text").value;
                    //document.querySelector(".visit-button").setAttribute("id", id);
                    
                    window.location.href = `animals.html?location=${id}`

                    //console.log("Setting a-sky")
                }
            }

        })
    }
})