async function jokes(){
  let joke = "";
  await fetch("src/jokes.json")
  .then((res) => res.json())
  .then((data) => {
    const indexTable = Math.floor(Math.random() *data.jokes.length);
    joke = data.jokes[indexTable].joke;
  })
  jokesAPI();
  return joke;
}

async function jokesAPI(name)
{
  const response = await fetch(`https://api.chucknorris.io/jokes/random?name=${name}`);
  let joke = await response.json();
  return joke.value;
}

export {jokes, jokesAPI};