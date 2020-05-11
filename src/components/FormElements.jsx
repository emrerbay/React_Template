import React from 'react'
import styled from 'styled-components'
import { Input, Checkbox } from '@progress/kendo-react-inputs'
import { DatePicker } from '@progress/kendo-react-dateinputs'
import { DropDownList } from '@progress/kendo-react-dropdowns'

const RequiredMessage = styled.div`
  color: #f31700;
`

const FormInput = (fieldRenderProps) => {
  const { validationMessage, visited, ...others } = fieldRenderProps
  return (
    <div>
      <Input {...others} />
      {visited && validationMessage && (
        <RequiredMessage>{validationMessage}</RequiredMessage>
      )}
    </div>
  )
}

const FormCheckbox = (fieldRenderProps) => {
  const { validationMessage, visited, ...others } = fieldRenderProps
  return (
    <div>
      <Checkbox {...others} />
      {visited && validationMessage && (
        <RequiredMessage>{validationMessage}</RequiredMessage>
      )}
    </div>
  )
}

const FormDropDown = (fieldRenderProps) => {
  const { validationMessage, visited, ...others } = fieldRenderProps
  return (
    <div>
      <DropDownList {...others} />
      {visited && validationMessage && (
        <RequiredMessage>{validationMessage}</RequiredMessage>
      )}
    </div>
  )
}

const FormDatePicker = (fieldRenderProps) => {
  return (
    <DatePicker
      format={'dd/MM/yyyy'}
      value={
        fieldRenderProps.value === undefined
          ? new Date()
          : new Date(fieldRenderProps.value)
      }
      onChange={fieldRenderProps.onChange}
    />
  )
}

export { FormInput, FormCheckbox, FormDropDown, FormDatePicker }
