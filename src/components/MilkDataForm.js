import React, { useState } from 'react';
import './MilkDataForm.css';
import axios from 'axios';
const MilkDataForm = () => {
  // State to manage the current step
  const [step, setStep] = useState(1);

  // Initialize state for the form inputs
  const [milkData, setMilkData] = useState({
    milkCategory: '',
    quantity: '',
    price: '',
    date: '',
    status: ''
  });

  // State to store user data
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  //for Validation errors
  const [errors, setErrors] = useState({});

  /*   // Initialize state to store the list of added milk records
  const [milkRecords, setMilkRecords] = useState([]); */

  // Handle input change for milk data
  const handleMilkDataChange = (e) => {
    const { name, value } = e.target;
    setMilkData((milkData) => ({
      ...milkData,
      [name]: value
    }));
  };
  // Handle input change for user data
  const handleUserDataChange = (e) => {
    const { name, value } = e.target;
    setUserData((userData) => ({ ...userData, [name]: value }));
  };

  // Validate milk data
  const validateMilkData = () => {
    const errors = {};
    if (!milkData.milkType) errors.milkType = 'Milk type is required';
    if (!milkData.quantity || isNaN(milkData.quantity) || milkData.quantity <= 0)
      errors.quantity = 'Quantity must be a positive number';
    if (!milkData.date) errors.date = 'Date is required';
    return errors;
  };
  // Validate user data
  const validateUserData = () => {
    const errors = {};
    if (!userData.name) errors.name = 'Name is required';
    if (!userData.email || !/\S+@\S+\.\S+/.test(userData.email)) errors.email = 'Valid email is required';
    if (!userData.phone || !/^\d{10}$/.test(userData.phone)) errors.phone = 'Phone number must be 10 digits';
    return errors;
  };
  // Go to the next step
  const nextStep = () => {
    if (step === 1) {
      const milkErrors = validateMilkData();
      if (Object.keys(milkErrors).length > 0) {
        setErrors(milkErrors);
        return;
      }
    }

    setErrors({});
    setStep(step + 1);
  };
  // Go to the previous step
  const prevStep = () => {
    setStep(step - 1);
  };
  // Handle form submission
  const handleSubmit = () => {
    const userErrors = validateUserData();
    if (Object.keys(userErrors).length > 0) {
      setErrors(userErrors);
      return;
    }
    const finalData = {
      ...milkData,
      ...userData
    };
    console.log('Final Data:', finalData);

    // Simulate API call
    const response = axios
      .post(`${process.env.VETA_BASE_URL}/rates`, finalData)
      .then((response) => {
        console.log('API response: ', response);
        alert('Form submitted successfully!');
      })
      .catch((error) => {
        console.error('API Error:', error);
        alert('Failed to submit form. Please try again.');
      });

    // Reset the form inputs after submission
    /* setMilkData({
      milkCategory: '',
      quantity: '',
      price: '',
      date: "",
      status: ''
    }); */
  };
  // Render the form based on the current step
  const renderForm = () => {
    switch (step) {
      case 1:
        return (
          <div className="form-step">
            <h2>Step 1: Milk Data</h2>
            <label>
              Milk Type:
              <input type="text" name="milkType" value={milkData.milkType} onChange={handleMilkDataChange} />
              {errors.milkType && <span className="error">{errors.milkType}</span>}
            </label>
            <br />
            <label>
              Quantity (in liters):
              <input type="number" name="quantity" value={milkData.quantity} onChange={handleMilkDataChange} />
              {errors.quantity && <span className="error">{errors.quantity}</span>}
            </label>
            <br />
            <label>
              Date:
              <input type="date" name="date" value={milkData.date} onChange={handleMilkDataChange} />
              {errors.date && <span className="error">{errors.date}</span>}
            </label>
            <br />
            <button onClick={nextStep}>Next</button>
          </div>
        );
      case 2:
        return (
          <div className="form-step">
            <h2>Step 2: User Data</h2>
            <label>
              Name:
              <input type="text" name="name" value={userData.name} onChange={handleUserDataChange} />
              {errors.name && <span className="error">{errors.name}</span>}
            </label>
            <br />
            <label>
              Email:
              <input type="email" name="email" value={userData.email} onChange={handleUserDataChange} />
              {errors.email && <span className="error">{errors.email}</span>}
            </label>
            <br />
            <label>
              Phone:
              <input type="tel" name="phone" value={userData.phone} onChange={handleUserDataChange} />
              {errors.phone && <span className="error">{errors.phone}</span>}
            </label>
            <br />
            <button onClick={prevStep}>Back</button>
            <button onClick={handleSubmit}>Submit</button>
          </div>
        );

      default:
        return <div>Invalid step</div>;
    }
  };
  return (
    <div className="step-form-container">
      <h1>Multi-Step Form</h1>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${(step / 2) * 100}%` }}></div>
      </div>
      {renderForm()}
    </div>
  );
  /* return (
    <div>
      <h2>Add Milk Data</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="milkCategory">Milk Category: </label>
          <input
            type="text"
            id="milkCategory"
            name="milkCategory"
            value={milkData.milkCategory}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="quantity">Quantity (Liters): </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={milkData.quantity}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="price">Price per Liter: </label>
          <input type="number" id="price" name="price" value={milkData.price} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="status">Status: </label>
          <input type="checkbox" id="status" name="status" value={milkData.status} onChange={handleChange} required />
        </div>
        <button type="submit">Add Milk Data</button>
      </form>
    </div>
  ); */
};

export default MilkDataForm;
