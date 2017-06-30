﻿var authoringTool = authoring.controller('authoringToolController', function (
    $scope
) {

    var saveLayout = function () {
        alert("savelayout");
    };
    

    var downloadLayout = function () {
        $.ajax({
            type: "POST",
            url: "/build_v3/downloadLayout",
            data: { 'layout-v3': $('#download-layout').html() },
            success: function (data) {
                window.location.href = '/build_v3/download';
            }
        });
    };

    var downloadHtmlLayout = function () {
        $.ajax({
            type: "POST",
            url: "/build_v3/downloadLayout",
            data: { 'layout-v3': $('#download-layout').html() },
            success: function (data) {
                window.location.href = '/build_v3/downloadHtml';
            }
        });
    };

    var undoLayout = function () {

        $.ajax({
            type: "POST",
            url: "/build_v3/getPreviousLayout",
            data: {},
            success: function (data) {
                undoOperation(data);
            }
        });
    };

    var redoLayout = function () {

        $.ajax({
            type: "POST",
            url: "/build_v3/getPreviousLayout",
            data: {},
            success: function (data) {
                redoOperation(data);
            }
        });
    };

    $(document).on('hidden.bs.modal', function (e) {
        $(e.target).removeData('bs.modal');
    });

    $('body').on('click', '#continue-share-non-logged', function () {
        $('#share-not-logged').hide();
        $('#share-logged').removeClass('hide');
        $('#share-logged').show();
    });

    $('body').on('click', '#continue-download-non-logged', function () {
        $('#download-not-logged').hide();
        $('#download').removeClass('hide');
        $('#download').show();
        $('#downloadhtml').removeClass('hide');
        $('#downloadhtml').show();
        $('#download-logged').removeClass('hide');
        $('#download-logged').show();
    });

    function handleSaveLayout() {
        var e = $(".demo").html();
        if (e != window.demoHtml) {
            saveLayout();
            window.demoHtml = e
        }
    }
    function handleJsIds() {
        handleModalIds();
        handleAccordionIds();
        handleCarouselIds();
        handleTabsIds()
    }
    function handleAccordionIds() {
        var e = $(".demo #myAccordion");
        var t = randomNumber();
        var n = "panel-" + t;
        var r;
        e.attr("id", n);
        e.find(".panel").each(function (e, t) {
            r = "panel-element-" + randomNumber();
            $(t).find(".panel-title").each(function (e, t) {
                $(t).attr("data-parent", "#" + n);
                $(t).attr("href", "#" + r)
            });
            $(t).find(".panel-collapse").each(function (e, t) {
                $(t).attr("id", r)
            })
        })
    }
    function handleCarouselIds() {
        var e = $(".demo #myCarousel");
        var t = randomNumber();
        var n = "carousel-" + t;
        e.attr("id", n);
        e.find(".carousel-indicators li").each(function (e, t) {
            $(t).attr("data-target", "#" + n)
        });
        e.find(".left").attr("href", "#" + n);
        e.find(".right").attr("href", "#" + n)
    }
    function handleModalIds() {
        var e = $(".demo #myModalLink");
        var t = randomNumber();
        var n = "modal-container-" + t;
        var r = "modal-" + t;
        e.attr("id", r);
        e.attr("href", "#" + n);
        e.next().attr("id", n)
    }
    function handleTabsIds() {
        var e = $(".demo #myTabs");
        var t = randomNumber();
        var n = "tabs-" + t;
        e.attr("id", n);
        e.find(".tab-pane").each(function (e, t) {
            var n = $(t).attr("id");
            var r = "panel-" + randomNumber();
            $(t).attr("id", r);
            $(t).parent().parent().find("a[href=#" + n + "]").attr("href", "#" + r)
        })
    }
    function randomNumber() {
        return randomFromInterval(1, 1e6)
    }
    function randomFromInterval(e, t) {
        return Math.floor(Math.random() * (t - e + 1) + e)
    }
    function gridSystemGenerator() {
        $(".lyrow .preview input").bind("keyup", function () {
            var e = 0;
            var t = "";
            var n = false;
            var r = $(this).val().split(" ", 12);
            $.each(r, function (r, i) {
                if (!n) {
                    if (parseInt(i) <= 0) n = true;
                    e = e + parseInt(i);
                    t += '<div class="col-md-' + i + ' column"></div>'
                }
            });
            if (e == 12 && !n) {
                $(this).parent().next().children().html(t);
                $(this).parent().prev().show()
            } else {
                $(this).parent().prev().hide()
            }
        })
    }
    function configurationElm(e, t) {
        $(".demo").delegate(".configuration > a", "click", function (e) {
            e.preventDefault();
            var t = $(this).parent().next().next().children();
            $(this).toggleClass("active");
            t.toggleClass($(this).attr("rel"))
        });
        $(".demo").delegate(".configuration .dropdown-menu a", "click", function (e) {
            e.preventDefault();
            var t = $(this).parent().parent();
            var n = t.parent().parent().next().next().children();
            t.find("li").removeClass("active");
            $(this).parent().addClass("active");
            var r = "";
            t.find("a").each(function () {
                r += $(this).attr("rel") + " "
            });
            t.parent().removeClass("open");
            n.removeClass(r);
            n.addClass($(this).attr("rel"))
        })
    }
    function removeElm() {
        $(".demo").delegate(".remove", "click", function (e) {
            e.preventDefault();
            $(this).parent().remove();
            if (!$(".demo .lyrow").length > 0) {
                clearDemo()
            }
        })
    }
    function clearDemo() {
        $(".demo").empty()
    }
    function removeMenuClasses() {
        $("#menu-layoutit li button").removeClass("active")
    }
    function changeStructure(e, t) {
        $("#download-layout ." + e).removeClass(e).addClass(t)
    }
    function cleanHtml(e) {
        $(e).parent().append($(e).children().html())
    }
    function downloadLayoutSrc() {
        var e = "";
        $("#download-layout").children().html($(".demo").html());
        var t = $("#download-layout").children();
        t.find(".preview, .configuration, .drag, .remove").remove();
        t.find(".lyrow").addClass("removeClean");
        t.find(".box-element").addClass("removeClean");
        t.find(".lyrow .lyrow .lyrow .lyrow .lyrow .removeClean").each(function () {
            cleanHtml(this)
        });
        t.find(".lyrow .lyrow .lyrow .lyrow .removeClean").each(function () {
            cleanHtml(this)
        });
        t.find(".lyrow .lyrow .lyrow .removeClean").each(function () {
            cleanHtml(this)
        });
        t.find(".lyrow .lyrow .removeClean").each(function () {
            cleanHtml(this)
        });
        t.find(".lyrow .removeClean").each(function () {
            cleanHtml(this)
        });
        t.find(".removeClean").each(function () {
            cleanHtml(this)
        });
        t.find(".removeClean").remove();
        $("#download-layout .column").removeClass("ui-sortable");
        $("#download-layout .row-fluid").removeClass("clearfix").children().removeClass("column");
        if ($("#download-layout .container").length > 0) {
            changeStructure("row-fluid", "row")
        }
        formatSrc = $.htmlClean($("#download-layout").html(), {
            format: true,
            allowedAttributes: [
                ["id"],
                ["class"],
                ["data-toggle"],
                ["data-target"],
                ["data-parent"],
                ["role"],
                ["data-dismiss"],
                ["aria-labelledby"],
                ["aria-hidden"],
                ["data-slide-to"],
                ["data-slide"]
            ]
        });
        $("#download-layout").html(formatSrc);
        $("#downloadModal textarea").empty();
        $("#downloadModal textarea").val(formatSrc)
    }
    var currentDocument = null;
    var timerSave = 2e3;
    var demoHtml = $(".demo").html();
    $(window).resize(function () {
        $("body").css("min-height", $(window).height() - 90);
        $(".demo").css("min-height", $(window).height() - 160)
    });
    $("body").css("min-height", $(window).height() - 90);
    $(".demo").css("min-height", $(window).height() - 160);
    $(".demo, .demo .column").sortable({
        connectWith: ".column",
        opacity: .35,
        handle: ".drag"
    });
    $(".sidebar-nav .lyrow").draggable({
        connectToSortable: ".demo",
        helper: "clone",
        handle: ".drag",
        drag: function (e, t) {
            t.helper.width()
        },
        stop: function (e, t) {
            $(".demo .column").sortable({
                opacity: .35,
                connectWith: ".column"
            })
        }
    });
    $(".sidebar-nav .box").draggable({
        connectToSortable: ".column",
        helper: "clone",
        handle: ".drag",
        drag: function (e, t) {
            t.helper.width()
        },
        stop: function () {
            handleJsIds()
        }
    });
    $("[data-target='#downloadModal']").click(function (e) {
        e.preventDefault();
        downloadLayoutSrc()
    });
    $("#download").click(function () {
        downloadLayout();
        return false
    });
    $("#downloadhtml").click(function () {
        downloadHtmlLayout();
        return false
    });
    $("#edit").click(function () {
        $("body").removeClass("devpreview sourcepreview");
        $("body").addClass("edit");
        $(".demo").removeClass("preview-design");
        removeMenuClasses();
        $(this).addClass("active");
        return false
    });
    $("#clear").click(function (e) {
        e.preventDefault();
        clearDemo()
    });
    //$("#devpreview").click(function () {
    //    $("body").removeClass("edit sourcepreview");
    //    $("body").addClass("devpreview");
    //    removeMenuClasses();
    //    $(this).addClass("active");
    //    return false
    //});
    $("#sourcepreview").click(function () {
        $("body").removeClass("edit");
        $("body").addClass("devpreview sourcepreview");
        $(".demo").addClass("preview-design");
        removeMenuClasses();
        $(this).addClass("active");
        return false
    });
    $(".nav-header").click(function () {
        $(".sidebar-nav .boxes, .sidebar-nav .rows").hide();
        $(this).next().slideDown()
    });
    removeElm();
    configurationElm();
    gridSystemGenerator();

    $(".show-hide-authoring-menu").click(function () {
        $(this).toggleClass("active", function () {
            if ($(this).hasClass("active")) {
                $('.sidebar-nav').css("left", -210);
                $('.navbar-fixed-top').css("top", -50);
                $(this).text("Show Menu");
            } else {
                $(this).text("Hide Menu");
                $('.sidebar-nav').css("left", 0);
                $('.navbar-fixed-top').css("top", 0);
            }
        });
        
    });

    $(".lyrow.ui-draggable").css("width", "100%", "height", "auto");

    //$(".box.box-element.ui-draggable").draggable({
    //    connecttosortable: ".demo",
    //    handle: ".drag",
    //    stop: function () {
    //        alert("BOX ELEMENT");
    //        $(".box.box-element").css("width", "auto");
    //    }
    //});

    //$(".lyrow.ui-draggable").draggable({
    //    connecttosortable: ".demo",
    //    handle: ".drag",
    //    stop: function () {
    //        alert("lyrow ELEMENT");
    //        $(".lyrow").css("width", "100%", "height", "auto");
    //    }
    //});

    

    $('.configuration').children().find("a").removeAttr("href");

});
