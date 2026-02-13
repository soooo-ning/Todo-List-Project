# Todo Checkk

간결함과 직관성을 최우선으로 한 투두리스트 Todo Checkk <br>
투두리스트 웹 애플리케이션 팀프로젝트 소스코드입니다.

<br>

![Todo Checkk](https://github.com/user-attachments/assets/b1c4a525-dfc2-4b71-b70e-6c391933fe0a)

👉 http://43.200.254.250:8080/ ✨배포종료✨

> **Notice**
> 이 레포지토리는 팀프로젝트 소스코드 아카이브입니다.
> AWS EC2 배포 종료 및 DB 환경 미포함으로 현재 실행되지 않습니다.

<br>

<details>
  <summary>상세 기능 시연 영상</summary>

  ### ▫️ 회원가입 및 로그인
  - 이메일 회원가입을 통한 JWT 토큰 발급 로그인
  - Oauth2를 활용한 kakao, goole session 로그인

  <br>
  
  <img src="https://github.com/user-attachments/assets/d98f6146-0512-454a-bb32-ce70d2569e66" width="1500px;"/><br><br>

  ### ▫️ 투두리스트
  - 투두리스트 생성 및 캘린더, 키워드, 검색 조회
  - soft delete를 활용한 삭제 게시물 복구 기능

  <br>

  <img src="https://github.com/user-attachments/assets/f3485493-ffb1-41a9-a2ae-6e20a680aa5f" width="1500px;"/><br><br>
  <img src="https://github.com/user-attachments/assets/6391c13e-b60d-4e71-89de-e185f2541cb9" width="1500px;"/><br><br>

  ### ▫️ 마이페이지
  - 마이페이지 데이터 수정
  - multer를 활용한 파일 업로드 기능
  <br>

  <img src="https://github.com/user-attachments/assets/d6c64334-ac4c-4d7f-ae83-06c15de0600c" width="1500px;"/><br><br>

  ### ▫️ UI/UX
  - 디스플레이 모드 기능 (다크모드, 라이트모드)

  <br>

  <img src="https://github.com/user-attachments/assets/f7aeb4b0-327e-4a2e-86d4-0ccd036fd075" width="1500px;"/><br><br>

</details>

<br>

## 🗓️ Project Period

2024.12.16 ~ 2024.12.30 (2주) | 백엔드 1명, 프론트 2명, 풀스택 2명

<br>

## 💻 Tech Stack

<img src="https://img.shields.io/badge/javascript-F7DF1E?style=flat-square&logo=javascript&logoColor=white"/> &nbsp;
<img src="https://img.shields.io/badge/Node.js-5FA04E?style=flat-square&logo=nodedotjs&logoColor=white"/> &nbsp;
<img src="https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white"/> &nbsp;
<img src="https://img.shields.io/badge/mysql-4479A1?style=flat-square&logo=mysql&logoColor=white"/> &nbsp;
<img src="https://img.shields.io/badge/Sequelize-52B0E7?style=flat-square&logo=sequelize&logoColor=white"/> &nbsp;
<img src="https://img.shields.io/badge/EJS-B4CA65?style=flat-square&logo=ejs&logoColor=white"/>

<br>

| 분류             | 기술                                                |
| ---------------- | --------------------------------------------------- |
| **Backend**      | Node.js, Express 4.21, Sequelize ORM, JavaScript    |
| **Frontend**     | EJS, JavaScript, Axios, jQuery                      |
| **Auth**         | JWT, Passport.js, OAuth 2.0 (Google, Kakao)         |
| **Database**     | MySQL                                               |
| **Deploy**       | AWS EC2, PM2                                        |
| **Etc**          | Multer (파일 업로드), Nodemailer (이메일), dotenv    |

<br>

## 📁 Project Structure

```
📂 Todo-List-Project
├── app.js              # 서버 초기화 및 API 라우트 연결
├── config              # 설정 파일 (DB, Passport)
├── controllers         # 요청 처리 및 비즈니스 로직
├── middlewares         # 인증, 유저 데이터, 파일 업로드 미들웨어
├── models              # Sequelize ORM 모델 정의
├── routes              # 라우터 정의
├── db                  # DDL, DCL, DML 및 ERD 파일
├── utils               # 공통 응답 유틸 함수
├── views               # EJS 템플릿
│   └── include         # 공통 모듈 (헤더, 네비, 팝업)
└── static              # 정적 파일
    ├── css             # 스타일시트
    ├── font            # 폰트 파일
    ├── img             # 이미지 파일
    └── uploads         # Multer 업로드 파일 저장
```

<br>

## 📃 Output

<details>
  <summary>메뉴 구조도</summary>
  <img width="2440" height="1287" alt="menu" src="https://github.com/user-attachments/assets/2626c13d-4688-4955-80c8-e2ad12e8c994" />
</details>

<details>
  <summary>API 명세서</summary>
  <img width="2440" height="1287" alt="api" src="https://github.com/user-attachments/assets/84988fc9-1079-4c65-97d4-3f3db161bcaf" />
</details>

<details>
  <summary>ERD</summary>
  <img width="2440" height="1287" alt="erd" src="https://github.com/user-attachments/assets/f98b4c36-9095-4e30-bcec-e9484b89fa55" />
</details>

<br>

## 👨‍👩‍👧‍👦 Developer

<table style="overflow:hidden;">
  <tbody>
    <tr>
      <td align="center"><a href="https://github.com/soooo-ning"><img src="https://github.com/user-attachments/assets/c8b68f95-bad6-4610-a9d6-c94749e5301f" width="100px;" height="100px;" alt="이소은"/><br /><sub><b>FULL 팀장 : 이소은</b></sub></a></td>
      <td align="center"><a href="https://github.com/maxbeny"><img src="https://github.com/user-attachments/assets/3e19ed31-11bf-4c90-b8c3-6032745065ca" width="100px;" height="100px;" alt="이채훈"/><br /><sub><b>BE 팀원 : 이채훈</b></sub></a></td>
      <td align="center"><a href="https://github.com/lychee-55"><img src="https://github.com/user-attachments/assets/bac0b4d2-c20c-4781-8d50-bccf1ca45398" width="100px;" height="100px;" alt="이지원"/><br /><sub><b>FULL 팀원 : 이지원</b></sub></a></td>
      <td align="center"><a href="https://github.com/baekdahyun"><img src="https://github.com/user-attachments/assets/f3fc5735-6c10-470b-b1ed-eb7946664228" width="100px;" height="100px;" alt="백다현"/><br /><sub><b>FE 팀원 : 백다현</b></sub></a></td>
      <td align="center"><a href="https://github.com/suvd0377"><img src="https://github.com/user-attachments/assets/9b2218ae-8e33-4d56-9554-ee65519d9bd3" width="100px;" height="100px;" alt="간솝드"/><br /><sub><b>FE 팀원 : 간솝드</b></sub></a></td>
    </tr>
  </tbody>
</table>

<br>

| 이름   | 역할    | 담당                                               |
| ----- | ------ | ----------------------------------------------- |
| 이소은 | FULL    | 전체 아키텍처 설계, 투두 관리 API, 배포 및 인프라 관리      |
| 이채훈 | BE      | 로그인/회원가입 API, OAuth 로그인 개발                  |
| 이지원 | FULL    | 네비게이션/마이페이지 뷰, 마이페이지 API 개발              |
| 백다현 | FE      | 로그인/회원가입 뷰, 투두 작성/수정 팝업 구현               |
| 간솝드 | FE      | 대시보드 뷰, 투두 조회 뷰 (검색, 캘린더, 키워드, 휴지통)     |

<br>

## 👨‍💻 My Role

### 담당 기능

<table border="1" cellspacing="0" cellpadding="8">
  <thead>
    <tr>
      <th>구분</th>
      <th>기능</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="2">프로젝트 관리</td>
      <td>전체 개발 일정 및 이슈 관리</td>
    </tr>
    <tr>
      <td>애플리케이션 아키텍처 및 폴더 구조 설계</td>
    </tr>
    <tr>
      <td rowspan="5">투두 관리 API</td>
      <td>투두 CRUD (생성, 조회, 수정, Soft Delete)</td>
    </tr>
    <tr>
      <td>트랜잭션 기반 투두 수정 (Todo + 서브태스크 일괄 처리)</td>
    </tr>
    <tr>
      <td>날짜 기반 조회 (오늘, 이번주, 캘린더 월별)</td>
    </tr>
    <tr>
      <td>투두 검색 (제목 + 서브태스크 내용 통합 검색)</td>
    </tr>
    <tr>
      <td>삭제된 투두 복구 (단건/다건)</td>
    </tr>
    <tr>
      <td rowspan="1">인프라</td>
      <td>AWS EC2 배포 및 서버 모니터링 (PM2)</td>
    </tr>
  </tbody>
</table>

<br>

### 주요 구현

### 1. 투두리스트 관리 시스템

> [TodoController.js](controllers/TodoController.js)

- 투두 생성, 조회, 업데이트, 삭제 API 개발
- TodoContent(체크리스트) 동적 관리 기능
- 키워드 기반 분류 시스템 구현
- Soft Delete 패턴을 활용한 휴지통 및 복원 기능

### 2. 날짜/시간 기반 투두 관리

> [TodoController.js](controllers/TodoController.js)

- 오늘의 투두, 이번 주 투두 조회 API
- 캘린더 기반 월별 일정 관리 시스템
- 우선순위별(low, medium, high) 투두 필터링 기능

### 3. 검색 및 필터링

> [TodoController.js](controllers/TodoController.js)

- 투두 제목 + 서브태스크 내용 통합 검색 시스템
- 날짜, 우선순위, 키워드별 투두 필터링 API

<br>

## 🔍 Trouble Shooting

### 1. 투두 상세 팝업 - 이벤트 위임 및 DOM 데이터 바인딩 문제

메인 대시보드에서 투두 항목 클릭 시 상세 정보 팝업 모달을 구현하는 과정에서 발생한 문제입니다.

| 문제             | 원인                      | 상세                                                                |
| ---------------- | ------------------------- | ------------------------------------------------------------------- |
| API 호출 실패    | 이벤트 전파 처리 부재     | 투두 항목 클릭 시 이벤트 리스너에서 todoId가 undefined로 전달됨     |
| 데이터 속성 누락 | DOM 데이터 속성 관리 미흡 | 동적으로 생성된 요소의 `data-todo-id` 속성이 정확히 바인딩되지 않음 |

> `feat/팝업-디테일-기능-수정` 브랜치 → PR #110

<br>

**Solution**

- 각 투두 항목마다 개별 이벤트 리스너를 추가하던 방식에서, 부모 요소에 **이벤트 위임 패턴**을 적용
- 투두 항목 생성 시 데이터 속성을 명확하게 설정하고, DOM 요소 생성 로직을 개선

<br>

### 2. 오늘의 투두 조회 - 날짜 정확 일치 조회 실패

`todayTodo` API에서 오늘 날짜의 투두가 조회되지 않는 문제가 발생했습니다.

| 문제             | 원인                       | 상세                                                                          |
| ---------------- | -------------------------- | ----------------------------------------------------------------------------- |
| 오늘 투두 미조회 | Date 타입의 시분초 미고려  | `where: { date: today }`로 조회 시, 시분초가 포함된 데이터 누락     |
| 주간 조회 누락   | 날짜 범위 계산 오류        | 주간 범위의 시작/종료 시점이 정확히 설정되지 않아 경계값 데이터 누락          |

<br>

**Solution**

> [TodoController.js](controllers/TodoController.js) - `todayTodo`

정확 일치(`date: today`) 방식에서 `Op.gte`/`Op.lt` **범위 조회**로 변경:

```javascript
// Before: 시분초가 포함된 데이터 누락
where: { date: today }

// After: 오늘 00:00:00 ~ 내일 00:00:00 범위 조회
const today = new Date();
today.setHours(0, 0, 0, 0);
const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);

where: {
  date: {
    [Op.gte]: today,
    [Op.lt]: tomorrow,
  },
}
```

<br>

### 3. 체크리스트 다중 편집 - 트랜잭션 처리 문제

투두 상세 페이지에서 여러 체크리스트 항목을 동시에 편집할 때 발생한 문제입니다.

| 문제            | 원인              | 상세                                                                          |
| --------------- | ----------------- | ----------------------------------------------------------------------------- |
| 부분적 업데이트 | 트랜잭션 미적용   | 여러 TodoContent 항목 중 일부만 성공적으로 처리되고 나머지는 실패             |
| 데이터 불일치   | 원자적 처리 부재  | 화면에는 모든 항목이 수정된 것으로 표시되나, DB에는 일부만 반영               |
| 롤백 불가       | 예외 처리 미흡    | 업데이트 과정에서 예외 발생 시 이미 변경된 데이터를 원상복구하는 메커니즘 부재 |

> `refactor/리펙토링` 브랜치 → PR #112에서 트랜잭션 적용

<br>

**Solution**

> [TodoController.js](controllers/TodoController.js) - `editTodo`

Sequelize 트랜잭션을 활용하여 모든 DB 작업을 하나의 원자적 단위로 처리:

```javascript
exports.editTodo = async (req, res) => {
  const t = await sequelize.transaction();

  try {
    const { id, keyword_id, title, priority, date, contents } = req.body;

    const [updated] = await Todo.update(
      { keyword_id, title, priority, date, update_date: new Date() },
      { where: { id }, transaction: t },
    );

    if (!updated) {
      await t.rollback();
      return notFound(res, null, 'Todo를 찾을 수 없습니다.');
    }

    // 기존 content와 전송된 content 비교하여 삭제 대상 추출
    const existingContents = await TodoContent.findAll({
      where: { todo_id: id }, attributes: ['id'], transaction: t,
    });
    const receivedContentIds = contents
      .filter((content) => content.id)
      .map((content) => Number(content.id));
    const contentIdsToDelete = existingContents
      .map((content) => content.id)
      .filter((existingId) => !receivedContentIds.includes(existingId));

    if (contentIdsToDelete.length > 0) {
      await TodoContent.destroy({
        where: { id: contentIdsToDelete, todo_id: id }, transaction: t,
      });
    }

    // content 업데이트 및 새 content 추가
    for (const content of contents) {
      const { id: contentId, content: text, state } = content;
      if (contentId) {
        await TodoContent.update(
          { content: text, state: Boolean(state) },
          { where: { id: contentId, todo_id: id }, transaction: t },
        );
      } else if (text.trim()) {
        await TodoContent.create(
          { todo_id: id, content: text, state: Boolean(state) },
          { transaction: t },
        );
      }
    }

    await t.commit();
    success(res, null, 'Todo 업데이트 완료');
  } catch (err) {
    await t.rollback(); // 오류 발생 시 자동 롤백으로 데이터 일관성 유지
    serverError(res, err);
  }
};
```

<br>

## 💡 What I Learned

이번 프로젝트에서는 개발을 처음 시작하는 팀원들이 많았기에, 개인 코드의 효율보다는 **팀 전체의 기능 완성**에 초점을 두었습니다.

팀의 리더로서 프로젝트의 전체 흐름을 체크하고, 전체적인 개발 과정에 모두 관여하면서 주기적으로 리뷰와 회고를 하고자 노력했습니다. 이를 통해 백엔드뿐만 아니라 **개발 생태 전반에 대한 깊은 이해**를 할 수 있는 기회가 되었습니다.

| 영역                     | 배운 점                                                                       |
| ------------------------ | ----------------------------------------------------------------------------- |
| **MVC 패턴 설계**        | MVC 패턴 기반 RESTful API 설계 및 폴더 구조 체계화                            |
| **트랜잭션 처리**        | 리팩토링을 통해 Sequelize 트랜잭션 기반 원자적 수정 및 롤백 처리 적용         |
| **날짜 기반 쿼리 설계**  | Date 타입의 정확 일치 한계를 이해하고 범위 조회 패턴으로 개선                 |
| **클라이언트 연동**      | 프론트엔드 이벤트 위임, DOM 데이터 바인딩 문제 분석 및 해결                   |
| **공통 유틸 설계**       | 표준화된 API 응답 함수(`common.js`) 설계를 통한 일관된 응답 구조 구축         |
| **프로젝트 리딩**        | 5인 팀의 일정 관리, 이슈 트래킹, 코드 리뷰 및 아키텍처 의사결정 경험         |

<br>

## 🛠️ Points to Improve

아쉬웠던 점 → 이후 개선 방향

| 문제점                          | 원인                      | 개선 방향                                                    |
| ------------------------------- | ------------------------- | --------------------------------------------- |
| 컨트롤러에 비즈니스 로직 혼재   | 짧은 시간 완전한 구현으로 우선순위 미뤄짐 | 로직 분리, 역할별 책임 명확화               |
| 날짜 정확 일치 조회 실패        | Date 타입의 시분초 미고려 | `Op.gte`/`Op.lt` 범위 조회로 수정, 날짜 유틸 함수 분리      |
| 응답 유틸 함수 미통일           | 컨트롤러 간 협업 규칙 부재 | 공통 응답 함수(`common.js`) 전 컨트롤러 일관 적용            |
| 에러 핸들링 분산                | 글로벌 에러 처리 미적용   | Express 글로벌 에러 핸들러 미들웨어 도입                     |
