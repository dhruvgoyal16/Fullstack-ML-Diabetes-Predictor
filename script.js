// This confirms the script is loaded.
console.log("JavaScript file loaded successfully!");

// Get a reference to the HTML form element.
const predictionForm = document.getElementById('prediction-form');

// Add an event listener to the form for the 'submit' event.
predictionForm.addEventListener('submit', function(event) {
    // Prevent the default form submission behavior.
    event.preventDefault();
    console.log("Form submission detected! Default action prevented.");

    // Gather and clean the form data.
    const formData = new FormData(predictionForm);
    const data = Object.fromEntries(formData.entries());
    for (const key in data) {
        data[key] = parseFloat(data[key]);
    }
    console.log("Gathered and cleaned form data:", data);

    // Construct the JSON payload.
    const jsonPayload = JSON.stringify(data);
    console.log("Constructed JSON Payload:", jsonPayload);

    // --- Use the fetch() API to send the POST request ---
    fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: jsonPayload
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Server responded with an error: ${response.status}`);
        }
        return response.json();
    })
    .then(predictionData => {
        console.log("Success! Received prediction from API:", predictionData);

        
    })
    .catch(error => {
        console.error("Error communicating with the API:", error);
    });
});
