import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import mapStateToProps from '../tools/mapStateToProps';
import mapDispatchToProps from '../tools/mapDispatchToProps';
import Button from '../styles/Button';

const Btn = styled(Button)`
    position: fixed;
    right: 25px;
    bottom: 10px;
    width: 35px;
    height: 35px;
    border-radius: 100%;
    display: ${({ display }) => display };
    background-color: ${({ theme }) => theme.bg.box };

    &::after, &::before {
        position: absolute;
        content: '';
    }

    &::before {
        top: 7.5px;
        left: 7.5px;
        border-bottom: 10px solid ${({ theme }) => theme.color.white };
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
    }

    &::after {
        top: 17.5px;
        left: 13.5px;
        width: 8px;
        height: 10px;
        background-color: ${({ theme }) => theme.color.white };
    }
`;

class TopButton extends Component {
    steep = 25;
    display = 'none';
    scrollY = 0;
    time = 2000;
    id = null;

    componentDidMount() {
        setTimeout(() => {
            const { global:globalElement } = this.props.scroll.element;
            
            globalElement.current.addEventListener('scroll', this.scrolling);
        }, 250);
    }

    onClick = () => {
        this.display = 'none';
        this.scrollToTop();
        this.forceUpdate();
    }

    scrollToTop = () => {
        if(this.scrollY >= 0) {
            const { global:globalElement } = this.props.scroll.element;

            this.scrollY -= this.steep;
            globalElement.current.scrollTo(0, this.scrollY);
            requestAnimationFrame(this.scrollToTop);
        }
    }

    scrolling = () => {
        if(this.id) {
            clearTimeout(this.id);
        } else if (this.display === 'block') {
            this.display = 'none';
            this.forceUpdate();
        }


        this.id = setTimeout(() => {
            const { global:globalElement } = this.props.scroll.element;

            this.id = null;
            this.scrollY = globalElement.current.scrollTop;
            this.display = this.scrollY > 0 ? 'block' : 'none';
            this.forceUpdate();
        }, this.time);
    }

    render() {
        return (
            <Btn display={this.display} onClick={this.onClick}></Btn>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopButton);