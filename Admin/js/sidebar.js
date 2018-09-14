$(document).ready(function() {
    // show sidebar and overlay
    function showSidebar(type) {
        sidebar.css('margin-right', '0');

        overlay.show(0, function() {
            overlay.fadeTo('500', 0.7);
            body.css("overflow","hidden");
        });

        if(type === "roadmap") {
            $("#roadmap_tab").tab("show");
        } else if (type === "logistics") {
            dashboard.toggleLogistics();
        }
    }

    // hide sidebar and overlay
    function hideSidebar() {
        sidebar.css('margin-right', sidebar.width() * -1 + 'px');

        overlay.fadeTo('500', 0, function() {
            overlay.hide();
            body.css("overflow","scroll");
        });
    }

    // selectors
    var sidebar = $('[data-sidebar]');
    var button = $('[data-sidebar-button]');
    var overlay = $('[data-sidebar-overlay]');
    var body = $("body");

    // add height to content area
    overlay.parent().css('min-height', 'inherit');

    // hide sidebar on load
    sidebar.css('margin-right', sidebar.width() * -1 + 'px');

    sidebar.show(0, function() {
        sidebar.css('transition', 'all 0.5s ease');
    });

    // toggle sidebar on click
    button.click(function(elem) {
        var type = $(elem.currentTarget).attr("data-panel-type");
        if (overlay.is(':visible')) {
            hideSidebar();
        } else {
            showSidebar(type);
        }

        return false;
    });

    // hide sidebar on overlay click
    overlay.click(function() {
        hideSidebar();
    });
});