import React from 'react'
import Link from 'gatsby-link'

function SidebarContent() {
    return <div style={{ padding: '16px', height: '100%', backgroundColor: '#e49057', opacity: '0.95', width: '200px' }}>
        <h2 style={{ color: '#ffffff' }}>Menu</h2>
        <div style={styles.divider} />
        <Link to="/" style={styles.link} onClick={() => this.prop.onSetOpen(false)}>
          Home
        </Link>
        <Link to="/about" style={styles.link} onClick={() => this.prop.onSetOpen(false)}>
          About Us
        </Link>
        <Link to="/accreditations" style={styles.link} onClick={() => this.prop.onSetOpen(false)}>
          Accreditations
        </Link>
        <Link to="/contact" style={styles.link} onClick={() => this.prop.onSetOpen(false)}>
          Contact Us
        </Link>
      </div>
}

const styles = {
    link: {
        display: 'block',
        padding: '10px',
        textDecoration: 'none',
        color: '#ffffff',
        fontSize: 20,
        fontWeight: 'normal',
        fontFamily: 'sans-serif'
    },
    divider: {
        borderBottom: '1px solid #ffffff',
    }
}

export default SidebarContent
