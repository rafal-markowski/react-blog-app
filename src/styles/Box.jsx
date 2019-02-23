import styled from 'styled-components';

const Box = styled.div`
    padding: 1rem;
    background: ${({ theme }) => theme.bg.box };

    @media (min-width: ${({ theme }) => theme.breakpoint.sm }) {
        border-radius: ${({ theme }) => theme.border.radius };
    }
`;

export default Box;