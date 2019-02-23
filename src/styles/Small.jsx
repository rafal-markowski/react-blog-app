import styled from 'styled-components';

const Small = styled.span`
    display: inline-block;
    font-size: 0.75em;
    font-family: ${({ theme }) => theme.fontFamily.secondary };
    line-height: 1.3em;
`;

export default Small;