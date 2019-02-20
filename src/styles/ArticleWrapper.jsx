import styled from 'styled-components';

const ArticleWrapper = styled.div`
    padding: 1rem 0;

    @media (min-width: ${({ theme }) => theme.breakpoint.sm}) {
        padding: 2rem;
    }
`;

export default ArticleWrapper;