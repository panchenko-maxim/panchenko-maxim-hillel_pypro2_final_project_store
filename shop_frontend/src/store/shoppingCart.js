import { reactive } from 'vue';

export const shoppingCart = reactive({
    items: [],

    add(product) {
        const existing = shoppingCart.items.find(i => i.product.id == product.id)
        if (existing) {
            existing.quantity += 1
        } else {
            shoppingCart.items.push({ product, quantity: 1})
        }
    },

    remove(productId) {
        shoppingCart.items = shoppingCart.items.filter(i => i.product.id !== productId)
    },

    clear() {
        shoppingCart.items = []
    }
})