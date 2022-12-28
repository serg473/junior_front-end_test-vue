<template>
  <div class="form-post">
    <form class="form-post__form">
      <div class="form-post__container ">
        <div class="form-post__label-title ">
          <label class="form-post__title title " for="grid-password">Title Post</label>
          <input class="form-post__input-title"
              id="grid-body" v-model="inputValue.title" type="text">
        </div>
      </div>
      <div class="form-post__body ">
        <div class="form-post__label-body ">
          <label class="form-post__body body " for="grid-password">
            Body Post
          </label>
          <textarea
              class="form-post__textarea"
              id="grid-password" v-model="inputValue.body" rows="8"></textarea>
        </div>
      </div>
      <div class="form-post__add-container">
        <button @click="SocialStore.addPost()" type="button"  class="form-post__add-post add-post ">Add Post
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import {useStoreSocialApp} from "../stores";
const SocialStore = useStoreSocialApp();
const props = defineProps({
  inputValue: {
    type: Object,
    required: true,
  },
  addPost: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>

</style>
