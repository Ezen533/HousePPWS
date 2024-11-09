from flask import Flask, request, jsonify
import numpy as np
import joblib

# Load the pre-trained model (replace with actual model file)
model = joblib.load(r'C:\Users\eshaa\Downloads\house_price_model (1).pkl')

app = Flask(__name__)

# Route to handle prediction
@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()

        # Validate and check for missing fields or invalid data
        for key in data:
            if data[key] == '' or data[key] is None:
                return jsonify({'error': f'Missing or invalid value for {key}'}), 400

        # Extract features from the input data
        house_age = float(data['housing_median_age'])
        total_rooms = float(data['total_rooms'])
        total_bedrooms = float(data['total_bedrooms'])
        longitude = float(data['longitude'])
        latitude = float(data['latitude'])
        population = float(data['population'])
        households = float(data['households'])

        # Additional derived features
        bedroom_ratio = total_bedrooms / total_rooms if total_rooms > 0 else 0
        household_rooms = total_rooms / households if households > 0 else 0

        # Prepare input data for prediction
        input_data = np.array([[house_age, total_rooms, total_bedrooms, longitude,
                                latitude, population, households, bedroom_ratio, household_rooms]])

        # Make prediction
        predicted_price = model.predict(input_data)

        return jsonify({'predicted_price': predicted_price[0]})

    except Exception as e:
        return jsonify({'error': str(e)}), 400

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5005, debug=True)
