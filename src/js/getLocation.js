/**
 * Created by Alex on 2016/11/7.
 */



	var getLocation = function (callback) {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(function (position) {
				var latitude = position.coords.latitude;
				var longitude = position.coords.longitude;
				getCity(latitude, longitude, function (err, data) {
					callback (null, data)
				})
			})
		}
		else{
			callback('no support', null)
		}
	}


	var getCity = function (latitude, longitude, callback) {
		$.ajax({
			url: 'http://api.map.baidu.com/geocoder/v2/?ak=btsVVWf0TM1zUBEbzFz6QqWF&callback=renderReverse&location=' + latitude + ',' + longitude + '&output=json&pois=1',
			type: "get",
			dataType: "jsonp",
			jsonp: "callback",
			success: function (data) {
				var province = data.result.addressComponent.province;
				var cityname = (data.result.addressComponent.city);
				var district = data.result.addressComponent.district;
				callback(null, {
					province: province,
					city: cityname,
					district: district
				})
			},
			error: function (error) {
				console.log(error)
			}
		});
	}
