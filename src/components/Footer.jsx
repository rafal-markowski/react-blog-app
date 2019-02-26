import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { A, Small } from '../styles/all-styles';
import mapStateToProps from '../tools/mapStateToProps';
import mapDispatchToProps from '../tools/mapDispatchToProps';

const List = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: ${({ theme }) => theme.breakpoint.md }) {
        flex-direction: row;
        justify-content: space-around;
    }
`;

const Link = styled(A)`
    display: block;
    text-align: center;
    padding: 0.75rem;

    &:hover {
        color: ${({ theme }) => theme.color.linkHover };
    }

    @media (min-width: ${({ theme }) => theme.breakpoint.md }) {
        padding: 1.5rem;
    }
`;

class Footer extends Component {
    onClick = () => {
        const { scrollElement } = this.props.scroll.element;

        scrollElement.current.scrollTo(0, 0);
    }

    render() {
        const links = [
            { name: 'Home', href: '/page/1' },
            { name: 'O mnie', href: '/about-me' },
            { name: 'Kontakt', href: '/contact' },
            { name: 'Regulamin', href: '/regulation' },
            { name: 'Forum', href: '/forum' },
            { name: 'Cookies', href: '/cookies' }
        ];
    
        const linksItem = links.map((el, i) => <Link key={i} to={el.href} onClick={this.onClick}>
                <Small>{el.name}</Small>
        </Link>);

        return (
            <footer>
                <List>
                    {linksItem}
                </List>
            </footer>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);