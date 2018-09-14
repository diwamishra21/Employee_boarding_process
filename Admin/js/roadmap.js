var roadmap = {
    openRoadmap : function (type) {
        if(type === "view"){
            $("#roadmap_arrange").addClass("hidden");
            $("#roadmap_recommend").addClass("hidden");
            $("#roadmap_view").removeClass("hidden");
        } else if (type === "arrange") {
            $("#roadmap_arrange").removeClass("hidden");
            $("#roadmap_recommend").addClass("hidden");
            $("#roadmap_view").addClass("hidden");
        } else if (type === "recommend") {
            $("#roadmap_arrange").addClass("hidden");
            $("#roadmap_recommend").removeClass("hidden");
            $("#roadmap_view").addClass("hidden");
        }
    }
};