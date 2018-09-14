var roleManagement = {
    roleManagementCheckbox : function (elem) {
        console.log($(elem).prop("checked"));
        if($(elem).prop("checked")) {
            $(elem).closest(".panel-body").find(".checkbox_add_edit, .checkbox_view").prop("checked",true);
        } else {
            $(elem).closest(".panel-body").find(".checkbox_add_edit, .checkbox_view").prop("checked",false);
        }
    }
};