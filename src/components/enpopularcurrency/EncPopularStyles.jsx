import styled from "styled-components";

export const CurrencyContainer = styled.div`
  width: 100%;
  height: 263px;
  align-items: center;
  background: #e6efff;

  @media screen and (min-width: 350px) and (max-width: 550px) {
    padding: 24px 0px;
    height: 332px;
  }

  @media screen and (min-width: 950px) and (max-width: 1200px) {
    height: 411px;
  }
`;

export const Header = styled.h1`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  color: #1e293b;
  padding: 47px 0px 28px 120px;

  @media screen and (min-width: 350px) and (max-width: 550px) {
    padding: 0px 0px 0px 94.5px;
    font-weight: 600;
    font-size: 20px
    line-height: 28px;
  }
  @media screen and (min-width: 950px) and (max-width: 1200px) {
    padding: 41px 0px 0px 100px;
 
  }
`;

export const CurrencyWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 0px 0px 200px;
  align-items: left;

  @media screen and (min-width: 350px) and (max-width: 550px) {
    padding: 0px 0px 0px 22px;

    display: grid;
    grid-template-columns: auto auto auto;
    grid-template-rows: auto auto auto;
  }
`;



export const Text = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.001em;
  color: #2f343f;
  margin-top: 35px;

  @media screen and (min-width: 350px) and (max-width: 550px) {
    font-size: 12px;
    line-height: 18px;
    margin-top: 20px;
    width: 70%;
  }
  @media screen and (min-width: 950px) and (max-width: 1200px) {
    font-size: 12px;
    line-height: 18px;
    margin-top: 20px;
    width: 100%;
  }
`;

export const ImageCont = styled.div`
  height: 30px;
  width: 70px;
 
 
  @media screen and (max-width: 768px) {
    padding: 1em;
  }
`;

export const ImageWrapper = styled.div`
  margin: 22px 41.07px 22px 0px;

  @media screen and (min-width: 350px) and (max-width: 550px) {
    margin: 0px 0px 0px 0px;
  }

`;

export const Image = styled.img`
  width: 100%;

  @media screen and (min-width: 350px) and (max-width: 550px) {
    height: 32.14285659790039px;
    width: 45px;
  }

  @media screen and (min-width: 950px) and (max-width: 1200px)
   {
    height: 70px;
    width: 70px;
  
  }
`;
