$(document).ready(function() {
    $(".btn-watch-live").click(function() {
        const apiKey = '6478bfe6admsh49919df3430b8eap11453cjsn51495a2a82bb'; // Replace with your API key from sportapi7.p.rapidapi.com
        const competitionId = 2021; // Copa America 2021 competition ID

        $.get(`https://sportapi7.p.rapidapi.com/v2/fixtures/live?competition_id=${competitionId}`, {
            apiKey: apiKey
        }, function(data) {
            if (data.response[0]) {
                const liveMatch = data.response[0];
                console.log(liveMatch);
                const liveScore = `
                    <div class="bg-white p-5 rounded-xl shadow-xl">
                        <h2 class="text-3xl font-bold mb-5">Live Score: ${liveMatch.home_team.name} vs ${liveMatch.away_team.name}</h2>
                        <p class="text-xl font-bold mb-5">${liveMatch.home_team.name}: ${liveMatch.score.full_time.home_team} - ${liveMatch.score.full_time.away_team}: ${liveMatch.away_team.name}</p>
                    </div>
                `;
                $(".live-score-container").html(liveScore);
            } else {
                $(".live-score-container").html('<p class="text-xl font-bold mb-5">No live matches found.</p>');
            }
        });
    });
});