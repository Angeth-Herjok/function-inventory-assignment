// You manage a grocery store and need to keep track of the inventory of various items.
// You will use arrays to store the data and various functions to manipulate and analyze the data. 
// Create an array containing the names of all items in the inventory maximum of 10.

 let groceryItems=["Fruits","Beef","Cereals","Cake","Milk","Coffe","Detergents","Tissue","Sandwich","Painkiller"]
  

// Create a separate array with the corresponding stock quantities of each item maximum of 10.

let quantityOfItem=[
    {itemName:"Fruits",quantity:100},
    {itemName:"Beef",quantity:52},
    {itemName:"Cereals",quantity:45},
    {itemName:"Cake",quantity:59},
    {itemName:"Milk",quantity:70},
    {itemName:"Coffee",quantity:55},
    {itemName:"Detergents",quantity:60},
    {itemName:"Tissue",quantity:90},
    {itemName:"Sandwich",quantity:10},
    {itemName:"Painkiller",quantity:30},

];

// Write a function to add a new item to the inventory, updating both arrays.

function addNewItems(groceryItems,quantityOfItem){
    groceryItems.push("Biscuits")
    console.log(groceryItems);
    quantityOfItem.push("quantity:",89)
    console.log(quantityOfItem);
}
addNewItems(groceryItems,quantityOfItem)

// Write a function to update the stock quantity of an existing item.


let total=0;
quantityOfItem.forEach(item=>{
    total+=item.quantity
})
console.log("TOTAL:",total);


// Write a function to calculate the total number of items in the inventory.

   function totalNumber(){
    console.log(groceryItems.length);   
}
totalNumber()

// Write a function to find the item with the lowest stock quantity.

function lowestStockItem(){
   
console.log(Math.min(100,52,45,59,70,55,60,90,10,30,89));
}
lowestStockItem()

















