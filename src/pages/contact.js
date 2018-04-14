import React from 'react'
import Link from 'gatsby-link'
import Profile from '../components/Profile'

const SecondPage = () => (
  <div>
    <h1>Contact Us</h1>
    <p>Please get in touch for a free quote. We will travel nationwide as required.</p>
    <div style={{display: 'flex', flexWrap: 'wrap'}}>
      <Profile 
        name="Stuart Clark"
        email="sclark.cm@outlook.com"
        tel="07943 055381"
      />
      <Profile 
        name="David McGuigan"
        email="dmcguigan.cm@outlook.com"
        tel="07581 457909"
      />
    </div>
  </div>
)

export default SecondPage
