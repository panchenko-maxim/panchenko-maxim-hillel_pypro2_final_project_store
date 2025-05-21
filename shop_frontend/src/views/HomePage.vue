<template>
    <div>
        <h1>Store products</h1>
        <ProductList />
        <ShoppingCart />
    </div>
</template>

<script>
import ProductList from '@/components/ProductList.vue'
import ShoppingCart from '@/components/ShoppingCart.vue';

export default {
    components: { ProductList, ShoppingCart },
}
</script>