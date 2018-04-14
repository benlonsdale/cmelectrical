import React from 'react'
import Link from 'gatsby-link'
import Gallery from '../components/Gallery'

const IndexPage = () => (
  <div>
    <h1>About C&M Electrical</h1>
    <p>
      At C&M Electrical, we specialise in all aspects of domestic and corporate
      electrical work.
    </p>
    <p>
      With over 30 years experience in the industry, C&M should be your first
      choice for all your electrical needs.
    </p>
    <p>C&M Electrical operate out of Preston, Lancashire but we will come to you. Get in touch for a free quote <Link to='/contact'>Contact Us</Link></p>
    <h2>See some of our work</h2>
    <div
      style={{
        boxShadow: '#d6d6d6 0px 5px 13px',
        padding: '5px',
      }}
    >
      <Gallery />
    </div>
  </div>
)

export default IndexPage
