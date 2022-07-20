import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const WrapperInfoUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin-left: 8px;
  height: 200px;

  h1 {
    font-size: 32px;
    font-weight: bold;
    color: #DDE2E8;
  }

  h3 {
    font-size: 18px;
    font-weight: bold;
    color: #CCCDCE;
  }

  h4 {
    font-size: 16px;
    font-weight: bold;
    color: #CCCDCE;
  }
`;

export const WrapperStatusCount = styled.div`
  display: flex;
  align-items: center;
  div {
    margin: 8px;
    text-align: center;
    color: #CCCDCE;
  }
`;

export const WrapperUserGeneric = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  color: #CCCDCE;

  h3 {
    margin-right: 8px;
    color: #CCCDCE;
  }

  a {
    font-size: 18px;
    color: #367FD6;
    font-weight: bold;
    
  }
`;

export const WrapperImage = styled.img`
  border-radius: 50%;
  width: 200px;
  margin: 8px;
  color: #CCCDCE;
`;
