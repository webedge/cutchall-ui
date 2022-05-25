/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useState, useEffect } from 'react';
import { jsx } from '@emotion/react';
import { format } from 'date-fns';
import { AWS_URL } from '../../constants';
import { DataStore } from "@aws-amplify/datastore";
import { IntranetContent } from "../../models";
import { getIntranetContent, getIntranetCategories } from '../../services/retrievedata';
import AddressCard from '../../components/AddressCard/AddressCard';
import { theme } from '../../constants/theme';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import * as styles from './Intranet.styles';

function Intranet() {
    const [intranetContent, setIntranetContent] = useState();
    const [intranetResources, setIntranetResources] = useState([]);
    const [password, setPassword] = useState('');
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    const [viewContent, setViewContent] = useState(false);
    const correctPassword = `CMC${format(new Date(), 'yyyy')}`;

    useEffect(() => {
        fetchData();
        async function fetchData() {
            const content = await getIntranetContent();
            const resources = await getIntranetCategories();
            setIntranetContent(content);
            setIntranetResources(resources)
        }

        DataStore.observe(IntranetContent).subscribe(() => {
            fetchData();
        });
    }, []);

    function handleChange(x) {
        setPassword(x.target.value);
    }

    function submitPassword(e) {
        e.preventDefault();
        setHasBeenSubmitted(true);
        if (password.toLowerCase() === correctPassword.toLowerCase()) {
            setViewContent(true)
        }
    }

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
                        <h1 className='page-title'>Intranet</h1>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={9}>
                        <Card>
                            <Card.Body>
                                {hasBeenSubmitted && !viewContent && <Alert variant='danger'>Incorrect password</Alert>}
                                {!viewContent && <Form onSubmit={submitPassword}>
                                    <Form.Group>
                                        <Form.Label>Enter Password</Form.Label>
                                        <Form.Control type='password' value={password} onChange={handleChange} />
                                    </Form.Group>
                                    <Button type='submit' variant='primary'>Submit</Button>
                                </Form>}
                                {hasBeenSubmitted && viewContent &&
                                    (
                                        <React.Fragment>
                                            <div dangerouslySetInnerHTML={{ __html: intranetContent?.content }} />
                                            {intranetResources.length > 0 && <h2>Intranet Resources</h2>}
                                            <ul css={styles.resourceStyles}>
                                                {intranetResources.map(x => {
                                                    if (x.resources.length > 0) {
                                                        return (
                                                            <li key={x.id}>{x.name}
                                                                {x.resources.length > 0 && <ul css={styles.listStyle}>
                                                                    {x.resources.map(x => <li key={x.id}><a href={`${AWS_URL}/${x.resourceKey}`}>{x.name}</a></li>)}
                                                                </ul>}
                                                            </li>
                                                        )
                                                    } else {
                                                        return null
                                                    }
                                                })}
                                            </ul>
                                        </React.Fragment>)
                                }
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
}

export default Intranet;
