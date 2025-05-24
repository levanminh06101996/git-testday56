const db = require("../configs/db");
const { buildInsertQuery, buildUpdateQuery } = require("../utils/queryBuider");

exports.findAll = async (page, limit) => {
  const offset = (page - 1) * limit;
  const [posts] = await db.query(
    `select id, title, description, created_at,published_at from posts where published_at is not null order by created_at desc limit ? offset ?`,
    [limit, offset]
  );
  return posts;
};

exports.count = async () => {
  const [[{ total }]] = await db.query(`select count(*) as total from posts`);
  return total;
};

exports.findById = async (id) => {
  const [posts] = await db.query(`select * from posts where id =  ?`, [id]);
  return posts[0];
};

exports.create = async (data) => {
  const { columns, placeholders, values } = buildInsertQuery(data);

  const query = `INSERT INTO posts (${columns}) VALUES (${placeholders});`;
  const [{ insertId }] = await db.query(query, values);

  return {
    id: insertId,
    ...data,
  };
};

exports.update = async (id, data) => {
  const { setClause, values } = buildUpdateQuery(data);

  values.push(id);

  const query = `UPDATE posts SET ${setClause} WHERE id = ?;`;
  await db.query(query, values);

  return {
    id,
    ...data,
  };
};

exports.remove = async (id) => {
  const [{ affectedRows }] = await db.query(`delete from posts where id = ?`, [
    id,
  ]);
  return affectedRows > 0;
};

// const db = require("../configs/db");
// const { buildInsertQuery, buildUpdateQuery } = require("../utils/queryBuider");

// // - Mỗi trang tải 10 records
// // - Mặc định tải trang 1, có thể thay đổi bằng param "page" (VD: ?page=2)
// // - Định dạng trả về:
// // {
// //     "success": true,
// //     "data": {
// //         "items": [...] // Danh sách posts,
// //         "pagination": {
// //             "current_page": 1, // Trang hiện tại
// //             "per_page": 10, // Số bản ghi / trang
// //             "total": 200, // Tổng số bản ghi
// //             "last_page": 20, // Page cuối cùng
// //         }
// //     }
// // }
// // *Lưu ý: Những giá trị con số ở trên chỉ là giả định, cần trả về đúng với dữ liệu của bạn.

// const offset = (page - 1) * limit;

// exports.getAll = async ({ page, litmit }) => {
//   const [posts] = await db.query(
//     `select * from posts order by created_at desc limit ${limit} offset ${offset}`
//   );
//   return posts;
// };

// exports.count = async () => {
//   const [{ total }] = await db.query("select count(*) as total from posts");
//   return Number(total);
// };
