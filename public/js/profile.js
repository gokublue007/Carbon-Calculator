const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#trip-name').value;
  const departure_airport = document.querySelector('#departure').value;
  const arrival_airport = document.querySelector('#destination').value;
  const departure_date = document.querySelector('#dep-date').value;

  if (name && departure_airport && arrival_airport && departure_date) {
    const response = await fetch(`/api/trip`, {
      method: 'POST',
      body: JSON.stringify({ name, departure_airport, arrival_airport, departure_date }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create trip');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/trip/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete trip');
    }
  }
};

document
  .querySelector('.flight-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.flight-list')
  .addEventListener('click', delButtonHandler);
