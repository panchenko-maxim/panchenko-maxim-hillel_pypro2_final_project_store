<template>
  <router-view />
</template>

<script>
import { cart } from './store/cart.js'

export default {
  setup() {
    return { cart }
  },
  provide() {
    return { cart: this.cart }
  }
}
</script>