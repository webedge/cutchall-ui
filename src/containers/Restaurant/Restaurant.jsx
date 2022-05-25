/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useEffect, useState } from 'react';
import { jsx } from '@emotion/react';
import { useParams } from 'react-router-dom';
import { AWS_URL } from '../../constants';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Locations from '../../components/Locations/Locations';
import { theme } from '../../constants/theme';
import * as styles from './Restaurant.styles';
import { getRestaurantByRestaurantId, getLocationsByRestaurantId } from '../../services/retrievedata';

function Restaurant() {
    const [restaurant, setRestaurant] = useState();
    const [locations, setLocations] = useState([]);
    const { name, id } = useParams();

    useEffect(() => {
        const getRestaurant = getRestaurantByRestaurantId(id);
        const getLocations = getLocationsByRestaurantId(id);

        Promise.all([getRestaurant, getLocations]).then(values => {
            setRestaurant(values[0]);
            setLocations(values[1]);
        });
    }, [id])

    const backgroundImage = restaurant?.bannerKey ? `${AWS_URL}/${restaurant.bannerKey}` : '/img/corporate-team.png';

    return (
        <React.Fragment>
            <div style={{
                background: `url(${backgroundImage}) top center no-repeat`,
                boxShadow: '0px 0px 3px 1px rgba(0,0,0,0.38)',
                backgroundColor: restaurant?.bannerKey ? '#FFF' : theme.colors.primary,
                zIndex: 0,
                position: 'absolute',
                height: '200px',
                top: 0,
                left: 0,
                right: 0,
            }} />
            <Container>
                <Row>
                    <Col md={4} className='restaurant-left'>
                        <Card>
                            <Card.Body>
                                <Image src={`${AWS_URL}/${restaurant?.logoImageKey}`} fluid />
                                {restaurant?.corporateWebsite && <a className='btn btn-link btn-block' href={restaurant?.corporateWebsite} target="_blank" rel="noreferrer">{`Visit ${restaurant.name}'s Website`}</a>}
                                <Row css={styles.buttonHolder}>
                                    <Col xs={12} css={styles.giftcards}>
                                        {restaurant?.egiftCardUrl && <a className='btn btn-primary' href={restaurant?.egiftCardUrl} target="_blank" rel="noreferrer">Purchase Digital Gift Cards</a>}
                                        {restaurant?.physicalGiftCardUrl && <a className='btn btn-primary' href={restaurant?.physicalGiftCardUrl} target="_blank" rel="noreferrer">Purchase Physical Gift Cards</a>}
                                        {restaurant?.giftCardBalanceUrl && <a className='btn btn-primary' href={restaurant?.giftCardBalanceUrl} target="_blank" rel="noreferrer">Check Your Balance</a>}
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                        <Locations restaurants={locations} />
                    </Col>
                    <Col md={8} className='restaurant-right'>
                        <h1 className='page-title restaurant'>{name}</h1>
                        <Card>
                            <Card.Body>
                                {restaurant?.photoKey && <Image css={{ marginBottom: '15px' }} src={`${AWS_URL}/${restaurant?.photoKey}`} fluid />}
                                <div dangerouslySetInnerHTML={{ __html: restaurant?.description }} />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
};

export default Restaurant;
