<template>
  <input  :value="SearchAPI.search.searchText" @input="SearchAPI.searchQuery"  type="search" class="search__search-post search-post" placeholder="Search">
</template>

<script lang="ts" setup>
import {useStoreSocialApp} from "../stores";
const SearchAPI = useStoreSocialApp()

</script>

<style scoped>

</style>
