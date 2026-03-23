sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
], (Controller, JSONModel) => {
    "use strict";

    return Controller.extend("demo.controller.View1", {
        onInit() {
            var oViewModel = new JSONModel({
              'ClaimDetails':{
                CLMTY:''
              }
            });
            this.getView().setModel(oViewModel, "worklistView");
        }
    });
});