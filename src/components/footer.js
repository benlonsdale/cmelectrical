import React from 'react'
import styled from 'styled-components'
import * as logos from '../images/logos'

const Footer = ({ siteTitle, menuButtonClick }) => (
    <Container
        style={{
            display: 'flex',
            justifyContent: 'space-around',
            padding: '10px',
            minHeight: '90px',
            backgroundColor: '#808080',
        }}
    >
        <div className="content">
            <div className="logo">
                <Logo src={logos.chas} />
            </div>
            <div className="logo">
                <Logo src={logos.compex} />
            </div>
            <div className="logo">
                <Logo src={logos.napit} />
            </div>
            <div className="logo">
                <Logo src={logos.trustmark} />
            </div>
        </div>
    </Container>
)

let Logo = styled.img`
    max-height: 100%;
    max-width: 100%;
    height:auto;
    width: auto;
    margin: 0;
`

const Container = styled.div`
    height: 135px;
    display: flex;
    justify-content: center;
    font-family: sans-serif;
    .content {
        max-width: 960px;
        width: 100%;
        display: flex;
        justify-content: space-between;       
        .logo {
            width: 20%;         
            text-align: center;               
        }
        
    }
    @media screen and (max-width: 500px) {
        height:60px;        
    } 
    
`

export default Footer
