import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import menu from '../images/Menu.svg'
import logo from '../images/logo.png'

const Header = ({ siteTitle, menuButtonClick, pages }) => {
    console.log('header', pages)

    return (
        <div>
            <TopBar>
                <i className="fa fa-facebook-f" />
            </TopBar>
            <MainHead>
                <div className="content">
                    <Link className="logo" to="/">
                        <img
                            src={logo}
                            alt="C&M Electrical (North West) LTD"
                            style={{
                                width: '180px',
                                height: 'auto',
                                margin: 0,
                            }}
                        />
                    </Link>
                    <div className="nav-menu">
                        <Link className="nav-item" to="/">
                            Home
                        </Link>
                        {pages.map(page => {
                            console.log(page)
                            return (
                                <Link
                                    className="nav-item"
                                    to={`/${page.details.slug}`}
                                >
                                    {page.details.title}
                                </Link>
                            )
                        })}
                        <Link className="nav-item" to="/contact">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </MainHead>
        </div>
    )
}

const MainHead = styled.div`
    height: 135px;
    margin-bottom: 1.45rem;
    box-shadow: '#d6d6d6 0px 0px 13px';
    display: flex;
    justify-content: center;
    box-shadow: 2px 2px 2px 2px #d6d6d6;
    font-family: sans-serif;
    .content {
        max-width: 960px;
        width: 100%;
        display: flex;
        .logo {
            margin-right: auto;
        }
        .nav-menu {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            a{
                display: inline-block;
                padding: 15px;
                margin: 10px;
                border-radius: 5px;
                transition: all 0.2s ease;
                &:hover {
                    background-color:#e26f5b;
                    color: #FFF;
                }
            }
        }
    }
`

const TopBar = styled.div`
    height: 40px;
    background-color: #e26f5b;
`

export default Header
