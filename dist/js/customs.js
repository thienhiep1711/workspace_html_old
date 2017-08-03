//Validate contact form
$(document).ready(function () {
    $("#frmContact").validate({
        rules: {
            ctName: {
                required: true
            },
            ctEmail: {
                required: true,
                email: true,
            },
            ctPhone: {
                required: true,
                minlength: 10,
                maxlength: 12,
                number: true,
            },
            ctAddress: {
                required: true
            },
            ctContent: {
                required: true
            },
            ctCapcha: {
                required: true
            },
        },
        messages: {
            ctName: {
                required: "Nhập Tên Của Bạn !",
            },
            ctAddress: {
                required: "Nhập địa chỉ của bạn !",
            },
            ctEmail: {
                required: "Email không được để trống",
                email: "Email không đúng định dạng"
            },
            ctPhone: {
                required: "Bạn cần nhập Số điện thoại",
                minlength: "Số điện thoại tối thiểu 10 số",
                maxlength: "Số điện thoại tối đa 12 số",
                number: "Bạn cần nhập chữ số"
            },
            ctContent: {
                required: "Nhập nội dung !",
            },
            ctCapcha: {
                required: "Nhập mã bảo mật !",
            },
        },
        submitHandler: function () {
            form.submit();
        },
    });
});

$(document).ready(function () {
    $("#frmRegister").validate({
        rules: {
            rgName: {
                required: true
            },
            rgEmail: {
                required: true,
                email: true,
            },
            rgPhone: {
                required: true,
                minlength: 10,
                maxlength: 12,
                number: true,
            },
            rgAddress: {
                required: true,
            },
            rgContent: {
                required: true
            },
            rgCapcha: {
                required: true
            },
        },
        messages: {
            rgName: {
                required: "Nhập Tên Của Bạn !",
            },
            rgAddress: {
                required: "Nhập địa chỉ của bạn !",
            },
            rgEmail: {
                required: "Email không được để trống",
                email: "Email không đúng định dạng"
            },
            rgPhone: {
                required: "Bạn cần nhập Số điện thoại",
                minlength: "Số điện thoại tối thiểu 10 số",
                maxlength: "Số điện thoại tối đa 12 số",
                number: "Bạn cần nhập chữ số"
            },
            rgContent: {
                required: "Nhập nội dung !",
            },
            rgCapcha: {
                required: "Nhập mã bảo mật !",
            },
        },
        submitHandler: function () {
            $.fancybox.open({
                src: '#popupThanks',
                type: 'inline',
                ////afterShow: function () {
                ////    setTimeout(function () {
                ////        $.fancybox.close();
                ////    }, 2000);
                ////},
            });

        },
    });

});

//Validate cart form
$(document).ready(function () {
    $("#frmPaymentCart").validate({
        rules: {
            cartName: {
                required: true
            },
            cartEmail: {
                required: true,
                email: true,
            },
            cartPhone: {
                required: true,
                minlength: 10,
                maxlength: 12,
                number: true,
            },
            cartAddress: {
                required: true
            },
            cartContent: {
                required: true
            },

            //ctCapcha: {
            //    required: true
            //},
        },
        messages: {
            cartName: {
                required: "Nhập Tên Của Bạn !",
            },

            cartEmail: {
                required: "Email không được để trống",
                email: "Email không đúng định dạng"
            },
            cartPhone: {
                required: "Bạn cần nhập Số điện thoại",
                minlength: "Số điện thoại tối thiểu 10 số",
                maxlength: "Số điện thoại tối đa 12 số",
                number: "Bạn cần nhập chữ số"
            },
            cartAddress: {
                required: "Nhập địa chỉ của bạn !",
            },
            cartContent: {
                required: "Nhập nội dung đặt hàng!",
            },
            //ctCapcha: {
            //    required: "Nhập mã bảo mật !",
            //},
        },
        submitHandler: function () {
            form.submit();
        },
    });
});

//---------- Detect Device
var isTouchDevice = 'ontouchstart' in window || 'onmsgesturechange' in window;
var isDesktop = $(window).width() != 0 && !isTouchDevice ? true : false;
var isTouchIE = navigator.userAgent.toLowerCase().indexOf('msie') != -1 && navigator.msMaxTouchPoints > 0;
var isIE11 = !!window.MSStream;
var isiPad = navigator.userAgent.indexOf('iPad') != -1;
var isiPhone = navigator.userAgent.indexOf('iPhone') != -1;
var isiPod = navigator.userAgent.indexOf('iPod') != -1;
var isAndroid = navigator.userAgent.indexOf('Android') != -1;
var isIE = navigator.userAgent.toLowerCase().indexOf('msie') != -1 && $(window).width() != 0;
var isChrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
var isSafari = navigator.userAgent.toLowerCase().indexOf('safari') > -1;


