const url = "https://pokeapi.co/api/v2/pokemon/ditto";
const inputArea = document.getElementById("inputArea");
const box = document.getElementById("box");
const colors = {
        fire: "#FD7D24",
    water: "#4592C4",
    grass: "#9BCC50",
    electric: "#EED535",
    poison: "#B97FC9",
    bug: "#729F3F",
    normal: "#A4ACAF",
    ground: "#AB9842",
    fairy: "#FDB9E9",
    fighting: "#D56723",
    psychic: "#F366B9",
    rock: "#A38C21",
    ghost: "#7B62A3",
    ice: "#51C4E7",
    dragon: "#53A4CF",
    dark: "#707070",
    steel: "#9EB7B8",
    flying: "#3DC7EF"
}



inputArea.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        procuraPokemon();
    }
});

function procuraPokemon() {
    fetch(`https://pokeapi.co/api/v2/pokemon/${inputArea.value}`)
    .then(response => response.json())
    .then(data => {
    console.log(data);
    const type = data.types[0].type.name;
    box.style.display = "flex";
    box.style.background = colors[type];
    box.innerHTML = `
        <div class="left-side">
            <h1>${data.species.name}</h1>
            <p>${data.types[0].type.name}</p>

        </div>
        <div class="right-side">
            <img src="${data.sprites.other.dream_world.front_default}" alt="POKEMON">
        </div>
        `;

});
}
