<template>
  <div class="input-basic">
    <input
      v-model="value"
      :type="type"
      class="input-basic__input"
      :placeholder="placeholder"
      @input="updateValue"
    />
    <img
      v-if="addButton"
      class="input-basic__img"
      src="@/assets/svg/content/add_button_icon.svg"
      alt="add_button_icon"
      @click="addValue"
      @keyup.enter="addValue()"
    />
  </div>
</template>

<script>
export default {
  name: 'InputBasic',
  props: {
    placeholder: {
      type: String,
      default: '',
      required: false,
    },
    addButton: {
      type: Boolean,
      default: false,
      required: false,
    },
    type: {
      type: String,
      default: 'text',
      required: true,
    },
  },
  data() {
    return {
      value: '',
    }
  },
  methods: {
    updateValue() {
      this.$emit('input', this.value)
    },
    addValue() {
      this.$emit('add', this.value)
    },
  },
}
</script>

<style lang="scss" scoped>
.input-basic {
  display: flex;
  flex-direction: row;
  margin: 1.5em 0px 1em 0px;
  &__input {
    background-color: $normal-gray;
    border-radius: 1em;
    width: 18.75em;
    height: 3.125em;
    padding-left: 1em;
    color: $black;
  }
  &__img {
    padding-left: 1em;
    cursor: pointer;
  }
}
</style>
