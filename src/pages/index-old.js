import React from 'react'
import Link from 'gatsby-link'
import Gallery from '../components/Gallery'

const IndexPage = () => (
  <div>
    <h1>Welcome</h1>
    <p>
      C&M Electrical (North West) Ltd provides professional electrical services
      across Preston and the North West. By being an NAPIT Approved Contractor
      this means that we are fully qualified to carry out all forms of
      electrical installations, wiring checks , EICRs (Electrical Installation
      Condition Reports) and system upgrades for homes and business alike.{' '}
    </p>
    <p>We have worked in the industry for many years in the following areas:</p>
    <ul style={{ flex: '1 1 100px' }}>
      <li>Preston</li>
      <li>Lancashire</li>
      <li>North West England</li>
      <li>Nationwide</li>
    </ul>
    <p>
      Every project that we undertake utilises our best business practices, and
      our clients are always the priority each and every time.
    </p>
    <p>
      We take great pride in our work and commit to each project which is why
      our clients request us time and time again.
    </p>
    <p>
      We will always give you the very best, and professional, advice and we
      will save you money and time. No matter how big or small the job we offer
      quality advice and service with the highest possible standards of
      workmanship, we have developed a strong reputation for efficiency,
      reliability and value.
    </p>
    <p>
      On each and every project, we work with the client to ensure everything is
      clear and understood before we start to avoid any fear of confusion and to
      give our clients the confidence that they are choosing the right features
      for their project.
    </p>
    <p>
      At C&M Electrical, we specialise in all aspects of domestic, commercial
      and industrial electrical installations.
    </p>
    <div style={{ display: 'flex' }}>
      <ul style={{ flex: '1 1 100px' }}>
        <li>New Installations</li>
        <li>Refurbishments</li>
        <li>LED Lighting</li>
        <li>Fire and Security</li>
        <li>Consumer Units and Distribution Board Upgrades</li>
      </ul>
      <ul style={{ flex: '1 1 100px' }}>
        <li>BMS Systems</li>
        <li>PAT Testing</li>
        <li>24 Hour Callouts</li>
        <li>Electrical Testing & Certification</li>
        <li>Rewires</li>
      </ul>
    </div>
    <p>
      With over 30 years experience in the industry, C&M should be your first
      choice for all your electrical needs.
    </p>
    <p>
      C&M Electrical operate out of Preston (Lancashire), but work nation-wide.
      Get in touch for a free quote <Link to="/contact">Contact Us</Link>
    </p>
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