$(document).ready(function () {
    var overlay = $(".sidebar-overlay");
    var sidebar = $("#sidebar");
    var wrapper = $("#wrapper");
    var iconSidebar = $("#sidebar-icon");

    $("#sidebar-toggle").on('click', function () {
        iconSidebar.toggleClass("active");
        sidebar.toggleClass("open");
        wrapper.toggleClass("open-sidebar");
        overlay.toggleClass("active");
    });
    overlay.on('click', function () {
        $(this).removeClass('active');
        sidebar.removeClass('open');
        wrapper.removeClass('open-sidebar');
        iconSidebar.removeClass("active");
    });

    if ($(".nav-mobie").length) {
        $('.nav-mobie li.has-sub>.a-open-down').on('click', function () {
            $(this).removeAttr('href');
            var element = $(this).parent('li');
            if (element.hasClass('open')) {
                element.removeClass('open');
                element.find('li').removeClass('open');
                element.find('ul').slideUp();
            }
            else {
                element.addClass('open');
                element.children('ul').slideDown();
                element.siblings('li').children('ul').slideUp();
                element.siblings('li').removeClass('open');
                element.siblings('li').find('li').removeClass('open');
                element.siblings('li').find('ul').slideUp();
            }
        });
    }
});

// ----------- Check Device customs
$(document).ready(function () {
    if (!isTouchDevice) {

    }
    if (isDesktop) {

    }
    if (isiPhone) {

    }
    if (isiPad) {

    }
});

$("img.lazyImg").lazyload({
    effect: "fadeIn"
});

function mMenu() {
    var $menu = $("#mainMenu").clone();
    $menu.attr("id", "my-mobile-menu");
    $menu.mmenu({
        extensions: ["theme-dark"]
    });
};

function searchMobie() {
    var hHeaderMobie = $('#header-sidebar').height();
    var overlayPage = $('#overlay');
    $(document).ready(function () {
        $('.button-call-search').on('click', function () {
            $(".boxMobieSearch").addClass("open");
            overlayPage.fadeIn();
            $('#iptSearchMobie').blur(function () {
                $('#iptSearchMobie').focus();
            });
        });
        $('.bt-close-search-mb').on('click', function () {
            $(".boxMobieSearch").removeClass("open");
            overlayPage.fadeOut();
        });
        overlayPage.on('click', function () {
            $(".boxMobieSearch").removeClass("open");
            overlayPage.fadeOut();
        });

    });
};

$(function cusScrollTop() {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('#scrollTop').fadeIn(200);
        } else {
            $('#scrollTop').fadeOut(200);
        }
    });
    $('#scrollTop').click(function (event) {
        event.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 300);

    });
});



function component() {

};



function afterLoad() {
    $("#loading-wrap").fadeOut(500);
};


function ResizeWindows() {
    var Yheight = $(window).height();
    var Xwidth = $(window).width();
    var Portrait = $(window).height() > $(window).width();
    var Landscape = $(window).height() <= $(window).width();

    if (Xwidth < 800) {

        //Search mobie 
        searchMobie();

        if ($(".js-mmenu").length != 0) {
            mMenu();
        };
    };

    if (Xwidth > 800) {

    };
};



window.onorientationchange = ResizeWindows;
$(window).resize(function () {
    ResizeWindows();
});
ResizeWindows();

function Done() {
    ResizeWindows(),
    component()
};

$(document).ready(function () {
    Done();
});

$(document).ready(function () {
    $("#js-slider-main").owlCarousel({
        nav: true,
        navText: ["<i class='icon ion-ios-arrow-left'></i>", "<i class='icon ion-ios-arrow-right'></i>"],
        items: 1,
        lazyLoad: true,
        autoHeight: true,
        loop: true,
    });
});

$(document).ready(function () {
    $("#js-slider-carousel").owlCarousel({
        nav: true,
        navText: ["<i class='icon ion-ios-arrow-left'></i>", "<i class='icon ion-ios-arrow-right'></i>"],
        items: 6,
        lazyLoad: true,
        autoHeight: true,
        loop: true,
        margin: 10,
        responsive: {
            0: {
                items: 2,
                nav: false,
                dots: false,
            },
            480: {
                items: 3,
            },
            768: {
                items: 5,
            },
            1024: {
                items: 5,
            },
            1280: {
                items: 6,
            }
        }
    });
});

