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
        median_income = float(data['median_income'])
        
        
         # Initialize binary ocean proximity features
        H_OCEAN = 0
        INLAND = 0
        ISLAND = 0
        NEAR_BAY = 0
        NEAR_OCEAN = 0

        # Process categorical field using label encoder
        ocean_proximity = data.get('ocean_proximity', '')  # Assume 'location' is the categorical field

        # Set the appropriate ocean proximity feature to 1 based on user input
        if ocean_proximity == "H OCEAN":
            H_OCEAN = 1
        elif ocean_proximity == "INLAND":
            INLAND = 1
        elif ocean_proximity == "ISLAND":
            ISLAND = 1
        elif ocean_proximity == "NEAR BAY":
            NEAR_BAY = 1
        elif ocean_proximity == "NEAR OCEAN":
            NEAR_OCEAN = 1
        else:
            # Handle the case where the ocean proximity is invalid or not provided
            return jsonify({'error': f'Invalid ocean proximity value: {ocean_proximity}'}), 400
        
        
    
        # Additional derived features   
        bedroom_ratio = total_bedrooms / total_rooms if total_rooms > 0 else 0
        household_rooms = total_rooms / households if households > 0 else 0

        # Prepare input data for prediction
        input_data = np.array([[house_age, total_rooms, total_bedrooms, longitude,
                                latitude, population, households, bedroom_ratio, household_rooms,median_income,
                                H_OCEAN, INLAND, ISLAND, NEAR_BAY, NEAR_OCEAN]])

        # Make prediction
        predicted_price = model.predict(input_data)

        return jsonify({'predicted_price': predicted_price[0]})

    except Exception as e:
        return jsonify({'error': str(e)}), 400

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5005, debug=True)
