const connection = require('../app/database');
const commentRouter = require('../router/comment.router');

// 可以看到, 其实 SQL 都很简单. 
class CommentService {
  // 创建评论, 评论是和 动态 关联在一起的. 
  async create(momentId, content, userId) {
    const statement = `INSERT INTO comment (content, moment_id, user_id) VALUES (?, ?, ?);`;
    const [result] = await connection.execute(statement, [content, momentId, userId]);
    return result;
  }

  // 回复评论. 这个新的评论, 是和 动态, 原有评论, 用户关联在一起的. 
  async reply(momentId, content, userId, commentId) {
    const statement = `INSERT INTO comment (content, moment_id, user_id, comment_id) VALUES (?, ?, ?, ?);`;
    const [result] = await connection.execute(statement, [content, momentId, userId, commentId]);
    return result;
  }

  // 修改评论. 直接就是 评论的 id 和内容的替换. 
  async update(commentId, content) {
    const statement = `UPDATE comment SET content = ? WHERE id = ?`;
    const [result] = await connection.execute(statement, [content, commentId]);
    return result;
  }

  // 删除评论, 这里有点问题, 应该是软删除才合理. 
  async remove(commentId) {
    const statement = `DELETE FROM comment WHERE id = ?`;
    const [result] = await connection.execute(statement, [commentId]);
    return result;
  }

  async getCommentsByMomentId(momentId) {
    const statement = `
      SELECT 
        m.id, m.content, m.comment_id commendId, m.createAt createTime,
        JSON_OBJECT('id', u.id, 'name', u.name) user
      FROM comment m
      LEFT JOIN user u ON u.id = m.user_id
      WHERE moment_id = ?;
    `;
    const [result] = await connection.execute(statement, [momentId]);
    return result;
  }
}

module.exports = new CommentService();
