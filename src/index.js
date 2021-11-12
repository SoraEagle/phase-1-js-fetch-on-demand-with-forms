const init = () => {
    const inputForm = document.querySelector('form');
    
    inputForm.addEventListener('submit', (event) => {
        event.preventDefault(); //Override default behavior of the Search Engine (input type='submit', inside <form tags> in index.html) 
        const input = document.querySelector('input#searchByID');
      
        fetch(`http://localhost:3000/movies/${input.value}`) //Fetch data on the Object with this ID ('input.value') from this URL,
        .then(response => response.json())                   //Convert the response (resp) Object to a JSON Object,
        .then(data => {                                      //and send that data into this callback function.
            const title = document.querySelector('section#movieDetails h4'); //Change 'Title' to movie title related to ID inputted
            const summary = document.querySelector('section#movieDetails p'); //Change 'Summary' to movie summary related to ID inputted

            title.innerText = data.title;
            summary.innerText = data.summary;
        });
      });
}

document.addEventListener('DOMContentLoaded', init); //Invoke the Event Listener