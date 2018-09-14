var dashboard = {
    sessionCounter : 0,
    toggleLogistics : function () {
        $("#joinee-details-outer").toggleClass("hidden");
        $("#logistics_arrangements").toggleClass("hidden");
    },

    toggle15DayChecklist : function () {
        $("#joinee-details-outer").toggleClass("hidden");
        $("#15_day_checklist").toggleClass("hidden");
    },

    toggle45DayMeeting : function () {
        $("#joinee-details-outer").toggleClass("hidden");
        $("#bhr_45_day_meeting").toggleClass("hidden");
    },

    toggle90dayMeeting : function () {
        $("#joinee-details-outer").toggleClass("hidden");
        $("#bhr_90_day_meeting").toggleClass("hidden");
    },

    toggleConfirmationStatus : function () {
        $("#joinee-details-outer").toggleClass("hidden");
        $("#confirmation_status").toggleClass("hidden");
    },

    panelCheckboxToggle : function (elem) {
        $(elem).find("input").prop("checked",!$(elem).find(".checkbox").prop("checked"));
    },

    toggleSelectAllCheckbox : function (elem) {
        $("input[name='select_individual']").prop("checked",$(elem).prop("checked"));
    },

    supervisorMonthlyFeedback : function () {
        $("#interval_feedback_outer").toggleClass("hidden");
        $("#supervisor_monthly_feedback").toggleClass("hidden");
    },

    toggleBHRBiAnnualFeedback : function () {
        $("#interval_feedback_outer").toggleClass("hidden");
        $("#BHR_Bi_annual_feedback").toggleClass("hidden");
    },

    toggleBHRAnnualFeedback : function () {
        $("#interval_feedback_outer").toggleClass("hidden");
        $("#BHR_annual_feedback").toggleClass("hidden");
    },

    roadmapSessionAdd : function () {
        var str = "<div class='col-xs-12'><div class='panel panel-default'><div class='panel-body'><div class='row'><div class='col-md-3'><div class='form-group'><label for='session_title'>Session Title</label><input class='form-control' id='session_title' value='BHR Connect'></div></div><div class='col-md-3'><div class='form-group'><label for='session_business'>Business</label><input class='form-control' id='session_business' value='Quatrro Glow'></div></div><div class='col-md-3'><div class='form-group'><label for='session_department'>Department</label><input class='form-control' id='session_department' value='Technical Solution'></div></div><div class='col-md-3'><div class='form-group'><label for='session_sub_department'>Sub Department</label><input class='form-control' id='session_sub_department' value='Technologies'></div></div></div><div class='row'><div class='col-md-2'><div class='form-group'><label for='session_band'>Band</label><input class='form-control' id='session_band' value='Band 1'></div></div><div class='col-md-2'><div class='form-group'><label for='session_meeting_with'>Meeting With</label><input class='form-control' id='session_meeting_with' value='Technical Solution'></div></div><div class='col-md-5'><div class='row'><div class='col-md-6'><div class='form-group'><label for='session_meeting_date'>Date</label><input type='date' class='form-control' id='session_meeting_date'></div></div><div class='col-md-6'><div class='form-group'><label for='session_meeting_time'>Time</label><input type='time' class='form-control' id='session_meeting_time'></div></div></div></div><div class='col-md-2'><div class='form-group'><label for='session_meeting_interval'>Interval</label><select class='form-control' id='session_meeting_interval'><option value='1'>1 Hour</option><option value='2'>2 Hours</option><option value='3'>3 Hours</option><option value='4'>4 Hours</option></select></div></div><div class='col-md-1'><button class='btn btn-danger margin-top-lg'><i class='fa fa-check'></i></button></div></div></div></div></div>";
        $("#session_blocks").append(str);
    },

    toggleDashboard : function () {
        $("#dashboard_table").toggleClass("hidden");
        $("#dashboard_graph").toggleClass("hidden");

        if(!dashboard.graph_show) {
            var ctx = document.getElementById("myChart").getContext('2d');
            var myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050],
                    datasets: [{
                        data: [86,114,106,106,107,111,133,221,783,900],
                        label: "Confirm",
                        borderColor: "#3e95cd",
                        fill: false
                    }, {
                        data: [282,350,40,502,635,809,947,1402,750,960],
                        label: "Pending",
                        borderColor: "#8e5ea2",
                        fill: false
                    }, {
                        data: [168,170,178,190,203,276,408,547,675,734],
                        label: "Feedback",
                        borderColor: "#3cba9f",
                        fill: false
                    }]
                },
                options: {
                    title: {
                        display: false
                    }
                }
            });

            var ctx1 = document.getElementById("myChart1").getContext('2d');
            var myChart1 = new Chart(ctx1, {
                type: 'line',
                data: {
                    labels: [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050],
                    datasets: [{
                        data: [86,114,106,106,107,111,133,221,783,900],
                        label: "Confirm",
                        borderColor: "#3e95cd",
                        fill: false
                    }, {
                        data: [282,350,40,502,635,809,947,1402,750,960],
                        label: "Pending",
                        borderColor: "#8e5ea2",
                        fill: false
                    }, {
                        data: [168,170,178,190,203,276,408,547,675,734],
                        label: "Feedback",
                        borderColor: "#3cba9f",
                        fill: false
                    }]
                },
                options: {
                    title: {
                        display: false
                    }
                }
            });

            var pie = document.getElementById("piechart").getContext('2d');
            var piechart = new Chart(pie, {
                type: 'doughnut',
                data: {
                    datasets: [{
                        data: [52.9,8.83,18.93,19.95],
                        backgroundColor: [
                            "#f12212",
                            "#a4412a",
                            "#8123bc",
                            "#4ccad1",
                            "#e5bbcd"
                        ],
                        label: 'BHR Meeting'
                    }],
                    labels: [
                        '52.9',
                        '8.83',
                        '18.93',
                        '19.95'
                    ]
                },
                options: {
                    responsive: true
                }
            });

            var opts = {
                angle: 0, // The span of the gauge arc
                lineWidth: 0.5, // The line thickness
                radiusScale: 1, // Relative radius
                pointer: {
                    length: 0.51, // // Relative to gauge radius
                    strokeWidth: 0.035, // The thickness
                    color: '#000000' // Fill color
                },
                limitMax: false,     // If false, max value increases automatically if value > maxValue
                limitMin: false,     // If true, the min value of the gauge will be fixed
                colorStart: '#6FADCF',   // Colors
                colorStop: '#8FC0DA',    // just experiment with them
                strokeColor: '#E0E0E0',  // to see which ones work best for you
                generateGradient: true,
                highDpiSupport: true,
                percentColors : [[0.0, "#a9d70b" ], [0.50, "#f9c802"], [1.0, "#ff0000"]],
                staticZones: [
                    {strokeStyle: "#2a5515", min: 0, max: 100}, // Red from 100 to 130
                    {strokeStyle: "#43911f", min: 100, max: 200}, // Yellow
                    {strokeStyle: "#dfd80f", min: 200, max: 300}, // Green
                    {strokeStyle: "#ff6129", min: 300, max: 400}, // Yellow
                    {strokeStyle: "#F03E3E", min: 400, max: 500}  // Red
                ]
            };
            var target = document.getElementById('foo'); // your canvas element
            var gauge = new Gauge(target).setOptions(opts); // create sexy gauge!
            gauge.maxValue = 500; // set max gauge value
            gauge.setMinValue(0);  // Prefer setter over gauge.minValue = 0
            gauge.animationSpeed = 39; // set animation speed (32 is default value)
            gauge.set(241); // set actual value

            var opts1 = {
                angle: 0, // The span of the gauge arc
                lineWidth: 0.5, // The line thickness
                radiusScale: 1, // Relative radius
                pointer: {
                    length: 0.51, // // Relative to gauge radius
                    strokeWidth: 0.035, // The thickness
                    color: '#000000' // Fill color
                },
                limitMax: false,     // If false, max value increases automatically if value > maxValue
                limitMin: false,     // If true, the min value of the gauge will be fixed
                colorStart: '#6FADCF',   // Colors
                colorStop: '#8FC0DA',    // just experiment with them
                strokeColor: '#E0E0E0',  // to see which ones work best for you
                generateGradient: true,
                highDpiSupport: true,
                percentColors : [[0.0, "#a9d70b" ], [0.50, "#f9c802"], [1.0, "#ff0000"]],
                staticZones: [
                    {strokeStyle: "#F03E3E", min: 0, max: 100},
                    {strokeStyle: "#ff6129", min: 100, max: 200},
                    {strokeStyle: "#dfd80f", min: 200, max: 300},
                    {strokeStyle: "#43911f", min: 300, max: 400},
                    {strokeStyle: "#2a5515", min: 400, max: 500}
                ]
            };
            var target1 = document.getElementById('foo1'); // your canvas element
            var gauge1 = new Gauge(target1).setOptions(opts1); // create sexy gauge!
            gauge1.maxValue = 500; // set max gauge value
            gauge1.setMinValue(0);  // Prefer setter over gauge.minValue = 0
            gauge1.animationSpeed = 39; // set animation speed (32 is default value)
            gauge1.set(430); // set actual value

            dashboard.graph_show = true;
        }
    }
};