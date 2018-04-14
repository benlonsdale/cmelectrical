import React from 'react'
import Link from 'gatsby-link'
import menu from '../images/Menu.svg'
import logo from '../images/logo.png'

const Header = ({ siteTitle, menuButtonClick }) => (
  <div
    style={{
      marginBottom: '1.45rem',
      boxShadow: '#d6d6d6 0px 0px 13px',
      display: 'flex',
      justifyContent: 'space-between',
      minHeight: '135px',
    }}
  >
    <button
      style={{
        border: 'none',
        background: 'none',
      }}
      onClick={menuButtonClick}
    >
      <img src={menu} alt="Menu" style={{ height: '50px', margin: 0 }} />
    </button>
    <div style={{ width: '180px', padding: '5px' }}>
      <Link to='/'>
      <img
        src={logo}
        alt="C&M Electrical (North West) LTD"
        style={{
          width: '100%',
          height: 'auto',
          margin: 0,
        }}
      />
      </Link>
    </div>
  </div>
)

export default Header
