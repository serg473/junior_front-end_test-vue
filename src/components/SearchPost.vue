<template>
  <div class="search">
    <h2 class="search_title title ">Search Post</h2>
    <div class="search_group-block ">
      <div class="search_container mb-3 xl:w-96">
        <div class="search__input-group ">
          <input @change="SearchAPI.search()" v-model="search.searchText" type="search" class="search__search-post search-post" placeholder="Search">
        </div>
      </div>
    </div>
  </div>


</template>

<script setup>
import {useStoreSocialApp} from "../stores/index";

const SearchAPI = useStoreSocialApp();

const props = defineProps({
  search: {
    type: Object,
    required: true,
    default: () => {
    }
  }
})
</script>

<style scoped>
.loader__search-result{
  margin-left: 82px;
}
img {
  width: 30px;
  height: 30px;
}
</style>
