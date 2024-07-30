let fruits = ['Mango', 'Apple', 'Papaya', 'Jackfruit', 'Guawa'];
refershFruitList();

function refershFruitList() {

    let htmlStringDynamic = '';
    htmlStringDynamic = '<ol>';

    for(let i=0; i<fruits.length; i++) {
        console.log(fruits[i]);
    
        htmlStringDynamic = htmlStringDynamic + '<li>' + `<span class="fruits-name">` + fruits[i] + '</span>' + 
        `<button type="button" onclick="removeFruits((` + i + `))" class="delete-button">Delete</button>` +  '</li>' ;
    }
    
    htmlStringDynamic = htmlStringDynamic + '</ol> ';
    
    document.getElementById("fruitsList").innerHTML = htmlStringDynamic;
}


function addFruit() {
    let fruitName = document.getElementById("name").value;
    fruits.push(fruitName);
    refershFruitList();
    document.getElementById("name").value = "";
}

function removeFruits (index) {
    fruits.splice(index, 1);
    refershFruitList();
}
