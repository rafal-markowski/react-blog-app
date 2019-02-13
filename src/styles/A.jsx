import styled from 'styled-components';
import { Link } from 'react-router-dom';

const A = styled(Link)`
    color: ${({ theme }) => theme.color.white };
    text-decoration: none;
`;

export default A;