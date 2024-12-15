import React, { useEffect, useState } from 'react';
import './App.css';
import { db } from './config/firestore';
import { collection, addDoc } from 'firebase/firestore';

function App() {
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleSelection = async (id) => {
    const item = data.find((item) => item.id === parseInt(id));
    setSelectedItem(item);

    try {
      const docRef = await addDoc(collection(db, 'users'), item);
      console.log('Document written with ID: ', docRef.id);
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  return (
    <div className="App">
      <h1>React Dropdown with API Data</h1>

      {/* Dropdown */}
      <select onChange={(e) => handleSelection(e.target.value)} defaultValue="">
        <option value="" disabled>Select a name</option>
        {data.map((item) => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>

      {/* Table for selected data */}
      {selectedItem && (
        <div>
          <h2>Details</h2>
          <table>
            <thead>
              <tr>
                <th>Field</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ID</td>
                <td>{selectedItem.id}</td>
              </tr>
              <tr>
                <td>Name</td>
                <td>{selectedItem.name}</td>
              </tr>
              <tr>
                <td>Username</td>
                <td>{selectedItem.username}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{selectedItem.email}</td>
              </tr>
              <tr>
                <td>Phone</td>
                <td>{selectedItem.phone}</td>
              </tr>
              <tr>
                <td>Website</td>
                <td>{selectedItem.website}</td>
              </tr>
              <tr>
                <td>Address (Street)</td>
                <td>{selectedItem.address.street}</td>
              </tr>
              <tr>
                <td>Address (Suite)</td>
                <td>{selectedItem.address.suite}</td>
              </tr>
              <tr>
                <td>Address (City)</td>
                <td>{selectedItem.address.city}</td>
              </tr>
              <tr>
                <td>Address (Zipcode)</td>
                <td>{selectedItem.address.zipcode}</td>
              </tr>
              <tr>
                <td>Company (Name)</td>
                <td>{selectedItem.company.name}</td>
              </tr>
              <tr>
                <td>Company (Catchphrase)</td>
                <td>{selectedItem.company.catchPhrase}</td>
              </tr>
              <tr>
                <td>Company (BS)</td>
                <td>{selectedItem.company.bs}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default App;