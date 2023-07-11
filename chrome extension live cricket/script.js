async function GetMatchData() {
    return await fetch("https://api.cricapi.com/v1/currentMatches?apikey=edaeb2c7-5a64-4fce-b12b-1dc1bf822c60&offset=0")
        .then(data => data.json())
        .then(data => {
            if (data.status != "success") return;
            const MatchesList = data.data;
            if (!MatchesList) return [];
            const relevantData = MatchesList.map(match => `${match.name},${match.status}`);
            console.log({ relevantData });
            document.getElementById("matches").innerHTML=relevantData.map(match=>`<li>${match}</li>`).join('');
            return relevantData;
        })
        .catch(e=>console.log(e));
}
GetMatchData();
