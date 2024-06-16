<!-- .vitepress/theme/Layout.vue -->
<template>
  <div class="theme-container">
    <!-- 页面内容 -->
    <Content />

    <!-- 返回顶部组件 -->
    <ScrollToTop />
  </div>
</template>

<script>
import ScrollToTop from './components/ScrollToTop.vue';

export default {
  name: "Layout"
  components: {
    ScrollToTop,
    // 其他组件...
  },
  mounted(){
    console.log(1)
  }
  // ...
};
</script>