<template>
  <div class="modal-wrap">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'DefaultModal',
  data() {
    return {}
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
.modal-wrap {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 999;

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
