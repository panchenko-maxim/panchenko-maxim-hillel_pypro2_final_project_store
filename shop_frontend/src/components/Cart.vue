<template>
    <div>
        <h2>Cart</h2>
        <ul>
            <li v-for="item in cart.items" :key="item.product.id">
                {{ item.product.name }} - {{ item.quantity }} units
                <button @click="cart.remove(item.product.id)">Remove</button>

            </li>
        </ul>
    </div>
</template>