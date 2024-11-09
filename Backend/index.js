const express = require('express');
const axios = require('axios');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(cors()); // Enable CORS
app.use(bodyParser.json()); // Parse incoming JSON requests

// Route to receive form data from React and send to Flask for prediction
app.post('/predict', function (req, res) {
    axios.post('http://127.0.0.1:5005/predict', req.body, {
        headers: {
            'Content-Type': 'application/json'  // Ensure the request header is set to application/json
        }
    })
    .then(function (response) {
        res.json(response.data);
    })
    .catch(function (error) {
        console.error('Error fetching prediction:', error.message, error.response?.data);
        res.status(500).json({ error: 'Failed to get prediction from model' });
    });
});

app.listen(PORT, function () {
    console.log(`Node.js server running on http://localhost:${PORT}`);
});
