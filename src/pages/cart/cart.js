const app = getApp();

Page({
    data: {
        carts: [{
            "src": "/images/top/top1.jpg",
            "title": "Nike Nike Air Mag到未来Air Mag",
            "price": "79999",
            "place": "北京",
            "description": "还记得儿时我们都很喜欢走起路来又发光又有声音的鞋吗？而现在，耐克为我们带来了这样经典的回忆。并且，不只有回忆，更有逼格满满的黑科技。",
            count: 1
        }, {
            "src": "/images/top/top1.jpg",
            "title": "Nike Nike Air Mag到未来Air Mag",
            "price": "79999",
            "place": "北京",
            "description": "还记得儿时我们都很喜欢走起路来又发光又有声音的鞋吗？而现在，耐克为我们带来了这样经典的回忆。并且，不只有回忆，更有逼格满满的黑科技。",
            count: 1
        }, {
            "src": "/images/top/top1.jpg",
            "title": "Nike Nike Air Mag到未来Air Mag",
            "price": "79999",
            "place": "北京",
            "description": "还记得儿时我们都很喜欢走起路来又发光又有声音的鞋吗？而现在，耐克为我们带来了这样经典的回忆。并且，不只有回忆，更有逼格满满的黑科技。",
            count: 1
        }, {
            "src": "/images/top/top1.jpg",
            "title": "Nike Nike Air Mag到未来Air Mag",
            "price": "79999",
            "place": "北京",
            "description": "还记得儿时我们都很喜欢走起路来又发光又有声音的鞋吗？而现在，耐克为我们带来了这样经典的回忆。并且，不只有回忆，更有逼格满满的黑科技。",
            count: 1
        }, {
            "src": "/images/top/top1.jpg",
            "title": "Nike Nike Air Mag到未来Air Mag",
            "price": "79999",
            "place": "北京",
            "description": "还记得儿时我们都很喜欢走起路来又发光又有声音的鞋吗？而现在，耐克为我们带来了这样经典的回忆。并且，不只有回忆，更有逼格满满的黑科技。",
            count: 1
        }, {
            "src": "/images/top/top1.jpg",
            "title": "Nike Nike Air Mag到未来Air Mag",
            "price": "79999",
            "place": "北京",
            "description": "还记得儿时我们都很喜欢走起路来又发光又有声音的鞋吗？而现在，耐克为我们带来了这样经典的回忆。并且，不只有回忆，更有逼格满满的黑科技。",
            count: 1
        }],
        totalPrice: 0
    },
    onLoad: function() {
        let carts = wx.getStorageSync("cart") || [];

        wx.request({
            url: app.url("/data/goods.json"),
            success: res => {
              
            }
        });

    },
    nothing:function(e){
      debugger;
    }
})