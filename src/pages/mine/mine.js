const app = getApp();

Page({
    data: {
        userInfo: null
    },
    onShow: function() {
        this.setData({
            userInfo: app.globalData.userInfo
        })
    },
    navigateTo(e) {
        let type = e.currentTarget.dataset.type;
        wx.navigateTo({
            url: `../${type}/${type}`
        });
    }
});