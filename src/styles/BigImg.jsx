import styled from 'styled-components';

const BigImg = styled.img`
    display: block;
    width: 100%;
    height: 150px;

    @media (min-width: ${({ theme }) => theme.breakpoint.sm }) {
        height: 200px;
        border-radius: ${({ theme }) => theme.border.radius };
    }

    @media (min-width: ${({ theme }) => theme.breakpoint.md }) {
        height: 225px;
    }
`;

export default BigImg;