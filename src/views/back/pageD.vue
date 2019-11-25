<template>
  <div
    class="page"
    style="background:#fa8c16"
  >
    <ul>
      <li
        v-for="page in pages"
        :key="page"
        @click="toPage(page)"
      >
        {{ page }}
        {{ $route.name === page ? '(当前页面)':'' }}
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        pages: ['pageA', 'pageB', 'pageC', 'pageD']
      }
    },
    mounted() {
      console.log(this.$route.name)
    },
    methods: {
      toPage(page) {
        this.$router.push(page)
      }
    }
  }
</script>

<style scoped>
.page{
    height: 100%;
}
</style>
