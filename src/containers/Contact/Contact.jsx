/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AddressCard from '../../components/AddressCard/AddressCard';
import { theme } from '../../constants/theme';
// import * as styles from './CorporateTeam.styles';

function CorporateTeam() {
    return (
        <React.Fragment>
            <div style={{
                background: `${theme.colors.primary} url(/img/corporate-team.png) top center no-repeat`,
                position: 'absolute',
                height: '209px',
                top: 0,
                left: 0,
                right: 0,
            }} />
            <Container>
                <Row>
                    <Col>
                        <h1 className='page-title'>Contact Us</h1>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={9}>
                        <Card>
                            <Card.Body>
                                <iframe id="JotFormIFrame-211994698855074" title="Contact Us Form" allowtransparency="true" allowFullScreen allow="geolocation; microphone; camera" src="https://form.jotform.com/211994698855074" frameBorder="0" style={{ minWidth: '100%', height: '650px', border: 'none' }} scrolling="no" > </iframe>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={3}>
                        <AddressCard />
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
};

export default CorporateTeam;
