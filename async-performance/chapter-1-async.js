const axios = require('axios');

/*** Chapter 1: Asynchrony: Now & Later ***/

// AJAX (like the axios library provide) do not complete synchronously, so call doesn't have any value assigned yet.
let call = axios.get('https://api.github.com/users/hecpalomares');
console.log(call);  // Promise {pending}

// By using the .then() method we wait for the AJAX call to complete in a form of a ES6 Promise and return the response of it.
call.then((reponse) => {
    console.log(reponse.data.name);     // Hector Palomares
    console.log(reponse.data.location); // Mexico
});