<template>
  <div class="single-post ">
    <h2 class="single-post_title title">{{ SocialStore.postsItem.title }}</h2>
    <div class="single-post_cont-tags ">
      <AppTags v-for="tags in  SocialStore.postsItem.tags">
        {{ tags }}
      </AppTags>
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
  <AppButtonClose @click="SocialStore.reqComments = false">Close single post</AppButtonClose>
</template>

<script setup>
import {useStoreSocialApp} from "../stores";
import Comments from "./NewsPostsComments.vue"
import AppButtonClose from "@/components/AppButtonClose.vue";
import AppTags from "@/components/AppTags.vue";

const SocialStore = useStoreSocialApp();

</script>

<style scoped>

</style>
