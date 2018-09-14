var confirmation = {
    openConfirmationPanel : function (type) {
        console.log(type);

        if(type === "pending") {
            $('.confirmation-status[data-confirmation-status="pending"]').removeClass("hidden");
            $('.confirmation-status[data-confirmation-status="confirmed"]').addClass("hidden");
        } else {
            $('.confirmation-status[data-confirmation-status="pending"]').addClass("hidden");
            $('.confirmation-status[data-confirmation-status="confirmed"]').removeClass("hidden");
        }

        $("#joinee-details-outer").addClass("hidden");
        $("#confirmation_status").removeClass("hidden");
    }
};