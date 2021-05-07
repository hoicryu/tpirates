import React from "react"
import { useHistory } from "react-router-dom";

import styled from "styled-components";

function StoreDetail() {

  const history = useHistory();
  const goToStoreDetailPage = () => {
    history.push("/");
  }


  return (
    <StoreDetailWrapper>
      <MainBox>
        <Header>
          <img src="/images/arrow-left.png" alt="화살표" width="20px" height="20px" onClick={goToStoreDetailPage} />
          <p>서산안면도 노량진 1층</p>
          <span>36.1만</span>
        </Header>
        <ImgBox>사진 구역</ImgBox>
      </MainBox>

    </StoreDetailWrapper >
  );
}

const StoreDetailWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  background-color: #313131;

`;

const MainBox = styled.div`
  width: 420px;
  background-color: #FFFFFF;
`;

const Header = styled.header`
  position:relative;
  display: flex;
  align-items: center;
  height: 50px;

  img{
    margin-left:15px;
    cursor: pointer;
    }

    p{
      margin-left:15px;      
    }

    span{
      position:absolute;
      right: 15px;
      font-size: 15px;
    }
`;

const ImgBox = styled.div`
  height: 190px;
  background-color: #1E79BC;
  color: white;
  text-align: center;
`;


export default StoreDetail;
