const jokeEl = document.getElementById( 'joke')
constjokebtn = document.getElementById( 'jokeBtn')

jokebtn.addEventListener('click', generateJoke)


//USING ASYNC/AWAIT
generateJoke ()
  async function generateJoke () {
    const config = {
     headers: {
        'Accept': 'application/json',
        },
      }

      const res =await fetch( 'https://icanhazdadjoke.com', config)

      const data =await res.json()
 
      jokeEl.innerHTML = data.joke
}

// USING .then()

 //function generateJoke () {
   // const config = {
     //   headers: {
       //     'Accept': 'application/json'
        //}
    //  }


//fetch('https://icanhazdadjoke.com', config)
//.then ( (res) => res.json())
//.then ((data) => {
  //  jokeEl.innerHTML =data.joke
//})
//} 
