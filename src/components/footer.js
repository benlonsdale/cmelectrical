import React from 'react';
import styled from 'styled-components'
import * as logos from '../images/logos';

const Footer = ({ siteTitle, menuButtonClick }) => (
  <div
    style={{
      marginBottom: '1.45rem',
      boxShadow: '#d6d6d6 0px 0px 13px',
      display: 'flex',
      justifyContent: 'space-around',
      padding: '10px',
      minHeight: '90px',
        backgroundColor: '#808080'
    }}
  >
        <Logo src={logos.chas} />
        <Logo src={logos.compex} />
        <Logo src={logos.napit} />
        <Logo src={logos.trustmark} />
  </div>
)

let Logo = styled.img`
height: auto;
    max-height: 60px;
    width: auto;
    max-width: 20%;
    margin-bottom: 0;
`

export default Footer
