# 코딩 컨벤션

# Coding Convention

## 코드 스타일

- 들여쓰기

  tabWidth : 2

- 공백

  , (콤마) ; (세미콜론) 후 공백 1개

  [공백 관련 레퍼런스 참고](https://naver.github.io/hackday-conventions-java/#no-trailing-spaces)

- 문자열 표기

  기본 문자열 표기: singleQuote(’)

  동적문자열 생성: 템플릿 리터럴

## 코드 네이밍

- 변수

  변수명 : 카멜케이스 사용(camelCase)

  작명 : 되도록 명사 (Boolean의 경우만 is로 시작)

- 함수

  함수명 : 카멜케이스 사용(camelCase)

  작명 : 동사(add, remove, select, get, handle 등)로 시작

  축약어 : Button → Btn, Picture ⇒ Pic, Image ⇒ Img

- 데이터

  서버 데이터 : 카멜케이스 사용(camelCase), 리소스 + data

  ex. imgData, userData,

  페이지 데이터 : 카멜케이스 사용(camelCase), in + 페이지 + 리소스 + data

  ex. inListImgData

- 컴포넌트

  컴포넌트명 : 파스칼케이스(PascalCase) 사용

  atomic-design 컴포넌트명 접두사

  - atoms :

    구분이 필요한 경우: 구분되는 특징(기능/page/디자인) + html tag

    tag를 한번만 쓰는 경우: tag (ex. checkbox)

  - molecules : 1개 기능 (ex. checkbox + list )
  - organisms : 페이지 + UI (ex. mainFooter)
  - templates : 페이지 + templates
  - props 네이밍 : (search 필요)

- 페이지

  페이지명 : 파스칼케이스(PascalCase) 사용

- 디렉토리

  디렉토리명 : 카멜케이스 사용(camelCase), 복수형

  (\* 디렉토리 구조 추후 의논)

## 컴포넌트 룰

- css 스타일 순서

1.  Layout Properties (1. display 2. position 3. float 4.clear)

        : display : flex 속성의 경우 같은 순서에 써준다.

2.  Box Model Properties (1.width 2.height 3.margin 4.padding 5.box-sizing)

    : margin, padding의 경우 축약 속성 먼저 오도록

3.  Visual Properties (1. border 2. background 3.box-shadow )

4.  Typography Properties (1. color 2. font-family 3.font-size 4.font-weight 5. line-height 6.text-align 7.text-transform)

5.  Misc Properties (1. cursor 2. overflow 3. z-index)

6.  animations (transform, transition)

7.  가상 선택자

- Props 표기 순서
  - 1. basic props
       1. id
       2. key
       3. class
    2. style props

       css 속성 표기 순서에 따름

    3. event props
       1. 기본적인 events (onClick, onChange 등)
       2. 커스텀 events
