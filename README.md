# 별 헤는 밤 - 소개

별 헤는 밤’은 밤하늘에 별자리를 그리고, 그 별자리에 메모를 달아 만드는 롤링페이퍼입니다

### 별 헤는 밤
  몰캠이 지나가는 서버에는
에러로 가득 차 있습니다.

나는 아무 걱정도 없이
화면 속의 코드들을 다 헤일 듯합니다.

가슴속에 하나둘 새겨지는 버그를
이제 다 못 헤는 것은
쉬이 아침이 오는 까닭이요,
내일 밤이 남은 까닭이요,
아직 나의 청춘이 다하지 않은 까닭입니다.

별 하나에 추억과
별 하나에 사랑과
별 하나에 쓸쓸함과
별 하나에 동경과
별 하나에 코드와
별 하나에 교수님, 교수님,

교수님, 나는 별 하나에 아름다운 말 한마디씩 불러 봅니다.
1주차 때 책상을 같이 했던 아이들의 이름과, 플러터, JS, MongoDB, 이런 이국 소녀들의 이름과, 벌써 사용량 한도에 도달한 GPT의 이름과, 피곤한 이웃 팀들의 이름과, 바퀴벌레, 애벌레, 나방, 노린재, 거미, ‘스티브 잡스’, ‘존 폰 노이만’ 이런 유명인의 이름을 불러 봅니다.

이네들은 너무나 멀리 있습니다.
별이 아스라이 멀듯이.

교수님,
그리고 당신은 멀리 실리콘밸리에 계십니다.

나는 무엇인지 그리워
이 많은 별빛이 내린 언덕 위에
내 이름자를 써 보고
흙으로 덮어 버리었습니다.

딴은 밤을 새워 우는 버그는
부끄러운 이름을 슬퍼하는 까닭입니다.

그러나 몰캠이 지나고 나의 별에도 방학이 오면
무덤 위에 파란 잔디가 피어나듯이
내 이름자 묻힌 깃헙 위에도
자랑처럼 커밋이 무성할 거외다.

## 프로젝트 소개
- 별 헤는 밤’은 밤하늘에 별자리를 그리고, 그 별자리에 메모를 달아 만드는 롤링페이퍼입니다.

### 개발 동기

- 저는 별을 보며 힐링하는 것을 좋아합니다. 별을 보다보면 별들을 연결해 나만의 별자리를 만들고 싶은 생각이 들곤 했습니다. 별자리에 얽힌 신화들처럼 나만의 별자리에 이야기를 붙이면 재미있을 것 같았습니다.
- 신화에는 죽은 동물, 사람들을 별자리로 만드는 이야기가 많습니다. 이와 비슷하게 기르던 애완동물이 죽었을 때, 애완동물을 닮은 별자리를 그리고 추억을 이야기로 남긴다면 어떨까?라는 생각에서 시작했습니다.
- 애완동물에서 더 확장해 생각해보니 몰입캠프의 종료와 함께 롤링페이퍼를 작성하는 것이 생각났습니다. 롤링페이퍼를 별자리에 남긴다면 새롭고 더욱 즐거운 형태가 될 수 있을 것 같아 개발하게 되었습니다.

### 팀원
 https://github.com/kimjinhwan0

 https://github.com/abrastone

### Using Stack
 FrontEnd
- React

BackEnd
- Tool: Node.js
- Server: kcloud
- DB: mongoDB

### About
![image](https://github.com/user-attachments/assets/6624dbf6-047e-4507-8e22-0d4b97cc8b6e)
- 하단에는 ‘별자리’ 버튼과 ‘롤링페이퍼’ 버튼이 있습니다.
- 배경의 별이 깜빡이며, 가끔 별똥별도 떨어지는 모습을 담고 있습니다.
- 넙죽이와 거위가 떠 있는데, 넙죽이를 클릭하면 도망가는 이스터에그가 있습니다.

- 별자리
- 실제 주요 계절별 별자리 3개씩 총 12개를 띄워줍니다.
- ![image](https://github.com/user-attachments/assets/1443d702-2e0b-46a8-82f6-982c1c3172fc)


- 롤링페이퍼
- 1. 새로운 롤링페이퍼 만들기
    - 닉 name과 paper name을 입력하고 ‘방 만들기’를 클릭하면 새 롤링페이퍼가 만들어집니다.
    - 이때 paper name은 중복될 수 없으며, 이미 있는 이름일 경우에는 에러메세지가 뜹니다.
    - 롤링페이버 생성 시 1000개의 별의 임의로 생성됩니다.
    - 각 별은 크기, 색, 위치, 깜빡이는 주기가 랜덤하게 설정됩니다.
    - 별 사이의 거리가 너무 가까우면 보기 어렵기 때문에 이 부분에 주의하여 랜덤생성했다.
    - ![image](https://github.com/user-attachments/assets/35d01e00-5667-494f-a533-0dd2b4dfd699)

 
- 2. 별자리 그리고 메모 추가하기
    - 작성하고 싶은 롤링페이퍼 이름을 입력하고 ‘방 들어가기’ 버튼을 눌러 롤링페이퍼에 접속합니다.
    - 두 별을 선택하면 두 별이 그라데이션 효과가 적용된 선으로 연결됩니다.
    - 취소하고 싶다면, 지우고 싶은 선의 두 끝 별을 선택하면 됩니다.
    - 다른 별자리에 이미 포함된 별을 선택하면 에러메세지를 띄웁니다.
    - 별자리를 완성했으면, 메모 추가 버튼을 눌러 메모를 작성하고 저장합니다.
   ![React App 외 페이지 4개 - 개인 - Microsoft_ Edge 2024-07-25 20-40-43](https://github.com/user-attachments/assets/d934c7c1-b926-43da-94e1-7ca50a024bfe)

   ![React App 외 페이지 4개 - 개인 - Microsoft_ Edge 2024-07-25 20-40-12 (1)](https://github.com/user-attachments/assets/f603d231-31fb-48f3-8777-ffd74eae38a1)


- 3. 롤링페이퍼 확인
    - 시작화면에서 nickname과 roomname을 입력하여 다른 사람들이 그린 그림을 받아 볼 수 있습니다.
    - 별을 선택하면 해당 별이 속한 별자리에 기록된 메모를 볼 수 있습니다.
    - 
  ![React App 외 페이지 4개 - 개인 - Microsoft_ Edge 2024-07-25 20-43-07](https://github.com/user-attachments/assets/13f5b93e-87ef-470a-80f0-a59bb48adbb2)


### 


### front NG
  
  ![React App 외 페이지 1개 - 개인 - Microsoft_ Edge 2024-07-24 03-57-00 (2)](https://github.com/user-attachments/assets/8b8c05fd-ce45-4a03-8073-1639c8acae16)

  ![React App 외 페이지 1개 - 개인 - Microsoft_ Edge 2024-07-24 04-00-24](https://github.com/user-attachments/assets/2d4975f2-df61-4cfe-8bed-7c8a0f3ab55d)



