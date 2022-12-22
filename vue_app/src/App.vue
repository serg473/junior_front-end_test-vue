<template>

  <div class="social_app mb-5">
    <h1 class="text-5xl font-extrabold text-center dark:text-black mt-35">Junior frontend developer</h1>
    <div class="container mx-auto mt-35">
      <div class="social_app">
        <div v-if="SocialStore.reqComments" class="single_post_item">
          <SoloPostItem/>
        </div>

        <div class="form_add_post">
          <button type="button"
                  class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  @click="SocialStore.reqPost = !SocialStore.reqPost">Show Form Add Post
          </button>
          <div v-if="SocialStore.reqPost" class="search_add-post">
            <FormAddPost :addPost="SocialStore.addPost" :inputValue="SocialStore.dataPost"/>
          </div>
        </div>
        <SearchPosts :search="SocialStore.search" class="mb-30"/>
        <div class="relative social_posts grid grid-cols-3 gap-10">
          <SocialAppPosts v-for="postsDate in SocialStore.posts" :key="postsDate.id" :postsDate="postsDate"/>
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
.single_post_item {
  border: 1px solid #e6e6e6;
  border-radius: 20px;
  margin-bottom: 30px;
}
</style>
