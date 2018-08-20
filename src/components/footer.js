import React from 'react'
import styled from 'styled-components'
import * as logos from '../images/logos'

const Footer = ({ siteTitle, menuButtonClick }) => (
    <Container
        style={{
            marginBottom: '1.45rem',
            boxShadow: '#d6d6d6 0px 0px 13px',
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
    /* height: auto;
    max-height: 60px;
    width: auto;
    max-width: 20%;
    margin-bottom: 0; */
`

const Container = styled.div`
    height: 135px;
    box-shadow: '#d6d6d6 0px 0px 13px';
    display: flex;
    justify-content: center;
    box-shadow: 2px 2px 2px 2px #d6d6d6;
    font-family: sans-serif;
    .content {
        max-width: 960px;
        width: 100%;
        display: flex;
        justify-content: space-between;       
        .logo {
            width: 20%;         
            text-align: center;   
            img {
                max-height: 100%;
                max-width: 100%;
                height:auto;
                width: auto;
            }
        }
        
    }
    @media screen and (max-width: 500px) {
        height:60px;        
    } 
    
`

export default Footer
