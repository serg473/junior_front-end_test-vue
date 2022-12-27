<template>
  <div class="search">
    <h2 class="search_title title mb-30 text-center text-4xl font-extrabold black ">Search Post</h2>
    <div class="search_group-block flex justify-center">
      <div class="search_container mb-3 xl:w-96">
        <div class="search__input-group relative flex items-stretch w-full mb-4">
          <input :value="SearchAPI.search.searchText" type="search"
                 class="search__search-post search-post form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                 placeholder="Search">
          <button @click="SearchAPI.search()"
                  class="search__post post ml-10 btn inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center"
                  type="button" id="button-addon2">
            <img src="../assets/search.svg" alt="">
          </button>
          <button @click="SearchAPI.getPosts()"
                  class="search__clear clear ml-10 btn inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center"
                  type="button" id="button-addon2">
            Clear Results
          </button>
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
  img{
    width: 30px;
    height: 30px;
  }
</style>
