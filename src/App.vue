<template>

  <div class="social-app mb-5">
    <h1 class="social-app__title title text-5xl font-extrabold text-center dark:text-black mt-35">Junior frontend developer</h1>
    <div class="social-app__container container mx-auto mt-35">
      <div class="social-app__group-components">
        <div v-if="SocialStore.reqComments" class="social-app__single-post singple-post">
          <SoloPostItem/>
        </div>
        <div class="social-app__form-add-post form_add_post">
          <button type="button" class="social-app__show-post show-post inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  @click="SocialStore.reqPost = !SocialStore.reqPost">Show Form Add Post
          </button>
          <div v-if="SocialStore.reqPost" class="social-app__search-add-post search-add-post">
            <FormAddPost :addPost="SocialStore.addPost" :inputValue="SocialStore.dataPost"/>
          </div>
        </div>
        <SearchPosts :search="SocialStore.search" class="mb-30"/>
        <div class="search-app__post post relative social_posts grid grid-cols-3 gap-10">
          <SocialAppPosts v-for="postsDate in SocialStore.posts" :key="postsDate.id" :postsDate="postsDate"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import SearchPosts from "@/components/SearchPost.vue";
import SoloPostItem from './components/NewsPostsSingle.vue'
import SocialAppPosts from "@/components/NewsPosts.vue";
import {useStoreSocialApp} from "../src/stores/index";
import {onMounted} from "vue";
import FormAddPost from "@/components/AddPostForm.vue";

const SocialStore = useStoreSocialApp();
onMounted(() => {
  SocialStore.getPosts();

})
</script>

<style scoped>
.social-app__single-post {
  border: 1px solid #e6e6e6;
  border-radius: 20px;
  margin-bottom: 30px;
}
</style>
