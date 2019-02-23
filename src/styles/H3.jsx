import styled from 'styled-components';

const H3 = styled.h3`
    font-size: 1.375em;
    line-height: 1.2em;
    margin-bottom: 0.5rem;
    font-weight: ${({ theme }) => theme.fontWeight.bold };
`;

export default H3;