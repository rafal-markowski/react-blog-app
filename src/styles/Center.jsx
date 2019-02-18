import styled from 'styled-components';

const Center = styled.div`
    display: flex;
    flex-direction: ${({ direction }) => direction };
    justify-content ${({ x }) => x ? 'center' : null };
    align-items: ${({ y }) => y ? 'center' : null };
`;

Center.defaultProps = {
    direction: 'rows',
    x: null,
    y: null
};

export default Center;