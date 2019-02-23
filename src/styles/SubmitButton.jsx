import styled from 'styled-components';

import { Button } from './all-styles';

const SubmitButton = styled(Button)`
    width: 100%;
    padding: 0.5rem 1rem;
    text-transform: uppercase;
    background-color: ${({ theme }) => theme.bg.button };

    &:hover {
        background-color: ${({ theme }) => theme.bg.buttonHover };
    }
`;

export default SubmitButton;