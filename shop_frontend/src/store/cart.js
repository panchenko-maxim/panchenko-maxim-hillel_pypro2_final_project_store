import { reactive } from 'vue';

export const cart = reactive({
    items: [],

    add(product) {
        const existing = cart.items.find(i => i.product.id == product.id)
        if (existing) {
            existing.quantity += 1
        } else {
            cart.items.push({ product, quantity: 1})
        }
    },

    remove(productId) {
        cart.items = cart.items.filter(i => i.product.id !== productId)
    },

    clear() {
        cart.items = []
    }
})