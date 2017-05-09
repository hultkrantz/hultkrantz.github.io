let req = new XMLHttpRequest();
req.onreadystatechange = function(event) {
    console.log("readyState:" + req.readyState);
    console.log("status:" + req.status);
    console.log("responseText:" + req.responseText);
    if( req.readyState == 4 )
        console.log('- success!');
	
};
req.open('GET', 'https://www.yr.no/sted/Sverige/V%C3%A4stra_G%C3%B6taland/G%C3%B6teborg/forecast.xml');
req.send();
