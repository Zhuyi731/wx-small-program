//获取应用实例
var app = getApp()
const util = require("../../utils/util");
Page({
    data: {
        good: {},
        buyCount: 1,
        options: null
    },
    onLoad: function(options) {
        let typeMap = {
            "topGoods": "/data/goods.json",
            "display": "/data/display.json"
        };

        this.setData({ options });
        wx.request({
            url: app.url(typeMap[options.type]),
            success: res => {
                this.setData({
                    good: res.data[options.index]
                });
            }
        })
    },
    buyCount: function(e) {
        let id = e.target.id;
        if (id == "add") {
            this.setData({
                buyCount: ++this.data.buyCount
            });
        } else if (this.data.buyCount > 1) {
            this.setData({
                buyCount: --this.data.buyCount
            });
        }
    },
    buyNow: function() {

    },
    addToCart: function() {
        let carts = wx.getStorageSync("cart") || [];
        let cart = util.cloneDeep(this.data.good);
        cart.count = this.data.buyCount;
        carts.push(cart);
        wx.setStorageSync("cart", carts);

        wx.switchTab({
            url: "../cart/cart"
        });
    }
})