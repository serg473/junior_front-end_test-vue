<template>
  <article class="comments">
    <footer class="comments__container ">
      <div class="comments__username-body ">
        <p class="comments__username username"><img
            class="comments__images"
            src="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
            alt="Helene Engels">{{comment.user.username}}</p>
        <p class="comments__date date">
        <div class = "date">Jun. 23, 2022</div>
        </p>
      </div>
    </footer>
    <p class="comments_body ">{{comment.body}}</p>
  </article>
</template>

<script setup>
const props = defineProps({
  comment : {
    type: Object,
    required: true,
    default: () => {}
  }
})
</script>

<style scoped>

</style>
