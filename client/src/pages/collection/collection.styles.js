import styled from 'styled-components';

export const CollectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 80px 0 40px 40px;
`;

export const CollectionTitle = styled.span`
    font-size: 18px;
    margin-bottom: 30px;
`;

export const CollectionItems = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 10px;

    & .collection-item {
        margin-bottom: 30px;
    }
`;