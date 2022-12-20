import {defineStore} from "pinia";
import axios from "axios";

export const useStoreSocialApp = defineStore('SocialApp', {
    state: () => ({
        posts: []
    }),
    getters: {
        getStates(state) {
            return state.posts
        }
    },
    actions: {
        getPosts() {
            axios.get('https://dummyjson.com/posts').then(res => {
               this.posts = res.data.posts
            })

        }
    },
})