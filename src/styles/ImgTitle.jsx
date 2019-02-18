import styled from 'styled-components';

const ImgTitle = styled.h2`
    position: absolute;
    left: 10px;
    bottom: 10px;
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