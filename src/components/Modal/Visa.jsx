import React from 'react'
import {CARD_PAYMENT_INPUT} from '../../utils/formField'
import FormInput from '../FormInput'

function Visa() {
  return (
    <div>
    <form>
    <h2>Confirm Payment</h2>
    {
      CARD_PAYMENT_INPUT.map((input, index) => {
        return <FormInput key={index} {...input} />
      })
    }
    <button type="submit" className="btn-primary">Continue</button>
    </form>
    </div>
  )
}

export default Visa