/*global QUnit*/

sap.ui.define([
	"gustavo/ui5-curriculum-vitae/controller/baseView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("baseView Controller");

	QUnit.test("I should test the baseView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});