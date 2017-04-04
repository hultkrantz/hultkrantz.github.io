window.addEventListener('load', function () {
	let inputItemName = document.getElementById("inputItemName")
		, inputSize = document.getElementById("inputSize")
		, inputPrice = document.getElementById("inputPrice")
		, addItemButton = document.getElementById('addItemButton')
		, itemTable = document.getElementById('itemTable')
		, alfabeticSort = document.getElementById('alfabeticSort')
		, sizeSort = document.getElementById('sizeSort')
		, priceLowToHigh = document.getElementById('priceLowToHigh')
		, priceHighToLow = document.getElementById('priceHighToLow');
	///
	//let inputAntalResultat = document.getElementById('inputAntalResultat');
	addItemButton.addEventListener('click', function (event) {
		console.log('addItemButton pressed');
		firebase.database().ref('stock/').push({
			name: inputItemName.value
			, size: inputSize.value
			, price: inputPrice.value
		});
		console.log(name);
	});
	firebase.database().ref('stock/').on('child_added', function (snapshot, keyStone) {
		firebase.database().ref('stock/').on('child_added', function (snapshot, keyStone) {
			console.log('First time or change in database. keyStone: ' + keyStone);
			let data = snapshot.val();
			console.log('data:', data);
			addItemToTable(data);
		});

		function addItemToTable(data) {
			let tr = document.createElement('tr');
			tr.innerHTML = `<td>${data.name}</td> <td>${data.size}</td> <td>${data.price}</td> <td style="width: 50px; background-color: ${data.färg};"></td>`;
			itemTable.appendChild(tr);
		}

		function sortFunction(button, sortKey) {
			button.addEventListener('click', function (event) {
				itemTable.innerHTML = '';
				//firebase.database().ref('stock/').off('value')
				firebase.database().ref('stock/').orderByChild(sortKey).once('value', function (snapshot) {
					//firebase.database().ref('stock/').off('value')
					firebase.database().ref('stock/').orderByChild(sortKey).once('value', function (snapshot) {
						snapshot.forEach(itemRef => {
							addItemToTable(itemRef.val());
						})
					});
				})
			})
			sortFunction(alfabeticSort, 'item');
			sortFunction(sizeSort, 'size');
			sortFunction(priceLowToHigh, 'price');
			inputAntalResultat.addEventListener('keypress', function (event) {
				if (event.keyCode == 13) {
					let antal = Number(inputAntalResultat.value);
					itemTable.innerHTML = '';
					console.log('inputAntalResultat: antal=' + antal);
					if (isNaN(antal)) {
						// varna användaren
					}
					else {
						firebase.database().ref('stock/').limitToFirst(antal).once('value', function (snapshot) {
							snapshot.forEach(itemRef => {
								addAnimalToTable(itemRef.val());
							})
						});
					}
				}
			});
		}
	})
})