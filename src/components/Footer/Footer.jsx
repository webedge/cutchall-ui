/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { ROUTES } from '../../constants/routes';
import * as styles from './Footer.styles';

function Footer({ image, isVisible }) {

    return (<div css={styles.footerWrapper}>
        <div className='container' css={{ position: 'relative' }}>
            {image && isVisible && <Link to={ROUTES.W2}><img src={image} alt='W2' /></Link>}
            &copy; {format(new Date(), 'yyyy')} Cutchall Management Company | All rights reserved.
        </div >
    </div>)
}

export default Footer;
