## 프로젝트 구조

hook - use(카멜 케이스) [ ex) usePassGood ]
폴더 - (카멜 케이스) [ ex) passGood ]
파일 - (파스칼 케이스) [ ex) PassGood ]
이미지 파일 저장형식 - (케밥 케이스) [ ex) pass-good]

```
src
├── app/               # 프로바이더, 라우터, 전역 스타일, 전역 타입 선언 등이 여기에서 정의. 애플리케이션의 진입점
│   └── ...
├── components/        # 페이지에 사용되는 독립적인 UI 컴포넌트
│   ├── atoms
│   │   └── ...
│   └── molecules
│       └── ...
│   └── organisms
│       └── ...
│   └── pages
│       └── ...
│   └── templates
│       └── ...
├── constans           # 전역변수 관리
│   └── ...
├── hooks/          	 # 훅
│   ├── ...
│   │   └── ...
│   └── ...
│       └── ...
├── styles/         	 # 공통 스타일
│   └── ...
├── null         			 # 미정
│   └── ...
└── null         	     #  미정
    └── ...
```

## 아토믹-아톰

src -> components -> atoms 폴더안에
icons, logo, text관리
text는 as를 사용하여 태그변경을 할 수 있음

## Atoms

`atoms/` (원자)
폴더에는 가장 작은 단위의 UI 컴포넌트들이 포함되어 있습니다. 이 컴포넌트들은 재사용 가능하며 다른 컴포넌트를 구성하는 기본 요소들로 사용됩니다.

`molecules/` (원자 + 원자)
atoms를 결합한 분자 단위 (중요 : 한 가지의 일을 하는것)

`organisms/` (원자 + 분자)
원자, 분자의 위치값 조정하는 유기체

`templates/` (organism + molecule)
스타일링, 컬러는 들어가지않음 페이즈 그리드 역할 (중요 : 페이지 기본 컨텐츠 구조에 초첨 / 제목 및 텍스트 구절의 이미지 크기 / 문자 길이와 같은 구성요소의 중요한 속성을 명확히)

`pages/` (templates + templates + otherData)
템플릿을 활용해 각 그리드에 컴포넌트를 그려서 전시 / 대표적인 텍스트(ex.배너에 텍스트), 이미지 및 미디어를 템플릿에 넣어 표시

### 깃 컨벤션

| 깃모지 | 코드                          | 의미                      | Type        |
| :----: | :---------------------------- | :------------------------ | :---------- |
|   🎨   | `:art:`                       | 코드의 구조/형태 개선     | `refactor:` |
|  ⚡️   | `:zap:`                       | 성능 개선                 | `perf:`     |
|   🔥   | `:fire:`                      | 코드/파일 삭제            | `remove:`   |
|   🐛   | `:bug:`                       | 버그 수정                 | `fix:`      |
|   🚑   | `:ambulance:`                 | 긴급 수정                 | `!HOTFIX:`  |
|   ✨   | `:sparkles:`                  | 새 기능 추가              | `feat:`     |
|   📝   | `:memo:`                      | 문서 추가/수정            | `docs:`     |
|   💄   | `:lipstick:`                  | UI/style 파일 추가/수정   | `design:`   |
|   🎉   | `:tada:`                      | 프로젝트 시작             | -           |
|   🔖   | `:bookmark:`                  | 릴리즈/버전 태그          | -           |
|   📌   | `:pushpin:`                   | 특정 버전 의존성 고정     | -           |
|   ♻️   | `:recycle:`                   | 코드 리팩토링             | `refactor:` |
|   ➕   | `:heavy_plus_sign:`           | 의존성 추가               | `chore:`    |
|   ➖   | `:heavy_minus_sign:`          | 의존성 제거               | `chore:`    |
|   🔧   | `:wrench:`                    | 구성 파일 추가/삭제       | `chore:`    |
|   🔨   | `:hammer:`                    | 개발 스크립트 추가/수정   | `chore:`    |
|   💩   | `:poop:`                      | 똥싼 코드                 | -           |
|   ⏪   | `:rewind:`                    | 변경 내용 되돌리기        | -           |
|   🔀   | `:twisted_rightwards_arrows:` | 브랜치 합병               | -           |
|   📦   | `:package:`                   | 컴파일된 파일 추가/수정   | `chore:`    |
|   👽   | `:alien:`                     | 외부 API 변화로 인한 수정 | `fix:`      |
|   🚚   | `:truck:`                     | 리소스 이동, 이름 변경    | `rename:`   |
|   📄   | `:page_facing_up:`            | 라이센스 추가/수정        | `docs:`     |
|   💡   | `:bulb:`                      | 주석 추가/수정            | `comment:`  |
|   🍻   | `:beers:`                     | 술 취해서 쓴 코드         | -           |
|   🗃    | `:card_file_box:`             | 데이터베이스 관련 수정    | `chore:`    |
|   🔊   | `:loud_sound:`                | 로그 추가/수정            | `chore:`    |
|   🙈   | `:see_no_evil:`               | .gitignore 추가/수정      | `chore:`    |
