/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import { DataStore } from "@aws-amplify/datastore";
import { AWS_URL } from '../../constants';
import { Carousel as CarouselSchema } from "../../models";
import { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import * as styles from './Carousel.styles';
import { getAllCarousel } from '../../services/retrievedata';

function MyCarousel() {
    const [slides, setSlides] = useState([]);

    useEffect(() => {
        fetchData();
        async function fetchData() {
            const carousels = await getAllCarousel();
            setSlides(carousels);
        }

        DataStore.observe(CarouselSchema).subscribe(() => {
            fetchData();
        });
    }, []);

    return (
        <Carousel css={styles.carouselWrapper}>
            {slides.map(x => (
                <Carousel.Item key={x.id}>
                    <a href={x.link}><Image src={`${AWS_URL}/${x.imageKey}`} fluid /></a>
                    <Carousel.Caption>{x.caption}</Carousel.Caption>
                </Carousel.Item>))}
        </Carousel>
    )
}

export default MyCarousel;
