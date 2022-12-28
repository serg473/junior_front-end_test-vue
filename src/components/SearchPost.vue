<template>
  <div class="search">
    <h2 class="search_title title ">Search Post</h2>
    <div class="search_group-block ">
      <div class="search_container mb-3 xl:w-96">
        <div class="search__input-group ">
          <SearchInput />
        </div>
      </div>
    </div>
  </div>


</template>

<script setup>
import SearchInput from "@/components/SearchInput.vue";
</script>

<style scoped></style>
