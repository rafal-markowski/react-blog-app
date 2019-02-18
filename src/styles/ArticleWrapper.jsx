import styled from 'styled-components';

const ArticleWrapper = styled.div`
    padding: ${({ padding }) => padding ? '0 1rem' : null };

    @media (min-width: ${({ theme }) => theme.breakpoint.sm}) {
        padding: 2rem;
    }
`;

export default ArticleWrapper;