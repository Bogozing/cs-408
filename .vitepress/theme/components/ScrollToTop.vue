<template>
  <button @click="$scrollToTop" class="scroll-to-top-button">
    <img src="./assets/arrow-up.svg" alt="返回顶部" />
  </button>
  <!-- 页面其他内容 -->
</template>
 
<style scoped>
.scroll-to-top-button {
  position: fixed;
  bottom: 2em;
  right: 2em;
}
</style>