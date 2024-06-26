class Item{
    constructor(name, price,discount=0){
        this.name=name;
        this.price=price;
        this.discount=discount;
    }
}
const shoppingCart = {
    items: [],

   // addItem: function (item) {
    addItem:(item)=>{
       // console.debug('addItem')
        shoppingCart.items.push(item);
    },
    removeItem:(index)=> {
       // console.debug('removeItem')
        shoppingCart.items.splice(index, 1);
    },
    calculateTotal: ()=> {
        debugger;

        //console.debug('calculateTotal')
        let total = 0;
        for (let i = 0; i < shoppingCart.items.length; i++) {
           // console.debug(i)
            total += shoppingCart.items[i].price;
        }
        return total;
    },
    applyDiscountCode: (code)=> {
        switch (code) {
            case 'SAVE10':
                return shoppingCart.calculateTotal() * 0.9; // Apply 10% discount
            case 'SAVE20':
                return shoppingCart.calculateTotal() * 0.8; // Apply 20% discount
            default:
                return shoppingCart.calculateTotal();
        }
    },
    getCurrentItems: ()=> {
        return shoppingCart.items.map(item => item.name);
    },
    getItemByName: function (name) {
       return shoppingCart.items.find(item=>item.name);
           
        }
    
};


shoppingCart.items.pop

// helper to create items object
/* function Item(name, price, discount = 0) {
    this.name = name;
    this.price = price;
    this.discount = discount
} */

let item1 = new Item('Shirt', 20);
let item2 = new Item('Pants', 30);
let item3 = new Item('temp', 100);

shoppingCart.addItem(item1);
shoppingCart.addItem(item2);

shoppingCart.addItem({ name: 'temp', price: 40 })




console.log(`Please get current value of Item = ${shoppingCart.getCurrentItems()}`); // Output: ['Shirt', 'Pants']

shoppingCart.removeItem(0);
console.log(`After remove an item, get current item = ${shoppingCart.getCurrentItems()}`); // Output: ['Pants']

console.log(`Calculate total = ${shoppingCart.calculateTotal()}`); // Output: 30

console.log(`Apply 10% discount = ${shoppingCart.applyDiscountCode('SAVE10')}`); // Output: 27

console.log(shoppingCart.getItemByName('Pants')) // Output: { name: 'Pants', price: 30, discount: 0}