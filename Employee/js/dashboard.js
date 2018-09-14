var dashboard = {
    sessionCounter : 0,
    toggleLogistics : function (type) {
        $(".sidebar-section").addClass("hidden");
        $("#sidebar_header").html("Logistics");
        if(type === "completed") {
            $("#logistics_completed").removeClass("hidden");
        } else {
            $("#logistics_pending").removeClass("hidden");
        }
    },

    toggle15DayChecklist : function (type) {
        $(".sidebar-section").addClass("hidden");
        $("#sidebar_header").html("15 Day Checklist");
        if(type === "completed") {
            $("#15_day_checklist_completed").removeClass("hidden");
        } else {
            $("#15_day_checklist_pending").removeClass("hidden");
        }
    },

    toggle45DayMeeting : function (type) {
        $(".sidebar-section").addClass("hidden");
        $("#sidebar_header").html("BHR 45 Day Meeting");
        if(type === "completed") {
            $("#bhr_45_day_completed").removeClass("hidden");
        } else {
            $("#bhr_45_day_pending").removeClass("hidden");
        }
    },

    toggle90DayMeeting : function (type) {
        $(".sidebar-section").addClass("hidden");
        $("#sidebar_header").html("BHR 90 Day Meeting");
        if(type === "completed") {
            $("#bhr_90_day_completed").removeClass("hidden");
        } else {
            $("#bhr_90_day_pending").removeClass("hidden");
        }
    },

    toggleConfirmationStatus : function (type) {
        $(".sidebar-section").addClass("hidden");
        $("#sidebar_header").html("Confirmation Status");
        if(type === "completed") {
            $("#confirmation_status_completed").removeClass("hidden");
        } else {
            $("#confirmation_status_pending").removeClass("hidden");
        }
    },

    panelCheckboxToggle : function (elem) {
        $(elem).find("input").prop("checked",!$(elem).find(".checkbox").prop("checked"));
    },

    toggleSelectAllCheckbox : function (elem) {
        $("input[name='select_individual']").prop("checked",$(elem).prop("checked"));
    },

    supervisorMonthlyFeedback : function (type) {
        $(".sidebar-section").addClass("hidden");
        $("#sidebar_header").html("Supervisor Monthly Feedback");
        if(type === "completed") {
            $("#supervisor_monthly_completed").removeClass("hidden");
        } else {
            $("#supervisor_monthly_pending").removeClass("hidden");
        }
    },

    toggleBHRBiMonthlyFeedback : function (type) {
        $(".sidebar-section").addClass("hidden");
        $("#sidebar_header").html("BHR Bi Monthly Feedback");
        if(type === "completed") {
            $("#bhr_bi_monthly_completed").removeClass("hidden");
        } else {
            $("#bhr_bi_monthly_pending").removeClass("hidden");
        }
    },

    toggleBHRBiAnnualFeedback : function (type) {
        $(".sidebar-section").addClass("hidden");
        $("#sidebar_header").html("BHR Bi Annual Feedback");
        if(type === "completed") {
            $("#bhr_bi_annual_completed").removeClass("hidden");
        } else {
            $("#bhr_bi_annual_pending").removeClass("hidden");
        }
    },

    toggleBHRAnnualFeedback : function (type) {
        $(".sidebar-section").addClass("hidden");
        $("#sidebar_header").html("BHR Annual Feedback");
        if(type === "completed") {
            $("#bhr_annual_completed").removeClass("hidden");
        } else {
            $("#bhr_annual_pending").removeClass("hidden");
        }
    },

    toggleRoadmap : function (type) {
        $(".sidebar-section").addClass("hidden");
        $("#sidebar_header").html("Roadmap Scheduled");
        if(type === "arranged") {
            $("#roadmap_arranged").removeClass("hidden");
        } else if(type === "completed") {
            $("#roadmap_completed").removeClass("hidden");
        } else {
            $("#roadmap_pending").removeClass("hidden");
        }
    },

    roadmapSessionAdd : function () {
        var str = "<div class='col-xs-12'><div class='panel panel-default'><div class='panel-body'><div class='row'><div class='col-md-3'><div class='form-group'><label for='session_title'>Session Title</label><input class='form-control' id='session_title' value='BHR Connect'></div></div><div class='col-md-3'><div class='form-group'><label for='session_business'>Business</label><input class='form-control' id='session_business' value='Quatrro Glow'></div></div><div class='col-md-3'><div class='form-group'><label for='session_department'>Department</label><input class='form-control' id='session_department' value='Technical Solution'></div></div><div class='col-md-3'><div class='form-group'><label for='session_sub_department'>Sub Department</label><input class='form-control' id='session_sub_department' value='Technologies'></div></div></div><div class='row'><div class='col-md-2'><div class='form-group'><label for='session_band'>Band</label><input class='form-control' id='session_band' value='Band 1'></div></div><div class='col-md-2'><div class='form-group'><label for='session_meeting_with'>Meeting With</label><input class='form-control' id='session_meeting_with' value='Technical Solution'></div></div><div class='col-md-5'><div class='row'><div class='col-md-6'><div class='form-group'><label for='session_meeting_date'>Date</label><input type='date' class='form-control' id='session_meeting_date'></div></div><div class='col-md-6'><div class='form-group'><label for='session_meeting_time'>Time</label><input type='time' class='form-control' id='session_meeting_time'></div></div></div></div><div class='col-md-2'><div class='form-group'><label for='session_meeting_interval'>Interval</label><select class='form-control' id='session_meeting_interval'><option value='1'>1 Hour</option><option value='2'>2 Hours</option><option value='3'>3 Hours</option><option value='4'>4 Hours</option></select></div></div><div class='col-md-1'><button class='btn btn-danger margin-top-lg'><i class='fa fa-check'></i></button></div></div></div></div></div>";
        $("#session_blocks").append(str);
    }
};