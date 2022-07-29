<template>
  <div class="modal">
    <div v-if="modalObj.isReject" class="modal-header">거절 사유</div>
    <div v-else class="modal-header">이의 제기</div>
    <div class="modal-body">
      <div v-if="modalObj.isInput" class="modal-input">
        <textarea
          class="modal-input__textarea"
          placeholder="내용을 입력하세요"
          :value="value"
          @input="(e) => $emit('input', e.target.value)"
        ></textarea>
      </div>
      <div v-else class="modal__content">
        {{ modalObj.content }}
      </div>
    </div>
    <div class="modal__button">
      <ButtonContent :value="'확인'" :is-major="true" @click="handleConfirm" />
      <ButtonContent
        v-if="modalObj.isInput"
        :value="'취소'"
        @click="handleCancel"
      />
    </div>
  </div>
</template>

<script>
import ButtonContent from '../content/ButtonContent.vue'

export default {
  name: 'RejectModal',
  components: { ButtonContent },
  props: {
    modalObj: {
      type: Object,
      require: true,
    },
    value: {
      type: String,
      require: false,
      default: '',
    },
  },
  data() {
    return {
      title: '',
      sampleData: '',
      USER_TYPE: 'U',
    }
  },
  methods: {
    handleConfirm() {
      if (this.modalObj.isInput) {
        this.$emit('sendInput')
      }
      this.$emit('close')
    },
    handleCancel() {
      this.$emit('close')
    },
  },
}
</script>

<style lang="scss" scoped>
.modal {
  width: 50rem;
  height: 20rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  background-color: white;
  overflow: hidden; // header border radius
}

.modal-header {
  height: 4rem;
  background-color: $deep-blue;
  color: white;
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  font: {
    family: 'HelveticaNeue-Bold';
    size: 1.7rem;
    weight: 700;
  }
}
.modal-body {
  height: 80%;
  padding: 1rem 3rem 0 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal__content {
}

.modal-input {
  width: 80%;
}

.modal-input__textarea {
  width: 100%;
  height: 11rem;
  padding: 1rem;
  border-radius: 1.5rem;
  resize: none;
  font: {
    size: 1rem;
    family: 'NanumGothic-Regular';
  }
  &::placeholder {
    font-size: 1rem;
  }
}

.modal__button {
  display: flex;
  justify-content: center;
  margin: 1rem;

  :not(:first-child) {
    margin-left: 1rem;
  }
}
</style>
