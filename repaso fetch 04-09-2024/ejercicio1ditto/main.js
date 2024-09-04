//1- "platinum"  en flavor_text_entries (13) ok

// 2- la url del color ok

// 3- "kanto", en pokedex_numbers (1) ok

// 4- valor de "entry_number" en pokedex_numbers (10) ok

// 5- Nombre del shape ok

// 6- "ditto" como nombre del pokemon en "varieties" ok

// 7- is_baby? true or false? ok

// 8- tamaño del growth_rate? ok

// 9- "pokémon transformacion" en "genera" (4) ok

// 10- flavor_text en flavor_text_entries (3) ok

const urlDitto = "https://pokeapi.co/api/v2/pokemon-species/ditto";

fetch(urlDitto)
    .then((response) => response.json())
    .then((data) => {

        let platinumDitto = data.flavor_text_entries[13].version.name.toUpperCase();
        document.getElementById("platinumDitto").innerHTML = platinumDitto;
        
        let colorDitto = data.color.name.toUpperCase();
        document.getElementById("colorDitto").innerHTML = colorDitto;

        let kantoDitto = data.pokedex_numbers[1].pokedex.name.toUpperCase();
        document.getElementById("kantoDitto").innerHTML = kantoDitto;

        let entryDito = data.pokedex_numbers[10].entry_number;
        document.getElementById("entryDito").innerHTML = entryDito;

        let shapeDitto = data.shape.name.toUpperCase();
        document.getElementById("shapeDitto").innerHTML = shapeDitto;

        let nombreDitto = data.varieties[0].pokemon.name.toUpperCase();
        document.getElementById("nombreDitto").innerHTML = nombreDitto;

        let babyDitto = data.is_baby;
        document.getElementById("babyDitto").innerHTML = babyDitto;

        let tamanyoDitto = data.growth_rate.name.toUpperCase();
        document.getElementById("tamanyoDitto").innerHTML = tamanyoDitto;

        let transformacionDitto = data.genera[5].genus.toUpperCase();
        document.getElementById("transformacionDitto").innerHTML = transformacionDitto;

        let flavorDitto = data.flavor_text_entries[3].flavor_text.toUpperCase();
        document.getElementById("flavorDitto").innerHTML = flavorDitto;
      
    })
    .catch((err) => console.log(err));