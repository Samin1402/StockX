import React, { useState } from 'react';

const PhoneNumberVerification = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [password, setPassword] = useState('');
  const [verificationError, setVerificationError] = useState('');

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleCountryCodeChange = (e) => {
    setCountryCode(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleVerifyPhoneNumber = () => {
    // Validate the phone number (for example, requiring 10 digits)
    if (phoneNumber.length === 10) {
      // Perform additional verification logic if needed
      setVerificationError('');
    } else {
      setVerificationError('Invalid phone number. Please enter a 10-digit number.');
    }
  };

  const handleContinue = () => {
    // Perform further actions, such as password verification
    console.log('Phone number:', countryCode, phoneNumber);
    console.log('Password:', password);
    // Add your logic to handle the verification process
  };

  return (
    <div className="number-verification-container">
      {/* Phone number input */}
      <div className="number">
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="tel"
          id="phoneNumber"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
        />
      </div>

      {/* Country code selection */}
      <div className="country-code">
        <label htmlFor="countryCode">Country Code:</label>
        <select id="countryCode" value={countryCode} onChange={handleCountryCodeChange}>
          <option value="+1">+1 (United States)</option>
          <option value="+44">+44 (United Kingdom)</option>
          {/* Add more country code options as needed */}
        </select>
      </div>

      {/* Password input */}
      <div className="password">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>

      {/* Verification error message */}
      {verificationError && (
        <div className="verification-error">
          {verificationError}
        </div>
      )}

      {/* Verify button */}
      <button onClick={handleVerifyPhoneNumber}>Verify Phone Number</button>

      {/* Continue button (conditionally rendered based on successful verification) */}
      {verificationError === '' && (
        <button onClick={handleContinue}>Continue</button>
      )}
    </div>
  );
};

export default PhoneNumberVerification;
