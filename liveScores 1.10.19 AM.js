// liveScores.js

document.getElementById('getLiveScoresBtn').addEventListener('click', async () =>{
	const url = 'https://sportapi7.p.rapidapi.com/api/v1/sport/football/events/live';
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '6478bfe6admsh49919df3430b8eap11453cjsn51495a2a82bb',
			'X-RapidAPI-Host': 'sportapi7.p.rapidapi.com'
		}
	};
	
	try {
		const response = await fetch(url, options);
		const result = await response.json();
		console.log(result);
	} catch (error) {
		console.error(error);
	}});