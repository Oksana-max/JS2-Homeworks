class GoodsItem {
    constructor(title, price, quantity) {
        this.title = title;
        this.price = price;
        this.quantity = 0;
       
    }
    render() {
        return `<div class="goods-item"><h3>${this.title}</h3><p>${this.price}</p><p>${this.quantity}</p></div>`;
    }
}



class GoodsList {
    constructor() {
        this.goods = [];
    }
    fetchGoods() {
        this.goods = [
            { title: 'Shirt', price: 150, quantity: 0},
            { title: 'Socks', price: 50, quantity: 0},
            { title: 'Jacket', price: 350, quantity: 0},
            { title: 'Shoes', price: 250, quantity: 0},
        ];

    }
    render() {
        let listHtml = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.title, good.price, good.quantity);
            listHtml += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;
    }
    getSum(){
            return this.price * this.quantity;
    }
}

class Basket{
    constructor(){
        this.goods = [];
    }
}

class BasketItem{
    constructor(){}
}
        


//   Теперь, чтобы вывести список, нужно создать экземпляр класса GoodsList, вызвать для него метод fetchGoods, чтобы записать список товаров в свойство goods, и вызвать render().
const list = new GoodsList();
list.fetchGoods();
list.render();
list.getSum();












