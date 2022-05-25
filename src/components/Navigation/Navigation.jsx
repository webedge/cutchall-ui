/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import { useState, useEffect } from 'react';
import { DataStore } from "@aws-amplify/datastore";
import { Restaurant } from "../../models";
import { ROUTES } from '../../constants/routes';
import { LinkContainer } from 'react-router-bootstrap'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../assets/img/logo.png';
import * as styles from './Navigation.styles';
import { getAllRestaurants } from '../../services/retrievedata';

function Header() {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        fetchData();
        async function fetchData() {
            const restaurants = await getAllRestaurants();
            setRestaurants(restaurants);
        }

        // use this observer if you want the page to refresh when there are changes to the Staff data on the server
        DataStore.observe(Restaurant).subscribe(() => {
            fetchData();
        });
    }, []);

    return (
        <Navbar collapseOnSelect expand="lg" css={styles.header}>
            <Container>
                <Navbar.Brand href={ROUTES.HOME}>
                    <img src={logo} alt="Cutchall Management Company" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                    <Nav>
                        <NavDropdown renderMenuOnMount={true} title="Company" id="collasible-nav-dropdown">
                            <LinkContainer to={ROUTES.CORPORATE.TEAM}><NavDropdown.Item>Corporate Team</NavDropdown.Item></LinkContainer>
                            <LinkContainer to={ROUTES.CORPORATE.FOUNDERSSTORY}><NavDropdown.Item>Founder's Story</NavDropdown.Item></LinkContainer>
                        </NavDropdown>
                        <NavDropdown renderMenuOnMount={true} title="Restaurants" id="collasible-nav-dropdown">
                            {restaurants.map(x => <LinkContainer key={x.name} to={`/restaurants/${x.name}/${x.id}`}><NavDropdown.Item>{x.name}</NavDropdown.Item></LinkContainer>)}

                        </NavDropdown>
                        <NavDropdown renderMenuOnMount={true} title="Catering &amp; Vending" id="collasible-nav-dropdown">
                            <LinkContainer to={ROUTES.CATERING.CATEROMAHA}><NavDropdown.Item>Cater Omaha</NavDropdown.Item></LinkContainer>
                            <LinkContainer to={ROUTES.CATERING.VENDING}><NavDropdown.Item>Vending</NavDropdown.Item></LinkContainer>
                        </NavDropdown>
                        <LinkContainer to={ROUTES.GIFTCARDS}><Nav.Link>Gift Cards</Nav.Link></LinkContainer>
                        <a className='nav-link' href={ROUTES.CAREERS} target='_blank' rel="noreferrer" >Careers</a>
                        <LinkContainer to={ROUTES.CONTACT}><Nav.Link>Contact</Nav.Link></LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;
