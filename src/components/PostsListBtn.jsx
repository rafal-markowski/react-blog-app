import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import { Button, Center } from '../styles/all-styles';

const Btn = styled(Button)`
    padding: 0.6rem 0.65rem;
    margin-right: 5px;
    border: ${({ theme }) => theme.border.button };
    border-radius: ${({ theme }) => theme.border.radius }
    font-weight: ${({ theme }) => theme.fontWeight.bold };
    background-color: transparent;
    color: white;

    &:hover {
        background-color: ${({ theme }) => theme.bg.button };
    }
`; 

const DesktopBtn = styled(Btn)`
    background-color: ${({ isActive, theme }) => isActive ? theme.bg.button : null};

    @media (max-width: ${({ theme }) => theme.breakpoint.md }) {
        display: none;
    }
`;

class PostsListBtn extends Component {
    state = {
        page: parseInt(this.props.match.params.id, 10)
    }

    componentDidUpdate(prevProps) {
        if(prevProps.match.params.id !== this.props.match.params.id) {
            this.setState({
                page: parseInt(this.props.match.params.id, 10)
            });
        }
    }

    onClick = id => {
        const { numberOfPages, history } = this.props;
        const { page } = this.state;


        if(id >= 1 && id <= numberOfPages && page !== id) {
            this.setState({
                page: id
            });
            history.push(`/page/${id}`);
            window.scrollTo({
                top: this.props.parent.current.offsetTop
            });
        }
    }

    createButton(page, val, _if, _else) {
        return _if ? {
            btn: <DesktopBtn key={val} isActive={page === val ? true : false} onClick={() => this.onClick(val)}>{val}</DesktopBtn>,
            bool: true
        } : _else ? {
            btn: <DesktopBtn key={val}>...</DesktopBtn>,
            bool: false
        } : {};
    }

    render() {
        const { numberOfPages } = this.props;
        const { page } = this.state;
        const btns = [<Btn key="prev" onClick={() => this.onClick(page - 1)}>Prev</Btn>];

        for(let i = 1, obj = {}; i <= numberOfPages; i++) {
            obj = 
                (page <= 2 || page >= numberOfPages - 1) ? this.createButton(page, i, (i <= 3  || i >=  numberOfPages - 2), obj.bool) :
                (page === 3)                             ? this.createButton(page, i, (i <= 4  || i >=  numberOfPages - 1), obj.bool) :
                (page === numberOfPages - 2)             ? this.createButton(page, i, (i <= 2  || i >=  numberOfPages - 3), obj.bool) :
                                                           this.createButton(page, i, (i === 1 || i === numberOfPages || (i >= page - 1 && i <= page + 1)), obj.bool);
            btns.push(obj.btn);
        }
        btns.push(<Btn key="next" onClick={() => this.onClick(page + 1)}>Next</Btn>);

        return (
            <Center>
                {btns}
            </Center>
        );
    }
}

export default withRouter(PostsListBtn);