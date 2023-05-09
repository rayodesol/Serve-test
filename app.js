const express = require("express");
const path = require("path"); // 파일 주소값들을 자연스럽게 연결

const app = express();

app.set("port", process.env.PORT || 3000); // .env 에 PORT 값 없으면 3000 사용

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html")); // 상대경로 안됨.
});

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 배포 서버 실행");
});
