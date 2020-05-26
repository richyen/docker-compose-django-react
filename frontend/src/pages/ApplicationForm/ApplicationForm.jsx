import React, {useState} from 'react';

import { Input } from 'semantic-ui-react';
import { requests } from '../../utils/agent';

const useApplicationForm = (callback) => {
  const [inputs, setInputs] = useState({
    "gender": "M"
  });

  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }
    callback();
  }
  
  const handleInputChange = (event) => {
    event.persist();
    setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
  }

  return {
    handleSubmit,
    handleInputChange,
    inputs
  }
}

const ApplicationForm = () => {
  const signup = () => {
    requests.post('applicationForms/', inputs).then(
      (response) => {
        alert("Successfully Posted");
        // TODO: Need to replace this alert with a toast or better notification, redirect, etc.
        console.log(response);
      },
      (error) => {
        // TODO: need to display feedbacks, not sure the best way to do this
        console.log(error.response.body);
      });
  }

  const {inputs, handleInputChange, handleSubmit} = useApplicationForm(signup);

  return (
    <div>
      <p>Frontend Team: change what you need, let me know if you have questions - Krikor</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            First name
          </label>
          <Input name="first_name" type="text" onChange={handleInputChange} value={inputs.first_name}/>
          <br />
          <label class="col-sm-2 control-label ">
            Last name
          </label>
          <Input name="last_name" class="form-control" type="text" onChange={handleInputChange} value={inputs.last_name} />
          <br />
          <label>
            Gender
          </label>
          <select name="gender" onChange={handleInputChange} value={inputs.gender}>
            <option value="M" selected>Male</option>
            <option value="F">Female</option>
          </select>
          <br />
          <label>
            Nationality
          </label>
          <Input name="nationality" type="text" onChange={handleInputChange} value={inputs.nationality}   />
          <br />
          <label>
            Location
          </label>
          <Input name="location" type="text"  onChange={handleInputChange} value={inputs.location} />
          <br />
          <label>
            Email
          </label>
          <br />
          <Input name="email" type="email" onChange={handleInputChange} value={inputs.email} />
          <label>
            Phone
          </label>
          <br />
          <Input name="phone" type="text" onChange={handleInputChange} value={inputs.phone} />
          <br />
          <button type="submit">POST</button>
        </div>
      </form>
    </div>
  );
};

export default ApplicationForm;
