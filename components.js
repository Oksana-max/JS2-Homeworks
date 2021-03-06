Vue.component('goods-list', {
    name: 'goods-list',
    props: ['goods'],
    template: `
        <main>
            <div v-if="goods.length !== 0" class="goods-list">
                <div class="goods-item" v-for="good in goods">
                    <goods-item :good="good" />
                </div>
            </div>
            <div v-else>Нет данных</div>
        </main>
    `
});

Vue.component('goods-item', {
    name: 'goods-item',
    props: ['good'],
    template: `
        <div>
            <h3>{{ good.product_name }}</h3>
            <p>{{ good.price }}</p>
        </div>
    `
});

Vue.component('cart', {
    name: 'cart',
    data: () => ({
        isVisibleCart: false,
    }),
    methods: {
        handleCart() {
            this.isVisibleCart = !this.isVisibleCart;
        }
    },
    template: `
    <div>
    <button class="cart-button " type="button " v-on:click="handleCart">Корзина</button>
    <div v-show="isVisibleCart" class="cart">Корзина</div>
    </div>`
});



Vue.component('goods-search', {
    name: 'goods-search',
    props: ['searchLine'],
    template: `
    <header class="header">
            <input :value="searchLine" @input="$emit('input', $event.target.value)" type="text" class="goods-search" />
            <button @click="$emit('filter-goods')" class=" search-button " type="button ">Искать</button>
            </header>`
});