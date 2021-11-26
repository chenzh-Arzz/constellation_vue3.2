<!--
 * @Date: 2021-11-25 20:04:59
 * @LastEditors: chenzihan
 * @LastEditTime: 2021-11-25 20:56:02
 * @FilePath: /constellation-3.2/src/components/header/index.vue
-->
<template>
  <header class="header">
    <img src="../../assets/img/cons.png" />
    <h1>
      <slot></slot>
    </h1>
  </header>
</template>

<script  setup >
</script>

<style lang="scss" scoped>
  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: .44rem;
    background-color: #DB7093;
    color: #fff;
    font-size: .18rem;
    
    img {
      width: .23rem;
      margin-right: .05rem
    }
  }
</style>