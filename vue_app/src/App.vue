<template>
  <div class="social_app">
    <h1 class="text-5xl font-extrabold text-center dark:text-black mt-35">Junior frontend developer</h1>
    <div class="container mx-auto mt-35">
      <div class="social_app">
        <div class="social_posts grid grid-cols-3 gap-4">
          <SocialAppPosts v-for="postsDate in SocialStore.posts" :key = "postsDate.id" :postsDate = "postsDate"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import SocialAppPosts from "@/components/SocialAppPosts/SocialAppPosts.vue";
import {useStoreSocialApp} from "../StoreSocialApp/store";
import {onMounted} from "vue";

const SocialStore = useStoreSocialApp();

onMounted(() => {
  SocialStore.getPosts();
})
</script>

<style scoped>
</style>
