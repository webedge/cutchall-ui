/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import map from '../../assets/img/map.png';
import * as styles from './CorporateOffice.styles';

function CorporateOffice() {
    return (
        <Card css={styles.wrapper}>
            <Card.Header>CMC Corporate Office</Card.Header>
            <Card.Img src={map} alt='Corporate Office' />
            <Card.Body>
                <Row>
                    <Col xs={12} lg={6}>
                        <h4>Address</h4>
                        <p>13305 Birch Drive,<br />Ste 201<br />Omaha, NE 68164</p>
                    </Col>
                    <Col xs={12} lg={6}>
                        <h4>Office Hours</h4>
                        <p>Mon - Fri: 8am - 5pm</p>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}

export default CorporateOffice;
