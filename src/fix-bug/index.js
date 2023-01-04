const JuejinHelper = require("juejin-helper");

async function run(token) {
  const juejin = new JuejinHelper();
  await juejin.login(token);

  const bugfix = juejin.bugfix();

  const notCollectBugList = await bugfix.getNotCollectBugList();
  await bugfix.collectBugBatch(notCollectBugList);
  console.log(`收集Bug ${notCollectBugList.length}`);

  const competition = await bugfix.getCompetition();
  const bugfixInfo = await bugfix.getUser(competition);
  console.log(`未消除Bug数量 ${bugfixInfo.user_own_bug}`);
}

module.exports = run;
