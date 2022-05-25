/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import Date from '../Date/Date';
import { MONTHS } from '../../constants/date';
import * as styles from './Event.styles';

function SingleEvent(props) {
    const { event } = props;
    const { title, previewText, month, day, fullText } = event;

    const [isModalOpen, setIsModalOpen] = useState(false);

    function handleClose() {
        setIsModalOpen(false);
    }

    return (
        <React.Fragment>
            <div css={styles.eventWrapper}>
                <Date month={MONTHS[month]} day={day} />
                <div css={styles.content}>
                    <h2>{title}</h2>
                    <p>{previewText}</p>
                    <p><span onClick={() => setIsModalOpen(true)}>Read More <i className='fas fa-chevron-circle-right' /></span></p>
                </div>
            </div>
            <Modal onHide={handleClose} show={isModalOpen} centered>
                <Modal.Header closeButton>{title}</Modal.Header>
                <Modal.Body>
                    {fullText}
                </Modal.Body>
            </Modal>
        </React.Fragment>
    )
};

export default SingleEvent;
