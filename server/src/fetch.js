
const data = await fetch("https://trackapi.nutritionix.com/v2/search/instant?query=${query}", { headers: { "x-app-id": "884e7514", "x-app-key": "7c7ba1038f853747717d22da35e619dc" } }).then(a => a.json())


let data = await fetch("https://trackapi.nutritionix.com/v2/natural/nutrients", { method: "POST", body: JSON.stringify({ "query": "1 apple" }), headers: { "x-app-id": "884e7514", "x-app-key": "7c7ba1038f853747717d22da35e619dc", "Content-Type": "application/json" } }).then(a => a.json())


url: "https://api.nutritionix.com/v1_1/search/" + userInput + "?" +
    "fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat&appId=" + appId + "&appKey=" + appKey + "",


    const data = await fetch("https://trackapi.nutritionix.com/v2/search/instant?query=${query}fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat", { headers: { "x-app-id": "884e7514", "x-app-key": "7c7ba1038f853747717d22da35e619dc" } }).then(a => a.json())



a659858155daa419db6ba8d403bf62ac