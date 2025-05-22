require("module-alias/register");
const express = require("express");
const router = require("@/routes");
const notFoundHandler = require("@/middlewares/notFoundHandler");
const errorHandler = require("@/middlewares/errorHandler");
const app = express();
const adminRouter = require("./src/routes/admin");
const handlePagination = require("@/middlewares/handlePagination");
//view endine
app.set("view engine", "ejs");
app.set("views", "./src/views");

app.use(express.static("public"));
app.use(express.json());

app.use(handlePagination);
// app.use(responseEnhancer);

app.use("/admin", adminRouter);
app.use("/api/v1", router);

// 3: Áp dụng hàm xử lý 404
app.use(notFoundHandler);

// 5: Áp dụng hàm xử lý lỗi
app.use(errorHandler);

app.listen(3000, () => {
  console.log("App running on port 3000");
});

// tạo 2 pages :
//- trang danh sách : /admin/users hoặc /admin/posts
//- trang chi tiết : /admin/users/1 hoặc /admin/post/1
//- lấy dữ liệu danh sách và chi tiết từ DB
//3 cú pháp ejs :
//- <% thực thi code js %> .
//- <%- gọi hàm ejs %> ví dụ <% includes("../partials/header"" %>
//- <%= in giá trị biến %> ví dụ  <%= user.name %>
// cấu hình partials cho : header , footer cho ít nhất 2 page
