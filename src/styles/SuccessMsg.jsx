import styled from 'styled-components';

const SuccessMsg = styled.span`
    color: ${({ theme }) => theme.color.success };
    font-size: 0.75em;
    line-height: 1em;
`;

export default SuccessMsg;