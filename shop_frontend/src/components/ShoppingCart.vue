<template>
    <div>
        <h2>Cart</h2>
        <ul>
            <li v-for="item in shoppingCart.items" :key="item.product.id">
                {{ item.product.name }} - {{ item.quantity }} units
                <button @click="shoppingCart.remove(item.product.id)">Remove</button>

            </li>
        </ul>
        <button @click="submitOrder" :disabled="shoppingCart.items.lenght === 0">Make an order</button>
    </div>
</template>

<script>
import { inject } from 'vue';
import axios from 'axios';

export default {
    setup() {
        const shoppingCart = inject('shoppingCart')
        return { shoppingCart }
    },
    methods: {
        async submitOrder() {
            const items = this.shoppingCart.items.map(item => ({
                product: item.product.id,
                quantity: item.quantity
            }))

            try {
                await axios.post('http://localhost:8000/api/orders/', {
                    items
                })
                alert('Maked order!')
                this.shoppingCart.clear()
            } catch (error) {
                alert ('Error make an order')
                console.error(error)
            }
        }
    }
}
</script>