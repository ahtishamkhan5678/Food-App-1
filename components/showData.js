async function showData() {
	return `let q = document.getElementById("search").value;
    console.log(q);

    let url= "https://www.themealdb.com/api/json/v1/1/search.php?s="+q;

    let res = await fetch(url);

    let data = await res.json();

    console.log(data);`;
}

export default showData;
