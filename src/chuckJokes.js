const jokes = [
  ["Chuck Norris nie zmiata kurzy, to kurze zmiatają przed nim."],
  ["Każdy wie, że Chuck Norris doliczył do nieskończoności dwa razy. Ale nie każdy wie, że zaczynał od minus nieskończoności."],
  ["Chuck Norris nie ma cienia."],
  ["Chuck Norris potrafi nalać wody do sitka."]
];

async function zarciki(){
const fileJson = await fetch("src/jokes.json");
const jokes = fileJson.json();
console.log(jokes);
}


export default zarciki;
