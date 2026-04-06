/*global QUnit*/

sap.ui.define([
	"demo/controller/View1.controller"
], function (Controller) {
	"use strict";

	QUnit.module("View1 Controller");

	QUnit.test("I should test the View1 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
		
	});
	  QUnit.test("Custom function test", function(assert) {
        // Example: testing a formatting function
        var sResult = oAppController.formatDate(new Date("2024-01-15"));
        assert.strictEqual(sResult, "15.01.2024", "Date formatted correctly");
    });

});
