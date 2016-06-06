	function collect_same_elements(collection_a, object_b) {
		//在此处写代码
		var arr = [];
		for (var i = 0; i < collection_a.length; i++) {
			var Array1 = collection_a[i];
			console.log(Array1);

			for (var j = 0; j < object_b.value.length; j++) {
				var Array2 = object_b.value[j];
				console.log(Array2);

				if (Array1.key == Array2) {
					arr.push(Array1.key);
					console.log(arr);
				}

			}

		}

		console.log(arr);
		return arr;

	}

	module.exports = collect_same_elements;