const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
    el: '#app',
    data: () => ({
        goods: [],
        filteredGoods: [],
        searchLine: '',
        isVisibleCart: false
    }),
    mounted() {
        this.makeGETRequest(`${API_URL}/catalogData.json`, (goods) => {
            // API который мы исполььзуем возвращает нам массив в строчном представлении (JSON)
            // для работы с ним в приложение, необходимо выполнить процесс десериализации

            // к вопросу о том, почему в доме появлялось там много пустых значений -> строка это в некотором роде массив букв
            // vue просто проходился по нашей строке и пытался работать с каждой буквой в строке как с отдельным объектом
            this.goods = JSON.parse(goods);
            this.filteredGoods = JSON.parse(goods);
        });
    },
    methods: {
        filterGoods() {
            console.log('this.searchLine :>> ', this.searchLine);
            const regexp = new RegExp(this.searchLine, 'i');
            this.filteredGoods = this.goods.filter(good => regexp.test(good.product_name));
        },
        handleCart() {
            this.isVisibleCart = !this.isVisibleCart;
        },
        makeGETRequest(url, callback) {
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
        },

    },


    watch: {
        filteredGoods() {
            console.log('this.filteredGoods :>> ', this.filteredGoods);
        }
    }
});