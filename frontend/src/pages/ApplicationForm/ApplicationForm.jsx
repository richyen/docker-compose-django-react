import React, { useState, useEffect } from 'react';
import Section from '../../layout/Section';
import {
  Button,
  Input,
  Form,
  Select,
  Step,
  Container
} from 'semantic-ui-react';

// TODO: Remove date picker, use https://arfedulov.github.io/semantic-ui-calendar-react/
import SemanticDatepicker from 'react-semantic-ui-datepickers';
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';

import { requests } from '../../utils/agent';

import {
  appFormStep,
  genderOptions,
  gradeLevelOptions,
  referralOptions
} from './ApplicationOptions';

//const DEBUG = true;

const useApplicationForm = callback => {
  // Set defaults
  const [inputs, setInputs] = useState({
    gender: undefined,
    birth_date: undefined
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

const useApplicationFormFeedback = callback => {
  const [feedbacks, setFeedbacks] = useState({});

  const handleFeedbackChange = (fieldName, feedback) => {
    setFeedbacks(feedbacks => ({
      ...feedbacks,
      [fieldName]: feedback
    }));
  };

  const checkValid = () => {
    console.log('checking validity');
    console.log(Object.values(feedbacks));
    console.log(Object.values(feedbacks).every(feedback => !feedback));
    return Object.values(feedbacks).every(feedback => !feedback);
  };

  return {
    checkValid,
    handleFeedbackChange,
    feedbacks
  };
};

const ApplicationForm = props => {
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

  // feedback
  const { feedbacks, handleFeedbackChange } = useApplicationFormFeedback(
    undefined
  );

  const validations = {
    validateNotBlank: (fieldName, value) => {
      if (!value) {
        handleFeedbackChange(fieldName, 'cannot be blank');
        return false;
      } else {
        handleFeedbackChange(fieldName, '');
        return true;
      }
    },
    validateEmail: (fieldName, value) => {
      const re = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;

      if (!re.test(value)) {
        handleFeedbackChange(
          fieldName,
          'please enter email in format email@site.com'
        );
        return false;
      } else {
        handleFeedbackChange(fieldName, '');
        return true;
      }
    },
    validatePhone: (fieldName, value) => {
      const re = /^\+?1?\d{9,15}$/;

      if (!re.test(value)) {
        handleFeedbackChange(
          fieldName,
          'Please enter phone in format +999999999'
        );
        return false;
      } else {
        handleFeedbackChange(fieldName, '');
        return true;
      }
    }
  };

  const fieldValidations = {
    first_name: [validations.validateNotBlank],
    last_name: [validations.validateNotBlank],
    preferred_name: [],
    birth_date: [validations.validateNotBlank],
    gender: [validations.validateNotBlank],
    country_of_origin: [validations.validateNotBlank],
    email: [validations.validateNotBlank, validations.validateEmail], // TODO: validate email format
    phone: [validations.validateNotBlank, validations.validatePhone], // TODO: validate phone format
    grade_level: [validations.validateNotBlank],
    school_name: [validations.validateNotBlank],
    school_city: [validations.validateNotBlank],
    school_state: [validations.validateNotBlank],
    school_country: [validations.validateNotBlank],
    major: [validations.validateNotBlank],
    referral: [validations.validateNotBlank],
    goals: [validations.validateNotBlank],
    additional_comments: []
  };

  const validateField = (fieldName, value) => {
    console.log(`validating field ${fieldName} for value ${value}`);
    let valid = true;

    if (!fieldValidations[fieldName]) {
      // TODO not sure if this is safe
      throw new Error(`No validation defined for ${fieldName}`);
    }

    fieldValidations[fieldName].forEach(validation => {
      let validationResult = validation(fieldName, value);
      if (!validationResult) valid = false;
    });

    return valid;
  };

  const validateStep = step => {
    let fields = [];
    if (step === 1) {
      fields = [
        'first_name',
        'last_name',
        'preferred_name',
        'gender',
        'birth_date',
        'country_of_origin',
        'email',
        'phone'
      ];
    } else if (step === 2) {
      fields = [
        'grade_level',
        'school_name',
        'school_city',
        'school_state',
        'school_country',
        'school_name',
        'major'
      ];
    } else if (step === 3) {
      fields = ['referral', 'goals', 'additional_comments'];
    }

    let valid = true;

    fields.forEach(field => {
      let validationResult = validateField(field, inputs[field]);
      if (!validationResult) valid = false;
    });

    return valid;
  };

  const handleValidateOnBlur = event => {
    const fieldName = event.target.name;
    const value = event.target.value;

    validateField(fieldName, value);
  };

  const renderError = fieldName => {
    return feedbacks[fieldName]
      ? {
          content: feedbacks[fieldName],
          pointing: 'above'
        }
      : undefined;
  };

  // Step Application
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = appFormStep.length;
  const [nextButtonLabel, setNextButtonLabel] = useState('Next');

  useEffect(() => {
    currentStep === 3
      ? setNextButtonLabel('Submit')
      : setNextButtonLabel('Next');
  }, [currentStep]);

  const stepClick = action => {
    if (action === 'prev' && currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }

    if (action === 'next' && currentStep < totalSteps) {
      if (validateStep(currentStep)) {
        setCurrentStep(currentStep + 1);
      }
    }

    // Submit Form
    if (action === 'next' && currentStep === 3) {
      if (validateStep(currentStep)) {
        props.history.push('/application-form-success');
        handleSubmit();
      }
    }
  };

  const appStepList = appFormStep.map(step => {
    return (
      <Step
        key={step.icon}
        className={step.num === currentStep ? 'active' : null}
      >
        <Step.Content>
          <Step.Title>{step.title}</Step.Title>
        </Step.Content>
      </Step>
    );
  });

  return (
    <Container>
      <Section>
        <Step.Group size="medium">{appStepList}</Step.Group>

        <Form size="large" onSubmit={handleSubmit}>
          {currentStep === 1 && (
            <div id="personalInfo">
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
                  onBlur={handleValidateOnBlur}
                  onChange={handleInputChange}
                  value={inputs.first_name}
                  error={renderError('first_name')}
                />
                <Form.Field
                  required
                  id="form-input-control-last-name"
                  control={Input}
                  label="Last name"
                  placeholder="Last name"
                  name="last_name"
                  onBlur={handleValidateOnBlur}
                  type="text"
                  onChange={handleInputChange}
                  value={inputs.last_name}
                  error={renderError('last_name')}
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
                  onBlur={() => {
                    validateField('gender', inputs.gender);
                  }}
                  onChange={handleInputChange}
                  value={inputs.gender}
                  error={renderError('gender')}
                />
                {/* TODO: This field has 2 bugs: */}
                {/* onBlur doesn't work */}
                {/* it's not the same size as all the other fields in the mobile view */}
                {/* the error label shows up to the right rather than the bottom */}
                {/* Potentially we can try a different datepicker library? */}
                <Form.Field
                  required
                  control={SemanticDatepicker}
                  label={{
                    children: 'Birthday'
                    // htmlFor: 'something'
                  }}
                  name="birth_date"
                  onBlur={() => validateField('birth_date', inputs.birth_date)}
                  id="form-input-control-birthday"
                  onChange={handleInputChange}
                  value={inputs.birth_date}
                  error={renderError('birth_date')}
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
                  onBlur={handleValidateOnBlur}
                  onChange={handleInputChange}
                  value={inputs.country_of_origin}
                  error={renderError('country_of_origin')}
                />
                <Form.Field
                  required
                  id="form-input-control-email"
                  control={Input}
                  label="Email"
                  placeholder="Email"
                  name="email"
                  type="email"
                  onBlur={handleValidateOnBlur}
                  onChange={handleInputChange}
                  value={inputs.email}
                  error={renderError('email')}
                />
                <Form.Field
                  required
                  id="form-input-control-phone"
                  control={Input}
                  label="Phone"
                  placeholder="Phone"
                  name="phone"
                  type="text"
                  onBlur={handleValidateOnBlur}
                  onChange={handleInputChange}
                  value={inputs.phone}
                  error={renderError('phone')}
                />
              </Form.Group>
            </div>
          )}
          <br />
          {currentStep === 2 && (
            <div id="academicInfo">
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
                  searchInput={{
                    id: 'form-select-control-current-grade-level'
                  }}
                  name="grade_level"
                  onBlur={() =>
                    validateField('grade_level', inputs.grade_level)
                  }
                  onChange={handleInputChange}
                  value={inputs.grade_level}
                  error={renderError('grade_level')}
                />
                <Form.Field
                  required
                  id="form-input-control-current-school-name"
                  control={Input}
                  label="School Name"
                  placeholder="School Name"
                  name="school_name"
                  type="text"
                  onBlur={handleValidateOnBlur}
                  onChange={handleInputChange}
                  value={inputs.school_name}
                  error={renderError('school_name')}
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
                  onBlur={handleValidateOnBlur}
                  onChange={handleInputChange}
                  value={inputs.school_city}
                  error={renderError('school_city')}
                />
                <Form.Field
                  required
                  id="form-input-control-current-school-state"
                  control={Input}
                  label="School State / Province"
                  placeholder="State / Province"
                  name="school_state"
                  type="text"
                  onBlur={handleValidateOnBlur}
                  onChange={handleInputChange}
                  value={inputs.school_state}
                  error={renderError('school_state')}
                />
                <Form.Field
                  required
                  id="form-input-control-current-school-country"
                  control={Input}
                  label="School Country"
                  placeholder="Country"
                  name="school_country"
                  type="text"
                  onBlur={handleValidateOnBlur}
                  onChange={handleInputChange}
                  value={inputs.school_country}
                  error={renderError('school_country')}
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
                  onBlur={handleValidateOnBlur}
                  onChange={handleInputChange}
                  value={inputs.major}
                  error={renderError('major')}
                />
              </Form.Group>
            </div>
          )}
          <br />

          {currentStep === 3 && (
            <div id="mentorshipInterest">
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
                  onBlur={() => validateField('referral', inputs.referral)}
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
            </div>
          )}
          <br />

          <Button.Group id="actionButtons" horizontal="true">
            <Button
              id="form-button-control-previous"
              control={Button}
              disabled={currentStep === 1}
              content="Previous"
              primary
              type="button"
              size="large"
              onClick={() => stepClick('prev')}
              style={{ marginRight: '10px' }}
            />
            <Button
              id="form-button-control-next"
              control={Button}
              content={nextButtonLabel}
              primary
              type="button"
              size="large"
              onClick={() => stepClick('next')}
            />
          </Button.Group>
        </Form>
      </Section>
    </Container>
  );
};
export default ApplicationForm;
