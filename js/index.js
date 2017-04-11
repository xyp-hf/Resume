/**
 *
 * @authors Your Name (you@example.org)
 * @date    2015-06-18 09:24:01
 * @version $Id$
 */
 
 
$(function () {
    var windowh = $(window).height()
 
    $('.nav').css('display', 'block');
    $('.navBtn').click(function () {
 
        var oVal = $(this).html();
        if (oVal == '显示导航') {
            $('.navBtn').html('隐藏导航');
        } else {
            $(this).html('显示导航');
        }
        $('.nav').slideToggle(500);
    });
 
    $('.rnavbtn').click(function () {
        if (tag == 0) {
            tag = 1
            $(this).html('《')
            $(this).css('left', -6)
            $('#level').animate({
                'right': 100
            }, 500)
            $('#level').animate({
                'opacity': 0.36
            }, 500)
            $('.btn li').animate({
                'opacity': 0.36
            }, 500)
        } else {
            $(this).html('》')
            $(this).css('left', 0)
            tag = 0
            $('#level').animate({
                'right': 286,
                'opacity': 1
            }, 500)
            $('.btn li').animate({
                'opacity': 1
            }, 500)
        }
    });
 
    function rnavg() {
        if (tag == 0) {
            tag = 1
            $('.rnavbtn').html('《')
            $('.rnavbtn').css('left', -6)
            $('#level').animate({
                'right': 30
            }, 500)
            $('#level').animate({
                'opacity': 0.36
            }, 500)
        }
    }
 
    function rnavk() {
        if (!tag == 0) {
            $('.rnavbtn').html('》')
            $('.rnavbtn').css('left', 0)
            tag = 0
            $('#level').animate({
                'right': 286,
                'opacity': 1
            }, 500)
        }
    }
 
    $('.navBtn').mouseover(function () {
        $(this).removeClass('animateWeight');
        $(this).css('color', '#EA8820');
    }).mouseout(function (event) {
        $(this).addClass('animateWeight');
        $(this).css('color', '#999');
    });
 
    $('.rnavbtn').mouseover(function () {
        $(this).removeClass('animateWeight');
        $(this).css('color', '#EA8820');
    }).mouseout(function (event) {
        $(this).css('color', '#999');
        $(this).addClass('animateWeight');
    });
 
    var num = 0
    var tag = 0
    var timer = null
    var prev = 0;
 
 
    $(document).mousewheel(function (e, delta) {
        if (!$('.wrip').is(':animated') & falgqq == 0) {
            num = num - delta
            if (num <= 0) {
                num = 0;
            }
            if (num >= 4) {
                num = 4;
            }
            if (!num == 0) {
                $('embed').eq(0).addClass('aembed').removeClass('bossdh')
                rnavg();
 
            } else {
                $('embed').eq(0).addClass('bossdh').removeClass('aembed')
                rnavk();
            }
            if (num == 1) {
                $('.navBtn').html('显示导航');
                $('.nav').slideUp(500);
            } else {
                $('.navBtn').html('隐藏导航');
                $('.nav').slideDown(500);
            }
 
            $('.wrip').animate({
                'top': -num * 100 + '%'
            }, 500)
            $('.btn li').eq(num).addClass('act').siblings().removeClass('act');
            $('.nav li').eq(num).addClass('act').siblings().removeClass('act');
            dh();
            prev = num;
            bavktop()
 
        }
 
    })
 
 
    var arrTxt = ['首  页', '网  页', '手机端', '关于我', '联系我'];
    $('.btn li').bind({
        'click': function () {
            var index = $(this).index();
            num = index;
            $('.btn li').eq(num).addClass('act').siblings().removeClass('act');
            $('.nav li').eq(num).addClass('act').siblings().removeClass('act');
            $('.wrip').animate({
                'top': -num * 100 + '%'
            }, 500)
 
            if (!num == 0) {
                $('embed').eq(0).addClass('aembed').removeClass('bossdh')
 
            } else {
                $('embed').eq(0).addClass('bossdh').removeClass('aembed')
 
            }
            if (num == 1) {
                $('.navBtn').html('显示导航');
                $('.nav').slideUp(500);
            } else {
                $('.navBtn').html('隐藏导航');
                $('.nav').slideDown(500);
            }
            dh();
            bavktop()
        },
        'mouseenter': function () {
            var index = $(this).index();
            var oSpan = $('<span>' + arrTxt[index] + '</span>');
            $(this).append(oSpan);
        },
        'mouseleave': function () {
            $(this).find('span').remove();
        }
    })
 
    $('.nav li').click(function () {
        var index = $(this).index();
 
        num = index;
 
        $('.btn li').eq(num).addClass('act').siblings().removeClass('act');
        $('.nav li').eq(num).addClass('act').siblings().removeClass('act');
        $('.wrip').animate({
            'top': -num * 100 + '%'
        }, 500)
        dh()
        bavktop()
 
        if (!num == 0) {
            $('embed').eq(0).addClass('aembed').removeClass('bossdh')
            rnavg();
        } else {
            $('embed').eq(0).addClass('bossdh').removeClass('aembed')
            rnavk();
        }
        if (num == 1) {
            $('.navBtn').html('显示导航');
            $('.nav').slideUp(500);
        } else {
            $('.navBtn').html('隐藏导航');
            $('.nav').slideDown(500);
        }
    })
 
    function bavktop() {
        if (num > 1) {
            $('.fhuitop').css('display', 'block')
        } else {
            $('.fhuitop').css('display', 'none')
        }
    }
    bavktop()
    $('.fhuitop').click(function () {
        num = 0;
        $('.btn li').eq(num).addClass('act').siblings().removeClass('act');
        $('.nav li').eq(num).addClass('act').siblings().removeClass('act');
        $('.wrip').animate({
            'top': -num * 100 + '%'
        }, 500)
        rnavk();
        bavktop()
        dh();
 
    })
 
    function dh() {
        $('.page').eq(prev).addClass('animate');
        $('.page').eq(num).removeClass('animate');
    }
    dh()
 
 
    var falgq = false;
    $('.boxcent .l').css('height', windowh)
    var s_h = $('.boxcent span').height();
    var c_h = $('.num3t').height();
    var l_h = $('.boxcent .l').height();
    var r_h = $('.boxcent .r').height();
    var oTop = 0;
    var l_hh = windowh;
    var r_hh = windowh - 200;
    $('.boxcent span').mousedown(function (e) {
        falgq = true;
 
        var oDisY = e.pageY - $('.rbtnhezi').position().top;
 
        $(window).mousemove(function (e) {
 
            if (falgq) {
 
                var t = e.pageY - oDisY;
 
                var h = $('.boxcent .r').height() - $('.rbtnhezi').height()
 
                if (t < 0) {
                    t = 0;
                }
                if (t > h) {
                    t = h
                }
 
                oTop = (t * (c_h - l_h)) / (r_h - s_h)
 
                $('.rbtnhezi').css('top', t)
                $('.boxcent .con').css('top', -oTop)
            }
        });
        return false;
    });
 
    $(window).mouseup(function () {
        falgq = false;
    });
 
    falgqq = 0;
    $('.boxcent .r').mouseover(function () {
        falgqq = 1;
        $('.boxcenbg').stop().animate({
            'opacity': 0
        }, 500);
    }).mouseout(function () {
        falgqq = 0;
        $('.boxcenbg').stop().animate({
            'opacity': 0.5
        }, 500);
 
    })
    $('.boxcent .r').mousewheel(function (event, delta) {
        oTop = (0 - delta) * 50 + oTop;
 
        if (oTop < 0) {
            oTop = 0;
        }
 
        if (oTop > (c_h - l_h)) {
            oTop = (c_h - l_h)
        }
        $('.boxcent .con').css('top', -oTop)
 
        $('.rbtnhezi').css('top', ((-oTop) * (r_h - s_h)) / (l_h - c_h))
    })
    var json0 = {
        'width': 54,
        'height': 29,
        'left': -84,
    }
    var json1 = {
        'width': 77,
        'height': 64,
        'left': -2,
    }
    var json2 = {
        'width': 122,
        'height': 96,
        'left': 85,
    }
    var json3 = {
        'width': 188,
        'height': 200,
        'left': 232,
    }
    var json4 = {
        'width': 122,
        'height': 96,
        'left': 439,
    }
    var json5 = {
        'width': 77,
        'height': 64,
        'left': 577,
    }
    var json6 = {
        'width': 54,
        'height': 29,
        'left': 693,
    }
 
    $('.boxp2 .r2').click(function () {
        gundong2();
        datuyou();
    })
 
    $('.boxp2 .l2').click(function () {
        gundong22();
        datuzou();
    })
 
    var timer2 = null;
    timer2 = setInterval(function () {
        gundong2()
        datuyou()
        c_hh = $('.num3t img').height();
    }, 2000);
 
    $(".boxp2").mouseover(function () {
        clearInterval(timer2);
        console.log(c_hh)
        $('.btn2 span').stop().animate({
            'opacity': 0.8
        }, 500)
 
        $('.boxcenbg').stop().animate({
            'opacity': 0
        }, 500);
    });
    $(".boxp2").mouseout(function () {
        timer2 = setInterval(function () {
            gundong2()
            datuyou()
 
        }, 2000);
        $('.btn2 span').stop().animate({
            'opacity': 0
        }, 500)
        $('.boxcenbg').stop().animate({
            'opacity': 0.5
        }, 500);
 
    });
 
 
    function gundong2() {
        if (!$('.boxp2 li').is(":animated") & falgqq == 0) {
            $('.num0').css(json6);
            $('.num1').animate(json0, 500);
            $('.num2').animate(json1, 500);
            $('.num3').animate(json2, 500);
            $('.num4').animate(json3, 500);
            $('.num5').animate(json4, 500);
            $('.num6').animate(json5, 500);
 
            var n6 = $('.num6')
            $('.num0').attr('class', 'waiting');
            $('.num1').attr('class', 'num0');
            $('.num2').attr('class', 'num1');
            $('.num3').attr('class', 'num2');
            $('.num4').attr('class', 'num3');
            $('.num5').attr('class', 'num4');
            n6.attr('class', 'num5');
 
            if (n6.next().length != 0) {
                $(n6.next()).attr('class', 'num6')
            } else {
                $('.boxp2 li:first').attr('class', 'num6');
            }
            $('.num6').css(json6);
        }
    }
 
 
    function gundong22() {
        if (!$('.boxp2 li').is(":animated") & falgqq == 0) {
 
            $('.num6').css(json0)
            $('.num5').animate(json6, 500)
            $('.num4').animate(json5, 500)
            $('.num3').animate(json4, 500)
            $('.num2').animate(json3, 500)
            $('.num1').animate(json2, 500)
            $('.num0').animate(json1, 500)
 
            var n0 = $('.num0')
 
            $('.num6').attr('class', 'waiting');
            $('.num5').attr('class', 'num6');
            $('.num4').attr('class', 'num5');
            $('.num3').attr('class', 'num4');
            $('.num2').attr('class', 'num3');
            $('.num1').attr('class', 'num2');
            n0.attr('class', 'num1');
 
            if (n0.prev().length != 0) {
                $(n0.prev()).attr('class', 'num0')
            } else {
                $('.boxp2 li:last').attr('class', 'num0');
            }
            $('.num0').css(json0);
        }
    }
 
    function datuyou() {
        if (!$('.boxtop li').is(":animated") & falgqq == 0) {
            var n6t = $('.num6t')
            $('.num0t').attr('class', 'waitingt');
            $('.num1t').attr('class', 'num0t');
            $('.num2t').attr('class', 'num1t');
            $('.num3t').attr('class', 'num2t');
            $('.num4t').attr('class', 'num3t');
            $('.num5t').attr('class', 'num4t');
            n6t.attr('class', 'num5t');
            if (n6t.next().length != 0) {
                $(n6t.next()).attr('class', 'num6t')
            } else {
                $('.boxtop li:first').attr('class', 'num6t');
            }
 
            $('.num3t').fadeIn(500).siblings().fadeOut(500);
        }
    }
 
    function datuzou() {
        if (!$('.boxtop li').is(":animated") & falgqq == 0) {
            var n0t = $('.num0t')
            $('.num6t').attr('class', 'waitingt');
            $('.num5t').attr('class', 'num6t');
            $('.num4t').attr('class', 'num5t');
            $('.num3t').attr('class', 'num4t');
            $('.num2t').attr('class', 'num3t');
            $('.num1t').attr('class', 'num2t');
            n0t.attr('class', 'num1t');
            if (n0t.prev().length != 0) {
                $(n0t.prev()).attr('class', 'num0t')
            } else {
                $('.boxtop li:last').attr('class', 'num0t');
            }
            $('.num3t').fadeIn(500).siblings().fadeOut(500);
        }
    }
 
 
    var muArray = [];
    var ziArray = [];
    var stageh = windowh - 50
    $('.stage').css('height', stageh)
    for (var i = 9; i > 0; i--) {
        var temp = {
            "width": 100,
            "height": 100,
            "left": 1280 - 100 * i,
            'bottom': 20
        };
        muArray.push(temp);
    }
    muArray.push({
        "width": 241,
        "height": 428,
        "left": 78,
        'bottom': 5
    });
    for (var i = 0; i < 9; i++) {
        var temp = {
            "width": 100,
            "height": 100,
            "left": 380 + 100 * i,
            'bottom': 30
        };
        muArray.push(temp);
    }
 
    console.log(muArray);
 
    function makeZiArray(num) {
        ziArray = [];
        for (var i = num; i < num + 10; i++) {
            ziArray.push(muArray[i]);
        }
    }
 
    makeZiArray(9);
 
    console.log(ziArray);
 
    for (var i = 0; i < 10; i++) {
        $(".stageli").eq(i).css(ziArray[i]);
        $(".stageli").eq(0).addClass('haha')
    }
 
    var weizhi;
    $(".gundongtiao span").draggable({
        containment: "parent",
        drag: function (event, ui) {
            var x = ui.position.left;
            var old = weizhi;
            weizhi = parseInt(x / 53);
 
            if (old != weizhi) {
                makeZiArray(9 - weizhi);
 
                for (var i = 0; i < 10; i++) {
                    $(".stageli").eq(i).stop(true).animate(ziArray[i], 400);
                    $(".stageli").eq(weizhi).addClass('haha').siblings().removeClass('haha')
 
                }
            }
 
        }
    });
    $('.gundongtiao').mouseover(function () {
        $('.zhuanp li').addClass('pzhezhao')
        zpkg = 1
    }).mouseout(function () {
        $('.zhuanp li').removeClass('pzhezhao')
        zpkg = 0
    })
 
    var nump = 0;
    var timer06 = null
    var zpkg = 0
    $('.zhuanp .r').click(function () {
        nump++;
 
        $('.zhuanp ul').css('transform', 'rotateY(' + nump * 40 + 'deg) rotateX(0deg) ')
    })
    $('.zhuanp .l').click(function () {
        nump--;
 
        $('.zhuanp ul').css('transform', 'rotateY(' + nump * 40 + 'deg) rotateX(0deg) ')
    })
 
        function autoplay() {
            if (zpkg == 0) {
                nump++;
                $('.zhuanp ul').css('transform', 'rotateY(' + nump * 40 + 'deg) rotateX(0deg) ')
            }
        }
    timer06 = setInterval(autoplay, 1000)
    $('.zhuanp .pan,.zhuanp .box').mouseover(function () {
        clearInterval(timer06)
        $('.zhuanp span').stop().animate({
            'opacity': 0.4
        }, 500)
    }).mouseout(function () {
        timer06 = setInterval(autoplay, 2000)
        $('.zhuanp span').stop().animate({
            'opacity': 0
        }, 500)
 
    })
    $('.zhuanp li').mouseover(function () {
        $(this).removeClass('pzhezhao').siblings().addClass('pzhezhao')
    }).mouseout(function () {
        $('.zhuanp li').removeClass('pzhezhao')
    });
 
    $('.nierong').mouseover(function () {
        $('.contentTace').removeClass('donghua5')
    }).mouseout(function (event) {
        $('.contentTace').addClass('donghua5')
    });
    var numbanner = 0
    setInterval(function autopaly() {
        dh()
        numbanner++;
        if (numbanner == 2) {
            numbanner = 0
        }
        $('.banner li').eq(numbanner).fadeIn(2500).siblings().fadeOut(2500);
 
    }, 3000)
 
 
});
$(function () {
    var h1 = $(window).height();
 
    $(window).scroll(function () {
        var h2 = $(document).scrollTop();
 
        if (h2 > h1 || h2 == h1) {
            $('.fhuitop').fadeIn(200);
        } else {
            $('.fhuitop').fadeOut(200);
        }
    });
    $('.fhuitop').click(function () {
        $('body,html').animate({
            "scrollTop": 0
        }, 500);
    });
 
});