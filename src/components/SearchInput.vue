<template>
  <input @change="SearchAPI.search()" v-model="SearchAPI.search.searchText" type="search" class="search__search-post search-post" placeholder="Search">
</template>

<script setup>
import {useStoreSocialApp} from "../stores/index";
const SearchAPI = useStoreSocialApp()
</script>

<style scoped>

</style>
