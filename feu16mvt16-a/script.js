window.addEventListener('load', function() {
			let namn = document.getElementById('inputNamn');
			let familj = document.getElementById('inputFamilj');
			let antal = document.getElementById('inputAntal');
			let färg = document.getElementById('inputFärg');
			let addButton = document.getElementById('addButton');
			let tableVisaDjur = document.getElementById('tableVisaDjur');
			let btnSortNamn = document.getElementById('btnSortNamn');
			let btnSortFamilj = document.getElementById('btnSortFamilj');
			let btnSortAntal = document.getElementById('btnSortAntal');
			let btnSortFärg = document.getElementById('btnSortFärg');
			let inputAntalResultat = document.getElementById('inputAntalResultat');
			
			
			addButton.addEventListener('click', function(event) {
				console.log('Klickat lägga till djur');
				firebase.database().ref('djur/').push({
					namn: namn.value,
					familj: familj.value,
					antal: Number(antal.value),
					färg: färg.value
				});
			});
			
			firebase.database().ref('djur/').on('child_added', function(snapshot, prevChildKey) {
				console.log('Första gången eller ändring i databasen. prevChildKey: ' + prevChildKey);
				let data = snapshot.val();
				//console.log('data:', data);
				addAnimalToTable(data);
			});
			function addAnimalToTable(data) {
				let tr = document.createElement('tr');
				tr.innerHTML = `<td>${data.namn}</td> <td>${data.familj}</td> <td>${data.antal}</td> <td style="width: 50px; background-color: ${data.färg};"></td>`;
				tableVisaDjur.appendChild(tr);
			}
			
			function sortFunction(button, sortKey) {
				button.addEventListener('click', function(event) {
					tableVisaDjur.innerHTML = '';
					//firebase.database().ref('djur/').off('value')
					firebase.database().ref('djur/').orderByChild(sortKey)
					.once('value', function(snapshot) {
						snapshot.forEach( animalRef => {
							addAnimalToTable(animalRef.val());
						})
					});
				})
			}
			sortFunction(btnSortNamn, 'namn');
			sortFunction(btnSortFamilj, 'familj');
			sortFunction(btnSortAntal, 'antal');
			sortFunction(btnSortFärg, 'färg');
			
			inputAntalResultat.addEventListener('keypress', function(event) {
				if( event.keyCode == 13 ) {
					let antal = Number(inputAntalResultat.value);
					tableVisaDjur.innerHTML = '';
					console.log('inputAntalResultat: antal=' + antal);
					if( isNaN(antal) ) {
						// varna användaren
					} else {
						firebase.database().ref('djur/').limitToFirst(antal)
						.once('value', function(snapshot) {
								snapshot.forEach( animalRef => {
									addAnimalToTable(animalRef.val());
								})
						});
					}
				}
			});
		});