import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import '../App.css'

function App() {
    const [formData, setFormData] = useState({
        housing_median_age: '',
        total_rooms: '',
        total_bedrooms: '',
        longitude: '',
        latitude: '',
        population: '',
        households: ''
    });
    const [prediction, setPrediction] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/predict', formData); // Node.js endpoint
            setPrediction(response.data.prediction); // Display prediction from Flask
        } catch (error) {
            console.error('Error fetching prediction:', error);
        }
    };

    return (
    <>
    <Navbar />
    <div className="max-w-lg mx-auto my-8 p-6 border rounded-2xl form-prediction bg-cyan-300">           
            <h1 className="text-2xl font-bold text-blue-400 mb-6 text-center">House Price Prediction</h1>
            <form onSubmit={handleSubmit} className="w-full max-w-lg">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="housing_median_age">
                            House Age
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="housing_median_age"
                            type="number"
                            name="housing_median_age"
                            value={formData.housing_median_age}
                            onChange={handleChange}
                            placeholder="Enter House Age"
                            required
                        />
                    </div>

                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="total_rooms">
                            Total Rooms
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="total_rooms"
                            type="number"
                            name="total_rooms"
                            value={formData.total_rooms}
                            onChange={handleChange}
                            placeholder="Enter Total Rooms"
                            required
                        />
                    </div>

                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="total_bedrooms">
                            Bedrooms
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="total_bedrooms"
                            type="number"
                            name="total_bedrooms"
                            value={formData.total_bedrooms}
                            onChange={handleChange}
                            placeholder="Enter Bedrooms"
                            required
                        />
                    </div>

                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="longitude">
                            Longitude
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="longitude"
                            type="number"
                            name="longitude"
                            value={formData.longitude}
                            onChange={handleChange}
                            placeholder="Enter Longitude"
                            required
                        />
                    </div>

                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="latitude">
                            Latitude
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="latitude"
                            type="number"
                            name="latitude"
                            value={formData.latitude}
                            onChange={handleChange}
                            placeholder="Enter Latitude"
                            required
                        />
                    </div>

                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="population">
                            Population
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="population"
                            type="number"
                            name="population"
                            value={formData.population}
                            onChange={handleChange}
                            placeholder="Enter Population"
                            required
                        />
                    </div>

                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="households">
                            Households
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="households"
                            type="number"
                            name="households"
                            value={formData.households}
                            onChange={handleChange}
                            placeholder="Enter Households"
                            required
                        />
                    </div>
                </div>

                <div className="flex items-center justify-center">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Predict
                    </button>
                </div>
            </form>

            {prediction !== null && (
                <div className="mt-6">
                    <h2 className="text-lg font-bold">Prediction Result:</h2>
                    <p className="text-gray-700">{prediction}</p>
                </div>
            )}
        </div></>
        
    );
}

export default App;
