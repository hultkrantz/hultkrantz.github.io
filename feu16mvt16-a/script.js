window.addEventListener('load', function() {
			let comment = document.getElementById('inputComment');
			let rating = document.getElementById('inputRating');
			let antal = document.getElementById('inputAntal');
			let färg = document.getElementById('inputFärg');
			let addButton = document.getElementById('addButton');
			let tableComments = document.getElementById('tableComments');
			let btnSortNamn = document.getElementById('btnSortNamn');
			let btnSortFamilj = document.getElementById('btnSortFamilj');
			let btnSortAntal = document.getElementById('btnSortAntal');
			let btnSortFärg = document.getElementById('btnSortFärg');
			let inputAntalResultat = document.getElementById('inputAntalResultat');
			
			
			addButton.addEventListener('click', function(event) {
				console.log('Clicked to add');
				firebase.database().ref('comments/').push({
					comment: comment.value,
					rating: rating.value,
					//antal: Number(antal.value),
				});
			});
			
			firebase.database().ref('comments/').on('child_added', function(snapshot, prevChildKey) {
				console.log('Första gången eller ändring i databasen. prevChildKey: ' + prevChildKey);
				let data = snapshot.val();
				console.log('data:', data);
				addCommentToTable(data);
			});
			function addCommentToTable(data) {
				let tr = document.createElement('tr');
				tr.innerHTML = `<td>${data.comment}</td> <td>${data.rating}</td> <td>${data.antal}</td> <td style="width: 50px; background-color: ${data.färg};"></td>`;
				tableComments.appendChild(tr);
			}
			
			function sortFunction(button, sortKey) {
				button.addEventListener('click', function(event) {
					tableComments.innerHTML = '';
					//firebase.database().ref('djur/').off('value')
					firebase.database().ref('comments/').orderByChild(sortKey)
					.once('value', function(snapshot) {
						snapshot.forEach( commentRef => {
							addCommentToTable(commentRef.val());
						})
					});
				})
			}
			sortFunction(btnSortNamn, 'comment');
			sortFunction(btnSortFamilj, 'rating');
			sortFunction(btnSortAntal, 'antal');
			sortFunction(btnSortFärg, 'färg');
			
			inputAntalResultat.addEventListener('keypress', function(event) {
				if( event.keyCode == 13 ) {
					let antal = Number(inputAntalResultat.value);
					tableComments.innerHTML = '';
					console.log('inputAntalResultat: antal=' + antal);
					if( isNaN(antal) ) {
						// varna användaren
					} else {
						firebase.database().ref('comments/').limitToFirst(antal)
						.once('value', function(snapshot) {
								snapshot.forEach( commentRef => {
									addCommentToTable(commentRef.val());
								})
						});
					}
				}
			});
		});