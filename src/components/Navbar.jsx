import React, { Component } from 'react';
import styled from 'styled-components';
import posed from 'react-pose';
import { connect } from 'react-redux';

import { ContainerFluid } from '../styles/all-styles';
import A from '../styles/A';
import Button from '../styles/Button';
import mapStateToProps from '../tools/mapStateToProps';
import mapDispatchToProps from '../tools/mapDispatchToProps';

const Menu = styled.div`
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    background-color: ${({ theme }) => theme.bg.box };
`;

const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 1rem;
    height: 60px;
    margin-bottom: 2rem;

    @media (min-width: ${({ theme }) => theme.breakpoint.lg }) {
        height: 75px;
        margin-bottom: 3rem;
    }
`;

const DropdownNav = posed.nav({
    open: {
        x: '150vw',
        transition: {
            duration: 850,
            ease: 'easeInOut'
        }
    },
    closed: {
        x: '-150vw',
        transition: {
            duration: 1000,
            ease: 'easeInOut'
        }
    }
});


const Nav = styled(DropdownNav)`
    display: flex;

    @media (max-width: ${({ theme }) => theme.breakpoint.lg }) {
        padding: 1rem 0;
        flex-direction: column;
        position: fixed;
        top: 0;
        left: -150vw;
        bottom: 0;
        z-index: 10;
        width: 300px;
        background: ${({ theme }) => theme.bg.primary };
    }

    @media (min-width: ${({ theme }) => theme.breakpoint.lg }) {
        transform: none !important;
        height: 100%;
    }
`;

const NavPseudoelement = styled.div`
    position: fixed;
    top: 0;
    left: 100%;
    z-index: -1;
    width: 100vw;
    height: 100vh;
    opacity: 0.6;
    cursor: pointer;
    background-color: ${({ theme }) => theme.bg.black };
`;

const ToggleButton = styled(Button)`
    position: relative;
    z-index: 10;
    align-self: center;
    background-color: transparent;

    @media (min-width: ${({ theme }) => theme.breakpoint.lg }) {
        display: none;
    }

    i {
        font-size: 20px;
    }
`;

const NavLink = styled(A)`
    padding-left: 1rem;
    margin-bottom: 1rem;
    font-size: 1.125em;

    &:hover {
        color: ${({ theme }) => theme.color.linkHover };
    }

    @media (min-width: ${({ theme }) => theme.breakpoint.lg }) {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 1rem;
        margin: 0;
    }
`;

const LogoLink = styled(A)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.125em;

    @media (min-width: ${({ theme }) => theme.breakpoint.lg }) {
        font-size: 1.25em;
    }
`;

class Navbar extends Component {
    state = {
        dropdown: false
    }
    
    setDropdown = () => {
        this.setState({
            dropdown: !this.state.dropdown
        });
    }

    scrollToTop = () => {
        const { global:globalElement } = this.props.scroll.element;

        globalElement.current.scrollTo(0, 0);
    }

    render() {
        const { dropdown } = this.state;
        const links = [
            { name: 'Home', href: '/page/1' },
            { name: 'O mnie', href: '/about-me' },
            { name: 'Kontakt', href: '/contact' },
            { name: 'Forum', href: '/forum' },
            { name: 'Zaloguj się', href: '/login' },
            { name: 'Rejestracja', href: '/register' },
        ];
    
        const linksItem = links.map((el, i) => <NavLink key={i} to={el.href} onClick={this.scrollToTop}>
            {el.name}
        </NavLink>);
    
        return (
            <Menu>
                <ContainerFluid>
                    <Flex>
                        <LogoLink to={'/page/1'}><h1>Lorem Ipsum</h1></LogoLink>
                        <Nav pose={dropdown ? 'open' : 'closed'}>
                            {linksItem}
                            <NavPseudoelement onClick={this.setDropdown} />
                        </Nav>
                        <ToggleButton onClick={this.setDropdown}>
                            <i className={dropdown ? 'fas fa-times' : 'fas fa-bars'}></i>
                        </ToggleButton>
                    </Flex>
                </ContainerFluid>
            </Menu>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);