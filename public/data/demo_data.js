// 롤링 배너
let bannerData = [
  {
    "label": "활모듬회(소)",
    "price": "38,000원→30,000원",
    "comment": "쿠폰 할인가",
    "outLink": "",
    "zoneLabel": "가락",
    "permalink": "가락시장놀부수산",
    "uri": "가락시장놀부수산"
  },
  {
    "label": "활새우(대)",
    "price": "25,000원/kg",
    "comment": "전국최저가",
    "outLink": "",
    "zoneLabel": "인천",
    "permalink": "인천종합연안부두어시장서림상회",
    "uri": "인천종합연안부두어시장서림상회"
  }
];

// 모든 지역
let zoneData = [
  {
    "locations": [
      {
        "label": "노량진수산시장",
        "code": "0000000001"
      }
    ],
    "label": "노량진",
    "code": "0000000002"
  },
  {
    "locations": [
      {
        "label": "마포농수산물시장",
        "code": "0000000003"
      }
    ],
    "label": "마포",
    "code": "0000000004"
  },
  {
    "locations": [
      {
        "label": "강서농수산물시장",
        "code": "0000000004"
      }
    ],
    "label": "강서",
    "code": "0000000005"
  },
  {
    "locations": [
      {
        "label": "가락시장",
        "code": "0000000002"
      }
    ],
    "label": "가락",
    "code": "0000000003"
  },
  {
    "locations": [
      {
        "label": "강화도분오어판장",
        "code": "0000000236"
      },
      {
        "label": "강화도선수포구어판장",
        "code": "0000000232"
      },
      {
        "label": "강화도선두5리어판장",
        "code": "0000000231"
      },
      {
        "label": "강화도황산도어판장",
        "code": "0000000227"
      },
      {
        "label": "구읍뱃터어시장",
        "code": "0000000291"
      },
      {
        "label": "영흥수협회센터",
        "code": "0000000204"
      },
      {
        "label": "영종관광어시장",
        "code": "0000000155"
      },
      {
        "label": "영흥수산물직판장어부들",
        "code": "0000000146"
      },
      {
        "label": "영흥수산물직판장",
        "code": "0000000145"
      },
      {
        "label": "인천종합(연안부두)어시장",
        "code": "0000000008"
      },
      {
        "label": "인천종합(연안부두)갑각류센터",
        "code": "0000000313"
      },
      {
        "label": "소래포구종합어시장",
        "code": "0000000007"
      }
    ],
    "label": "인천",
    "code": "0000000027"
  },
  {
    "locations": [
      {
        "label": "수원농수산물시장",
        "code": "0000000011"
      }
    ],
    "label": "수원",
    "code": "0000000036"
  },
  {
    "locations": [
      {
        "label": "평촌(안양)농수산물시장",
        "code": "0000000009"
      }
    ],
    "label": "평촌",
    "code": "0000000034"
  },
  {
    "locations": [
      {
        "label": "구리농수산물시장",
        "code": "0000000006"
      }
    ],
    "label": "구리",
    "code": "0000000035"
  },
  {
    "locations": [
      {
        "label": "광진구활어회센터",
        "code": "0000000320"
      },
      {
        "label": "성북구활어회센터",
        "code": "0000000278"
      }
    ],
    "label": "성북/광진",
    "code": "0000000066"
  },
  {
    "locations": [
      {
        "label": "오이도난전시장",
        "code": "0000000226"
      },
      {
        "label": "오이도전통수산시장",
        "code": "0000000012"
      },
      {
        "label": "오이도종합어시장",
        "code": "0000000229"
      }
    ],
    "label": "오이도",
    "code": "0000000037"
  },
  {
    "locations": [
      {
        "label": "대부도오션시티종합어시장",
        "code": "0000000211"
      },
      {
        "label": "안산농수산물회센터",
        "code": "0000000085"
      }
    ],
    "label": "안산",
    "code": "0000000039"
  },
  {
    "locations": [
      {
        "label": "궁평항수산물직판장",
        "code": "0000000013"
      },
      {
        "label": "사강수산시장",
        "code": "0000000189"
      },
      {
        "label": "어촌계직영수산물판매장",
        "code": "0000000239"
      }
    ],
    "label": "화성",
    "code": "0000000040"
  },
  {
    "locations": [
      {
        "label": "하남수산물복합단지",
        "code": "0000000119"
      }
    ],
    "label": "하남",
    "code": "0000000038"
  },
  {
    "locations": [
      {
        "label": "김포활어회센터 ",
        "code": "0000000279"
      },
      {
        "label": "대명항종합어시장",
        "code": "0000000237"
      },
      {
        "label": "대명항젓갈건어물부설시장",
        "code": "0000000228"
      }
    ],
    "label": "김포",
    "code": "0000000052"
  },
  {
    "locations": [
      {
        "label": "부산자갈치회센터",
        "code": "0000000316"
      },
      {
        "label": "부산기장시장",
        "code": "0000000195"
      },
      {
        "label": "부산남천해변시장",
        "code": "0000000253"
      },
      {
        "label": "부산민락회타운",
        "code": "0000000058"
      },
      {
        "label": "부산민락어패류시장",
        "code": "0000000041"
      },
      {
        "label": "부산민락어민활어직판장",
        "code": "0000000038"
      },
      {
        "label": "부산민락밀레니엄회센터활어마트",
        "code": "0000000311"
      },
      {
        "label": "부산바다산책활어센터",
        "code": "0000000312"
      },
      {
        "label": "부산자갈치시장",
        "code": "0000000036"
      },
      {
        "label": "부산자갈치신동아시장",
        "code": "0000000037"
      }
    ],
    "label": "부산",
    "code": "0000000029"
  },
  {
    "locations": [
      {
        "label": "울산오광수산회센터",
        "code": "0000000318"
      },
      {
        "label": "강구항강구어시장",
        "code": "0000000250"
      },
      {
        "label": "강구항동광어시장",
        "code": "0000000059"
      },
      {
        "label": "경주감포수협활어직판장",
        "code": "0000000309"
      },
      {
        "label": "거제고현수산시장",
        "code": "0000000043"
      },
      {
        "label": "거제장목수산센터",
        "code": "0000000190"
      },
      {
        "label": "마산어시장",
        "code": "0000000062"
      },
      {
        "label": "삼천포용궁수산시장",
        "code": "0000000044"
      },
      {
        "label": "울산농수산물도매시장",
        "code": "0000000065"
      },
      {
        "label": "울진후포수산시장",
        "code": "0000000307"
      },
      {
        "label": "울진후포어시장",
        "code": "0000000057"
      },
      {
        "label": "울진죽변항",
        "code": "0000000030"
      },
      {
        "label": "울진후포바다마실회대게센터",
        "code": "0000000248"
      },
      {
        "label": "울진후포수협수산물유통센터",
        "code": "0000000179"
      },
      {
        "label": "영덕 강구항난전시장",
        "code": "0000000184"
      },
      {
        "label": "죽변방파제회센터",
        "code": "0000000308"
      },
      {
        "label": "죽변항울진대게활어회유통센터",
        "code": "0000000249"
      },
      {
        "label": "통영중앙시장",
        "code": "0000000045"
      },
      {
        "label": "포항구룡포전통시장",
        "code": "0000000194"
      },
      {
        "label": "포항 죽도시장",
        "code": "0000000042"
      }
    ],
    "label": "경상도",
    "code": "0000000010"
  },
  {
    "locations": [
      {
        "label": "광주서부농수산물도매시장",
        "code": "0000000064"
      }
    ],
    "label": "광주",
    "code": "0000000042"
  },
  {
    "locations": [
      {
        "label": "대전신탄진회센터",
        "code": "0000000127"
      },
      {
        "label": "대전노은동농수산물시장",
        "code": "0000000035"
      },
      {
        "label": "대전오정동농수산물시장",
        "code": "0000000034"
      }
    ],
    "label": "대전",
    "code": "0000000043"
  },
  {
    "locations": [
      {
        "label": "속초관광수산시장",
        "code": "0000000019"
      },
      {
        "label": "강릉중앙시장",
        "code": "0000000024"
      },
      {
        "label": "주문진항 수산물 좌판 풍물시장",
        "code": "0000000040"
      },
      {
        "label": "강릉주문진수산시장",
        "code": "0000000014"
      },
      {
        "label": "강릉주문진활어회센터",
        "code": "0000000158"
      },
      {
        "label": "강릉항수산물직판장",
        "code": "0000000023"
      },
      {
        "label": "고성봉포항활어회센터",
        "code": "0000000027"
      },
      {
        "label": "낙산어촌계활어회센터",
        "code": "0000000301"
      },
      {
        "label": "묵호항전망대활어회센터",
        "code": "0000000100"
      },
      {
        "label": "묵호항활어회센터",
        "code": "0000000022"
      },
      {
        "label": "삼척항대게거리",
        "code": "0000000306"
      },
      {
        "label": "삼척항활어회센터",
        "code": "0000000028"
      },
      {
        "label": "설악항활어회센터",
        "code": "0000000299"
      },
      {
        "label": "속초청호활어회센터",
        "code": "0000000125"
      },
      {
        "label": "속초대포항수산시장",
        "code": "0000000015"
      },
      {
        "label": "속초동명항활어회센터",
        "code": "0000000020"
      },
      {
        "label": "속초장사항활어회직판장",
        "code": "0000000246"
      },
      {
        "label": "속초엑스포타워회센터",
        "code": "0000000321"
      },
      {
        "label": "속초장사항",
        "code": "0000000021"
      },
      {
        "label": "원주어시장",
        "code": "0000000121"
      },
      {
        "label": "양양물치항활어회센터",
        "code": "0000000025"
      },
      {
        "label": "양양중앙시장",
        "code": "0000000183"
      },
      {
        "label": "양양후진활어센터",
        "code": "0000000300"
      },
      {
        "label": "임원항수산시장",
        "code": "0000000188"
      },
      {
        "label": "임원항수협공판장",
        "code": "0000000180"
      },
      {
        "label": "주문진소돌항아들바위회센터",
        "code": "0000000303"
      }
    ],
    "label": "강원도",
    "code": "0000000008"
  },
  {
    "locations": [
      {
        "label": "곰소젓갈식품센터",
        "code": "0000000222"
      },
      {
        "label": "곰소수산물판매센터",
        "code": "0000000221"
      },
      {
        "label": "군산수산물종합센터",
        "code": "0000000169"
      },
      {
        "label": "군산새만금수산시장",
        "code": "0000000049"
      },
      {
        "label": "고흥녹동항회타운",
        "code": "0000000099"
      },
      {
        "label": "나로도수협위판장",
        "code": "0000000242"
      },
      {
        "label": "목포종합수산시장",
        "code": "0000000053"
      },
      {
        "label": "목포북항회센터",
        "code": "0000000243"
      },
      {
        "label": "목포북항회직판장",
        "code": "0000000241"
      },
      {
        "label": "목포북항해양수산복합센터",
        "code": "0000000052"
      },
      {
        "label": "부안격포항수산시장",
        "code": "0000000048"
      },
      {
        "label": "부안상설시장",
        "code": "0000000223"
      },
      {
        "label": "순천어민직판장",
        "code": "0000000290"
      },
      {
        "label": "신안송도수산시장",
        "code": "0000000098"
      },
      {
        "label": "완도우성종합어시장",
        "code": "0000000095"
      },
      {
        "label": "완도학림활어회센터",
        "code": "0000000170"
      },
      {
        "label": "여수교동시장",
        "code": "0000000297"
      },
      {
        "label": "여수수산시장",
        "code": "0000000047"
      },
      {
        "label": "여수수산물특화시장",
        "code": "0000000046"
      },
      {
        "label": "전주수산시장",
        "code": "0000000118"
      },
      {
        "label": "채석강수산시장",
        "code": "0000000294"
      }
    ],
    "label": "전라도",
    "code": "0000000011"
  },
  {
    "locations": [
      {
        "label": "남당항해양수산물복합공간",
        "code": "0000000167"
      },
      {
        "label": "당진시수산물유통센터",
        "code": "0000000289"
      },
      {
        "label": "당진어시장",
        "code": "0000000214"
      },
      {
        "label": "몽산포어촌계수산물판매장",
        "code": "0000000217"
      },
      {
        "label": "보령대천항수산시장",
        "code": "0000000031"
      },
      {
        "label": "보령무창포수산시장",
        "code": "0000000032"
      },
      {
        "label": "백사장어촌계수산시장",
        "code": "0000000292"
      },
      {
        "label": "삼길포수산물직판장",
        "code": "0000000218"
      },
      {
        "label": "삼길포수산물직매장",
        "code": "0000000213"
      },
      {
        "label": "삽교호전망대종합어시장",
        "code": "0000000060"
      },
      {
        "label": "서산동부시장",
        "code": "0000000067"
      },
      {
        "label": "서천수산물특화시장",
        "code": "0000000033"
      },
      {
        "label": "서천수협홍원위판장",
        "code": "0000000295"
      },
      {
        "label": "안면도수산시장",
        "code": "0000000061"
      },
      {
        "label": "천안농수산물도매시장",
        "code": "0000000091"
      },
      {
        "label": "청주농수산물시장",
        "code": "0000000175"
      },
      {
        "label": "태안서부시장",
        "code": "0000000212"
      },
      {
        "label": "태안백사장항수협",
        "code": "0000000093"
      },
      {
        "label": "태안특산물전통시장",
        "code": "0000000215"
      }
    ],
    "label": "충청도",
    "code": "0000000009"
  },
  {
    "locations": [
      {
        "label": "서부두수산시장",
        "code": "0000000092"
      },
      {
        "label": "서귀포올레시장",
        "code": "0000000055"
      },
      {
        "label": "제주동문수산시장",
        "code": "0000000056"
      }
    ],
    "label": "제주도",
    "code": "0000000012"
  },
  {
    "locations": [
      {
        "label": "마장축산물시장",
        "code": "0000000005"
      }
    ],
    "label": "마장동",
    "code": "0000000006"
  }
];

