class GoodsItem {
    constructor(title, price, ) {
        this.title = title;
        this.price = price;
    }
    render() {
        return `<div class="goods-item"><h3>${this.title}</h3><p>${this.price}</p></div>`;
    }
}

class GoodsList {
    constructor() {
        this.goods = [];
    }
    fetchGoods() {
        this.goods = [
            { title: 'Shirt', price: 150, },
            { title: 'Socks', price: 50, },
            { title: 'Jacket', price: 350, },
            { title: 'Shoes', price: 250, },
        ];

    }
    render() {
        let listHtml = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.title, good.price, );
            listHtml += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;
    }

    getTotalSum() {
        return this.goods.forEach((item) => totalSum += item.price);
    }

}

class GoodsCard extends GoodsList {
    constructor() {
        super();
    }
}
class CartItem extends GoodsItem {
    constructor() {
        super();
    }
}


//   Теперь, чтобы вывести список, нужно создать экземпляр класса GoodsList, вызвать для него метод fetchGoods, чтобы записать список товаров в свойство goods, и вызвать render().
const list = new GoodsList();
list.fetchGoods();
list.render();
list.getSum();