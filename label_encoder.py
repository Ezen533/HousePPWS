from sklearn.preprocessing import OneHotEncoder
import joblib
import numpy as np

# Define the unique categories for ocean proximity
locations = np.array(['H OCEAN']).reshape(-1, 1)

# Initialize OneHotEncoder
one_hot_encoder = OneHotEncoder(sparse_output=False)  # Use sparse_output=False for dense output
one_hot_encoder.fit(locations)

# Save the trained encoder
joblib.dump(one_hot_encoder, 'location_onehot_encoder.pkl')
