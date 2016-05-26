	function collect_same_elements(collection_a, object_b) {
		//在此处写代码
		var arr = new Array();
		for (var i = 0; i < collection_a.length; i++) {
			console.log(collection_a.length + "2222");
			var oneA = collection_a[i];
			console.log(oneA);

			for (var j = 0; j < object_b.value.length; j++) {
				var oneB = object_b.value[j];
				console.log(oneB);

				if (oneA.key == oneB) {
					arr.push(oneA.key);
					console.log(arr);
				}

			}

		}

		console.log(arr);
		return arr;

	}

	module.exports = collect_same_elements;