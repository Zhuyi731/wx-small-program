const app = getApp();
const util = require("../../utils/util");
Page({
    data: {
        carts: [],
        totalPrice: 0
    },
    onShow: function() {
        let carts = wx.getStorageSync("cart") || [],
            totalPrice = this.getTotalPrice(carts);

        this.setData({
            carts,
            totalPrice
        });
    },
    decline: function(e) {
        let index = e.target.dataset.index,
            carts = this.data.carts,
            cart = carts[index];

        if (cart.count == 1) {
            carts.splice(index, 1);
        } else {
            carts[index].count--;
        }

        wx.setStorageSync("cart", carts);

        this.setData({
            carts,
            totalPrice: this.data.totalPrice - cart.price
        })
    },
    add: function(e) {
        let index = e.target.dataset.index,
            carts = this.data.carts,
            cart = carts[index];

        carts[index].count++;

        wx.setStorageSync("cart", carts);

        this.setData({
            carts,
            totalPrice: this.data.totalPrice + cart.price
        })
    },
    getTotalPrice: function(carts) {
        let totalPrice = 0;
        carts.forEach(el => {
            totalPrice += el.price * el.count;
        });
        return totalPrice;
    }
})