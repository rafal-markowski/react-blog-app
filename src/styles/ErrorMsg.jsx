import styled from 'styled-components';

import Small from './Small';

const ErrorMsg = styled(Small)`
    color: ${({ theme }) => theme.color.error };
`;

export default ErrorMsg;