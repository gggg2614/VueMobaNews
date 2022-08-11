<template>
  <div>
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide>
        <img class="w-100" src="@/assets/images/1.jpeg" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="@/assets/images/2.jpeg" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="@/assets/images/3.jpeg" alt="" />
      </swiper-slide>
      <div
        class="swiper-pagination pagination-home text-right px-3 pb-2"
        slot="pagination"
      ></div>
    </swiper>
    <!-- end of swiper -->
    <div class="nav-icons bg-white mt-3 text-center pt-3 text-dark-1">
      <div class="d-flex flex-wrap">
        <div class="nav-item mb-3" v-for="n in 12" :key="n">
          <i class="sprite sprite-news"></i>
          <div class="py-1">爆料站</div>
        </div>
      </div>
      <div class="bg-light py-2 fs-sm">
        <i class="sprite sprite-arrow mr-1"></i>
        <span>收起</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "carrousel",
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".pagination-home",
        },
      },
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";

.pagination-home {
  .swiper-pagination-bullet {
    opacity: 1;
    border-radius: 0.1538rem;
    background: map-get($colors, "white");

    &.swiper-pagination-bullet-active {
      background: map-get($colors, "info");
    }
  }
}
.nav-icons {
  border-top: 1px solid $border-color;
  border-bottom: 1px solid $border-color;
  .nav-item {
    width: 18%;
    border-right: 1px solid $border-color;
    &:nth-child(4n) {
      border-right: none;
    }
  }
}
</style>
