import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import { FieldWrapper, FormTitle } from './Form.styles'

const Form = ({ formData }) => {
  //   const setFormData = () => {
  //     ({ setFormData, type: 'form' })
  //   }
  const [state, setValue] = useState({})

  // const value = useState('')[0]
  // const setValue = useState('')[1]

  const handleChange = (e) => {
    // const newState = {
    //   ...state,
    //   [e.target.name]: e.target.value,
    // }
    // setValue(newState)
    setValue({
      ...state,
      [e.target.name]: e.target.value,
    })
  }

  const handleClick = (e) => {
    console.log(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(JSON.stringify(state))
  }
  return (
    // <FormWrapper className={classes.root} noValidate autoComplete='off'>
    //   <TextField id='outlined-basic' label='Outlined' variant='outlined' />
    // </FormWrapper>
    <div>
      <FormTitle>{formData.modalTitle}</FormTitle>
      <FieldWrapper onSubmit={handleSubmit} value={state}>
        {formData.modalFields.map((element, index) => {
          return (
            <TextField
              name={element.id}
              key={index}
              label={element.placeholder}
              onChange={handleChange}
              variant='outlined'
              placeholder={element.placeholder}
              onClick={handleClick}
              value={state[element.id] || ''}
              fullWidth
            />
          )
        })}
        <button onClick={handleSubmit}>Submit your answer</button>
      </FieldWrapper>
    </div>
  )
}

export default Form
