
const flightInput = document.getElementById('flight');
const flightForm = document.getElementById('flight-form');
const depInput = document.getElementById('departure')
const desInput = document.getElementById('destination')

const postFlight = (newFlight) =>
  // Fetch accepts a URL and an options object where you can declare the HTTP method, the request body, and any headers.
  fetch('https://www.carboninterface.com/api/v1/estimates', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer process.env.API_KEY'
    },
    body: JSON.stringify({
        "type": "flight",
        "passengers": 1,
        "legs": [ newFlight ]
      })
  })
    .then((res) => res.json())
    .then((data) => {
      console.log('Successful POST request:', data);
      return data;
    })
    .catch((error) => {
      console.error('Error in POST request:', error);
    });

// Listen for when the form is submitted
flightForm.addEventListener('form-group', (e) => {
  e.preventDefault();

  // Create a new review object from the input values
  const newFlight = {
    departure_airport: depInput.value.trim(),
    destination_airport: desInput.value.trim(),

  };

  // Call our postReview method to make a POST request with our `newReview` object.
  postFlight(newFlight)
    .then((data) => alert(`Flight added!`))
    .catch((err) => console.error(err));
});