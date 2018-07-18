import React from 'react';
import styled from 'styled-components';
import * as logos from '../images/logos'

const IndexPage = () => (
  <div>
    <h1>Accreditations</h1>
    <Accreditation>
      <ImageContainer>
        <img src={logos.chas} />
      </ImageContainer>
      <Content>
        <h2>Chas</h2>
        <p>
          Accreditation not only means that we are financially stable with a
          clean regulatory history, it also means we have completed major
          projects adhering to all health and safety criteria as well as
          adhering to environmental protection, sustainability and social
          responsibility criteria.{' '}
                    <a target='_blank' href="http://www.chas.co.uk">www.chas.co.uk</a>
        </p>
      </Content>
    </Accreditation>
    <Accreditation>
      <ImageContainer>
        <img src={logos.trustmark} />
      </ImageContainer>
      <Content>
        <h2>TrustMark</h2>
        <p>
          The TrustMark brand is a nationally recognised marker of a quality
                                        firm and expert tradesperson. It is the only Government-endorsed
                                        scheme for all trades in and consumers groups within the United
                                        Kingdom. Consumers can use a TrustMark-registered firm with confidence
                                        due to the rigorous vetting and inspection process each member must
          undergo to join the scheme. <a target='_blank' href="http://www.trustmark.org.uk">www.trustmark.org.uk</a>
        </p>
      </Content>
    </Accreditation>
    <Accreditation>
      <ImageContainer>
        <img src={logos.napit} style={{padding: '0 25px'}}/>
      </ImageContainer>
      <Content>
        <h2>NAPIT</h2>
        <p>
          NAPIT is one of the leading Government approved and United Kingdom
                              Accreditation Service (UKAS) accredited membership scheme operators in
                              the building services and fabric sector. There are currently more than
                              10,000 NAPIT registered installers in the electrical, heating,
                              plumbing, ventilation, microgeneration and building fabric trades
                              across the UK domestic, commercial and industrial markets.
          <a target='_blank' href="http://www.napit.org.uk">www.napit.org.uk</a>
        </p>
      </Content>
    </Accreditation>
    <Accreditation>
      <ImageContainer>
        <img style={{backgroundColor: 'grey', padding: '5px'}} src={logos.compex} />
      </ImageContainer>
      <Content>
        <h2>CompEx</h2>
        <p>
          CompEx is the only Certification Body that offers UKAS accredited
                                        certification for personnel who work in explosive atmospheres. This
                                        certification validates the core competency of practitioners working
                                        in explosive atmospheres. It also offers complete reassurance to
                                        employers managing the safety of these potentially hazardous
                                        workplaces and can provide the added benefit by assisting employers
          reduce their insurance costs. <a target='_blank' href="http://www.compex.org.uk">www.compex.org.uk</a>
        </p>
      </Content>
    </Accreditation>
  </div>
)

let Accreditation = styled.div`
    display: flex;
`

let ImageContainer = styled.div`
    flex: 0 1 200px;
    padding: 0 10px;
    img {
        width: 100%;
        height: auto;
    }   
    
`

let Content = styled.div`
    flex: 1 1 200px;
    margin-left: 31px;
`

export default IndexPage
