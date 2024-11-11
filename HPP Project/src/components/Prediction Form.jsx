import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar'; // Assuming you have this Navbar component
import '../App.css';

function Form() {
    // Form state to capture input data from user
    const [formData, setFormData] = useState({
        housing_median_age: '',
        total_rooms: '',
        total_bedrooms: '',
        longitude: '',
        latitude: '',
        population: '',
        households: '',
        ocean_proximity: '', // New field for dropdown
        median_income: ''
    });

    const [prediction, setPrediction] = useState(null);
    const [error, setError] = useState('');

    // Handle input field changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Validate form data
    const validateForm = () => {
        for (let key in formData) {
            if (formData[key] === '') {
                setError(`Please fill in the ${key}`);
                return false;
            }
        }
        setError('');
        return true;
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) return; // Validate before submission

        try {
            // Send the form data to the backend (Node.js server)
            const response = await axios.post('http://localhost:5000/predict', formData);
            setPrediction(response.data.predicted_price);
        } catch (error) {
            console.error('Error fetching prediction:', error);
            setError('Failed to get prediction');
        }
    };

    return (
        <>
            <Navbar />
            <div className="max-w-lg mx-auto my-8 p-6 border rounded-2xl form-prediction bg-cyan-300">
                <h1 className="text-2xl font-bold text-blue-400 mb-6 text-center">House Price Prediction</h1>
                <form onSubmit={handleSubmit} className="w-full max-w-lg">
                    <div className="flex flex-wrap -mx-3 mb-6">

                        {/* Housing Median Age Input */}
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

                        {/* Total Rooms Input */}
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

                        {/* Total Bedrooms Input */}
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

                        {/* Longitude Input */}
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

                        {/* Latitude Input */}
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

                        {/* Population Input */}
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

                        {/* Households Input */}
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

                        {/* Median Income Input */}
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="median_income">
                                Median Income
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="median_income"
                                type="number"
                                name="median_income"
                                value={formData.median_income}
                                onChange={handleChange}
                                placeholder="Enter Median Income from (1-10)"
                                required
                            />
                        </div>

                        {/* Ocean Proximity Dropdown */}
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="ocean_proximity">
                                Ocean Proximity
                            </label>
                            <select
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="ocean_proximity"
                                name="ocean_proximity"
                                value={formData.ocean_proximity}
                                onChange={handleChange}
                                required
                            >
                                <option value="" disabled>Select Proximity</option>
                                <option value="H OCEAN">H OCEAN(More than 1-Hour Traversal to Ocean)</option>
                                <option value="INLAND">INLAND</option>
                                <option value="ISLAND">ISLAND</option>
                                <option value="NEAR BAY">NEAR BAY</option>
                                <option value="NEAR OCEAN">NEAR OCEAN</option>
                            </select>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="flex items-center justify-center">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Predict
                        </button>
                    </div>
                </form>

                {/* Display error if there's one */}
                {error && (
                    <div className="mt-6 text-red-500">
                        <p>{error}</p>
                    </div>
                )}

                {/* Display prediction result */}
                {prediction !== null && (
                    <div className="mt-6">
                        <h2 className="text-lg font-bold">House Price Prediction Result is ₹</h2>
                        <p className="text-gray-700">{prediction}</p>
                    </div>
                )}
            </div>
        </>
    );
}

export default Form;
