import styled from 'styled-components';

export const CheckoutPageContainer = styled.main`
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px auto;
  min-height: 100vh;

  .title {
    margin-bottom: 30px;
    font-size: 2rem;
  }

  @media screen and (min-width: 1024px) {
    max-width: 900px;

    .title {
      margin-bottom: 50px;
    }
  }

  @media screen and (min-width: 1280px) {
    margin: 150px auto;
    padding: 60px;
    box-shadow: 0 1px 60px rgba(200, 200, 200, 0.5);
  }
`;

export const CheckoutHeader = styled.section`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;
`;

export const CheckoutHeaderBlock = styled.div`
  text-transform: capitalize;
`;

export const CheckoutTotal = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;

  .price-total {
    color: red;
  }
`;

export const CheckoutTestWarning = styled.div`
  text-align: center;
  margin: 50px auto;
  font-weight: 400;
  font-size: 0.9rem;
  font-family: 'Inter', sans-serif;
  padding: 15px;
  border: 1px solid #ddd;
`;
