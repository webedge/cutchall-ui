/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import cutchall from '../../assets/img/cutchall.png';
import Carousel from '../../components/Carousel/Carousel';
import Catering from '../../components/Catering/Catering';
import CorporateOffice from '../../components/CorporateOffice/CorporateOffice';
import NewsEvents from '../../components/NewsEvents/NewsEvents';
import AddressCard from '../../components/AddressCard/AddressCard'
import * as styles from './Home.styles';

function Home() {
    return (
        <React.Fragment>
            <div css={styles.bannerContainer} className='display-medium'>
                <Container>
                    <h1 className='home-quote white'>“If It’s not exceptional…</h1>
                    <h2 className='home-quote white'>It’s unacceptable.”</h2>
                    <h3 className='home-quote white'>come in and enjoy!</h3>
                    <h4 className='home-quote white'>Greg S. Cutchall – CEO/Founder</h4>
                    <Image src={cutchall} alt='Greg Cutchall' className='display-large' />
                </Container>
            </div>
            <Container>
                <Row>
                    <Col xs={12} md={4} className='news-events'>
                        <NewsEvents />
                        <div css={{ marginTop: '20px' }}>
                            <AddressCard />
                        </div>
                    </Col>
                    <Col xs={12} md={8} className='carousel-wrapper'>
                        <Carousel />
                        <Row>
                            <Col xs={12} md={6}>
                                <Catering />
                            </Col>
                            <Col xs={12} md={6}>
                                <CorporateOffice />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
};

export default Home;
