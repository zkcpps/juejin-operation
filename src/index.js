const fixBug = require("./fix-bug");
const signIn = require("./sign-in");

const token =
  "_ga=GA1.2.1476010436.1645173073; __tea_cookie_tokens_2608=%257B%2522web_id%2522%253A%25227065964507725792776%2522%252C%2522user_unique_id%2522%253A%25227065964507725792776%2522%252C%2522timestamp%2522%253A1645173073406%257D; sid_guard=056d6b5757c955afab225a99c83697dd%7C1651724155%7C31536000%7CFri%2C+05-May-2023+04%3A15%3A55+GMT; uid_tt=c0c707e75b2abe0b1b486563fedae2e3; uid_tt_ss=c0c707e75b2abe0b1b486563fedae2e3; sid_tt=056d6b5757c955afab225a99c83697dd; sessionid=056d6b5757c955afab225a99c83697dd; sessionid_ss=056d6b5757c955afab225a99c83697dd; sid_ucp_v1=1.0.0-KDE0NDk4Mjg2Nzk5NWQyZTkyMTFjM2Q5NmUxNDJkNjcyZTExOTY5MDkKFwjd67Dyj4zAAxD7ns2TBhiwFDgCQO8HGgJsZiIgMDU2ZDZiNTc1N2M5NTVhZmFiMjI1YTk5YzgzNjk3ZGQ; ssid_ucp_v1=1.0.0-KDE0NDk4Mjg2Nzk5NWQyZTkyMTFjM2Q5NmUxNDJkNjcyZTExOTY5MDkKFwjd67Dyj4zAAxD7ns2TBhiwFDgCQO8HGgJsZiIgMDU2ZDZiNTc1N2M5NTVhZmFiMjI1YTk5YzgzNjk3ZGQ; MONITOR_WEB_ID=f8e2a4f1-a581-40ce-b0ee-451beb380660; _tea_utm_cache_2608={%22utm_source%22:%22nav%22%2C%22utm_medium%22:%22web_entrance%22%2C%22utm_campaign%22:%22annual_2022%22}; msToken=x08eGRuHkhK4rgCKaybjA9PUn4MzqzKEYhhqJ93arSPcFtCVWfLhBrTSebBy-j6B7D2qGosHU7B2w_lQT56AfqpoxEs9zd3X-nVMXxo5KTA=; _gid=GA1.2.1430710135.1672643815";

// 清除bug
fixBug(token);

// 签到 + 沾喜气 + 抽奖
signIn(token);
