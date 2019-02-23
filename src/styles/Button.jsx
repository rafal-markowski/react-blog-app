import styled from 'styled-components';

const Button = styled.button`
    border: none;
    font-family: ${({ theme }) => theme.fontFamily.primary };
    color: white;
    cursor: pointer;

    &:focus {
        outline: none;
    }
`;

export default Button;