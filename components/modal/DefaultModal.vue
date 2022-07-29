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
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
