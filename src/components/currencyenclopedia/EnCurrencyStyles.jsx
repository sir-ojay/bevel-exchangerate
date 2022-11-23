import styled from "styled-components";

export const CurrencyContainer = styled.div`
  box-sizing: border-content;
  background: #00296b;
  width: 100%;
  height: 514px;
  align-items: center;
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 350px) and (max-width: 550px) {
    height: 425px;
  }

  @media screen and (min-width: 950px) and(max-width: 1200px) {
    height: 493px;
    width: 100%;
  }
`;
                  
export const Container = styled.div`
  width: 45%;
  padding: 123px 0px 193px 200px;

  @media screen and (min-width: 350px) and (max-width: 550px) {
    width: 100%;
    padding-left: 10px;
    padding: 33px 0px 48px 16px;

    height: 498px;
  }
  @media screen and (min-width: 950px) and(max-width: 1200px) {
    height: 493px;
    width:50%
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-item: center;
   padding:152px 285px 181px 286px;
  }
`;      


export const Header = styled.h2`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 40px;
  align-items: center;
  width: 100%;

  color: #ffffff;

  @media screen and (min-width: 350px) and (max-width: 550px) {
    margin-top: 60px;
    font-weight: 600;
    font-size: 36px;
    line-height: 44px;
    width: 80%;
  }
  @media screen and (min-width: 950px)  and(max-width: 1200px) {
    font-weight: 600;
    font-size: 36px;
    line-height: 44px;
    width: 100%;
  }
`;

export const Content = styled.p`
  width: 90%;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  color: #ffffff;

  @media screen and (min-width: 350px) and (max-width: 550px) {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    width: 75%;
    height: 58px;
  }
  @media screen and (min-width: 950px) and(max-width: 1200px) {
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
  } ;
`;

export const Select = styled.div`
  width: 40%;
  margin-top: 69px;

  @media screen and (min-width: 350px) and(max-width: 550px) {
    width: 80%;
  }
`;

export const Option = styled.option`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  align-items: center;
  letter-spacing: 0.001em;
  @media screen and (min-width: 350px) and(max-width: 550px) {
    padding: 1em;
  }
`;

export const ImageWrapper = styled.div`
  width: 55%;

  @media screen and (min-width: 350px) and (max-width: 550px) {
    display: none;
  }
  @media screen and (max-width: 950px) {
    display: none;
  }
  @media screen and(max-width: 1200px) {
    display: none;
  }
`;
export const Image = styled.img`
  width: 100%;
  @media screen and (min-width: 350px) and (max-width: 550px) {
    display: none;
  }
  @media screen and (min-width: 950px) and(max-width: 1200px) {
    display: none;
  }
  @media screen and (min-width: 950px) and(max-width: 1200px) {
    display: none;
  }
`;
