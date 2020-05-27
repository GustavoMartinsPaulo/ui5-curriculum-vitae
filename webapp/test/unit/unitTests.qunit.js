/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"gustavo/ui5-curriculum-vitae/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});