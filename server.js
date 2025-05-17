require("module-alias/register");
const express = require("express");
const router = require("@/routes");
const notFoundHandler = require("@/middlewares/notFoundHandler");
const errorHandler = require("@/middlewares/errorHandler");
const app = express();
const adminRouter = require("./src/routes/admin");
//view endine
app.set("view engine", "ejs");
app.set("views", "./src/views");

app.use(express.static("public"));
app.use(express.json());
app.use("/admin", adminRouter);
app.use("/api/v1", router);

// 3: Áp dụng hàm xử lý 404
app.use(notFoundHandler);

// 5: Áp dụng hàm xử lý lỗi
app.use(errorHandler);

app.listen(3000, () => {
  console.log("App running on port 3000");
});
