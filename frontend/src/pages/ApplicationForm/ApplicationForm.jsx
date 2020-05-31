import React, { useState } from 'react';
import Section from '../../layout/Section';
import { Button, Input, Form, Select } from 'semantic-ui-react';
import SemanticDatepicker from 'react-semantic-ui-datepickers';
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';
import { requests } from '../../utils/agent';
const useApplicationForm = callback => {
  // Set defaults
  const [inputs, setInputs] = useState({
    gender: 'male'
  });
  const handleSubmit = event => {
    if (event) {
      event.preventDefault();
    }
    callback();
  };
  const handleInputChange = (event, data) => {
    setInputs(inputs => ({
      ...inputs,
      [data.name]: data.value
    }));
  };
  return {
    handleSubmit,
    handleInputChange,
    inputs
  };
};
const genderOptions = [
  { key: 'm', text: 'Male', value: 'M' },
  { key: 'f', text: 'Female', value: 'F' },
];
const gradeLevelOptions = [
  { key: 'hs', text: 'High School / Secondary', value: 'high_school' },
  { key: 'under', text: 'Undergrad', value: 'undergraduate' },
  { key: 'ex', text: 'Exchange Student', value: 'exchange' },
  { key: 't', text: 'Transfer Student', value: 'transfer' },
  { key: 'g', text: 'Graduate Student', value: 'graduate' }
];
const referralOptions = [
  { key: 'f', text: 'Friend', value: 'friend' },
  { key: 't', text: 'Teacher', value: 'teacher' },
  { key: 'p', text: 'Parent', value: 'parent' },
  { key: 's', text: 'School or Prep School', value: 'school' },
  { key: 'sm', text: 'Social Media', value: 'socialMedia' },
  { key: 'i', text: 'Internet', value: 'internet' },
  { key: 'o', text: 'Other', value: 'other' }
];
const topicsOptions = [
  { key: 'e', text: 'Practicing / Improving English', value: 'english' },
  { key: 'fr', text: 'Making American Friends', value: 'friends' },
  {
    key: 'c',
    text: 'Connecting with other International Students',
    value: 'connecting'
  },
  { key: 'j', text: 'Getting a Job / Internship in America', value: 'job' },
  { key: 'a', text: 'Adjusting to American Culture', value: 'culture' },
  { key: 't', text: 'Travelling', value: 'travelling' },
  { key: 'o', text: 'Other', value: 'other' }
];
const ApplicationForm = () => {
  const signup = () => {
    requests.post('applicationForms/', inputs).then(
      response => {
        alert('Successfully Posted');
        // TODO: Need to replace this alert with a toast or better notification, redirect, etc.
        console.log(response);
      },
      error => {
        // TODO: need to display feedbacks, not sure the best way to do this
        console.log(error.response.body);
      }
    );
  };
  const { inputs, handleInputChange, handleSubmit } = useApplicationForm(
    signup
  );
  return (
    <div>
      <Section>
        <Form size="massive" onSubmit={handleSubmit}>
          <h2>Section 1: Personal and Contact Information</h2>
          <Form.Group widths="equal">
            <Form.Field
              required
              id="form-input-control-first-name"
              control={Input}
              label="First name"
              placeholder="First name"
              name="first_name"
              type="text"
              onChange={handleInputChange}
              value={inputs.first_name}
            />
            <Form.Field
              required
              id="form-input-control-last-name"
              control={Input}
              label="Last name"
              placeholder="Last name"
              name="last_name"
              type="text"
              onChange={handleInputChange}
              value={inputs.last_name}
            />
            <Form.Field
              id="form-input-control-preferred-name"
              control={Input}
              label="Preferred name"
              placeholder="Preferred name"
              name="preferred_name"
              type="text"
              onChange={handleInputChange}
              value={inputs.preferred_name}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Field
              required
              control={Select}
              options={genderOptions}
              label={{
                children: 'Gender',
                htmlFor: 'form-select-control-gender'
              }}
              placeholder="Gender"
              name="gender"
              onChange={handleInputChange}
              value={inputs.gender}
            />
            <SemanticDatepicker
              required
              label="Birthday"
              name="birth_date"
              id="form-input-control-birthday"
              onChange={handleInputChange}
              value={inputs.birth_date}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Field
              required
              id="form-input-control-country"
              control={Input}
              label="Country of Origin"
              placeholder="Country of Origin"
              name="country_of_origin"
              type="text"
              onChange={handleInputChange}
              value={inputs.country_of_origin}
            />
            <Form.Field
              required
              id="form-input-control-email"
              control={Input}
              label="Email"
              placeholder="Email"
              name="email"
              type="email"
              onChange={handleInputChange}
              value={inputs.email}
            />
            <Form.Field
              required
              id="form-input-control-phone"
              control={Input}
              label="Phone"
              placeholder="Phone"
              name="phone"
              type="text"
              onChange={handleInputChange}
              value={inputs.phone}
            />
          </Form.Group>
          <br />
          <h2>Section 2: Academic Information</h2>
          <h3>Current School Information</h3>
          <Form.Group widths="equal">
            <Form.Field
              required
              control={Select}
              options={gradeLevelOptions}
              label={{
                children: 'Grade Level',
                htmlFor: 'form-select-control-current-grade-level'
              }}
              placeholder="Grade Level"
              search
              searchInput={{ id: 'form-select-control-current-grade-level' }}
              name="grade_level"
              onChange={handleInputChange}
              value={inputs.grade_level}
            />
            <Form.Field
              required
              id="form-input-control-current-school-name"
              control={Input}
              label="School Name"
              placeholder="School Name"
              name="school_name"
              type="text"
              onChange={handleInputChange}
              value={inputs.school_name}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Field
              required
              id="form-input-control-current-school-city"
              control={Input}
              label="School City"
              placeholder="City"
              name="school_city"
              type="text"
              onChange={handleInputChange}
              value={inputs.school_city}
            />
            <Form.Field
              required
              id="form-input-control-current-school-state"
              control={Input}
              label="School State / Province"
              placeholder="State / Province"
              name="school_state"
              type="text"
              onChange={handleInputChange}
              value={inputs.school_state}
            />
            <Form.Field
              required
              id="form-input-control-current-school-country"
              control={Input}
              label="School Country"
              placeholder="Country"
              name="school_country"
              type="text"
              onChange={handleInputChange}
              value={inputs.school_country}
            />
          </Form.Group>
          <p>If attending a new U.S. school next school term:</p>
          <Form.Group widths="equal">
            <Form.Field
              id="form-input-control-new-us-school-name"
              control={Input}
              label="US School Name"
              placeholder="School Name"
              name="destination_school"
              type="text"
              onChange={handleInputChange}
              value={inputs.destination_school}
            />
            <Form.Field
              id="form-input-control-school-major"
              control={Input}
              label="Current or Future Major"
              placeholder="Major"
              name="major"
              type="text"
              onChange={handleInputChange}
              value={inputs.major}
            />
          </Form.Group>
          <br />
          <h2>Section 3: Mentorship Information</h2>
          <Form.Group widths="equal">
            <Form.Field
              required
              control={Select}
              options={referralOptions}
              label={{
                children: 'How Did You Hear About Us',
                htmlFor: 'form-select-control-referral'
              }}
              placeholder="Referral"
              search
              searchInput={{ id: 'form-select-control-referral' }}
              name="referral"
              onChange={handleInputChange}
              value={inputs.referral}
            />
          </Form.Group>
          {/* <Form.Group grouped>
            <label>Choose up to 3 topics Interested in:</label>
            {topicsOptions.map(topic => {
              return (
                <Form.Checkbox
                  label={topic.text}
                  value={topic.value}
                  key={topic.key}
                  control="input"
                  type="checkbox"
                />
              );
            })}
          </Form.Group> */}
          <Form.TextArea
            label="What would you like to gain or learn from ISMP?"
            placeholder="What would you like to gain or learn from ISMP?"
            name="goals"
            type="text"
            onChange={handleInputChange}
            value={inputs.goals}
          />
          <Form.TextArea
            label="Questions / Comments"
            placeholder="Questions / Comments"
            name="additional_input"
            type="text"
            onChange={handleInputChange}
            value={inputs.additional_input}
          />
          <br />
          <Form.Field
            id="form-button-control-public"
            control={Button}
            content="Submit Application"
            type="submit"
            primary
            size="massive"
          />
        </Form>
      </Section>
      <p>
        Frontend Team: change what you need, let me know if you have questions -
        Krikor
      </p>
    </div>
  );
};
export default ApplicationForm;