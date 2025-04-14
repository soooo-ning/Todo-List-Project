# 📄 Todo Checkk

간결함과 직관성을 최우선으로 한 투두리스트 웹사이트! <br>
사용자 중심적인 설계를 통해 불편함을 최소화하고, 할 일 관리에 충실한 서비스를 제공합니다.

> 👉 http://43.200.254.250:8080/ ✨배포종료✨
<br>

![main](https://github.com/user-attachments/assets/b1c4a525-dfc2-4b71-b70e-6c391933fe0a)
<br><br>

## 🗓️ Project Period

2024.12.16 ~ 2024.12.30 (2주)
<br><br><br>

## 👨‍👩‍👧‍👦 Developer

<table style="overflow:hidden;">
  <tbody>
      <td align="center"><a href="https://github.com/soooo-ning"><img src="https://github.com/user-attachments/assets/c8b68f95-bad6-4610-a9d6-c94749e5301f" width="100px;" height="100px;"/><br /><sub><b>BE 팀장 : 이소은</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/maxbeny"><img src="https://github.com/user-attachments/assets/3e19ed31-11bf-4c90-b8c3-6032745065ca" width="100px;" height="100px;"/><br /><sub><b>BE 팀원 : 이채훈</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/lychee-55"><img src="https://github.com/user-attachments/assets/bac0b4d2-c20c-4781-8d50-bccf1ca45398" width="100px;" height="100px;"/><br /><sub><b>FS 팀원 : 이지원</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/baekdahyun"><img src="https://github.com/user-attachments/assets/f3fc5735-6c10-470b-b1ed-eb7946664228" width="100px;" height="100px;"/><br /><sub><b>FE 팀원 : 백다현</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/suvd0377"><img src="https://github.com/user-attachments/assets/9b2218ae-8e33-4d56-9554-ee65519d9bd3" height="100px;" width="auto;" alt=""/><br /><sub><b>FE 팀원 : 간솝드</b></sub></a><br /></td>
     <tr/>
    </tr>
  </tbody>
</table>
<br>

## 🔧 Stack

<img src="https://img.shields.io/badge/javascript-F7DF1E?style=flat-square&logo=javascript&logoColor=white"/><img src="https://img.shields.io/badge/Node.js-5FA04E?style=flat-square&logo=nodedotjs&logoColor=white"/><img src="https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white"/><img src="https://img.shields.io/badge/mysql-4479A1?style=flat-square&logo=mysql&logoColor=white"/><img src="https://img.shields.io/badge/Sequelize-52B0E7?style=flat-square&logo=sequelize&logoColor=white"/><img src="https://img.shields.io/badge/EJS-B4CA65?style=flat-square&logo=ejs&logoColor=white"/>
<br>

- **Language** : JavaScript
- **Library & Framework** : Node.js express
- **Database** : MySQL
- **ORM** : Sequelize
- **Deploy** : AWS EC2
<br><br>

## 💻 Software Design

### 메뉴 구조도
<img src="https://github.com/user-attachments/assets/2626c13d-4688-4955-80c8-e2ad12e8c994" width="1500px;" alt=""/>
<br>

### API 명세서
<img src="https://github.com/user-attachments/assets/84988fc9-1079-4c65-97d4-3f3db161bcaf" width="800px;" alt=""/>
<br>

### ERD
<img src="https://github.com/user-attachments/assets/f98b4c36-9095-4e30-bcec-e9484b89fa55" width="1500px;" alt=""/>
<br><br>

## ⭐ Main Feature

### 회원가입 및 로그인

- 이메일 회원가입을 통한 JWT 토큰 발급 로그인
- Oauth2를 활용한 kakao, goole session 로그인
<br><br>

<img src="https://github.com/user-attachments/assets/d98f6146-0512-454a-bb32-ce70d2569e66" width="1500px;"/><br><br>

### 투두리스트

- 투두리스트 생성 및 캘린더, 키워드, 검색 조회
- soft delete를 활용한 삭제 게시물 복구 기능
<br><br>

<img src="https://github.com/user-attachments/assets/f3485493-ffb1-41a9-a2ae-6e20a680aa5f" width="1500px;"/><br><br>
<img src="https://github.com/user-attachments/assets/6391c13e-b60d-4e71-89de-e185f2541cb9" width="1500px;"/><br><br>

### 마이페이지

- 마이페이지 데이터 수정
- multer를 활용한 파일 업로드 기능
<br><br>

<img src="https://github.com/user-attachments/assets/d6c64334-ac4c-4d7f-ae83-06c15de0600c" width="1500px;"/><br><br>

### UI/UX

- 디스플레이 모드 기능 (다크모드, 라이트모드)
<br><br>

<img src="https://github.com/user-attachments/assets/f7aeb4b0-327e-4a2e-86d4-0ccd036fd075" width="1500px;"/><br><br>

## :open_file_folder: Project Structure

```markdown
📂 Todo-list-project
├── config        # 설정 파일
├── controllers   # 로직 및 요청 처리
├── middlewares   # 미들웨어
├── migrations
├── models        # 데이터베이스 모델
├── routes        # 라우터 정의
├── db            # 데이터베이스 init 파일
├── static        # 정적 파일 (CSS, 이미지, JS)
│   ├── css
│   ├── font
│   ├── img
│   └── uploads   # multer 업로드 파일 저장
├── utils         # 유틸 함수 (응답 함수)
└── views         # 템플릿 (HTML, EJS 등)
│   └── include   # 공통 모듈
└── app.js        # 서버 초기화 및 API 라우트 연결
```

<br><br>

## 💻 Getting Started

> 해당 프로젝트 설치 및 실행 방법
> <br>

### Installation

```
npm install
```

### Develop Mode

```
npm run dev
```

### Production

```
npm run start
```

<br><br>

## 👨‍💻 Role & Contribution

**이소은** ([soooo-ning](https://github.com/soooo-ning))

- 전체 개발 일정 및 이슈 관리
- 전체 애플리케이션 아키텍처 및 폴더 구조 설계
- 투두리스트 관리 API 개발 (todo 도메인)
- 서버 모니터링 및 배포 등 인프라 관리

**이채훈** ([maxbeny](https://github.com/maxbeny))

- 로그인/회원가입 API 개발
- Oauth 로그인 개발

**이지원** ([lychee-55](https://github.com/lychee-55))

- 네비게이션 뷰 구현
- 마이페이지 뷰 구현
- 마이페이지 API 개발

**백다현** ([baekdahyun](https://github.com/baekdahyun))

- 로그인/회원가입 뷰 구현
- 투두 작성/수정 팝업 구현

**간솝드** ([suvd0377](https://github.com/suvd0377))

- 메인 대시보드 뷰 구현
- 투두 리스트 조회 뷰 (검색, 캘린더, 키워드, 휴지통) 구현
