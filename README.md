# toy_front_team1_front

## Description
- toy_front_team1_front, Flitto tech-blog의 프론트엔드 git repo입니다.
<br><br>


## Contributing
- develop 브랜치를 deafult 브랜치로 설정하였습니다. 
- 기능 개발 시 develop 브랜치에서 feature/XXX의 이름으로 브랜치를 만들어 개발하고 develop 브랜치로 pull request를 하도록 합니다.
- 긴급한 bug fix의 경우 main 브랜치에서 hotfix/XXX 이름으로 브랜치를 만들어 개발하고 main 브랜치로 pull requst를 하도록 합니다.
<br><br>


## Build Setup

```bash
# dependencies 설치
$ npm install

# localhost:4000에서 실행
$ npm run dev

# 빌드 시
$ npm run build
$ npm run start
```

## Editor Image Server 사용
에디터 사용 시 이미지 업로드를 위해서 작동시켜야 하는 이미지 서버입니다.

```bash
# 서버 디렉토리로 이동
$ cd server

# dependencies 설치
$ npm i

# 이미지 서버 실행, localhost:8080
$ node api

# 저장된 이미지 확인
$ cd public
```
