<template>
  <div class="modal-inner">
    <p class="modal-text">{{ modalObj.text }}</p>
    <DefaultButtonContent>
      <ButtonContent
        :value="modalObj.buttonCount === 2 ? modalObj.yes : modalObj.confirm"
        @click="confirm"
      />
      <ButtonContent
        v-if="modalObj.buttonCount === 2"
        :value="modalObj.no"
        @click="close"
      />
    </DefaultButtonContent>
  </div>
</template>

<script>
import ButtonContent from '@/components/content/ButtonContent'
import DefaultButtonContent from '@/components/content/DefaultButtonContent.vue'

export default {
  name: 'SimpleModal',
  components: { ButtonContent, DefaultButtonContent },
  props: {
    modalObj: {
      type: Object,
      require: true,
    },
  },
  data() {
    return {}
  },
  methods: {
    confirm() {
      this.$emit('confirm')
    },
    close() {
      this.$emit('close')
    },
  },
}
</script>

<style lang="scss" scoped>
.modal-inner {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border: 1px solid $deep-gray;
  border-radius: 1em;
  width: 30em;
  height: 15em;
  margin: auto;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: white;
}
.modal-text {
  color: $black;
  font-size: 1.5em;
  font-weight: 700;
}
</style>
