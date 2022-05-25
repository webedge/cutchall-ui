/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useState, useEffect } from 'react';
import { jsx } from '@emotion/react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { DataStore } from "@aws-amplify/datastore";
import { AWS_URL } from '../../constants';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import AddressCard from '../../components/AddressCard/AddressCard';
import { Bio } from "../../models";
import { getBioContent } from '../../services/retrievedata';
import { theme } from '../../constants/theme';

function History() {
    const [bioContent, setBioContent] = useState();

    useEffect(() => {
        fetchData();
        async function fetchData() {
            const content = await getBioContent();
            setBioContent(content);
        }

        DataStore.observe(Bio).subscribe(() => {
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
                        <h1 className='page-title'>Founder's Story</h1>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={9}>
                        <Card>
                            <Card.Body>
                                {bioContent?.imageKey && <Image src={`${AWS_URL}/${bioContent?.imageKey}`} alt='bio image' />}
                                <div dangerouslySetInnerHTML={{ __html: bioContent?.content }} />
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

export default History;
