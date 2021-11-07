const api_url = 'https://data.covid19india.org/data.json';
async function getdata(){
    const response = await fetch(api_url);
    const data = await response.json();
    //console.log(data);test2
    document.getElementById('totac').textContent = data.statewise[0].active;
    document.getElementById('totca').textContent = data.statewise[0].confirmed;
    document.getElementById('totde').textContent = data.statewise[0].deaths;
    document.getElementById('totre').textContent = data.statewise[0].recovered;
    
    var col = [];
        for (var i = 0; i < data.statewise.length; i++) {
            for (var key in data.statewise[i]) {
                 if (key == "active"||key == "confirmed"||key == "deaths"||key == "recovered") {
                        if (col.indexOf(key) === -1) {
                        col.push(key);
                        console.log(key);
                   }
                }
            }
        }
        var state = ["state"];
        col = state.concat(col);
        console.log(col);
        // Create a table.
        var table = document.createElement("table");

        // Create table header row using the extracted headers above.
        var tr = table.insertRow(-1);                   // table row.

        for (var i = 0; i < col.length; i++) {
            var th = document.createElement("th");      // table header.
            th.innerHTML = col[i];
            tr.appendChild(th);
        }

        // add json data to the table as rows.
        for (var i = 0; i < data.statewise.length; i++) {

            tr = table.insertRow(-1);

            for (var j = 0; j < col.length; j++) {
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = data.statewise[i][col[j]];
            }
        }

        // Now, add the newly created table with json data, to a container.
        var divShowData = document.getElementById('showData');
        divShowData.innerHTML = "";
        divShowData.appendChild(table);
        
    
}
getdata();
