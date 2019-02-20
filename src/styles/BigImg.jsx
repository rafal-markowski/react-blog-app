import styled from 'styled-components';

const BigImg = styled.div`
    display: block;
    width: 100%;
    height: 100%;
    background: ${({ img }) => `url(${img})` } no-repeat center;
    background-size: cover;
    transition: transform .5s ease-in;
    will-change: transform;

    @media (min-width: ${({ theme }) => theme.breakpoint.sm }) {
        &, &::after {
            border-radius: ${({ theme }) => theme.border.radius };
        }
    }

    &:after {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: ${({ theme }) => theme.bg.black };
        opacity: 0.3;
        transition: opacity .5s ease-in;
        will-change: opacity;
        content: '';
    }
`;

export default BigImg;