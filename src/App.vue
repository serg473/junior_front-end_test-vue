<template>

  <div class="social-app ">
    <h1 class="social-app__title title">Junior frontend developer</h1>
    <div class="social-app__container container">
      <div class="social-app__group-components">
        <div v-if="SocialStore.reqComments" class="social-app__single-post singple-post">
          <SoloPostItem/>
        </div>
        <div class="social-app__form-add-post form_add_post">
          <button type="button" class="social-app__show-post show-post"
                  @click="SocialStore.reqPost = !SocialStore.reqPost">Show Form Add Post
          </button>
          <div v-if="SocialStore.reqPost" class="social-app__search-add-post search-add-post">
            <FormAddPost :addPost="SocialStore.addPost" :inputValue="SocialStore.dataPost"/>
          </div>
        </div>
        <SearchPosts :search="SocialStore.search" class="social-app__search-input"/>
        <div class="search-app__post post ">
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
</style>
