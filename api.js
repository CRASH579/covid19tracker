const api_url = 'https://api.covid19api.com/summary';
async function getdata(){
    const response = await fetch(api_url);
    const data = await response.json();
    //console.log(data);
    document.getElementById('totca').textContent = data.Global.TotalConfirmed;
    document.getElementById('totde').textContent = data.Global.TotalDeaths;
    document.getElementById('totre').textContent = data.Global.TotalRecovered;
}
getdata();