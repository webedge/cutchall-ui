/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useEffect, useState } from 'react';
import { jsx } from '@emotion/react';
import { DataStore } from "@aws-amplify/datastore";
import { Restaurant } from '../../models';
import { AWS_URL } from '../../constants';
import { theme } from '../../constants/theme';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { getAllRestaurants } from '../../services/retrievedata';
import * as styles from './GiftCard.styles';

function removeRestaurantsWithNoGiftCards(restaurants) {
    return restaurants.filter(x => {
        return x.egiftCardUrl || x.giftCardBalanceUrl || x.physicalGiftCardUrl
    })
}

function GiftCards() {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        fetchData();
        async function fetchData() {
            const rawRestaurants = await getAllRestaurants();
            setRestaurants(removeRestaurantsWithNoGiftCards(rawRestaurants));
        }

        DataStore.observe(Restaurant).subscribe(() => {
            fetchData();
        });
    }, [])

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
                        <h1 className='page-title'>Gift Cards</h1>
                        <Card>
                            <Card.Body>
                                <Row>
                                    {restaurants.map(x => (
                                        <Col xs={12} lg={3} key={x.id}>
                                            <Card css={styles.cardWrapper}>
                                                <div css={styles.imageContainer}><Image fluid src={`${AWS_URL}/${x.logoImageKey}`} /></div>
                                                <Card.Body css={styles.buttonContainer}>
                                                    {x?.egiftCardUrl && <a className='btn btn-primary btn-block' href={x?.egiftCardUrl} target="_blank" rel="noreferrer">Purchase Digital Gift Cards</a>}
                                                    {x?.physicalGiftCardUrl && <a className='btn btn-primary btn-block' href={x?.physicalGiftCardUrl} target="_blank" rel="noreferrer">Purchase Physical Gift Cards</a>}
                                                    {x?.giftCardBalanceUrl && <a className='btn btn-primary btn-block' href={x?.giftCardBalanceUrl} target="_blank" rel="noreferrer">Check Your Balance</a>}
                                                </Card.Body>
                                            </Card>

                                        </Col>))}
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default GiftCards;
