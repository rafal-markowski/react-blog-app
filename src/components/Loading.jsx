import React, { Component } from 'react';
import styled from 'styled-components';
import posed from 'react-pose';

const Wrapper = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.bg.primary };
`;

const Scale = posed.div({
    big: { 
        scale: 50,
        visibility: 'visible',
        transition: {
            duration: 300
        }
    },
    small: { 
        scale: 1,
        visibility: 'visible',
        transition: {
            duration: 600
        } 
    }
});

const Circle = styled(Scale)`
    width: 4px;
    height: 4px;
    visibility: hidden;
    border-radius: 100%;
    background-color: ${({ theme }) => theme.bg.box };
`;

class Loading extends Component {
    id = null;
    state = {
        scale: false,
    };

    componentDidMount() {   
        this.id = setInterval(() => {
            const { scale } = this.state;

            this.setState({
                scale: !scale
            });
        }, 600);
    }

    componentWillUnmount() {
        clearInterval(this.id);
    }

    render() {
        const { scale } = this.state;

        return (
            <Wrapper>
               <Circle pose={scale ? 'big' : 'small'} />
            </Wrapper>
        );
    }
}

export default Loading;