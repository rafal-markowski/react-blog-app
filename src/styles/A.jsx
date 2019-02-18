import styled from 'styled-components';
import { Link } from 'react-router-dom';

const A = styled(Link)`
    color: ${({ theme }) => theme.color.white };
    text-decoration: none;
    outline: none;
    -webkit-tap-highlight-color: transparent;
`;

export default A;