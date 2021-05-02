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