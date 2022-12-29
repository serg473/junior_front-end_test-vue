<template>
  <div @click="SocialStore.getPostId(postsDate.id), SocialStore.reqComments = true"
       class="news-post ">
    <div class="news-post__preview">
      <img  class="news-post__images images "
            src="https://img.freepik.com/free-vector/software-code-testing-concept-illustration_114360-8114.jpg?w=2000"
            alt=""></div>
    <div class="news-post__tags tags">
      <AppTags v-for="tags in postsDate.tags">
        {{ tags }}
      </AppTags>
    </div>
    <h5 class="news-post__title title ">
      {{ postsDate.title }}
    </h5>
    <p class="news-post__body-post body">{{ postsDate.body }}</p>
  </div>
</template>

<script setup>
import {useStoreSocialApp} from "../stores";
import AppTags from "@/components/AppTags.vue";
const SocialStore = useStoreSocialApp();

const props = defineProps({
  postsDate: {
    type: Object,
    required: true,
    default: () => {
    }
  },
})

</script>

<style scoped>

</style>
