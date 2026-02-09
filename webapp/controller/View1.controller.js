sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
], (Controller, JSONModel) => {
    "use strict";

    return Controller.extend("demo.controller.View1", {
        onInit() {
            var worklist = new JSONModel({
                "sKey": ""
            });
            this.oView.setModel(worklist, "worklistView");
        }
    });
});