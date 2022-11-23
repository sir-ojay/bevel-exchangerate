import styled from "styled-components";

export const CurrencyContainer = styled.div`
  width: 100%;
  height: 616px;
  align-items: center;
  background: #ffffff;

  @media screen and (min-width: 350px) and (max-width: 550px) {
    padding: 74px 16.66px 62px 16px;
    height: 694px;
  }
  @media screen and (min-width:950px) and (max-width: 1200px) {
    padding: 18px 16.66px 14px 10px;
    height: 746px;
  }
`;

export const Header = styled.h1`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  padding: 96px 0px 0px 120px;
  line-height: 28px;
  color: #1e293b;

  @media screen and (min-width: 350px) and (max-width: 550px) {
    font-size: 20px;
    padding: 15px 0px 0px 10px;
  }

  @media screen and (min-width: 950px) and (max-width: 1200px) {
    font-size: 20px;
    padding: 15px 0px 0px 10px;
  }
`;
export const RateWrapper = styled.div`
  height: 486px;
  justify-content: space-between;
  display: flex;
  margin-top: 49px;

  @media screen and (min-width: 350px) and (max-width: 750px) {
    height: 286px;
    width: 100%;
    flex-direction: column;
    justify-content: center;
  }

  @media screen and (min-width: 950px) and (max-width: 1200px) {
    height: 546px;
    width: 100%;
    flex-direction: column;
    justify-content: center;
  }
`;

export const ImageRateWrapper = styled.div`
  height: 50%;
  width: 50%;
  margin: 0px 0px 0px 10%;

  @media screen and (min-width: 350px) and (max-width: 550px) {
    padding: 0px;
    margin: 60% 0px 0px 1%;
    height: 242px;
    width: 340px;
  }
  @media screen (min-width: 950px) and (max-width: 1200px) {
    display: none;
  }
`;


export const ImageT = styled.img`
  height: 100%;
  width: 100%;
  @media screen and (min-width: 350px) and (max-width: 550px) {
    height: 100%;
    width: 85%;
  }
  @media screen and (min-width: 950px) and (max-width: 1200px) {
    display: none;
  }
`;

export const ImageTable = styled.img`
  height: 100%;
  width: 100%;
  @media screen and (min-width: 350px) and (max-width: 550px) {
    height: 100%;
    width: 100%;
  }
  @media screen and (min-width: 950px) and (max-width: 1200px) {
    height: 100%;
    width: 100%;
  }
`;

export const ImageWrapper = styled.div`
  height: 80%;
  width: 50%;
  margin: 0px 20px 70.11px 0px;
  @media screen and (min-width: 350px) and (max-width: 550px) {
    margin: 0px 0px 5px 5px;
    height: 100%;
    width: 95%;
  }
  @media screen and (min-width: 950px) and (max-width: 1200px) {
    margin: 0px 0px 5px 0px;
    width: 90%;
  }
`;












