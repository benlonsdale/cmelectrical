import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import CustomSidebar from '../components/CustomSidebar'

import Header from '../components/header'
import './index.css'

export default class Layout extends Component{
  constructor(props){
    super(props);
    this.state = {
      sidebarOpen: false,
    };
    this.onSetOpen = this.onSetOpen.bind(this);
    this.menuButtonClick = this.menuButtonClick.bind(this)
  }

  onSetOpen(open) {
    this.setState({ sidebarOpen: open })
  }

  menuButtonClick(e) {

    e.preventDefault();
    this.onSetOpen(!this.state.sidebarOpen)
  }

  render(){
    let {data, children} = this.props;
    return (
      <CustomSidebar open={this.state.sidebarOpen} onSetOpen={this.onSetOpen}>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        <Header siteTitle={data.site.siteMetadata.title}  menuButtonClick={this.menuButtonClick} />
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
      </CustomSidebar>
    )
  }
}
  


Layout.propTypes = {
  children: PropTypes.func,
}

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
