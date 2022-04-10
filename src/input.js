import React, { useState } from 'react';
import {validate} from './validators';

const INPUT_STATES = {
  UNTOUCHED: 'UNTOUCHED',
  VALID: 'VALID',
  INVALID: 'INVALID'
};

const Input = ({label, validators, errorText, id, type}) => {  
  const [error, setError] = useState(true)

  const handleChange = (e) => {
    const result = validate(e.currentTarget.value, validators)
    console.log(error);
    setError(result)
  }

  return (
     <div className='form-input' data-testid="form-input">
       {(<label htmlFor={id}>{label}</label>)}
       {(<input type={type} id={id} onChange={handleChange}/>)}
       {!error && <p className='alert alert-danger'>{errorText}</p>}
     </div>
   )
};

export default Input;
