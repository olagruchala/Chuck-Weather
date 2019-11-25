async function jokes(){
  let joke = "";
  await fetch("src/jokes.json")
  .then((res) => res.json())
  .then((data) => {
  const indexTable = Math.floor(Math.random() *data.jokes.length);
  joke = data.jokes[indexTable].joke;
  })
  return joke;
  }

export default jokes;