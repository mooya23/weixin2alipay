import wx from '/onekit/wx';
global = {};
Page({
  onShareAppMessage() {
    return {
      title: '客服消息',
      path: 'page/API/pages/custom-message/custom-message'
    }
  },
})