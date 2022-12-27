<template>
  <div class="form-post t w-100 mt-35">
    <form class="form-post__form w-full max-w-lg">
      <div class="form-post__container flex flex-wrap -mx-3 mb-6">
        <div class="form-post__label-title w-full px-3">
          <label class="form-post__title title block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">Title Post</label>
          <input class="form-post__input-title appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-body" v-model="inputValue.title" type="text">
        </div>
      </div>
      <div class="form-post__body flex flex-wrap -mx-3 mb-6">
        <div class="form-post__label-body w-full px-3">
          <label class="form-post__body body block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
            Body Post
          </label>
          <textarea
              class="form-post__textarea appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password" v-model="inputValue.body" rows="8"></textarea>
        </div>
      </div>
      <div class="form-post__add-container inline-block space-x-2 w-100 mb-30">
        <button @click="SocialStore.addPost()" type="button"  class="form-post__add-post add-post inline-block w-100 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Add Post
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
