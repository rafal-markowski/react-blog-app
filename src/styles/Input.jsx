import styled from 'styled-components';

const Input = styled.input`
    width: 100%;
    padding: 0.5rem;
    border: 1px solid ${({ theme }) => theme.border.color };
    background-color: transparent;
    color: ${({ theme }) => theme.color.white };
`;

export default Input;