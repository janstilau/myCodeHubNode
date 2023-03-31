const service = require('../service/label.service');

const verifyLabelExists = async (ctx, next) => {
  // 1.取出要添加的所有的标签
  const { labels } = ctx.request.body;

  // 2.判断每一个标签在label表中是否存在
  const newLabels = [];
  for (let name of labels) {
    // 在中间件里面, 使用了 Service 对象. 
    // 所有的都是异步. 这里体现了 async await 这种写法的优势了, 明明是异步操作, 但是同步的写法. 
    // 这要比写出复杂的调度逻辑简单的多了. 
    const labelResult = await service.getLabelByName(name);
    const label = { name };
    if (!labelResult) {
      // 创建标签数据
      const result = await service.create(name);
      label.id = result.insertId;
    } else {
      label.id = labelResult.id;
    }
    newLabels.push(label);
  }
  ctx.labels = newLabels;
  await next();
}

module.exports = {
  verifyLabelExists
}
