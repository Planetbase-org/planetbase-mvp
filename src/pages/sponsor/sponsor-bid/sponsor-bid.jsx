import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Nav from '../../../components/NavBar/Nav'
import { SPONSOR_BID_INPUT} from '../../../utils/formField'
import '../style.css'
import FormInput from '../../../components/FormInput'
import TextArea from '../../../components/TextArea'
import axios from 'axios'

// bidFrom (Name of the sponsor)
// bidTo (Contains the user details of who created the event - organizerId)
// email  (sponsor Email)
// bidDate
// bidAmount: number
// bidDesc(Bid Description)

function SponsorBid () {
  const url = "https://planetbase-api.onrender.com/api/bid-event/create-bid/:id"
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    bid: '',
    description: '',
  })

  const onSubmit = () => {
    e.preventDefault()
    console.log()
    // setFormData({
    //   name: '',
    //   email: '',
    //   phone: '',
    //   bid: '',
    //   description: '',
    // })
    // axios.post(url, formData)
  }
  return (
    <>
      <Nav />
      <form className='sponsor-form'  onSubmit={onSubmit}>
      <h2> Bid for Event</h2>
      <div>
        {
        SPONSOR_BID_INPUT.map((item, index) => {
          return (
            <FormInput
              key={index}
              type={item.type}
              name={item.name}
              placeholder={item.placeholder}
              label={item.label}
            />
          )
        })
      }
      <TextArea
    placeholder='Tell us about your company'
    name='bidDesc'
    label='Bid Description'
      />
      </div>
    
        <button 
        type='submit'
        className='btn-primary'>
        Save and Continue
        </button>
      </form>
    </>
  )
}

export default SponsorBid
