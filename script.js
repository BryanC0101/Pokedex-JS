const url = "https://pokeapi.co/api/v2/pokemon";
const box = document.getElementById("box");
const types = document.querySelector(".types");
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
const typeEmojis = {
    all: "◾",
    fire: "🔥",
    water: "💧",
    grass: "🌿",
    electric: "⚡",
    poison: "☠️",
    bug: "🐛",
    normal: "⚪",
    ground: "🌍",
    fairy: "✨",
    fighting: "🥊",
    psychic: "🔮",
    rock: "🪨",
    ghost: "👻",
    ice: "❄️",
    dragon: "🐉",
    dark: "🌑",
    steel: "⚙️",
    flying: "🕊️"
}

Object.entries(typeEmojis).forEach(([type, emoji]) => {
    types.innerHTML += `
    <button class="type-btn">
    ${emoji} ${type}
    </button>
    `;
});



fetch(`https://pokeapi.co/api/v2/pokemon`)
.then(response => response.json())
.then(data => {

    data.results.forEach(element => {

        fetch(`https://pokeapi.co/api/v2/pokemon/${element.name}?limit=151`)
        .then(response => response.json())
        .then(pokemon => {

            const type = pokemon.types[0].type.name;
            const color = colors[type];

            box.innerHTML += `
                <div class="card" style="background:${color}">
                <div id="left-side">
                    <h1>${pokemon.id}</h1>
                    <h2>${pokemon.name}</h2>
                    <p>${type}</p>
                </div>
                    <img src="${pokemon.sprites.front_default}" />
                </div>
            `;
        });


    })
})








// inputArea.addEventListener("keydown", (event) => {
//     if (event.key === "Enter") {
//         procuraPokemon();
//     }
// });


