/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import { useEffect, useState } from 'react';
import { getAllNews } from '../../services/retrievedata';
import Card from 'react-bootstrap/Card';
import Event from '../Event/Event';
import * as styles from './NewsEvents.styles';

function NewsEvents() {
    const [newsGrid, setNewsGrid] = useState([]);

    useEffect(() => {
        fetchData();
        async function fetchData() {
            const news = await getAllNews();
            setNewsGrid(news);
        }

        fetchData();
    }, []);

    return (
        <Card css={styles.wrapper}>
            <Card.Header>News &amp; Events</Card.Header>
            <Card.Body>
                {newsGrid && newsGrid?.map(x => <Event key={x.id} event={x} />)}
            </Card.Body>
        </Card>
    )
}

export default NewsEvents;
