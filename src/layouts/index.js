import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import './index.css'
import Footer from '../components/footer'

export default class Layout extends Component {
    render() {
        let { data, children } = this.props
        console.log(data)

        return (
            <div>
                <Helmet
                    title={data.site.siteMetadata.title}
                    meta={[
                        {
                            name: 'description',
                            content: 'C&M Electrical (North West) LTD',
                        },
                    ]}
                />
                <Header
                    siteTitle={data.site.siteMetadata.title}
                />
                <div
                    style={{
                        margin: '0 auto',
                        maxWidth: 960,
                        padding: '0px 1.0875rem 1.45rem',
                        paddingTop: 0,
                    }}
                >
                    {children()}
                </div>
                <Footer />
            </div>
        )
    }
}

Layout.propTypes = {
    children: PropTypes.func,
}

export const query = graphql`
    query AboutQuery {
        site {
            siteMetadata {
                title
            }
        }
    }
`
