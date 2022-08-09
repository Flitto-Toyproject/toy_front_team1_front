<template>
  <div class="layout-container">
    <HeaderComponent />
    <Nuxt></Nuxt>
    <FooterComponent class="footer" />
  </div>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue'
import FooterComponent from '../components/FooterComponent.vue'
export default {
  name: 'DefaultLayout',
  components: { HeaderComponent, FooterComponent },
}
</script>

<style lang="scss" scoped>
.layout-container {
  display: flex;
  flex-direction: column;

  min-height: 100%;
  position: relative;
  padding-bottom: 9rem;
  @include tablet {
    padding-bottom: 14rem;
  }
}

.footer {
  height: 9rem;
  width: 100%;
  position: absolute;
  bottom: 0;
  @include tablet {
    height: 14rem;
  }
}
</style>
