<template>
  <div class="page-article" v-if="model">
    <div class="d-flex py-3 px-2 border-bottom">
      <div class="iconfont icon-Back text-blue icon-Menu"></div>
      <strong class="flex-1 text-blue pl-2">
        {{ model.title }}
      </strong>
      <div class="text-grey fs-xs">{{ model.updatedAt | date }}</div>
    </div>
    <div class="px-3 body fs-lg" v-html="model.body"></div>
    <div class="px-3 border-top py-3">
      <div class="d-flex ai-center">
        <i class="iconfont icon-Menu"></i>
        <strong class="text-blue fs-lg ml-1">相关资讯</strong>
      </div>
      <div class="pt-2 fs-lg">
        <router-link
          class="py-1"
          tag="div"
          v-for="item in model.related"
          :to="`/articles/${item._id}`"
          :key="item._id"
        >
          {{ item.title }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";
export default {
  filters: {
    date(val) {
      return dayjs(val).format("YYYY-MM-DD");
    },
  },
  watch: {
    // id:'fetch',
    id(){
        this.fetch()
    }
  },
  props: {
    id: {
      required: true,
    },
  },

  data() {
    return {
      model: null,
    };
  },
  methods: {
    async fetch() {
      const res = await this.$http.get(`articles/${this.id}`);
      this.model = res.data;
    },
  },
  created() {
    this.fetch();
  },
};
</script>

<style lang="scss">
.page-article {
  .icon-back {
    font-size: 1.5rem;
  }

  .body {
    img {
      max-width: 100%;
      height: auto;
    }

    &.body {
      iframe {
        max-width: 100%;
        height: auto;
      }
    }
  }
}
</style>
