<template>
  <div class="single-post mb-10">
    <h2 class="single-post_title title text-4xl inline-block font-extrabold black">{{ SocialStore.postsItem.title }}</h2>
    <div class="single-post_cont-tags mt-15">
          <span v-for="tags in  SocialStore.postsItem.tags"
                class="single-post__tags tags bg-blue mt-5 text-xs font-semibold mr-2 px-1.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
        {{ tags }}
      </span>
    </div>

    <p class="single-post__body my-4 text-lg text-gray-500">{{ SocialStore.postsItem.body }}</p>
  </div>
  <div class="single-post__comments comments">
    <h2 class="single-post__comments-title comments-title text-4xl ml-5 inline-block font-extrabold black">Comments: </h2>
    <div class="single-post__comments-post ml-5">
      <section class="single-post__section section bg-white dark:bg-gray-900 py-8 lg:py-16">
        <div class="single-post__block-comments max-w-2xl px-4">
          <Comments v-for="commentItem in SocialStore.comment" :key="commentItem.id" :comment="commentItem"/>
        </div>
      </section>
    </div>
  </div>
  <button @click = "SocialStore.reqComments = false"
      class="single-post__close close ml-30 mb-35 inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out">Close single post </button>
</template>

<script setup>
import {useStoreSocialApp} from "../stores";
import Comments from "./NewsPostsComments.vue"

const SocialStore = useStoreSocialApp();

</script>

<style scoped>
.single-post {
  width: 100%;
  padding: 30px;
  border-radius: 20px;
}
</style>
