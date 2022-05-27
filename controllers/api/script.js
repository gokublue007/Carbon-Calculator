
const flightInput = document.getElementById('flight');
const flightForm = document.getElementById('flight-form');


const postFlight = (tripDetails) =>
  // Fetch accepts a URL and an options object where you can declare the HTTP method, the request body, and any headers.
  fetch('https://www.carboninterface.com/api/v1/estimates', {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer process.env.API_KEY'
    },
    body: {
        "type": "flight",
        "passengers": 1,
        "legs": [
          {"departure_airport": "DROP VAL", "destination_airport": "DROP VAL"},
          {"departure_airport": "DROP VAL", "destination_airport": "DROP VAL"}
        ]
      }
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
flightForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Create a new review object from the input values
  const newFlight = {
    tripName:
    depAirport: userNameInput.value.trim(),
    desAirport: userNameInput.value.trim(),

  };

  // Call our postReview method to make a POST request with our `newReview` object.
  postFlight(newFlight)
    .then((data) => alert(`Flight added! Flight ID: ${data.body.review_id}`))
    .catch((err) => console.error(err));
});