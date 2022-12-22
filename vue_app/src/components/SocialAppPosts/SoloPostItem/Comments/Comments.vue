<template>
  <article class="p-6 text-base bg-white border-t border-gray-200 dark:border-gray-700 dark:bg-gray-900">
    <footer class="flex justify-between items-center mb-2">
      <div class="flex items-center">
        <p class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-black"><img
            class="mr-2 w-6 h-6 rounded-full"
            src="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
            alt="Helene Engels">{{comment.user.username}}</p>
        <p class="text-sm text-gray-600 dark:text-gray-400">
          <time pubdate datetime="2022-06-23"
                title="June 23rd, 2022">Jun. 23, 2022
          </time>
        </p>
      </div>
    </footer>
    <p class="text-gray-500 dark:text-gray-400">{{comment.body}}</p>
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
