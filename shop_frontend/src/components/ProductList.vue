<template>
    <div>
        <h2>List of products</h2>
        <ul>
            <li v-for="product in products" :key="product.id">
                <h3>{{ product.name }}</h3>
                <p>{{ product.description }}</p>
                <p>Price: {{ product.price }} usd</p>
                <button @click="addToCart(product)">Add in cart</button>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios';
import { inject } from 'vue';

export default {
    setup() {
        const shoppingCart = inject('shoppingCart')
        return { shoppingCart }
    },
    data() {
        return {
            products: [],
        }
    },
    methods: {
        async fetchProducts() {
            const response = await axios.get('http://localhost:8000/api/products/')
            this.products = response.data
        },
        addToCart(product) {
            this.shoppingCart.add(product)
        },
    },
    mounted() {
        this.fetchProducts()
    },
}
</script>