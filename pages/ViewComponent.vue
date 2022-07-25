<template>
  <div>
    <Header />
    <BeforeLoginDropdown />
    <AfterLoginDropdown />>
  </div>
</template>

<script>
import Header from '@/components/HeaderComponent'
import BeforeLoginDropdown from '@/components/dropdown/BeforeLoginDropdown'
import AfterLoginDropdown from '@/components/dropdown/AfterLoginDropdown'

export default {
  name: 'ViewComponent',
  components: {
    Header,
    BeforeLoginDropdown,
    AfterLoginDropdown,
  },
}
</script>

<style lang="scss" scoped></style>
