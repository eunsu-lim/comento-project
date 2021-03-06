# comento 피드 시스템 

## vue.js
- Vue-router
- Vuex
- SCSS
- axios (HTTP통신을 위한 라이브러리)

## 구현 기능 ( ✅ 표시 )

**반응형 웹** 
<br />
 - ✅ **PC**
 - ✅ **Tablet/Mobile**: 768px 이하
<br /><br /><br />

**피드 컨텐츠**
<br />
 - ✅ 글자 수가 많으면 자르고 생략기호(...) 표시
 - ❌ 컨텐츠 불러오기 (infinite-loading)
<br /><br /><br />

**정렬 (오름차순, 내림차순)**
<br />
 - ❌ 선택한 정렬순으로 리스트 불러오기
 - ❌ 선택된 정렬만 css 강조하기
 - ✅ 기본값: 오름차순
<br /><br /><br />

**필터 (modal)**
<br />
 - ✅ 별도 컴포넌트로 분리하여 개발
 - ✅ input type="checkbox"
 - ✅ 기본값: 모두 선택
 - ❌ 저장을 클릭하면 저장되고 모달이 종료됨
<br /><br /><br />

**광고 삽입**
<br />
 - ✅ 4번째 index마다 광고 1개 삽입
 - ✅ 광고 이미지 비율 유지
 - ✅ 글자 수가 많으면 자르고 생략기호(...) 표시
<br /><br /><br />

**디테일 페이지**
<br />
 - ✅ 피드 컨텐츠를 클릭하면 디테일 페이지로 이동(/:id)
<br /><br /><br />

**고객센터 대응**
<br />
 - ❌ 피드 시스템을 사용한 고객들이 남긴 의견을 반영하기
<br /><br /><br />


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
