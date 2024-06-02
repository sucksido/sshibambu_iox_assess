import React, { useEffect, useState } from 'react';
import { getVehicles, deleteVehicle } from '../services/api';

const VehicleList = ({ onEdit }) => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    fetchVehicles();
  }, []);

  const fetchVehicles = async () => {
    try {
      const response = await getVehicles();
      setVehicles(response.data);
    } catch (error) {
      console.error('Error fetching vehicles:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteVehicle(id);
      fetchVehicles();
    } catch (error) {
      console.error('Error deleting vehicle:', error);
    }
  };

  return (
    <div>
      <h2>Vehicle List</h2>
      <ul>
        {vehicles.map(vehicle => (
          <li key={vehicle.id}>
            {vehicle.id} - VIN: {vehicle.vin}
            <button onClick={() => onEdit(vehicle.id)}>Edit</button>
            <button onClick={() => handleDelete(vehicle.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VehicleList;