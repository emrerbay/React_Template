import React, { useState } from 'react'

import { Form, Field } from '@progress/kendo-react-form'
import { Window } from '@progress/kendo-react-dialogs'
import { Button } from '@progress/kendo-react-buttons'
import validator from '~/utils/validator'
import {
  FormInput,
  FormDropDown,
  FormCheckbox,
  FormDatePicker,
} from '~/components/FormElements'

const genders = ['Male', 'Female', 'Other']

const EditDialog = ({ dataItem, cancel, save }) => {
  const [{ productInEdit }] = useState({
    productInEdit: dataItem || { first_name: '', last_name: '' },
  })

  return (
    <Window onClose={cancel} initialWidth={450} initialHeight={450}>
      <Form
        initialValues={productInEdit}
        onSubmit={save}
        render={(formRenderProps) => (
          <form onSubmit={formRenderProps.onSubmit} className={'k-form'}>
            <fieldset>
              <div className="mb-3">
                <Field
                  name={'first_name'}
                  component={FormInput}
                  label={'First name'}
                  validator={validator.text}
                  style={{ width: '100%' }}
                />
              </div>
              <div className="mb-3">
                <Field
                  name={'last_name'}
                  component={FormInput}
                  label={'Last name'}
                  type={'text'}
                  validator={validator.text}
                  style={{ width: '100%' }}
                />
              </div>
              <div className="mb-3">
                <Field
                  name={'email'}
                  component={FormInput}
                  label={'Email'}
                  validator={validator.email}
                  style={{ width: '100%' }}
                />
              </div>
              <div className="mb-3">
                <Field
                  name={'gender'}
                  data={genders}
                  component={FormDropDown}
                  validator={validator.required}
                  label={'Gender'}
                  style={{ width: '100%' }}
                />
              </div>
              <div className="mb-3">
                <Field
                  name={'isMember'}
                  component={FormCheckbox}
                  validator={validator.required}
                  label={'Is Member'}
                  // style={{ width: '100%' }}
                />
              </div>
              <div className="mb-3">
                <Field
                  name={'birthdate'}
                  component={FormDatePicker}
                  label={'Birthdate'}
                  style={{ width: '100%' }}
                />
              </div>
              <div className="mb-3">
                <Field
                  name={'identification_number'}
                  component={FormInput}
                  label={'Identification Number'}
                  validator={validator.number}
                  style={{ width: '100%' }}
                />
              </div>
            </fieldset>
            <div className="text-right">
              <Button onClick={cancel}>Cancel</Button>
              <Button type={'submit'} primary>
                Submit
              </Button>
            </div>
          </form>
        )}
      />
    </Window>
  )
}

export default EditDialog
