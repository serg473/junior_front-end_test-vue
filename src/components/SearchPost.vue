<template>
  <div class="search">
    <h2 class="search_title title mb-30 text-center text-4xl font-extrabold black ">Search Post</h2>
    <div class="search_group-block flex justify-center">
      <div class="search_container mb-3 xl:w-96">
        <div class="search__input-group relative flex items-stretch w-full mb-4">
          <input @change="SearchAPI.search()" v-model="search.searchText" type="text"
                 class="search__search-post search-post form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                 placeholder="Search">
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
