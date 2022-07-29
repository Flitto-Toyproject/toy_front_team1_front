<template>
  <div>
    <!-- <RejectModal isReject="true" content="" /> -->
    <BeforeLoginDropdown />
    <AfterLoginDropdown />
  </div>
</template>

<script>
export default {
  name: 'ViewComponent',
  components: {},
  data() {
    return {
      content: '',
    }
  },
}
</script>

<style lang="scss" scoped></style>
