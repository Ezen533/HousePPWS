const express = require('express');
const axios = require('axios');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = 5000;

// Route to receive form data from React and send to Flask for prediction
app.post('/api/predict', async (req, res) => {
    try {
        // Send data to Flask server
        const response = await axios.post('http://localhost:8000/predict', req.body);
        // Return Flask prediction response to React
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching prediction:', error);
        res.status(500).json({ error: 'Failed to get prediction from model' });
    }
});

app.listen(PORT, () => {
    console.log(`Node.js server running on http://localhost:${PORT}`);
});
