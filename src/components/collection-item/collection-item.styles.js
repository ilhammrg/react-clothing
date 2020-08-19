import styled from 'styled-components';

export const CollectionItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 20vw;
    height: 350px;
    align-items: center;
    position: relative;
    margin-bottom: 20px;

    button {
        display: none;
        position: absolute;
        top: 75%;
    }

    &:hover {
        .image {
            opacity: 0.7;
        }

        button {
            display: flex;
        }
    }
`;

export const CollectionImage = styled.div`
    width: 100%;
    height: 95%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    margin-bottom: 5px;
`;

export const CollectionItemFooter = styled.div`
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;

    .name {
        margin-bottom: 15px;
        width: 90%;
    }

    .price {
        width: 10%;
    }
`;