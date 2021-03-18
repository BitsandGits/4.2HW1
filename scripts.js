// prompts 

let item = prompt("What is the name of this item?");
let basePrice = prompt("What is the base price of this item?");

let blackFriday
do{
  blackFriday = prompt('Is today Black Friday? yes/no')
  if(blackFriday !== "yes" && blackFriday !== "no"){
    alert(`please use lowercase only: 'yes' or 'no'`)
  }
} while(blackFriday !== "yes" && blackFriday !== "no")

let searchEngine
do{
    searchEngine = prompt('Was the item found via a search engine? yes/no')
  if(searchEngine !== "yes" && searchEngine !== "no"){
    alert(`please use lowercase only: 'yes' or 'no'`)
  }
} while(searchEngine !== "yes" && searchEngine !== "no")

let comparisonShop
do{
    comparisonShop = prompt('Was there a visit to a comparison-shopping site? yes/no')
  if(comparisonShop !== "yes" && comparisonShop !== "no"){
    alert(`please use lowercase only: 'yes' or 'no'`)
  }
} while(comparisonShop !== "yes" && comparisonShop !== "no")

// calc 
let finalPrice = basePrice;
let message = `The base price for ${item} is $${basePrice}. `;

if (blackFriday === "yes"){
    finalPrice *= 0.75;
    message += "Since it's Black Friday, we will reduce the price by 25%. ";
}
else {
    message += "It's not Black Friday, so the price didn't change for that. ";
}

if (searchEngine === "yes"){
    finalPrice *= 1.01;
    message += "We will increase the price by 1% to pay the search engine. ";
}
else {
    message += "The customer didn't use a search engine, so the price didn't change for that. ";
}

if (comparisonShop === "yes"){
    finalPrice *= 0.9;
    message += "Since the customer visited a comparison-shopping site, we will reduce the price by 10%. ";
}
else {
    message += "The customer didn't visit a comparison-shopping site, so the price didn't change for that. ";
}

finalPrice = finalPrice.toFixed(2);
message += `The final price is $${finalPrice}`;

document.getElementById("message").innerHTML = message;