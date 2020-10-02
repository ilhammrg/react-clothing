import styled from 'styled-components';

export const CollectionItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 350px;
  align-items: center;
  position: relative;
  margin: 0 auto 20px auto;

  button {
    display: block;
    position: absolute;
    top: 75%;
    min-width: unset;
    width: unset;
    height: unset;
    line-height: unset;
    padding: 15px;
    font-size: 0.6rem
  }

  @media screen and (min-width: 1024px) {
    button {
      display: none;
      min-width: 165px;
      width: auto;
      height: 50px;
      line-height: 50px;
      padding: 0 35px 0 35px;
      font-size: 1rem;
    }

    &:hover {
      .image {
        transition: 0.3s cubic-bezier(0.25, 0.45, 0.45, 0.95);
        opacity: 0.7;
      }

      button {
        display: flex;
      }
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
    font-weight: 300;
  }

  .price {
    font-weight: 300;
    font-family: 'Inter', sans-serif;
    font-size: 0.9rem;
  }
`;