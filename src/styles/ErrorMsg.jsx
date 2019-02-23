import styled from 'styled-components';

const ErrorMsg = styled.span`
    color: ${({ theme }) => theme.color.error };
    font-size: 0.75em;
    line-height: 1em;
`;

export default ErrorMsg;