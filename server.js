const expressLayouts = require("express-ejs-layouts");
require("module-alias/register");
const express = require("express");
const router = require("@/routes/api");
const notFoundHandler = require("@/middlewares/notFoundHandler");
const errorHandler = require("@/middlewares/errorHandler");
const app = express();
const adminRouter = require("./src/routes/admin");
const handlePagination = require("@/middlewares/handlePagination");
const handleAdminSidebar = require("@/middlewares/admin/handleAdminSidebar");
const methodOverride = require("method-override");

const handleSession = require("@/middlewares/admin/handleSession");
const cookieParser = require("cookie-parser");
const session = require("./src/middlewares/admin/session");
const shareLocals = require("./src/middlewares/admin/shareLocals");
//view endine
app.use(expressLayouts);
app.set("view engine", "ejs");
app.set("views", "./src/views");
app.set("layout", "admin/layouts/default/index");

app.use(cookieParser());

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded());

//hỗ trợ method puth , delete
app.use(methodOverride("_method"));

app.use(handlePagination);
// app.use(responseEnhancer);

app.use(
  "/admin",
  session,
  shareLocals,
  handleSession,
  handleAdminSidebar,
  adminRouter
);
app.use("/api/v1", router);

// 3: Áp dụng hàm xử lý 404
app.use(notFoundHandler);

// 5: Áp dụng hàm xử lý lỗi
app.use(errorHandler);

app.listen(3000, () => {
  console.log("App running on port 3000");
});

//3 cú pháp ejs :
//- <% thực thi code js %> .
//- <%- gọi hàm ejs %> ví dụ <% includes("../partials/header"" %>
//- <%= in giá trị biến %> ví dụ  <%= user.name %>
