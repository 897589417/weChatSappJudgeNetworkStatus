//index.js
var _this 
const netUtils = require('../../netWork/NetUtils.js');

Page({
  data: {
    netWorkType:'监听中~'
  },
  onLoad: function () {
    _this = this
    netUtils.judgeNetworkStatus(function (res) {
      //none 是无网络状态下，networkType 的值
      if ("none" != res) {
        //有网了，干你要干的事儿吧
        _this.setData({
          netWorkType:'有网了,网是'+res
        });
      } else {
        return;
      }
    })
  }
})
