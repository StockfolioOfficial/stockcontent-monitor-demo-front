# Internship Project : Go Stock

<br/>

## 1. 프로젝트 소개

---

> <br/>
>
> - ### 프로젝트 목표 : **_컨텐츠 검수용 사내 모니터링 툴 개발_**
>
> - ### 프로젝트 깃헙 레포지토리
>   - [Stock Folio Front-End Repo](https://github.com/StockfolioOfficial/stockcontent-monitor-demo-front)
>   - [Stock Folio Back-End Repo](https://github.com/StockfolioOfficial/stockcontent-monitor-demo-back)
>
> <br/>

<br/>
<br/>

## 2. 프로젝트 기간 및 참여 인원

---

> <br/>
>
> - ### 프로젝트 기간 : 22.05.09 ~ 22.06.02 ( 약 4주 )
>
> - ### 프로젝트 참여 인원 : 5명 ( 프론트 3명 / 백엔드 2명 )
>
> <br/>

<br/>
<br/>

## 3. 데모

---

<br/>

[![스톡폴리오 모니터링툴 데모 시연영상](https://user-images.githubusercontent.com/85507868/171592515-64d91128-a068-4cde-aa55-70982ed60839.png)](https://youtu.be/dL2uvzAaWh8)


<br/>

<br/>

> ### 대기중 메인 페이지
<img width="720" alt="main-page" src="https://user-images.githubusercontent.com/85507868/171592515-64d91128-a068-4cde-aa55-70982ed60839.png">

<br/>

> ### 다른 사람이 검수중인 컨텐츠 입장시 모달 노출 
<img width="720" alt="modal1" src="https://user-images.githubusercontent.com/85507868/171592549-6c3e48d4-b9c5-4c1f-85e0-26e2899e21bf.png">

<br/>

> ### 반려됨 메인 페이지
<img width="720" alt="deniedMainTab-page" src="https://user-images.githubusercontent.com/85507868/171592545-f0b8ec91-e884-4fcf-afe7-732e3a341a80.png">


<br/>

> ### 상세 페이지
<img width="720" alt="detail-page" src="https://user-images.githubusercontent.com/85507868/171592539-04801b0d-73c5-496c-8350-f39ab3161bc0.png">


<br/>

> ### 반려사유 작성 페이지
<img width="720" alt="deniedReason-page" src="https://user-images.githubusercontent.com/85507868/171592554-7964c20d-e3a3-4be5-9ea7-96de7bf1a5ce.png">


## 4. 기술 스택

---

> <br/>
>
> - ### Front-End
>
>   - 개발언어 : `Typescript`
>   - UI 라이브러리 (웹 프레임워크) : `React`
>   - CSS in JS 라이브러리 : `styled-componets`
>   - 상태관리 : `mobx` , `mobx-react`
>
> <br/>
>
> - ### Back-End
>
>   - 개발언어 : `go`
>   - 웹 프레임워크 : `echo`
>   - DB : `MySQL`
>   - ORM : `gorm`
>
> <br/>
>
> - ### Collaboration Tools
>   - `Git` , `Github`
>   - `Notion` , `Slack`
>   - `Figma`
>
> <br/>

<br/>
<br/>


## 5. 구현기능

---
<br/>

### 메인 페이지
>
> 1. 상단 탭 클릭 시 대기중 / 반려됨 / 승인의 검수 상태를 갖는 영상 컨텐츠 목록 표시.
> 2. 20개씩 컨텐츠 목록을 보여주고, 20개 초과 시 페이지 번호 추가.
> 3. 컨텐츠 아이템 클릭 시 해당 아이템 상세 페이지로 이동.
> 4. 이미 검수 중인 컨텐츠에 다른 검수자가 들어가지 못하도록 검수중 표시 및 경고문 포함한 모달창 오픈.
> 
</br>

### 상세 페이지
>
> 1. 상세 페이지 입장 시 반려된 기록 열람 가능.
> 2. 아무도 입장하지 않은 '대기중' 상태의 글은 '승인' 과 '반려신청' 버튼 노출.
> 3. '반려신청' 버튼 클릭 시, 반려 사유 태그 선택 및 기타 내용 작성 후 제출 가능. 
> 4. 각 페이지 넘어갈 때 모달창 문구로 안내.
> 

<br/>
<br/>

## 6. 주차별 작업 사항

---
</br>

### 📌1주차

- **_작업사항_**

> 1. 에픽 , 스토리 , 테스크 분류
> 2. 컨벤션 설정
> 3. 피그마 바탕으로 아토믹 디자인 패턴 분석
>

<br/>

### 📌2주차


- **_작업사항_**

> 1. atoms , molecules , organisms 개발 시작

<br/>

### 📌3주차


- **_작업사항_**

> 1. templates , pages 개발 시작
> 2. 이벤트 처리
> 3. API 연결


<br/>

### 📌4주차


- **_작업사항_**

> 1. QA, 리팩토링 
<br/>


