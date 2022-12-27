import {defineStore} from "pinia";
import axios from "axios";

export const useStoreSocialApp = defineStore('SocialApp', {
    state: () => ({
        posts: [],
        dataPost: {
            title: '',
            body: '',
        },
        reqPost: false,
        reqComments: false,
        likes: 0,
        postsItem: [],
        comment: [],
        search: {
            searchText: '111'
        }

    }),
    actions: {
        getPosts() {
            axios.get('https://dummyjson.com/posts').then(res => {
                this.posts = res.data.posts
            })

        },
        addPost() {
            axios.post('https://dummyjson.com/posts/add', {
                userId: 5,
                title: this.dataPost.title,
                body: this.dataPost.body
            }).then(response => {
                this.posts.unshift(response.data)
            })
            this.dataPost.title = "";
            this.dataPost.body = "";
        },
        getPostId(id) {
            axios.get(`https://dummyjson.com/posts/` + id)
                .then(res => {
                    this.postsItem = res.data
                })
            axios.get(`https://dummyjson.com/posts/${id}/comments`)
                .then(res => {
                    this.comment = res.data.comments
                })
        },
        search() {
            axios.get(`https://dummyjson.com/posts/search?q=` + this.search.searchText)
                .then(res => {
                    this.posts = res.data.posts
                    this.search.searchText = ''
                })
        },

    },
})
