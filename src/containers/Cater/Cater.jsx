/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useState, useEffect } from 'react';
import { jsx } from '@emotion/react';
import { DataStore } from "@aws-amplify/datastore";
import { Catering } from "../../models";
import Card from 'react-bootstrap/Card';
import { getAllCatering } from '../../services/retrievedata';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { theme } from '../../constants/theme';
import caterOmaha from '../../assets/img/CaterOmahaHeader.jpeg';
import * as styles from './Cater.styles';
import { AWS_URL } from '../../constants';

function CorporateTeam() {
    const [cateringGrid, setCateringGrid] = useState([]);

    useEffect(() => {
        fetchData();
        async function fetchData() {
            const catering = await getAllCatering();
            setCateringGrid(catering);
        }

        // use this observer if you want the page to refresh when there are changes to the Staff data on the server
        DataStore.observe(Catering).subscribe(() => {
            fetchData();
        });
    }, []);

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
                        <h1 className='page-title'>Catering</h1>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={9}>
                        <Card>
                            <Card.Body>
                                <h2>Cater Omaha</h2>
                                <Image src={caterOmaha} alt='cater omaha' fluid />
                                {cateringGrid.map(option => (
                                    <div css={styles.wrapper} key={option.id}>
                                        <h3>{option.title}</h3>
                                        <Row css={styles.content}>
                                            <Col xs={12} md={4}>
                                                <Image src={`${AWS_URL}/${option.imageKey}`} fluid />
                                            </Col>
                                            <Col xs={12} md={8}>
                                                <div>
                                                    <h4>{option.headline}</h4>
                                                    <div dangerouslySetInnerHTML={{ __html: option.description }} />
                                                    <p><a className='download' href={`/docs/${option.downwoad}`} target='_blank' rel="noreferrer">View Menu</a></p>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                ))}
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={3}>
                        <Card>
                            <Card.Body>
                                <h4>A Taste For Everyone</h4>
                                <h5>402-699-5555</h5>
                                <h4>We'll set up, Serve, Even Clean Up!</h4>
                                <ul>
                                    <li>Pick Up</li>
                                    <li>Delivery</li>
                                    <li>Full Service</li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
};

export default CorporateTeam;
