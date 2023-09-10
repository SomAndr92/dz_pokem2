let btn = document.getElementById("getdata");
btn.addEventListener('click', function () {
    let pokename = document.getElementById('pokename').value;
    pokename = pokename.toLowerCase();
    if (pokename == "") {
        pokename = "blastoise";
    }
    let name = document.getElementById("name");


    let pa = new pokeapi();
    let MyPoke = pa.getPoke(pokename);


})


class pokeapi {

    constructor() {
        this.API = "https://pokeapi.co/api/v2/";
    }

    getPoke(name) {


        if (name != "") {


            fetch('https://pokeapi.co/api/v2/pokemon/' + name)
                .then((response) => response.json())
                .then((data) => {


                    // let name = document.getElementById("card");
                    // name.innerHTML += "<h5 class="+'card-title'+">"+data["species"]["name"]+"</h5>" //"Имя: " + data["species"]["name"];


                    // let sprite = document.getElementById("carddb");
                    /*if (data["sprites"]["front_default"] == null) {
                        data["sprites"]["front_default"] = ''
                    }*/
                    // sprite.innerHTML += '<img class="card-img-top" src="' + data["sprites"]["front_default"] + '"></img>';


                    let block = '<div class="card bg-secondary" style="width: 18rem;" id="card">' +
                        "<h5 class=" + 'card-title' + ">" + data["species"]["name"] + "</h5>" +
                        '<div class="card-body" id="carddb">' +
                        '<img class="card-img-top" src="' + data["sprites"]["other"]["dream_world"]["front_default"] + '"></img>' +
                        '</div>' +
                        '</div>';

                    let pokes = document.getElementById("pokes");
                    pokes.innerHTML += block;

                })


        }
    }

}

// class Pokemon
// {
//     constructor(name, hp, image_face, image_back)
//     {
//         this.name = name;
//         this.hp = hp;
//         this.image_face = image_face;
//         this.image_back = image_back;
//     }

// }

