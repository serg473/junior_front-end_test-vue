<template>
  <div class="single-post ">
    <h2 class="single-post_title title">{{ SocialStore.postsItem.title }}</h2>
    <div class="single-post_cont-tags ">
          <span v-for="tags in  SocialStore.postsItem.tags" class="single-post__tags tags ">
        {{ tags }}
      </span>
    </div>

    <p class="single-post__body ">{{ SocialStore.postsItem.body }}</p>
  </div>
  <div class="single-post__comments comments">
    <h2 class="single-post__comments-title comments-title ">Comments: </h2>
    <div class="single-post__comments-post ">
      <section class="single-post__section section ">
        <div class="single-post__block-comments">
          <Comments v-for="commentItem in SocialStore.comment" :key="commentItem.id" :comment="commentItem"/>
        </div>
      </section>
    </div>
  </div>
  <button @click = "SocialStore.reqComments = false"
      class="single-post__close close">Close single post </button>
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
