// MA 3, question 2


const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=9dcaa00a32a24fefb38d2c28b69c1812"

const out = document.querySelector("#games");

function listData (list) {
    //console.log(list);
    out.innerHTML = "";

    for (let i = 0; i < 8; i++) {

    let listItems = `<li> <strong>${list[i].name}</strong> , rating: ${list[i].rating}, tags: ${list[i].tags.length}</li>`
    out.innerHTML += listItems;
    }

}

fetch (url)
.then(response => response.json())
.then(data => listData(data.results))
.catch(error => out.innerHTML = "Something's wrong!");



