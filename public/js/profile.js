const newFormHandler = async (event) => {
  event.preventDefault();

  const tripName = document.querySelector('#trip-name').value;
  const depInput = document.querySelector('#departure').value;
  const desInput = document.querySelector('#arrival').value;
  const date = document.querySelector('#dep-date').value;

  if (tripName && depInput && desInput && date) {
    const response = await fetch(`/api/trip`, {
      method: 'POST',
      body: JSON.stringify({ tripName, depInput, desInput, date }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create project');
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
