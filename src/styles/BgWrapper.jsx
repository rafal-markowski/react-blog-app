import styled from 'styled-components';

const BgWrapper = styled.div`
    background-color: ${({ theme }) => theme.bg.secondary };
    border-radius: ${({ theme }) => theme.border.radius };
`;

export default BgWrapper;