$(document).ready(function () {
    $(".js-sld-picture").owlCarousel({
        nav: true,
        navText: ["<i class='icon ion-ios-arrow-left'></i>", "<i class='icon ion-ios-arrow-right'></i>"],
        items: 5,
        lazyLoad: true,
        autoHeight: true,
        loop: false,
        margin: 10,
        dots:false,
        responsive: {
            0: {
                items: 2,
                nav: false,
                dots: false,
            },
            480: {
                items: 3,
            },
            768: {
                items: 5,
            },
            1024: {
                items: 5,
            },
            1280: {
                items: 5,
            }
        }
    });
});

$(document).ready(function () {
    var sync1 = $("#js-slider-views");
    var sync2 = $("#js-slider-thubs");
    var slidesPerPage = 5; //globaly define number of elements per page
    var syncedSecondary = true;

    sync1.owlCarousel({
        items: 1,
        nav: true,
        autoplay: false,
        lazyLoad: true,
        dots: false,
        loop: true,
        responsiveRefreshRate: 200,
        navText: ["<i class='icon ion-ios-arrow-left'></i>", "<i class='icon ion-ios-arrow-right'></i>"],
    }).on('changed.owl.carousel', syncPosition);

    sync2.on('initialized.owl.carousel', function () {
        sync2.find(".owl-item").eq(0).addClass("current");
    }).owlCarousel({
        items: slidesPerPage,
        dots: false,
        nav: true,
        lazyLoad: true,
        margin: 10,
        navText: ["<i class='icon ion-ios-arrow-left'></i>", "<i class='icon ion-ios-arrow-right'></i>"],
        slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
        responsiveRefreshRate: 100
    }).on('changed.owl.carousel', syncPosition2);

    function syncPosition(el) {
        //if you set loop to false, you have to restore this next line
        //var current = el.item.index;

        //if you disable loop you have to comment this block
        var count = el.item.count - 1;
        var current = Math.round(el.item.index - (el.item.count / 2) - .5);

        if (current < 0) {
            current = count;
        }
        if (current > count) {
            current = 0;
        }

        //end block

        sync2
          .find(".owl-item")
          .removeClass("current")
          .eq(current)
          .addClass("current");
        var onscreen = sync2.find('.owl-item.active').length - 1;
        var start = sync2.find('.owl-item.active').first().index();
        var end = sync2.find('.owl-item.active').last().index();

        if (current > end) {
            sync2.data('owl.carousel').to(current, 100, true);
        }
        if (current < start) {
            sync2.data('owl.carousel').to(current - onscreen, 100, true);
        }
    }

    function syncPosition2(el) {
        if (syncedSecondary) {
            var number = el.item.index;
            sync1.data('owl.carousel').to(number, 100, true);
        }
    }

    sync2.on("click", ".owl-item", function (e) {
        e.preventDefault();
        var number = $(this).index();
        sync1.data('owl.carousel').to(number, 300, true);
    });
});


//Mansory Fancy Isotope
//function masonry() {
//    var g = $(".js-mansory");
//    g.masonry({
//        itemSelector: ".item",
//        percentPosition: true,
//    }), g.imagesLoaded().progress(function () {
//        g.masonry("layout")
//    }), g.on("layoutComplete", Waypoint.refreshAll());
//};
//function navFilter() {
//    var n = $("#menu-mansory");
//    n.on("click", "a", function (b) {
//        b.preventDefault();
//        var e = $($(this).parents("ul").data("filter-grid")),
//            f = $(this).attr("data-filter");
//        return e.isotope({
//            filter: f
//        }), $(this).parents("ul").find(".active").removeClass("active"), $(this).parent("li").addClass("active"), !1
//    })
//}

//masonry();
//navFilter();

function fancyGallery() {
    $('.item-fancybox').on('click', function () {
        var visibleLinks = $('.item-fancybox:visible');
        $.fancybox.open(visibleLinks, {
            infobar: true,
            transitionEffect: "tube",
            caption: function (instance, item) {
                return $(this).find('.caption').html();

            }
        }, visibleLinks.index(this));
        return false;
    });
}
fancyGallery();

//Mansory Fancy Isotope Lazyload
if ($(".js-mansory").length != 0) {
    var i = $('.js-mansory');
    var n = $("#menu-mansory");
    $("img.lazyMansory").lazyload({
        effect: 'fadeIn',
        effectspeed: 500,
        threshold: 200,
        load: function () {
            i.isotope({
                itemSelector: '.item',
                percentPosition: true,
                masonry: {},

            }).imagesLoaded(function () {
                i.masonry();
            });
            n.on("click", "a", function (b) {
                b.preventDefault();
                var e = $($(this).parents("ul").data("filter-grid")),
                f = $(this).attr("data-filter");
                return e.isotope({
                    filter: f
                }), $(this).parents("ul").find(".active").removeClass("active"), $(this).parent("li").addClass("active"), !1
            })
        }
    });
}