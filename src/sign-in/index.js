const JuejinHelper = require("juejin-helper");

async function run(token) {
  const juejin = new JuejinHelper();
  await juejin.login(token);

  const growth = juejin.growth();

  // 签到
  try {
    await growth.checkIn();
    console.info("签到成功");
  } catch (e) {
    console.info(e.message);
  }

  // 获取当前矿石数
  console.info("当前矿石数量为: " + (await growth.getCurrentPoint()));

  console.info("今日签到状态: " + (await growth.getTodayStatus()));

  // 获取幸运客户
  const res = await growth.getLotteriesLuckyUsers({ page_no: 1, page_size: 5 });

  console.info("幸运抽奖用户: " + res.lotteries[0].history_id);

  const luckInfo = await growth.dipLucky(res.lotteries[0].history_id);

  // 沾喜气
  console.info("沾喜气: " + JSON.stringify(luckInfo));

  // 抽奖

  try {
    await growth.drawLottery();
    console.info("抽奖成功");
  } catch (e) {
    console.info(e.message);
  }
}

module.exports = run;
