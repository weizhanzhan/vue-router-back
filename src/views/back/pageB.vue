<template>
  <div
    class="page"
    style="background:#fff"
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

    <div>
      <van-button
        type="info"
        @click="$router.goBack()"
      >
        返回
      </van-button>
    </div>
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
