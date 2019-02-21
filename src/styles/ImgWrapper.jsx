import styled from 'styled-components';

import { BigImg } from './all-styles';

const ImgWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 150px;
    overflow: hidden;

    @media (min-width: ${({ theme }) => theme.breakpoint.sm }) {
        height: 200px;
        border-radius: ${({ theme }) => theme.border.radius };
    }

    &:hover > ${BigImg} {
        transform: scale(1.3);

        &::after {
            opacity: 0.6;
        }
    }
`;

export default ImgWrapper;