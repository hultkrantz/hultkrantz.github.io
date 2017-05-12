window.addEventListener('load', function () {
	let inputItemName = document.getElementById("inputItemName")
		, inputQuantity = document.getElementById("inputQuantity")
		, inputPrice = document.getElementById("inputPrice")
		, addItemButton = document.getElementById('addItemButton')
		, itemTable = document.getElementById('itemTable')
		, alfabeticSort = document.getElementById('alfabeticSort')
		, quantitySort = document.getElementById('quantitySort')
		, priceLowToHigh = document.getElementById('priceLowToHigh')
		, priceHighToLow = document.getElementById('priceHighToLow')
		, numberOfViews = document.getElementById("numberOfViews")
		, selectSort = document.getElementById("selectSort");
	///
	//let inputAntalResultat = document.getElementById('inputAntalResultat');
	addItemButton.addEventListener('click', function (event) {
		console.log('addItemButton pressed');
		if(inputItemName.value === "" ||inputPrice.value === "" || inputQuantity.value === ""){
			alert("Input empty")
		} else {
		firebase.database().ref('stock/').push({
			item: inputItemName.value
			, quantity: Number(inputQuantity.value)
			, price: Number(inputPrice.value)
			
		});
			}
	});
			firebase.database().ref('stock/').on('child_added', function (snapshot, keyStone) {
				let data = snapshot.val();
				addItemToTable(data);
			});

			function addItemToTable(data) {
				let tr = document.createElement('tr');
				tr.innerHTML = `<td>${data.item}</td> <td>${data.quantity}</td> <td>${data.price}</td>`;
				itemTable.appendChild(tr);
			}

			function sortFunction(button, sortKey) {
				button.addEventListener('click', function (event) {
					itemTable.innerHTML = '';
						//firebase.database().ref('stock/').off('value')
					firebase.database().ref('stock/').orderByChild(sortKey).once('value', function (snapshot) {
						snapshot.forEach(itemRef => {
							addItemToTable(itemRef.val());
						})
					});
				})
			}

			sortFunction(alfabeticSort, 'item');
			sortFunction(quantitySort, 'quantity');
			sortFunction(priceLowToHigh, 'price');
			numberOfViews.addEventListener('keypress', function (event) {
				if (event.keyCode == 13) {
					let viewNumber = Number(numberOfViews.value);
					itemTable.innerHTML = '';
					console.log('numberOfViews is ' + viewNumber);
					if (isNaN(viewNumber)) {
						alter("Number of views must be numbers only")
					}
					else {
						firebase.database().ref('stock/').limitToFirst(viewNumber).once('value', function (snapshot) {
							snapshot.forEach(itemRef => {
								addItemToTable(itemRef.val());
							})
						});
					}
				
			}
		});
	});