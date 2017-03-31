window.addEventListener('load', function () {
	let addItemButton = document.getElementById('addItemButton');
	let itemTable = document.getElementById('itemTable');
	let alfabeticSort = document.getElementById('alfabeticSort');
	let sizeSort = document.getElementById('sizeSort');
	let priceLowToHigh = document.getElementById('priceLowToHigh');
	let priceHighToLow = document.getElementById('priceHighToLow');
	//let inputAntalResultat = document.getElementById('inputAntalResultat');
	addItemButton.addEventListener('click', function (event) {
		console.log('addItemButton pressed');
		firebase.database().ref('stock/').push({
			namn: namn.value
			, familj: familj.value
			, antal: Number(antal.value)
			, färg: färg.value
		});
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
		tr.innerHTML = `<td>${data.namn}</td> <td>${data.familj}</td> <td>${data.antal}</td> <td style="width: 50px; background-color: ${data.färg};"></td>`;
		tableVisaDjur.appendChild(tr);
	}

	function sortFunction(button, sortKey) {
		button.addEventListener('click', function (event) {
			tableVisaDjur.innerHTML = '';
			//firebase.database().ref('stock/').off('value')
			firebase.database().ref('stock/').orderByChild(sortKey).once('value', function (snapshot) {
			//firebase.database().ref('stock/').off('value')
			firebase.database().ref('stock/').orderByChild(sortKey).once('value', function (snapshot) {
				snapshot.forEach(animalRef => {
					addAnimalToTable(animalRef.val());
				})
			});
		})
	}
	sortFunction(alfabeticSort, 'namn');
	sortFunction(sizeSort, 'familj');
	sortFunction(priceLowToHigh, 'antal');
	sortFunction(priceHighToLow, 'färg');
	inputAntalResultat.addEventListener('keypress', function (event) {
		if (event.keyCode == 13) {
			let antal = Number(inputAntalResultat.value);
			tableVisaDjur.innerHTML = '';
			console.log('inputAntalResultat: antal=' + antal);
			if (isNaN(antal)) {
				// varna användaren
			}
			else {
				firebase.database().ref('stock/').limitToFirst(antal).once('value', function (snapshot) {
					snapshot.forEach(animalRef => {
						addAnimalToTable(animalRef.val());
					})
				});
			}
		}
	});
});