// 모든 품목
let itemData = [
  {
    "label": "모든품목",
    "code": "0000000000"
  },
  {
    "label": "생선/횟감",
    "code": "0000000038"
  },
  {
    "label": "생선/비횟감",
    "code": "0000000040"
  },
  {
    "label": "게, 새우류",
    "code": "0000000039"
  },
  {
    "label": "조개, 전복류",
    "code": "0000000041"
  },
  {
    "label": "낙지, 문어류",
    "code": "0000000043"
  },
  {
    "label": "멍게, 해삼류",
    "code": "0000000042"
  },
  {
    "label": "김, 미역류",
    "code": "0000000047"
  },
  {
    "label": "건어물",
    "code": "0000000045"
  },
  {
    "label": "젓갈, 게장류",
    "code": "0000000046"
  },
  {
    "label": "육류",
    "code": "0000000048"
  },
  {
    "label": "상차림식당",
    "code": "0000000066"
  },
  {
    "label": "기타",
    "code": "0000000065"
  }
];

// 가게 목록
let storeData = [
  {
    "description": "대게, 킹크랩, 꽃게 전문 노량진수산시장 부안꽃게",
    "uri": "/노량진수산시장부안꽃게",
    "state": "OPEN",
    "tags": [
      "today-price"
    ],
    "id": "0000000813",
    "label": "부안꽃게",
    "thumbnail": "https://cdn.tpirates.com/files/etc/2019/0116/612f44963ab75e0f05691eade26b10d6_FThumb.jpg",
    "summary": {
      "comments": 906,
      "rating": 4.9
    },
    "market": "노량진수산시장",
    "favorite": "off"
  },
  {
    "description": "마장동축산물시장 석신한우에서 1+,1++등급 소고기를 저렴하게 맛보실 수 있습니다.",
    "uri": "/마장동축산물시장석신한우",
    "state": "OPEN",
    "tags": [
      "today-price"
    ],
    "id": "0000000030",
    "label": "석신한우",
    "thumbnail": "https://cdn.tpirates.com/files/etc/2018/1120/d1b7db8929898057178dc5d914b9f09b_FThumb.jpg",
    "summary": {
      "comments": 1021,
      "rating": 4.6
    },
    "market": "마장축산물시장",
    "favorite": "off"
  },
  {
    "description": "구리시장 갑각류, 참치 전문 점포 5문앞 첫집(항도유통)",
    "uri": "/구리농수산물시장오문앞첫집항도유통",
    "state": "OPEN",
    "tags": [
      "today-price"
    ],
    "id": "0000000863",
    "label": "5문앞 첫집(항도유통)",
    "thumbnail": "https://cdn.tpirates.com/files/etc/2019/0322/2558dfc8ad72977f467bd2fb9d285767_FThumb.jpg",
    "summary": {
      "comments": 449,
      "rating": 4.7
    },
    "market": "구리농수산물시장",
    "favorite": "off"
  },
  {
    "description": "대포항수산시장 횟집 찬우활어",
    "uri": "/속초대포항수산시장찬우활어",
    "state": "OPEN",
    "tags": [
      "today-price"
    ],
    "id": "0000000353",
    "label": "찬우활어",
    "thumbnail": "https://cdn.tpirates.com/files/etc/2018/1120/deb64a052eb755e820a23387fe0cada6_FThumb.jpg",
    "summary": {
      "comments": 210,
      "rating": 4.8
    },
    "market": "속초대포항수산시장",
    "favorite": "off"
  },
  {
    "description": "노량진수산시장 고퀄리티 잿방어회와 줄무늬전갱이 원조점포 ",
    "uri": "/노량진수산시장전라상회",
    "state": "OPEN",
    "tags": [
      "today-price"
    ],
    "id": "0000000004",
    "label": "전라상회",
    "thumbnail": "https://cdn.tpirates.com/files/etc/2018/1122/13a3f038bf0bf26ff59ddafcae696466_FThumb.jpg",
    "summary": {
      "comments": 3918,
      "rating": 4.8
    },
    "market": "노량진수산시장",
    "favorite": "off"
  },
  {
    "description": "가락시장 회센터 깔끔한 활어회가 맛있는 곳",
    "uri": "/가락시장일월수산",
    "state": "OPEN",
    "tags": [
      "today-price"
    ],
    "id": "0000000021",
    "label": "일월수산",
    "thumbnail": "https://cdn.tpirates.com/files/etc/2019/0315/905df66c26b5f36946fc7171617d5442_FThumb.jpg",
    "summary": {
      "comments": 2711,
      "rating": 4.7
    },
    "market": "가락시장",
    "favorite": "off"
  },
  {
    "description": "노량진수산시장 킹크랩, 대게, 랍스타와 조개를 판매하는 대일수산",
    "uri": "/노량진수산시장대일수산",
    "state": "OPEN",
    "tags": [
      "today-price"
    ],
    "id": "0000000835",
    "label": "대일수산",
    "thumbnail": "https://cdn.tpirates.com/files/etc/2019/0225/a4e231bfb67930468d3a9daa98a3d240_FThumb.jpg",
    "summary": {
      "comments": 286,
      "rating": 4.8
    },
    "market": "노량진수산시장",
    "favorite": "off"
  },
  {
    "description": "활어회와 갑각류를 한번에 구매할 수 있는 땅끝마을",
    "uri": "/노량진수산시장땅끝마을",
    "state": "OPEN",
    "tags": [
      "day-delivery",
      "today-price"
    ],
    "id": "0000000849",
    "label": "땅끝마을",
    "thumbnail": "https://cdn.tpirates.com/files/etc/2019/0304/58faf1460cc4037ead06c48a693bd4a0_FThumb.jpg",
    "summary": {
      "comments": 355,
      "rating": 4.8
    },
    "market": "노량진수산시장",
    "favorite": "off"
  },
  {
    "description": "젊은 사장님이 운영하는 트렌디한 킹크랩 전문점 ",
    "uri": "/가락시장싱싱해수산",
    "state": "OPEN",
    "tags": [
      "day-delivery",
      "today-price"
    ],
    "id": "0000000200",
    "label": "싱싱해수산",
    "thumbnail": "https://cdn.tpirates.com/files/etc/2018/1120/ae16296a2d89bbe3cc61aab78204081a_FThumb.jpg",
    "summary": {
      "comments": 3975,
      "rating": 4.7
    },
    "market": "가락시장",
    "favorite": "off"
  },
  {
    "description": "노량진수산시장 세꼬시 전문 점포 푸른바다",
    "uri": "/노량진수산시장푸른바다",
    "state": "OPEN",
    "tags": [
      "day-delivery",
      "today-price"
    ],
    "id": "0000000823",
    "label": "푸른바다",
    "thumbnail": "https://cdn.tpirates.com/files/etc/2020/0814/1e202e673dfb2cf81833c411c3ab2854_FThumb.jpg",
    "summary": {
      "comments": 283,
      "rating": 4.9
    },
    "market": "노량진수산시장",
    "favorite": "off"
  },
  {
    "description": "수원농수산물시장 깔끔한 활어회가 맛있는 금강수산",
    "uri": "/수원농수산물시장금강수산",
    "state": "OPEN",
    "tags": [
      "today-price"
    ],
    "id": "0000000344",
    "label": "금강수산",
    "thumbnail": "https://cdn.tpirates.com/files/etc/2020/0408/b3d8d1c33eee7ac02c793e39692edcce_FThumb.jpg",
    "summary": {
      "comments": 350,
      "rating": 4.6
    },
    "market": "수원농수산물시장",
    "favorite": "off"
  },
  {
    "description": "인심좋고 막퍼주기로 소문난 거창상회",
    "uri": "/부산민락회타운거창상회",
    "state": "OPEN",
    "tags": [
      "today-price"
    ],
    "id": "0000000461",
    "label": "거창상회",
    "thumbnail": "https://cdn.tpirates.com/files/etc/2018/0710/21ddc4e37fe94ece80d9e3a7b79888bb_FThumb.jpg",
    "summary": {
      "comments": 1863,
      "rating": 5.0
    },
    "market": "부산민락회타운",
    "favorite": "off"
  },
  {
    "description": "하남수산물복합단지 활어회, 갑각류 프렌즈 점포 진산수산",
    "uri": "/하남수산물복합단지진산수산",
    "state": "OPEN",
    "tags": [
      "today-price"
    ],
    "id": "0000000291",
    "label": "진산수산",
    "thumbnail": "https://cdn.tpirates.com/files/etc/2020/0330/204d06fe47bf86d086be3639e889e273_FThumb.jpg",
    "summary": {
      "comments": 380,
      "rating": 4.6
    },
    "market": "하남수산물복합단지",
    "favorite": "off"
  },
  {
    "description": "마포농수산물시장 쭈꾸미 등 해물 전문점",
    "uri": "/마포농수산물시장영풍수산",
    "state": "OPEN",
    "tags": [
      "today-price"
    ],
    "id": "0000000083",
    "label": "영풍수산",
    "thumbnail": "https://cdn.tpirates.com/files/etc/2019/0605/13d08e80f6cecacebf7ced94bc7f6fc5_FThumb.jpg",
    "summary": {
      "comments": 247,
      "rating": 4.4
    },
    "market": "마포농수산물시장",
    "favorite": "off"
  },
  {
    "description": "대전 노은동수산시장 활어회 전문 횟집 ",
    "uri": "/대전노은동농수산물시장서해수산",
    "state": "OPEN",
    "tags": [
      "today-price"
    ],
    "id": "0000000212",
    "label": "서해수산",
    "thumbnail": "https://cdn.tpirates.com/files/etc/2018/1127/e6f73469cef3e70e529b21de3387895c_FThumb.jpg",
    "summary": {
      "comments": 492,
      "rating": 4.4
    },
    "market": "대전노은동농수산물시장",
    "favorite": "off"
  },
  {
    "description": "초심을 잃지 않는 가락몰 보은수산",
    "uri": "/가락시장보은수산",
    "state": "OPEN",
    "tags": [
      "today-price"
    ],
    "id": "0000001055",
    "label": "보은수산",
    "thumbnail": "https://cdn.tpirates.com/files/etc/2020/0604/4ad90c52607574cd3a33d43a74dd5a8c_FThumb.jpg",
    "summary": {
      "comments": 93,
      "rating": 4.5
    },
    "market": "가락시장",
    "favorite": "off"
  },
  {
    "description": "인천 연안부두 종합어시장 꽃게 전문 장순상회 ",
    "uri": "/인천종합연안부두어시장장순상회",
    "state": "CLOSED",
    "tags": [
      "today-price"
    ],
    "id": "0000000419",
    "label": "장순상회",
    "thumbnail": "https://cdn.tpirates.com/files/etc/2018/1119/73f077395bec081eb47db706237fb9b3_FThumb.jpg",
    "summary": {
      "comments": 97,
      "rating": 4.5
    },
    "market": "인천종합(연안부두)어시장",
    "favorite": "off"
  },
  {
    "description": "노량진수산시장 숙성 장인 점포",
    "uri": "/노량진수산시장광주무등산",
    "state": "OPEN",
    "tags": [
      "day-delivery",
      "today-price"
    ],
    "id": "0000000010",
    "label": "광주무등산",
    "thumbnail": "https://cdn.tpirates.com/files/etc/2018/1122/00e9bf533a74fff7e19c74a942549a8f_FThumb.jpg",
    "summary": {
      "comments": 1571,
      "rating": 4.6
    },
    "market": "노량진수산시장",
    "favorite": "off"
  },
  {
    "description": "보령대천항수산시장 모범수산",
    "uri": "/보령대천항수산시장모범수산",
    "state": "OPEN",
    "tags": [
      "today-price"
    ],
    "id": "0000000904",
    "label": "모범수산",
    "thumbnail": "https://cdn.tpirates.com/files/etc/2019/0624/871b751f0baac0496201b6518123cdfc_FThumb.jpg",
    "summary": {
      "comments": 83,
      "rating": 5.0
    },
    "market": "보령대천항수산시장",
    "favorite": "off"
  },
  {
    "description": "꽃새우, 닭새우를 판매하는 동명항 속초수산",
    "uri": "/속초동명항활어회센터속초수산",
    "state": "OPEN",
    "tags": [
      "today-price"
    ],
    "id": "0000000208",
    "label": "속초수산",
    "thumbnail": "https://cdn.tpirates.com/files/etc/2018/1120/81adba327d4bfc08e7bfc18cbf8696bf_FThumb.jpg",
    "summary": {
      "comments": 164,
      "rating": 4.8
    },
    "market": "속초동명항활어회센터",
    "favorite": "off"
  },
  {
    "description": "가락시장 회센터 킹크랩, 대게, 랍스터 갑각류 명가",
    "uri": "/가락시장명가수산",
    "state": "OPEN",
    "tags": [
      "today-price"
    ],
    "id": "0000000020",
    "label": "명가수산",
    "thumbnail": "https://cdn.tpirates.com/files/etc/2019/0603/13d8279b2575fe12d15b90e1017f611b_FThumb.jpg",
    "summary": {
      "comments": 2383,
      "rating": 4.7
    },
    "market": "가락시장",
    "favorite": "off"
  },
  {
    "description": "평촌농수산물시장 고객 평판이 가장 좋은 횟집",
    "uri": "/평촌안양농수산물시장현대수산",
    "state": "OPEN",
    "tags": [
      "today-price"
    ],
    "id": "0000000166",
    "label": "현대수산",
    "thumbnail": "https://cdn.tpirates.com/files/etc/2018/1127/92ce7dd1d94fae1d2a7e372921b36e7c_FThumb.jpg",
    "summary": {
      "comments": 965,
      "rating": 4.6
    },
    "market": "평촌(안양)농수산물시장",
    "favorite": "off"
  },
  {
    "description": "평촌농수산물시장 킹크랩,대게,랍스타 전문 금정수산",
    "uri": "/평촌안양농수산물시장금정수산",
    "state": "OPEN",
    "tags": [
      "today-price"
    ],
    "id": "0000000802",
    "label": "금정수산",
    "thumbnail": "https://cdn.tpirates.com/files/etc/2018/1213/d525977a5c85d5e51fd8b8f51e7725a2_FThumb.jpg",
    "summary": {
      "comments": 219,
      "rating": 4.6
    },
    "market": "평촌(안양)농수산물시장",
    "favorite": "off"
  },
  {
    "description": "노량진 수산시장 돌돔을 시원한 칼맛으로 썰어주는 고퀄리티 횟집",
    "uri": "/노량진수산시장청양수산",
    "state": "OPEN",
    "tags": [
      "day-delivery",
      "today-price"
    ],
    "id": "0000000013",
    "label": "청양수산",
    "thumbnail": "https://cdn.tpirates.com/files/etc/2020/0602/9dfb5b54a3cbcb9e5a2ee4e2b3f821b4_FThumb.jpg",
    "summary": {
      "comments": 2340,
      "rating": 4.9
    },
    "market": "노량진수산시장",
    "favorite": "off"
  },
  {
    "description": "가락시장 회센터 꽃새우, 참가자미, 자연산 회, 킹크랩, 대게, 랍스타, 털게 등 갑각류 맛집",
    "uri": "/가락시장남원상회",
    "state": "OPEN",
    "tags": [
      "today-price"
    ],
    "id": "0000000199",
    "label": "남원상회",
    "thumbnail": "https://cdn.tpirates.com/files/etc/2018/1129/ade5c64f99c45f5369731d5b78db43da_FThumb.jpg",
    "summary": {
      "comments": 768,
      "rating": 4.8
    },
    "market": "가락시장",
    "favorite": "off"
  },
  {
    "description": "평촌농수산물시장에 연어를 가장 잘하는 경기수산",
    "uri": "/평촌안양농수산물시장경기수산",
    "state": "OPEN",
    "tags": [
      "today-price"
    ],
    "id": "0000000333",
    "label": "경기수산",
    "thumbnail": "https://cdn.tpirates.com/files/etc/2018/1127/6d8b71fcb4bc0d2064e8fd493703c831_FThumb.jpg",
    "summary": {
      "comments": 163,
      "rating": 4.5
    },
    "market": "평촌(안양)농수산물시장",
    "favorite": "off"
  },
  {
    "description": "대형활어만 취급하는 노량진 경성상회 ",
    "uri": "/노량진수산시장경성상회",
    "state": "OPEN",
    "tags": [
      "today-price"
    ],
    "id": "0000000810",
    "label": "경성상회",
    "thumbnail": "https://cdn.tpirates.com/files/etc/2020/0814/93d8c2291f41783edf7c44a48fca62ac_FThumb.jpg",
    "summary": {
      "comments": 1251,
      "rating": 4.8
    },
    "market": "노량진수산시장",
    "favorite": "off"
  },
  {
    "description": "주문진 국산대게 큰 손 거평수산",
    "uri": "/강릉주문진수산시장거평수산",
    "state": "OPEN",
    "tags": [
      "today-price"
    ],
    "id": "0000000176",
    "label": "거평수산",
    "thumbnail": "https://cdn.tpirates.com/files/etc/2018/1120/927556587dc39f52ea19fa84bf868157_FThumb.jpg",
    "summary": {
      "comments": 285,
      "rating": 4.4
    },
    "market": "강릉주문진수산시장",
    "favorite": "off"
  },
  {
    "description": "소래포구종합어시장 다양한 인기 메뉴가 많은 해심수산",
    "uri": "/소래포구종합어시장해심수산",
    "state": "OPEN",
    "tags": [
      "today-price"
    ],
    "id": "0000001025",
    "label": "해심수산",
    "thumbnail": "https://cdn.tpirates.com/files/etc/2019/1021/398065002a60049c21623e14b1a36c0c_FThumb.jpg",
    "summary": {
      "comments": 352,
      "rating": 4.9
    },
    "market": "소래포구종합어시장",
    "favorite": "off"
  },
  {
    "description": "강서농수산물도매시장 킹크랩, 대게, 랍스타 갑각류 전문 대박수산",
    "uri": "/강서농수산물시장대박수산",
    "state": "OPEN",
    "tags": [
      "today-price"
    ],
    "id": "0000000305",
    "label": "대박수산",
    "thumbnail": "https://cdn.tpirates.com/files/etc/2020/0604/4ba7d9fd5fca42dc85834b7cf3c2e58b_FThumb.jpg",
    "summary": {
      "comments": 1028,
      "rating": 4.6
    },
    "market": "강서농수산물시장",
    "favorite": "off"
  },
  {
    "description": "강서농수산물시장 내 꽃게와 갑각류 전문 가포수산",
    "uri": "/강서농수산물시장가포수산",
    "state": "OPEN",
    "tags": [
      "today-price"
    ],
    "id": "0000000860",
    "label": "가포수산",
    "thumbnail": "https://cdn.tpirates.com/files/etc/2019/0419/37f8023010fa42cb3fb01614345871a2_FThumb.jpg",
    "summary": {
      "comments": 259,
      "rating": 4.6
    },
    "market": "강서농수산물시장",
    "favorite": "off"
  },
  {
    "description": "푸짐한 양과 친절한 응대가 돋보이는 의성상회",
    "uri": "/부산민락회타운의성상회",
    "state": "OPEN",
    "tags": [
      "today-price"
    ],
    "id": "0000000991",
    "label": "의성상회",
    "thumbnail": "https://cdn.tpirates.com/files/etc/2019/0709/4448126f7b31574a896d0e1591f4ad94_FThumb.jpg",
    "summary": {
      "comments": 507,
      "rating": 5.0
    },
    "market": "부산민락회타운",
    "favorite": "off"
  },
  {
    "description": "인천종합어시장 꽃게 전문 충남상회",
    "uri": "/인천종합연안부두어시장충남상회",
    "state": "OPEN",
    "tags": [
      "today-price"
    ],
    "id": "0000000108",
    "label": "충남상회",
    "thumbnail": "https://cdn.tpirates.com/files/etc/2018/1119/bc530e6dd01f447c39c0ce55be87aa43_FThumb.jpg",
    "summary": {
      "comments": 89,
      "rating": 4.4
    },
    "market": "인천종합(연안부두)어시장",
    "favorite": "off"
  },
  {
    "description": "마포농수산물시장 프리미엄 모듬회 전문 풍어수산 부산첫집! ",
    "uri": "/마포농수산물시장풍어수산",
    "state": "OPEN",
    "tags": [
      "today-price"
    ],
    "id": "0000000157",
    "label": "풍어수산",
    "thumbnail": "https://cdn.tpirates.com/files/etc/2017/0325/d79a0c917b1920dd7dba66569289b206_FThumb.jpg",
    "summary": {
      "comments": 642,
      "rating": 4.9
    },
    "market": "마포농수산물시장",
    "favorite": "off"
  },
  {
    "description": "구리농수산물시장 대표 킹크랩,대게 갑각류 전문집",
    "uri": "/구리농수산물시장새샘수산",
    "state": "OPEN",
    "tags": [
      "today-price"
    ],
    "id": "0000000197",
    "label": "새샘수산",
    "thumbnail": "https://cdn.tpirates.com/files/etc/2018/0915/8e80a9e067e3309d3787c5fc7a60904f_FThumb.jpg",
    "summary": {
      "comments": 882,
      "rating": 4.6
    },
    "market": "구리농수산물시장",
    "favorite": "off"
  },
  {
    "description": "어디보다 푸짐한 양과 인심이 있는 곳",
    "uri": "/가락시장바다나라",
    "state": "OPEN",
    "tags": [
      "today-price"
    ],
    "id": "0000000195",
    "label": "바다나라",
    "thumbnail": "https://cdn.tpirates.com/files/etc/2018/1120/944ffb40d3200de31fec78cc00cb8c20_FThumb.jpg",
    "summary": {
      "comments": 1451,
      "rating": 4.6
    },
    "market": "가락시장",
    "favorite": "off"
  },
  {
    "description": "가락시장 회센터 고퀄리티 활모듬회 전문점",
    "uri": "/가락시장용기수산",
    "state": "OPEN",
    "tags": [
      "day-delivery",
      "today-price"
    ],
    "id": "0000000024",
    "label": "용기수산",
    "thumbnail": "https://cdn.tpirates.com/files/etc/2018/1120/8e7d50d4150609e46527d6265232e616_FThumb.jpg",
    "summary": {
      "comments": 886,
      "rating": 4.6
    },
    "market": "가락시장",
    "favorite": "off"
  },
  {
    "description": "노량진수산시장 킹크랩, 대게, 랍스타 전문 남송꽃게",
    "uri": "/노량진수산시장남송꽃게",
    "state": "OPEN",
    "tags": [
      "today-price"
    ],
    "id": "0000000003",
    "label": "남송꽃게",
    "thumbnail": "https://cdn.tpirates.com/files/etc/2018/1119/4ad701bb45dd669582125b21e1321db1_FThumb.jpg",
    "summary": {
      "comments": 1413,
      "rating": 4.6
    },
    "market": "노량진수산시장",
    "favorite": "off"
  },
  {
    "description": "부산민락어민활어직판장 활어전문 백년손님",
    "uri": "/부산민락어민활어직판장백년손님",
    "state": "OPEN",
    "tags": [
      "today-price"
    ],
    "id": "0000000433",
    "label": "백년손님",
    "thumbnail": "https://cdn.tpirates.com/files/etc/2018/1204/c50cb17ec278f2cbd3dc0fe5d6b71377_FThumb.jpg",
    "summary": {
      "comments": 117,
      "rating": 4.9
    },
    "market": "부산민락어민활어직판장",
    "favorite": "off"
  },
  {
    "description": "수원농수산물시장 다양한 어종을 취급하는 창대수산",
    "uri": "/수원농수산물시장창대수산",
    "state": "OPEN",
    "tags": [
      "today-price"
    ],
    "id": "0000000812",
    "label": "창대수산",
    "thumbnail": "https://cdn.tpirates.com/files/etc/2019/1016/a7751fb6cc87d4d006425e4476bf52b5_FThumb.jpg",
    "summary": {
      "comments": 470,
      "rating": 4.8
    },
    "market": "수원농수산물시장",
    "favorite": "off"
  },
  {
    "description": "노량진수산시장 신시장 다양한 활모듬회를 맛볼 수 있는 활어 전문집 ",
    "uri": "/노량진수산시장서산안면도",
    "state": "OPEN",
    "tags": [
      "day-delivery",
      "today-price"
    ],
    "id": "0000000295",
    "label": "서산안면도",
    "thumbnail": "https://cdn.tpirates.com/files/etc/2018/1119/a8a0a1cef083146f318e9976f1da8881_FThumb.jpg",
    "summary": {
      "comments": 1496,
      "rating": 4.9
    },
    "market": "노량진수산시장",
    "favorite": "off"
  },
  {
    "description": "노량진수산시장 킹크랩, 대게, 랍스타 전문 대원",
    "uri": "/노량진수산시장대원",
    "state": "OPEN",
    "tags": [
      "today-price"
    ],
    "id": "0000000710",
    "label": "대원",
    "thumbnail": "https://cdn.tpirates.com/files/etc/2019/0322/3cbff364c6a5138fcf3dc8f2b3bb5786_FThumb.jpg",
    "summary": {
      "comments": 753,
      "rating": 4.7
    },
    "market": "노량진수산시장",
    "favorite": "off"
  },
  {
    "description": "수도권에서 능성어를 가장 저렴하게 먹을 수 있는 집",
    "uri": "/노량진수산시장정읍수산",
    "state": "OPEN",
    "tags": [
      "day-delivery",
      "today-price"
    ],
    "id": "0000000335",
    "label": "정읍수산",
    "thumbnail": "https://cdn.tpirates.com/files/etc/2018/1119/1f1dc06829a3dcc70a7ad2ba51db8685_FThumb.jpg",
    "summary": {
      "comments": 797,
      "rating": 4.8
    },
    "market": "노량진수산시장",
    "favorite": "off"
  },
  {
    "description": "고급활어회 전문 가락몰 이화수산",
    "uri": "/가락시장이화수산",
    "state": "OPEN",
    "tags": [
      "today-price"
    ],
    "id": "0000001051",
    "label": "이화수산",
    "thumbnail": "https://cdn.tpirates.com/files/etc/2019/0412/1b00afaf1df14cc22448ec98f87a1fb4_FThumb.jpg",
    "summary": {
      "comments": 436,
      "rating": 5.0
    },
    "market": "가락시장",
    "favorite": "off"
  },
  {
    "description": "광어,우럭,돌돔 등 신선한 활어 취급점포 용호상회",
    "uri": "/부산자갈치시장용호상회",
    "state": "OPEN",
    "tags": [
      "today-price"
    ],
    "id": "0000000389",
    "label": "용호상회",
    "thumbnail": "https://cdn.tpirates.com/files/etc/2018/1119/cb516ef5acf86a2e3734f5d6064ca278_FThumb.jpg",
    "summary": {
      "comments": 299,
      "rating": 4.8
    },
    "market": "부산자갈치시장",
    "favorite": "off"
  },
  {
    "description": "인천종합어시장 최고의 친절 횟집",
    "uri": "/인천종합연안부두어시장명선네",
    "state": "OPEN",
    "tags": [
      "today-price"
    ],
    "id": "0000000055",
    "label": "명선네",
    "thumbnail": "https://cdn.tpirates.com/files/etc/2018/1119/4244dc01cc06f76ddfdf981938b5bd7d_FThumb.jpg",
    "summary": {
      "comments": 481,
      "rating": 4.5
    },
    "market": "인천종합(연안부두)어시장",
    "favorite": "off"
  },
  {
    "description": "인천종합연안부두갑각류센터 삼우수산",
    "uri": "/인천종합연안부두갑각류센터삼우수산",
    "state": "OPEN",
    "tags": [
      "today-price"
    ],
    "id": "0000001006",
    "label": "삼우수산",
    "thumbnail": "https://cdn.tpirates.com/files/etc/2019/0716/05a58439546b13bcb9ce8b5e92cb3100_FThumb.jpg",
    "summary": {
      "comments": 268,
      "rating": 4.8
    },
    "market": "인천종합(연안부두)갑각류센터",
    "favorite": "off"
  },
  {
    "description": "마장동 상인들도 찾아 먹는다는 알치마살 전문 화신축산",
    "uri": "/마장축산물시장화신축산",
    "state": "OPEN",
    "tags": [
      "today-price"
    ],
    "id": "0000000031",
    "label": "화신축산",
    "thumbnail": "https://cdn.tpirates.com/files/etc/2018/1120/32f2894399bbb15c2ce267fddeb09689_FThumb.jpg",
    "summary": {
      "comments": 105,
      "rating": 4.5
    },
    "market": "마장축산물시장",
    "favorite": "off"
  },
  {
    "description": "수원농수산물시장 갑각류, 패류, 냉동 등 도소매 전문 대명수산",
    "uri": "/수원농수산물시장대명수산",
    "state": "OPEN",
    "tags": [
      "today-price"
    ],
    "id": "0000001039",
    "label": "대명수산",
    "thumbnail": "https://cdn.tpirates.com/files/etc/2020/0924/e40269771899d2658b3a1957375f7a01_FThumb.jpg",
    "summary": {
      "comments": 216,
      "rating": 4.6
    },
    "market": "수원농수산물시장",
    "favorite": "off"
  },
  {
    "description": "평촌(안양)농수산물시장 중도매인 수조가 깨끗한 신안수산",
    "uri": "/평촌안양농수산물시장신안수산",
    "state": "OPEN",
    "tags": [
      "today-price"
    ],
    "id": "0000000645",
    "label": "신안수산",
    "thumbnail": "https://cdn.tpirates.com/files/etc/2018/1002/414bf6f6cf755bd5fd75f6210dbe778d_FThumb.jpg",
    "summary": {
      "comments": 331,
      "rating": 4.8
    },
    "market": "평촌(안양)농수산물시장",
    "favorite": "off"
  }
];

