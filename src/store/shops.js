const _products = [{
    id: 1,
    name: 'Apple/苹果 iPhone 6S',
    desc: '3D Touch、1200万像素照片、4k视频，强大功能于一身。',
    price: '5288 - 6888',
    inventory: 100,
    style: [
        {
            color: '银色',
            url: 'http://o8yu724qs.bkt.clouddn.com/iphone6s-silver-select-2015.png',
        },
        {
            color: '深空灰色',
            url: 'http://o8yu724qs.bkt.clouddn.com/iphone6s-gray-select-2015.png',
        },
        {
            color: '金色',
            url: 'http://o8yu724qs.bkt.clouddn.com/iphone6s-gold-select-2015.png',
        },
        {
            color: '玫瑰金色',
            url: 'http://o8yu724qs.bkt.clouddn.com/iphone6s-rosegold-select-2015.png',
        },
    ],
    activeStyleUrl: 'http://o8yu724qs.bkt.clouddn.com/iphone6s-silver-select-2015.png',
    storage: {
        '16GB': 5288,
        '64GB': 6088,
        '128GB': 6888
    }
}]
export default {
    getProducts(cb) {
        setTimeout(() => cb(_products), 100)
    },
    setActiveStyleUrl(url) {
        _products.activeStyleUrl = url;
    },
    buyProducts(products, cb, errorCb) {
        setTimeout(() => {
            console.log('buyProducts');
            // simulate random checkout failure.
            //     (Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1)
            //         ? cb()
            //         : errorCb()
        }, 100)
    }
}