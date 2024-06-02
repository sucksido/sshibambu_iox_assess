import React, { useState, useEffect } from 'react';
import { createVehicle, updateVehicle, getVehicleById } from '../services/api';

const VehicleForm = ({ vehicleId, onSave }) => {
  const [vehicle, setVehicle] = useState({
    userId: '',
    vin: '',
    licenseNumber: '',
    plateNumber: '',
    licenseExpiry: '',
    model: '',
    color: '',
  });

  useEffect(() => {
    if (vehicleId) {
      fetchVehicle(vehicleId);
    }
  }, [vehicleId]);

  const fetchVehicle = async (id) => {
    try {
      const response = await getVehicleById(id);
      setVehicle(response.data);
    } catch (error) {
      console.error('Error fetching vehicle:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVehicle({ ...vehicle, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (vehicleId) {
        await updateVehicle(vehicleId, vehicle);
      } else {
        await createVehicle(vehicle);
      }
      onSave();
    } catch (error) {
      console.error('Error saving vehicle:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{vehicleId ? 'Edit Vehicle' : 'Add Vehicle'}</h2>
      <input
        type="text"
        name="userId"
        value={vehicle.userId}
        onChange={handleChange}
        placeholder="User ID"
        required
      />
      <input
        type="text"
        name="vin"
        value={vehicle.vin}
        onChange={handleChange}
        placeholder="VIN"
        required
      />
      <input
        type="text"
        name="licenseNumber"
        value={vehicle.licenseNumber}
        onChange={handleChange}
        placeholder="License Number"
        required
      />
      <input
        type="text"
        name="plateNumber"
        value={vehicle.plateNumber}
        onChange={handleChange}
        placeholder="Plate Number"
        required
      />
      <input
        type="date"
        name="licenseExpiry"
        value={vehicle.licenseExpiry}
        onChange={handleChange}
        placeholder="License Expiry"
        required
      />
      <input
        type="text"
        name="model"
        value={vehicle.model}
        onChange={handleChange}
        placeholder="Model"
        required
      />
      <input
        type="text"
        name="color"
        value={vehicle.color}
        onChange={handleChange}
        placeholder="Color"
        required
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default VehicleForm;
