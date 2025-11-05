App({
  globalData: {
    userInfo: null,
    appName: '乡村文旅'
  },

  onLaunch() {
    // 可在此做初始化，比如检查更新
    if (wx.canIUse && wx.canIUse('getUpdateManager')) {
      const updateManager = wx.getUpdateManager();
      updateManager.onCheckForUpdate(() => {});
      updateManager.onUpdateReady(() => {
        updateManager.applyUpdate();
      });
    }
  },

  onShow() {},
  onHide() {},
  onError(err) {
    console.error('App Error:', err);
  },
  onPageNotFound() {
    wx.redirectTo({ url: '/pages/index/index' });
  }
});