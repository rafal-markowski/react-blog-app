import styled from 'styled-components';

const P = styled.p`
    margin: 1.25rem 0;
    font: 1.125em / 1.25em ${({ theme }) => theme.fontFamily.secondary };
    text-align: justify;
    
    &:first-letter {
        text-transform: uppercase;
    }
`;

export default P;