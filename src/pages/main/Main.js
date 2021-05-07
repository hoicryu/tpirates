import React, { useState, useEffect, useCallback } from "react"
import { useHistory } from "react-router-dom";
import styled from "styled-components";

function Main() {
  const [bannerData, setBannerData] = useState([]);
  const [zoneData, setZoneData] = useState([]);
  const [itemData, setItemData] = useState([]);

  const [storeData, setStoreData] = useState([]);
  const [visibleStore, setVisibleStore] = useState([]);
  const [storeIndex, setStoreIndex] = useState(0);

  const [oneBannerData, setOneBannerData] = useState([]);
  const [spreadOutBanner, setSpreadOutBanner] = useState(false);
  const [zoneFilter, setZoneFilter] = useState(false);
  const [itemFilter, setItemFilter] = useState(false);


  useEffect(() => {
    getBannerList();
    getZoneList();
    getItemData();
    getStoreData();
  }, [])

  useEffect(() => {
    const interval = startRollBanner()
    return () => clearInterval(interval);
  }, [bannerData])

  useEffect(() => {
    setVisibleStore(storeData.slice(0, 10))
  }, [storeData])

  const infiniteScroll = useCallback(() => {
    let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
    let scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
    let clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight === scrollHeight) {
      const nextStore = () => {
        setStoreIndex(storeIndex + 10);
        setVisibleStore(visibleStore.concat(storeData.slice(storeIndex + 10, storeIndex + 20)));
      }
      setTimeout(nextStore, 1000)
    }
  }, [storeIndex, visibleStore]);

  useEffect(() => {
    window.addEventListener('scroll', infiniteScroll, true);
    return () => window.removeEventListener('scroll', infiniteScroll, true);
  }, [infiniteScroll]);


  const getBannerList = () => {
    fetch("data/bannerData.json")
      .then((bannerData) => bannerData.json())
      .then((bannerData) => setBannerData(bannerData))
      .catch((err) => console.log(err))
  }

  const getZoneList = () => {
    fetch("data/zoneData.json")
      .then((zoneData) => zoneData.json())
      .then((zoneData) => setZoneData(zoneData))
      .catch((err) => console.log(err))
  }

  const getItemData = () => {
    fetch("data/itemData.json")
      .then((itemData) => itemData.json())
      .then((itemData) => setItemData(itemData))
      .catch((err) => console.log(err))
  }

  const getStoreData = () => {
    fetch("data/storeData.json")
      .then((storeData) => storeData.json())
      .then((storeData) => setStoreData(storeData))
      .catch((err) => console.log(err))
  }

  const bannerToggle = () => {
    setSpreadOutBanner(!spreadOutBanner)
  }

  let bannerOrder = 0

  const startRollBanner = () => {
    return setInterval(() => {
      bannerOrder++
      if (bannerOrder === bannerData.length) {
        bannerOrder = 0
      }
      setOneBannerData(bannerData[bannerOrder])
    }, 1000);
  }

  const history = useHistory();
  const goToStoreDetailPage = (uri) => {
    history.push({
      pathname: `/시장${uri}`,
    });
  }

  return (
    <MainWrapper>
      <MainBox>
        <header>
          <h1>인어교주해적단</h1>
          <nav>
            <Menu>
              <li>홈</li>
              <li>시장</li>
              <li>쇼핑</li>
              <li>콘텐츠</li>
              <li>시세</li>
              <li>도매</li>
              <li>후기</li>
              <li>문의</li>
            </Menu>
          </nav>
        </header>
        {!spreadOutBanner &&
          <BannerImgBox>
            <BannerBox>
              <div>
                <span>{oneBannerData?.label} {oneBannerData?.price} {oneBannerData?.comment}</span>
              </div>
            </BannerBox>
            <img src="/images/arrow-down.png" alt="화살표" width="10px" onClick={bannerToggle} />
          </BannerImgBox>
        }
        {spreadOutBanner &&
          <BannerImgBox>
            <BannerBox>
              {bannerData?.map((data, idx) => {
                return (
                  <div key={idx}>
                    <span>{data.label} {data.price} {data.comment}</span>
                  </div>
                )
              })}
            </BannerBox>
            <img src="/images/arrow-up.png" alt="화살표" width="10px" onClick={bannerToggle} />
          </BannerImgBox>}
        <FilterBtnBox>
          <button onClick={() => setZoneFilter(!zoneFilter)}>모든지역</button>
          <button onClick={() => setItemFilter(!itemFilter)}>모든품목</button>
          <button>기본순</button>
        </FilterBtnBox>
        {zoneFilter &&
          <FilterListBox>
            {zoneData.map((zoneList, idx) => {
              return <span key={idx}>{zoneList.label}</span>
            })}
          </FilterListBox>}

        {itemFilter &&
          <FilterListBox>
            {itemData.map((itemList, idx) => {
              return <span key={idx}>{itemList.label}</span>
            })}
          </FilterListBox>}
        <SerchBox>
          <div>
            <input placeholder="검색어를 입력하세요."></input>
            <button>검색</button>
          </div>
        </SerchBox>
        <StoreWrapper>
          <h2>프리미엄 가게</h2>
          {visibleStore && visibleStore.map((storeList, idx) => {
            return (
              <StoreBox key={idx} onClick={() => goToStoreDetailPage(storeList.uri)}>
                <img src={storeList.thumbnail} alt="스토어 이미지" width="130px" />
                <div className="wrapper">
                  <div className="header">
                    <h4>{storeList.label}</h4>
                    <label>{storeList.market}</label>
                  </div>
                  <p>{storeList.description}</p>
                  <div className="bottom">
                    <span>{storeList.summary.rating}</span>
                    <span>{storeList.summary.comments}</span>
                    <span>{storeList.state === "OPEN" ? "영업중" : "휴무"}</span>
                  </div>
                </div>
              </StoreBox>
            )
          })}
        </StoreWrapper>
      </MainBox>
    </MainWrapper >
  );
}

