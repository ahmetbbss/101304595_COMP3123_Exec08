import React, { useState } from 'react';
import './lab10.css';



class DataEntryForm extends React.Component {
  state = {
    email: '',
    fullName: '',
    address: '',
    address2: '',
    city: '',
    province: '',
    postalCode: '',
    agreeTerms: false,
    submitted: false, // New state variable to track form submission
  };

  handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    this.setState({
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here
    console.log(this.state);
    this.setState({ submitted: true }); // Set submitted to true after submission
  };

  render() {
    return (
      <div className="data-entry-form">
        <h2>Data Entry Form</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-row">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Enter email" onChange={this.handleChange} />
            <label htmlFor="fullName">Name</label>
            <input type="text" id="fullName" name="fullName" placeholder="Full Name" onChange={this.handleChange} />
          </div>

          <label htmlFor="address">Address</label>
          <input type="text" id="address" name="address" placeholder="1234 Main St" onChange={this.handleChange} />

          <label htmlFor="address2">Address 2</label>
          <input type="text" id="address2" name="address2" placeholder="Apartment, studio, or floor" onChange={this.handleChange} />

          <div className="form-row">
            <label htmlFor="city">City</label>
            <input type="text" id="city" name="city" onChange={this.handleChange} />

            <label htmlFor="province">Province</label>
            <select id="province" name="province" onChange={this.handleChange}>
            <option value="">Choose...</option>
            <option value="AB">Alberta</option>
            <option value="BC">British Columbia</option>
            <option value="MB">Manitoba</option>
            <option value="NB">New Brunswick</option>
            <option value="NL">Newfoundland and Labrador</option>
            <option value="NS">Nova Scotia</option>
            <option value="NT">Northwest Territories</option>
            <option value="NU">Nunavut</option>
            <option value="ON">Ontario</option>
            <option value="PE">Prince Edward Island</option>
            <option value="QC">Quebec</option>
            <option value="SK">Saskatchewan</option>
            <option value="YT">Yukon</option>
              // Add other provinces here
            </select>

            <label htmlFor="postalCode">Postal Code</label>
            <input type="text" id="postalCode" name="postalCode" onChange={this.handleChange} />
          </div>

          <div className="form-row terms">
            <input type="checkbox" id="agreeTerms" name="agreeTerms" onChange={this.handleChange} />
            <label htmlFor="agreeTerms">Agree Terms & Condition?</label>
          </div>

          <input type="submit" value="Submit" />
        </form>
        {this.state.submitted && (
          <div className="submitted-info">
            <h2>Entered Information</h2>
            <p>Email: {this.state.email}</p>
            <p>Name: {this.state.fullName}</p>
            <p>Address: {this.state.address}</p>
            <p>Address 2: {this.state.address2}</p>
            <p>City: {this.state.city}</p>
            <p>Province: {this.state.province}</p>
            <p>Postal Code: {this.state.postalCode}</p>
            <p>Agree Terms: {this.state.agreeTerms ? 'Yes' : 'No'}</p>
          </div>
        )}
      </div>
    );
  }
}

export default DataEntryForm;
