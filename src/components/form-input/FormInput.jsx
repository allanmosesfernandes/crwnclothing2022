import React from 'react'

const FormInput = ({label, ...otherFields}) => {
  return (
    <div className='group'>
    <input className='form-input' {...otherFields} />
        {label && (
        <label className={`${otherFields.value.length ? 'shrink' : ''} form-input-label`}>      {label}
        </label>
        )}
    </div>
  )
}

export default FormInput