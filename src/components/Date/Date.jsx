/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import * as styles from './Date.styles';

function Date({ month, day }) {
    if (!month || !day) return null;
    return (
        <div css={styles.calendarDate} className='calendar-date'>
            <span css={styles.date}>{day}</span>
            <span css={styles.month}>{month}</span>
        </div>
    )
};

export default Date;
