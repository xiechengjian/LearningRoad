// import $ from 'jQuery'
// console.log($);
var XQ_bigimg = function (xq_big) {
    var self = this;
    // console.log(this);
    this.xq_big = xq_big;
    this.width = xq_big.width();
    this.height = xq_big.height();
    this.top = xq_big.offset().top;
    this.left = xq_big.offset().left;
    this.pdiv = Math.floor(Math.random() * this.width * this.height);
    this.setting = {
        "pwidth": 300,
        "pheight": 200,
        "scale": 3,
        "margin_top": 0,
        "margin_left": 0,
        "pclass": ""
    }
    $.extend(this.setting, this.getSetting());
    this.imgsrc = this.setting.bigImg ? this.setting.bigImg : xq_big.attr("src");
    this.xq_big.hover(function () {
        self.createPchild(self.pdiv);
        self.imgsrc = $(this).attr("src");
        self.createImg();
    }, function () {
        var pdiv = "#" + self.pdiv;
        $(pdiv).remove();
    });
    $(".img-mask").mousemove(e => {
        console.log(e);
        // e.stopPropagation();
        // console.log($('.img-mask').width());
        // let x = e.offsetX - $('.img-mask').width() / 2,
        //     y = e.offsetY - $('.img-mask').height() / 2;
        // $(".img-mask").css({
        //     'left': x + "px",
        //     'top': y + "px"
        // })
        // console.log(this.xq_big);
        // this.xq_big.off('mousemove')
    })
    this.xq_big.mousemove(function (e) {
        // console.log($('.img-mask'));
        // $(".img-mask").attr("style", {
        //     left: $(e.target).offset().x,
        //     top: $(e.target).offset().y
        // })
        e.stopPropagation();
        console.log($('.img-mask').width());
        let x = e.offsetX - $('.img-mask').width() / 2,
            y = e.offsetY - $('.img-mask').height() / 2;
        $(".img-mask").css({
            'left': x + "px",
            'top': y + "px"
        })
        // console.log($(".img-mask"));
        var scrollTop = $(document).scrollTop();
        var scaleX = (e.clientX - self.left) / self.width;//处于左边部分的距离
        var scaleY = (e.clientY - self.top + scrollTop) / self.height;//处于顶部部分的距离
        self.updImg(scaleX, scaleY);
    });
}
XQ_bigimg.prototype = {
    createPchild: function (id) {
        var ele = document.createElement("div");
        var img = document.createElement("img");
        var scrollTop = $(document).scrollTop();
        $("body").append($(ele));
        // console.log($('.img-responsive').offset().left);
        $(ele).attr({ 'id': id }).css({
            'width': this.setting.pwidth + "px",
            'height': this.setting.pheight + "px",
            'position': 'fixed',
            'top': $('.img-responsive').offset().top,
            // 'top': $('.main')[0].clientHeight-,
            'left': $('.img-responsive').offset().left + 450 + this.setting.margin_left,
            // 'left': this.left + this.width + this.setting.margin_left,
            'overflow': 'hidden'
        }).addClass(this.setting.pclass);
        // $(ele).addClass('col-md-6 col-sm-6 col-xs-8')
    },
    createImg: function () {
        var img = document.createElement("img");
        $(img).attr("src", this.imgsrc).css({
            'width': this.width * this.setting.scale,
            'height': this.height * this.setting.scale,
            'margin-top': '0px',
            'margin-left': '0px',
            'position': 'relative'
        });
        var pdiv = "#" + this.pdiv;
        $(pdiv).append($(img));
    },
    updImg: function (scaleX, scaleY) {
        var top = (scaleY * this.height * this.setting.scale) - (scaleY * this.setting.pheight);
        var left = (scaleX * this.width * this.setting.scale) - (scaleX * this.setting.pwidth);
        var pdiv = "#" + this.pdiv;
        $(pdiv).find("img").css({ 'top': -top + "px" });
        $(pdiv).find("img").css({ 'left': -left + "px" });
    },
    getSetting: function () {
        var setting = this.xq_big.attr("setting");//节点属性配置参数
        if (setting && setting != "") {
            return $.parseJSON(setting);
        } else {
            return {};
        }
    }
};
XQ_bigimg.init = function ($ele) {
    var _this_ = this;
    $ele.each(function () {
        new _this_($(this));
    });
}
window['XQ_bigimg'] = XQ_bigimg;
$(function () {
    XQ_bigimg.init($("img[xq_big='true']"));
});
export default {
    XQ_bigimg
}