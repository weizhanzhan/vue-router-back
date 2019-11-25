<template>
  <div
    id="app"
  >
    <transition :name="transitionName">
      <router-view class="wx-router" />
    </transition>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        transitionName: 'slide-right'
      }
    },
    watch: {
      '$route'() {
        const isBack = this.$router.isBack // 监听路由变化时的状态为前进还是后退
        console.log(this.$router, this.$router.isBack)
        if (isBack) {
          this.transitionName = 'slide-right'
        } else {
          this.transitionName = 'slide-left'
        }
        this.$router.isBack = false
      }
    }
  }
</script>
<style>
  * {
    padding: 0;
    margin: 0
  }

  body,
  html {
    height: 100%;

  }

  #app {
    height: 100%;
    overflow: hidden;

  }

  .wx-router {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    backface-visibility: hidden;
    perspective: 1000;
    /* position: absolute;
    width: 100%;
    transition: all 0.5s linear; */

  }

  /* .slide-left-enter,
  .slide-right-leave-active {
    opacity: 1;
    -webkit-transform: translate(95%, 0);
    transform: translate(95%, 0);
  }

  .slide-left-leave-active,
  .slide-right-enter {
    opacity: 1;
    -webkit-transform: translate(-95%, 0);
    transform: translate(-95% 0);
  } */
  ul,li{
    list-style: none;
  }
.vue-route-transition{
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  backface-visibility: hidden;
  perspective: 1000;
}
.fade-enter-active{
  animation: pageFadeIn 400ms forwards;
}
@keyframes pageFadeIn {
  from {
    opacity: 1;
  }
  to {
    opacity: 1;
  }
}
/*路由前进，退出*/
.slide-left-leave-active {
  animation: pageFromCenterToLeft 0.4s forwards;
  z-index: 1;
}
/*路由后退，进入*/
.slide-right-enter-active {
  animation: pageFromLeftToCenter 0.4s forwards;
  z-index: 1;
}
/*路由后退，退出*/
.slide-right-leave-active {
  animation: pageFromCenterToRight 0.4s forwards;
  z-index: 10;
  box-shadow: -3px 0  5px rgba(0,0,0,.1);
}
/*路由前进，进入*/
.slide-left-enter-active {
  animation: pageFromRightToCenter 0.4s forwards;
  z-index: 10;
  box-shadow: -3px 0  5px rgba(0,0,0,.1);
}
/*-------------------------------*/
/*路由前进，进入*/
@keyframes pageFromRightToCenter {
  from {
    /* left: 100%; */
    transform: translate3d(100%, 0, 0);
    opacity: 1;
  }
  to {
    /* left: 0; */
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
/*路由前进，退出*/
@keyframes pageFromCenterToLeft {
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
    /* left:0; */
  }
  to {
    /* opacity: 0.5; */
     opacity: 1;
    transform: translate3d(-20%, 0, 0);
    /* left:-20%; */
  }
}
/*路由后退，进入*/
@keyframes pageFromLeftToCenter {
  from {
    /* opacity: .5; */
     opacity: 1;
    transform: translate3d(-20%, 0, 0);
    /* left: -20%; */
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
    /* left: 0; */
  }
}
/*路由后退，退出*/
@keyframes pageFromCenterToRight {
  from {
    /* left: 0; */
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
  to {
    /* left: 100%; */
    transform: translate3d(100%, 0, 0);
    opacity: 1;
  }
}
</style>
