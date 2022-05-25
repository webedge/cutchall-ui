/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import { useState } from 'react';
import { format } from 'date-fns';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

function W2({ download }) {
    const [password, setPassword] = useState('');
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    const [viewDownload, setViewDownload] = useState(false);
    const correctPassword = `CMC${format(new Date(), 'yyyy')}`;

    function handleChange(x) {
        setPassword(x.target.value);
    }

    function submitPassword(e) {
        e.preventDefault();
        setHasBeenSubmitted(true);
        if (password.toLowerCase() === correctPassword.toLowerCase()) {
            setViewDownload(true)
        }
    }

    function downloadW2() {
        window.location.href = download;
    }

    return (<div className='container'>
        <Row className="justify-content-md-center" style={{ paddingTop: '25px' }}>
            <Col xs={12} sm='auto'>
                <Card>
                    <Card.Header>Enter Password to download the W2</Card.Header>
                    <Card.Body>
                        {hasBeenSubmitted && !viewDownload && <Alert variant='danger'>Incorrect password</Alert>}
                        {hasBeenSubmitted && viewDownload && <Alert variant='primary'>Click the button below to download the W2 Instructions</Alert>}
                        {viewDownload && <Button onClick={downloadW2}>Download W2</Button>}
                        {!viewDownload && <Form onSubmit={submitPassword}>
                            <Form.Group>
                                <Form.Control type='password' value={password} onChange={handleChange} />
                            </Form.Group>
                            <Button type='submit' variant='primary'>Submit</Button>
                        </Form>}
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </div>)
}

export default W2;
