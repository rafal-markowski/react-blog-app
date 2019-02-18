import styled from 'styled-components';

const ImgWrapper = styled.div`
    position: relative;

    &:after {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: ${({ theme }) => theme.border.radius };
        background-color: ${({ theme }) => theme.bg.img };
        content: '';
    }

    &:hover:after {
        background-color: ${({ theme }) => theme.bg.imgHover };
    }
`;

export default ImgWrapper;