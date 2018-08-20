import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
// import menu from '../images/Menu.svg'
import logo from '../images/logo.png'
import { slide as Menu } from 'react-burger-menu'

export default class Header extends React.Component{

    constructor(){
        super()
        this.state = {
            open: false
        }
    }
    
    render(){
        let { siteTitle, menuButtonClick, pages } = this.props;
        return (
            
            <div style={{}}>
                <TopBar>
                    <div className="content">
                        <a href="tel:07581457909">07581 457909</a>
                        <a href="tel:07943055381">07943 055381</a>
                    </div>
                </TopBar>
                <MainHead>
                    <div className="content">
                        <Link className="logo" to="/">
                            <img
                                src={logo}
                                alt="C&M Electrical (North West) LTD"
                                style={{
                                    width: 'auto',                                    
                                    margin: 0,
                                }}
                            />
                        </Link>
                        <div className="nav-menu">
                            {pages.map(page => {
                                console.log(page)
                                return (
                                    <Link
                                        className="nav-item"
                                        to={`/${
                                            page.details.slug !== 'home'
                                                ? page.details.slug
                                                : ''
                                        }`}
                                    >
                                        {page.details.title}
                                    </Link>
                                )
                            })}
                            <Link className="nav-item" to="/blog">
                                Blog
                            </Link>
                            <Link className="nav-item" to="/contact">
                                Contact Us
                            </Link>
                        </div>
                        <div className="mobile-nav-menu">
                            <button onClick={() => this.setState({open: !this.state.open})} className="menu-button">
                                <span />
                                <span />
                                <span />
                            </button>
                            <Extendable open={this.state.open}>
                                {pages.map(page => {
                                    console.log(page)
                                    return (
                                        <Link
                                            className="nav-item"
                                            to={`/${
                                                page.details.slug !== 'home'
                                                    ? page.details.slug
                                                    : ''
                                            }`}
                                            onClick={() => this.setState({open: false})}
                                        >
                                            {page.details.title}
                                        </Link>
                                    )
                                })}
                                <Link onClick={() => this.setState({open: false})} className="nav-item" to="/blog">
                                    Blog
                                </Link>
                                <Link onClick={() => this.setState({open: false})} className="nav-item" to="/contact">
                                    Contact Us
                                </Link>
                            </Extendable>
                        </div>
                    </div>
                </MainHead>
                
            </div>
        )
    }
    
}

const MainHead = styled.div`
    height: 135px;
    margin-bottom: 1.45rem;
    box-shadow: '#d6d6d6 0px 0px 13px';
    display: flex;
    justify-content: center;
    box-shadow: 2px 2px 2px 2px #d6d6d6;
    font-family: sans-serif;
    z-index: 10;
    .content {
        max-width: 960px;
        width: 100%;
        display: flex;
        .logo {
            margin-right: auto;
            display: flex;
            align-items: center;
            padding: 2px;
            img {
                width: auto;
                height: 110px;
                width: auto;
                @media screen and (max-width: 500px) {
                    height: 70px;
                }
            }
        }
        .nav-menu {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            a {
                display: inline-block;
                padding: 8px;
                margin: 10px;
                border-radius: 5px;
                transition: all 0.2s ease;
                &:hover {
                    background-color: #e26f5b;
                    color: #fff;
                }
            }
            @media screen and (max-width: 500px) {
                display: none;
            }
        }
        .mobile-nav-menu {
            display: flex;
            align-items: center;
            .menu-button {
                background-color: white;
                border: none;                
                height: 46px;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                margin: 10px;
                span {
                    display: block;
                    width: 60px;
                    height: 7px;
                    border-radius: 2px;
                    background-color: #e26f5b;
                }
            }
            @media screen and (min-width: 501px) {
                display: none;
            }
        }
    }
    @media screen and (max-width: 500px) {
        height: 80px;
    }
`

const Extendable = styled.ul`
    /* display: block; */
    background-color: #e26f5b;
    opacity: 0.9;
    position: absolute;
    left: 0;
    width: 100%;
    margin: 0;
    list-style: none;
    top: 120px;
    z-index:1;
    display: ${props => props.open ? 'block' : 'none'};
    a{
        color: #ffffff;
        display: block;
        width: 100%;
        padding: 5px 10px;
        margin: 5px 0px;
    }
`

const TopBar = styled.div`
    height: 40px;
    background-color: #e26f5b;
    color: #ffffff;
    display: flex;
    justify-content: center;
    .content {
        max-width: 960px;
        width: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        a {
            color: #ffffff;
            margin-right: 20px;
        }
    }
`

