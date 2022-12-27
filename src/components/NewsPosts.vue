<template>
  <div @click="SocialStore.getPostId(postsDate.id), SocialStore.reqComments = true"
       class="news-post block cursor-pointer w-posts p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <div class="news-post__preview">
      <img  class="news-post__images images w-auto m-w-100"
                       src="https://img.freepik.com/free-vector/software-code-testing-concept-illustration_114360-8114.jpg?w=2000"
                       alt=""></div>
    <div class="news-post__tags tags">
      <span v-for="tags in postsDate.tags"
            class="news-post__tags-item tags-item bg-blue mt-2 text-xs font-semibold mr-2 px-1.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
        {{ tags }}
      </span>
    </div>
    <h5 class="news-post__title title mb-2 mt-2.5 text-xl font-bold tracking-tight text-gray-900 dark:text-black">
      {{ postsDate.title }}
    </h5>
    <p class="news-post__body-post body font-normal text-sm text-gray-700 dark:text-gray-400">{{ postsDate.body }}</p>
  </div>
</template>

<script setup>
import {useStoreSocialApp} from "../stores";

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
