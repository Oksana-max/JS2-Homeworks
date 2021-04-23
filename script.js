//  https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses – адрес API;
//  /catalogData.json – получить список товаров;
//  /getBasket.json – получить содержимое корзины;
//  /addToBasket.json – добавить товар в корзину;
//  /deleteFromBasket.json – удалить товар из корзины.




function makeGETRequest(url, callback) {
    var xhr;

    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            callback(xhr.responseText);
        }
    }

    xhr.open('GET', url, true);
    xhr.send();
};

const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';



class GoodsItem {
    constructor(product_name, price, ) {
        this.product_name = product_name;
        this.price = price;
    }
    render() {
        return `<div class="goods-item"><h3>${this.product_name}</h3><p>${this.price}</p></div>`;
    }
}


class GoodsList {
    constructor() {
        this.goods = [];
    }
    fetchGoods(callback) {
        makeGETRequest(`${API_URL}/catalogData.json`, (goods) => {
            this.goods = JSON.parse(goods);
            callback();
        })
    }

    render() {
        let listHtml = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.product_name, good.price, );
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
list.fetchGoods(() => {
    list.render();
});