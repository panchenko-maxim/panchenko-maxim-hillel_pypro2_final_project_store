<template>
  <router-view />
</template>

<script>
import { shoppingCart } from './store/shoppingCart.js'

export default {
  setup() {
    return { shoppingCart }
  },
  provide() {
    return { shoppingCart: this.shoppingCart }
  }
}
</script>