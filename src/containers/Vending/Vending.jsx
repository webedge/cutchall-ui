/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useState, useEffect } from 'react';
import { jsx } from '@emotion/react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { DataStore } from "@aws-amplify/datastore";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AddressCard from '../../components/AddressCard/AddressCard';
import { VendingContent } from "../../models";
import { getVendingContent } from '../../services/retrievedata';
import { theme } from '../../constants/theme';

function Vending() {
    const [vendingContent, setVendingContent] = useState();

    useEffect(() => {
        fetchData();
        async function fetchData() {
            const content = await getVendingContent();
            setVendingContent(content.content);
        }

        DataStore.observe(VendingContent).subscribe(() => {
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
                        <h1 className='page-title'>Vending</h1>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={9}>
                        <Card>
                            <Card.Body>
                                <div dangerouslySetInnerHTML={{ __html: vendingContent }} />
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

export default Vending;
