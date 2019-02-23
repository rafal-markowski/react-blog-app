import styled from 'styled-components';

import Small from './Small';

const SuccessMsg = styled(Small)`
    color: ${({ theme }) => theme.color.success };
`;

export default SuccessMsg;