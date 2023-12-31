const getJoke = async () => {
	const response = await fetch("https://v2.jokeapi.dev/joke/Programming,Dark?blacklistFlags=political,racist,sexist", {
  "headers": {
    "accept": "*/*",
    "accept-language": "en-US,en;q=0.9,ru-RU;q=0.8,ru;q=0.7",
    "sec-ch-ua": "\"Google Chrome\";v=\"117\", \"Not;A=Brand\";v=\"8\", \"Chromium\";v=\"117\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "cross-site"
  },
  "referrer": "https://sv443.net/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": null,
  "method": "GET",
  "mode": "cors",
  "credentials": "omit"
});
	const joke = await response.json();
  if(joke?.joke !== undefined){
    document.getElementById('joke').innerHTML = joke.joke
  }
  if(joke?.setup !== undefined){
    document.getElementById('joke').innerHTML = `<p>${joke.setup}</p><p>${joke.delivery}</p>`
  }
	
	console.log(joke)
}

getJoke();