const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  background-color: #313131;
  
`;

const MainBox = styled.div`
  width: 420px;
  background-color: #FFFFFF;

  header{

    h1{
      padding: 10px 0 0 10px;
      height: 40px;
      font-size: 1.2rem;
    }
  }
`;

const Menu = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 10px;
  font-size: 14px;

  li{
    &:nth-child(2){
      color: #2B80C0;
    }
  }
`;

const BannerImgBox = styled.div`
  position: relative;

  img{
    cursor: pointer;
    position: absolute;
    top: 13px;
    right: 13px;
  }
`;

const BannerBox = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  background-color:#1C79BC;

  div{
    padding: 10px;
    height: 40px;
    color: #FFFFFF;  
    font-size: 14px;
  }
`;

const FilterBtnBox = styled.div`
  display: flex;
  height: 40px;
  background-color:#FFFFFF;

  button{
    width: ${420 / 3}px;
    color: #1C79BC;
    font-size: 0.9em;
    font-weight: 500;
    border-top: 1px solid #999999;
    border-bottom: 1px solid #999999;


    &:nth-child(2){
      border-left: 1px solid #999999;
      border-right: 1px solid #999999;
    }
  }
`;

const FilterListBox = styled.div`
  display:flex;
  flex-wrap: wrap;
  span{
    padding: 6px;
    width: ${420 / 3}px;
    text-align: center;
    border-right: 1px solid #999999;
    border-bottom: 1px solid #999999;
    &:nth-child(3n){
      border-right : 0;
    }
  }

`;

const SerchBox = styled.div`
  height: 50px;
  background-color:#FFFFFF;

  div{
    display:flex;
    justify-content: space-between;
    margin: 9px;
    padding: 0 4px 0 4px;
    border-radius: 5px;
    color: #999999;
    background-color: #EEEEEE;

    input {
      height: 34px;
    }

    button{
      color: #999999;
    }
  }
`;

const StoreWrapper = styled.div`
  background-color: #EEEEEE;

  h2{
    padding : 10px;
    margin-left: 10px;
    color: #1C79BC;
  }
`;

const StoreBox = styled.div`
  position: relative;
  cursor: pointer;
  display:flex;
  margin-bottom: 10px;
  height: 130px;
  background-color: #FFFFFF;

  image {
    width: 130px;
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    padding: 10px;
    width: ${420 - 130}px;

    .header {
      display: flex;

    label {
      margin-left: 4px;
      font-size: 14px;
      color: #CBCBCB;
      }
    }

    p {
      color:#999999;
      font-size: 12px;
    }

    .bottom{
      position: absolute;
      bottom: 10px;
      display: flex;

      span{
        margin-left: 10px;
        font-size: 14px;
        color:#999999;

        &:first-child{
          margin-left: 0;
          color:#FF9200;
        }

        &:last-child{
          margin-left: 170px;
          color: #1C79BC;
        }
      }
    }
    
  }
`;


export default Main;
