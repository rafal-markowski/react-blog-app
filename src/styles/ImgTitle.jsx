import styled from 'styled-components';

const ImgTitle = styled.h2`
    position: absolute;
    right: 0.4166em;
    left: 0.4166em;
    bottom: 0.4166em;
    z-index: 2;
    font-weight: ${({ theme }) => theme.fontWeight.bold };
    font-size: 1.5em;
    line-height: 1.25em;
    
    @media (min-width: ${({ theme }) => theme.breakpoint.sm }) {
        font-size: 1.75em;
    }

    &:first-letter {
        text-transform: uppercase;
    }
`;

export default ImgTitle;