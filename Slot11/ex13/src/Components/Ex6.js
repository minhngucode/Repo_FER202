import React, { useState, useEffect } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";

function Ex6() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [agreed, setAgreed] = useState(false);

  const [nameError, setNameError] = useState("");
  const [genderError, setGenderError] = useState("");
  const [countryError, setCountryError] = useState("");
  const [agreedError, setAgreedError] = useState("");

  const [isFormValid, setIsFormValid] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (name.trim().length < 3) {
      setNameError("Name must be at least 3 characters long.");
    } else {
      setNameError("");
    }

    // if (!gender) {
    //   setGenderError("Please select a gender.");
    // } else {
    //   setGenderError("");
    // }

    // if (!country) {
    //   setCountryError("Please select a country.");
    // } else {
    //   setCountryError("");
    // }

    if (!agreed) {
      setAgreedError("You must agree to the terms and conditions.");
    } else {
      setAgreedError("");
    }

    if (
      name.trim().length >= 3 &&
      gender !== "" &&
      country !== "" &&
      agreed &&
      nameError === "" &&
      genderError === "" &&
      countryError === "" &&
      agreedError === ""
    ) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [name, gender, country, agreed, nameError, genderError, countryError, agreedError]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      setShowAlert(true);
    }
  };

  return (
    <Container className="mt-4">
      <h3 className="mb-3">Registration Form</h3>
      {showAlert && (
        <Alert variant="success" dismissible onClose={() => setShowAlert(false)}>
          Form is valid. Proceed to submit data...
        </Alert>
      )}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            isInvalid={!!nameError}
            isValid={name.trim().length >= 3 && !nameError}
          />
          <Form.Control.Feedback type="invalid">
            {nameError}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formGender" className="mt-3">
          <Form.Label>Gender</Form.Label>
          <div>
            <Form.Check
              type="radio"
              label="Male"
              name="gender"
              value="Male"
              checked={gender === "Male"}
              onChange={(e) => setGender(e.target.value)}
              isInvalid={!!genderError}
            />
            <Form.Check
              type="radio"
              label="Female"
              name="gender"
              value="Female"
              checked={gender === "Female"}
              onChange={(e) => setGender(e.target.value)}
              isInvalid={!!genderError}
            />
            <Form.Check
              type="radio"
              label="Other"
              name="gender"
              value="Other"
              checked={gender === "Other"}
              onChange={(e) => setGender(e.target.value)}
              isInvalid={!!genderError}
            />
          </div>
          {genderError && (
            <div className="invalid-feedback d-block">{genderError}</div>
          )}
        </Form.Group>

        <Form.Group controlId="formCountry" className="mt-3">
          <Form.Label>Country</Form.Label>
          <Form.Select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            isInvalid={!!countryError}
            isValid={country !== "" && !countryError}
          >
            <option value="">-- Select a country --</option>
            <option value="Da Nang">Da Nang</option>
            <option value="Ha Noi">Ha Noi</option>
            <option value="Ho Chi Minh">Ho Chi Minh</option>
          </Form.Select>
          <Form.Control.Feedback type="invalid">
            {countryError}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formAgreement" className="mt-3">
          <Form.Check
            type="checkbox"
            label="I agree to the terms and conditions"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            isInvalid={!!agreedError}
          />
          {agreedError && (
            <div className="invalid-feedback d-block">{agreedError}</div>
          )}
        </Form.Group>
        <Button
          type="submit"
          variant="primary"
          className="mt-3"
          disabled={!isFormValid}
        >
          Submit
        </Button>
      </Form>
    </Container>
  );
}
export default Ex6;
