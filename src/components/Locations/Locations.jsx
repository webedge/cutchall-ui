/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import uniqueId from 'lodash.uniqueid';
import * as styles from './Locations.styles';
import { groupBy, alphebetizeCities } from './location.utils';

function Locations({ restaurants }) {
    const [show, setShow] = useState(false);
    const [location, setLocation] = useState();
    const [locationsByState, setLocationsByState] = useState([]);
    const groupByState = groupBy(['state']);
    const groupByCity = groupBy(['city']);

    useEffect(() => {
        setLocationsByState(groupByState(restaurants));
        // eslint-disable-next-line
    }, [restaurants])

    function handleClose() { setShow(false) };

    function handleShow(location) {
        setShow(true)
        setLocation(location);
    };

    return (
        <React.Fragment>
            <Card css={styles.wrapper}>
                <Card.Body>
                    <h1 css={styles.locationHeader}>Locations</h1>
                    {Object.keys(locationsByState).map((keyName) => {
                        const storesByCityName = alphebetizeCities(groupByCity(locationsByState[keyName]));
                        return (
                            <div key={keyName}>
                                <h2 css={styles.state}>{keyName}</h2>
                                <ul css={styles.stateList}>
                                    {Object.keys(storesByCityName).map((x => (
                                        <li key={x}>{x}
                                            <ul>
                                                {storesByCityName[x].map(x => (
                                                    <li key={x.id} onClick={() => handleShow(x)}>{x.shoppingArea}</li>))}
                                            </ul>
                                        </li>
                                    )
                                    ))}
                                </ul>
                            </div>
                        )
                    })
                    }
                </Card.Body>
            </Card>
            <Modal show={show} size='sm' onHide={handleClose} centered key={uniqueId()}>
                <Modal.Header closeButton>
                    <Modal.Title>{location?.shoppingArea}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Phone Number</h4>
                    <p>{location?.phoneNumber}</p>
                    <h4>Address</h4>
                    <p><a href={location?.googleMapUrl} target='_blank' rel='noreferrer'>{location?.address1}<br />
                        {`${location?.city}, ${location?.state}, ${location?.zip}`}</a>
                    </p>
                    <h4>Hours</h4>
                    <div dangerouslySetInnerHTML={{ __html: location?.hours }} />
                    <a href={location?.website} target='_blank' rel="noreferrer">View Website</a>
                </Modal.Body>
            </Modal>
        </React.Fragment >
    )
}

export default Locations
