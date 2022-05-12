// variables 

const button = document.querySelector('.btn');
const title = document.getElementById('advice-id');
const message = document.querySelector('.advice');

// functin to get the advice


const getAdvace = () => {

    // get the advice from the api

    fetch('https://api.adviceslip.com/advice', {cache: 'no-cache'})
    .then(response => response.json())
    .then(data => {
        title.innerHTML = 'advice #' + data['slip']['id']; // get the id of the advice and display it
        message.innerHTML = '"' + data['slip']['advice'] + '"'; // get the id of the message and display it in the message div
    }).catch(error => {
        swal( "Oops" ,  error.message ,  "error" )
    });

};


// event listener to get the advice


button.addEventListener('click', getAdvace);
getAdvace();