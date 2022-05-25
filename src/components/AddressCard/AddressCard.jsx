/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import Card from 'react-bootstrap/Card';

function AddressCard() {
    return (
        <Card>
            <Card.Body>
                <h4>Address</h4>
                <p>13305 Birch Dr.<br />Suite 201<br />Omaha, NE 68164<br /><a href="https://maps.google.com/maps?q=13305+Birch+Dr.+Suite+201+Omaha+NE+68164&hl=en&sll=38.896626,-94.821037&sspn=0.378891,0.837021&hnear=13305+Birch+Dr+%23201,+Omaha,+Nebraska+68164&t=m&z=16" target="_blank" rel="noreferrer">View Map</a></p>
                <h4>Telephone</h4>
                <p>402-558-3333</p>
                <h4>Fax</h4>
                <p>402-558-1512</p>
            </Card.Body>
        </Card>
    )
}

export default AddressCard;

