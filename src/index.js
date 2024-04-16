const fixBug = require("./fix-bug");
const signIn = require("./sign-in");

const token = "s_v_web_id=verify_lv1u82c5_KyWTitHR_Wzoz_4DM7_B7km_KHtyDjSr040B; _tea_utm_cache_2608=undefined; __tea_cookie_tokens_2608=%257B%2522web_id%2522%253A%25227358305134722713151%2522%252C%2522user_unique_id%2522%253A%25227358305134722713151%2522%252C%2522timestamp%2522%253A1713238934441%257D; passport_csrf_token=3ab53d1fe2bdc3d8885f530d3cf184f1; passport_csrf_token_default=3ab53d1fe2bdc3d8885f530d3cf184f1; _ga=GA1.2.1991443312.1713251750; _gid=GA1.2.1976197511.1713251750; _ga_S695FMNGPJ=GS1.2.1713251751.1.0.1713251751.60.0.0; msToken=N_hyU6SPIgFY4AI79WHsFdt2891dnRcCQT-sc5PlGPRWGhy5jejbCzkItyBpGaN2iI7RbNktb2OyM9nw7qw1mVFZ_yF_vbMlrte2JIHAfbhxXJQUJcu9aTMD0mbTiqA=";

// 清除bug
fixBug(token);

// 签到 + 沾喜气 + 抽奖
signIn(token);
