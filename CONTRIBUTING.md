# 브런치 룰

# Branch Rule
## Reference
- https://nvie.com/posts/a-successful-git-branching-model/
- https://guides.github.com/introduction/flow/

## 개요
- `main` `release` 에는 직접 푸시 하지 않는다.
- 기본적으로 git flow 형식의 브랜치 룰을 따른다.

### main
- Only PR
- 최종 릴리즈 코드를 같이 푸시

### hotfix/`#<issue or pr number>`
- main 단계에서 치명적 버그를 발견 했을 때에 이슈 티켓 발행 후 버그픽스 하는 단계

### release
- Only PR
- QA 단계 수준의 릴리즈 코드를 푸시

### relfix/`#<issue or pr number>`
- QA 단계에서 발생한 버그 이슈들을 픽스하는 브랜치

### develop
- 릴리즈 이전의 최종적으로 피쳐 브랜치의 합이 되는 브랜치
- 직접 푸시 하는 것은 지양하되 불가피할 경우 바로 푸시
- 해당 브런치로 머지하는 것은 코드 리뷰 후로 함

### feature/`#<issue or pr number>`
- 피쳐 개발

# Commit convention

## Reference
- https://www.conventionalcommits.org/en/v1.0.0/
- https://doublesprogramming.tistory.com/256

## Type
- `feat` 새로운 기능 추가
- `fix` 버그 수정
- `docs` 문서 수정
- `style` 코드 포맷팅, 띄어쓰기, 들여쓰기
- `chore` (코드 수정 없이) 빌드 스크립트 설정 변경, 패키지 매니저 수정
- `test` 테스트 코드, 리팩토링 테스트 코드 추가
- `refactor` 코드 리팩토링
- `ci` ci 관련 스크립트 파일을 수정시
- `merge` merge 시 사용