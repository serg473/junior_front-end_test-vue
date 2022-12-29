<template>
  <div class="form-post">
    <form class="form-post__form">
      <div class="form-post__container ">
        <div class="form-post__label-title ">
          <label class="form-post__title title" for="grid-password">Title Post</label>
          <input class="form-post__input-title" id="grid-body" :value="SocialStore.dataPost.title" @input="SocialStore.dataPost.title = $event.target.value"  type="text">
        </div>
      </div>
      <div class="form-post__body ">
        <div class="form-post__label-body ">
          <label class="form-post__body body " for="grid-password">
            Body Post
          </label>
          <textarea
              class="form-post__textarea"
              id="grid-password" :value = "SocialStore.dataPost.body" @input = "SocialStore.dataPost.body = $event.target.value" rows="8"></textarea>
        </div>
      </div>
      <div class="form-post__add-container">
        <AppButton @click="SocialStore.addPost()">
          Add Post
        </AppButton>
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>
import {useStoreSocialApp} from "../stores";
import AppButton from "@/components/AppButton.vue";
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

<style scoped></style>
