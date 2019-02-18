import styled from 'styled-components';

const ContainerFluid = styled.div`
    @media (min-width: ${({ theme }) => theme.breakpoint.sm}) {
        margin: 0 1rem;
    }

    @media (min-width: ${({ theme }) => theme.breakpoint.lg}) {
        margin: 0 2rem;
    }
`;

export default ContainerFluid;