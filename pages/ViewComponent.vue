<template>
  <div>
    <!-- <RejectModal isReject="true" content="" /> -->
    <BeforeLoginDropdown />
    <AfterLoginDropdown />
    <div class="flex">
      <div class="col-1"></div>
      <div class="col-2">
        긴무우우우운자아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아앙
      </div>
      <div class="col-1"></div>
    </div>
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

<style lang="scss" scoped>
.flex {
  display: flex;
  width: 540px;
  height: 50px;
  background-color: rgb(236, 161, 48);
  min-width: 0;
}

.col-1 {
  background-color: rgb(42, 152, 138);
  padding: 8px;
  flex: 0 8px;
}

.col-2 {
  padding: 8px;

  // white-space: nowrap; // 줄바꿈을 하지 않는다
  overflow: hidden; // 부모 요소를 넘어가면 가린다
  // text-overflow: ellipsis; // ...을 자동으로 붙여준다
  min-width: 0;
  flex: 1;
}
</style>
