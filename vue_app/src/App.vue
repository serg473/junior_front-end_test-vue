<template>
  <div class="social_app mb-5">
    <h1 class="text-5xl font-extrabold text-center dark:text-black mt-35">Junior frontend developer</h1>
    <div class="container mx-auto mt-35">
      <div class="social_app">
        <div class="search_add-post">
          <FormAddPost :addPost = "SocialStore.addPost" :inputValue="SocialStore.dataPost"/>
        </div>
        <SoloPostItem />
        <SearchPosts  :search="SocialStore.search" class="mb-30"/>
        <div class="relative social_posts grid grid-cols-3 gap-10">
          <SocialAppPosts v-for="postsDate in SocialStore.posts" :key = "postsDate.id" :postsDate = "postsDate" />
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import SearchPosts from "@/components/SearchPosts/SearchPosts.vue";
import SoloPostItem from './components/SocialAppPosts/SoloPostItem/SoloPostItem.vue'
import SocialAppPosts from "@/components/SocialAppPosts/SocialAppPosts.vue";
import {useStoreSocialApp} from "../StoreSocialApp/store";
import {onMounted} from "vue";
import FormAddPost from "@/components/FormAddPost/FormAddPost.vue";
const SocialStore = useStoreSocialApp();
onMounted(() => {
  SocialStore.getPosts();

})
</script>

<style scoped>
</style>
