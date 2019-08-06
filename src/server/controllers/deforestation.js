var fs = require('fs');

module.exports = function(app){
	
	var Internal = {}
	var Controller = {}

	Controller.periods = function(request, response) {
		
		var queryResult = request.queryResult

		var result = []
    var years = []

    queryResult.rows.forEach(function(row) {
    	if (row.classname.startsWith('D')){
    		years.push(Number(row.classname.slice(2)))
    	}
    })

    for(var i=0; i < years.length-1; i++) {
    	result.push({
    		startYear: years[i+1],
    		endYear: years[i],
    		label: years[i+1] + '/' + years[i]
    	})
    }

		response.send(result)
    response.end();

	}

	Controller.timeseries = function(request, response) {

		var queryResult = request.queryResult
		var indicatorYear = Number(request.param('year', 2018));;

		var anthropicArea = 0
		var deforestationArea = 0

		var result = []
		var resultByYear = {}

		queryResult.rows.forEach(function(row) {
			
			var year = Number(row['year'])
			var area = Number(row['areamunkm'])
			
			if(year > 2000) {
				if (!resultByYear[year])
					resultByYear[year] = 0.0
				
				resultByYear[year] += area

			} else {
				anthropicArea += area
			}

		})

		for (i=2001; i < 2012; i = i + 2){
			resultByYear[i] = resultByYear[i+1] / 2
			resultByYear[i+1] = resultByYear[i+1] / 2
		}

		var series = []

		for(var year in resultByYear) {

			series.push({
				'name': year,
				'value': resultByYear[year],
				'year': year
			})

			if(year < indicatorYear) {
				anthropicArea += resultByYear[year]
			} else if(year == (indicatorYear)) {
				deforestationArea = resultByYear[year]
			}
		}

		result.push({
			name: "Área desmatada",
			series: series,
			indicator: {
				anthropic: anthropicArea,
				deforestation: deforestationArea,
				cerrado: 2045064
			}
		})

	  response.send(result)
		response.end()

	}

	Controller.states = function(request, response) {
		
		var year = Number(request.param('year', 2017));

		var queryResult = request.queryResult

		var resultBySource = {
			prodes_amz: {},
			prodes_cerrado: {}
		}

		queryResult.rows.forEach(function(row) {
			region = row['region']
			source = row['source']
			if(region) {
				if (!resultBySource[region])
					resultBySource[source][region] = 0.0
				
				resultBySource[source][region] += Number(row['areamunkm'])
			}

		})

		var regionResult = []

		for(var region in resultBySource['prodes_cerrado']) {
			if(resultBySource['prodes_amz'] && resultBySource['prodes_amz'][region] && year != 2008) {
				resultBySource['prodes_cerrado'][region] += resultBySource['prodes_amz'][region]
			}

			regionResult.push({
				'name': region,
				'value': resultBySource['prodes_cerrado'][region],
			})
		}

		response.send(regionResult)
		response.end()

	}

	Controller.cities = function(request, response) {

		var queryResult = request.queryResult

		var index = 1;
		for(var i=0; i < 10; i++) {
			queryResult.rows[i].index = index++ + 'º'
			queryResult.rows[i].value = Number(queryResult.rows[i].value)
		}
		
		response.send(queryResult.rows)
		response.end()

	}

	Controller.largest = function(request, response) {

		var queryResult = request.queryResult
		
		response.send(queryResult.rows[0])
		response.end()

	}

	return Controller;
}