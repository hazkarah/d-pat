module.exports = function (app) {

	var dataInjector = app.middleware.dataInjector
	var deforestation = app.controllers.deforestation;

	app.get('/service/deforestation/periods', dataInjector, deforestation.periods);
	app.get('/service/deforestation/timeseries', dataInjector, deforestation.timeseries);
	app.get('/service/deforestation/states', dataInjector, deforestation.states);
	app.get('/service/deforestation/cities', dataInjector, deforestation.cities);
	app.get('/service/deforestation/indicators', dataInjector);
	app.get('/service/deforestation/largest', dataInjector);
	app.get('/service/deforestation/info',dataInjector, deforestation.infoUTFGrid);
	app.get('/service/deforestation/illegal',dataInjector, deforestation.illegal);


}
