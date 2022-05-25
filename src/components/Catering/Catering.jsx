/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import Card from 'react-bootstrap/Card';
import catering from '../../assets/img/catering.png';
import { ROUTES } from '../../constants/routes';
import { Link } from 'react-router-dom';
import * as styles from './Catering.styles';

function Catering() {
    return (
        <Card css={styles.cateringWrapper}>
            <Card.Header>Catering!</Card.Header>
            <Card.Img src={catering} alt='Catering' />
            <Card.Body>
                <p>Call Cater Omaha to fulfill all of your catering  needs!</p>
                <h4>Call: 402.699.5555</h4>
                <Link to={{ pathname: ROUTES.CATERING.CATEROMAHA }}>Read More</Link>
            </Card.Body>
        </Card>
    )
}

export default Catering;
