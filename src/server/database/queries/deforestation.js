module.exports = function(app) {

	var Internal = {}
	var Query = {};

	Query.defaultParams = {
		'year': 2017
	}

	Internal.regionFilter = function(type, region) {
		if (type == 'city')
  		return " AND county = ${region}"
  	else if (type == 'state')
  		return "AND uf = ${region}"
  	else
  		return ''
	}

	Query.largest = function() {
		return "SELECT view_date,source,classname,areamunkm,county,uf,sucept_desmat,sucept_desmat_peq,sucept_desmat_grd,bfm_pct,year " +
		" FROM prodes_cerrado WHERE year = ${year}" +
		" ORDER BY areamunkm DESC"
	}

	Query.periods = function() {
		return "SELECT DISTINCT classname FROM prodes_cerrado ORDER BY classname DESC";
	}

	Query.indicators = function(params) {

		var type = params['type']

		return 	" SELECT classname, source, SUM(areamunkm) as areamunkm " +
						" FROM prodes_cerrado " +
						" WHERE classname != 'AGUA' " + Internal.regionFilter(type) +
						" GROUP BY 1,2 " +
						" ORDER BY classname ASC;";
	}

	Query.timeseries = function(params) {

		var type = params['type']

		return " SELECT year, 'prodes_cerrado' source, SUM(areamunkm) as areamunkm " +
								" FROM prodes_cerrado " +
								" WHERE year IS NOT NULL " + Internal.regionFilter(type) +
								" GROUP BY 1;";
	}

	Query.states = function() {
		return " SELECT UPPER(uf) AS region, 'prodes_cerrado' source, SUM(areamunkm) as areamunkm " +
								" FROM prodes_cerrado " +
								" WHERE year = ${year} " + 
								" GROUP BY 1,2 " +
								" ORDER BY 3 DESC;";
	}

	Query.cities = function(params) {
		
		var year = params['year']
		var type = params['type']

		return 	" SELECT county AS name, UPPER(uf) as uf," +
							( Number(year) < 2013 ? "SUM(areamunkm)/2" : "SUM(areamunkm)" )  + " as value "+
						" FROM prodes_cerrado " +
						" WHERE year = ${year} AND areamunkm > 0" +
							Internal.regionFilter(type) +
						" GROUP BY 1,2 " +
						" ORDER BY 3 DESC" +
						" LIMIT 10;";
	}

	return Query;

}