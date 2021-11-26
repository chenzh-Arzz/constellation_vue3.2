<!--
 * @Date: 2021-11-25 17:49:07
 * @LastEditors: chenzihan
 * @LastEditTime: 2021-11-25 19:50:53
 * @FilePath: /constellation-3.2/src/views/Today.vue
-->
<template>
  <div>
    {{msg}}
  </div>
</template>

<script setup>
import { ref } from 'vue';
import {useStore} from 'vuex'
import  getData  from '@/services'
const msg = ref('today')
// const data = getData('双鱼座','today')
const store = useStore()
getData(store)
</script>

<style lang="scss" scoped>
</style>