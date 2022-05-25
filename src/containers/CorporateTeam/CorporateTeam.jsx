/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/react';
import { DataStore } from "@aws-amplify/datastore";
import { Staff } from "../../models";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from "react";
import { theme } from '../../constants/theme';
import { getAllStaff } from '../../services/retrievedata';
import * as styles from './CorporateTeam.styles';
import { AWS_URL } from '../../constants';

function CorporateTeam() {
    const [staffGrid, setStaffGrid] = useState([]);

    useEffect(() => {
        fetchData();
        async function fetchData() {
            const staff = await getAllStaff();
            setStaffGrid(staff);
        }

        // use this observer if you want the page to refresh when there are changes to the Staff data on the server
        DataStore.observe(Staff).subscribe(() => {
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
                        <h1 className='page-title'>Corporate Team</h1>
                        <Card>
                            <Card.Body css={styles.staffGrid}>
                                <Row>
                                    {staffGrid.map(x => (
                                        <Col xs={12} sm={3} key={x.id}>
                                            <Card css={styles.indvCard}>
                                                <Card.Img variant="top" src={`${AWS_URL}/${x.profileImageKey}`} />
                                                <p>{`${x.firstName} ${x.lastName}`} <a href={`mailto:${x.email}`}><i className='fas fa-envelope' /></a></p>
                                                <span>{x.title}</span>
                                            </Card>
                                        </Col>
                                    ))}
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
};

export default CorporateTeam;
