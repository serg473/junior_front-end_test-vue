import {defineStore} from "pinia";
import axios, {post} from "axios";


interface  SocialState {
    posts: Array<any>,
    loader: boolean,
    dataPost: {
        title: string | number,
        body: string | number,
    },
    likes: number,
    reqPost: boolean,
    reqComments: boolean,
    postsItem: Array<any>,
    comment: Array<any>,
    search: {
        searchText:string | number
    }
}
export const useStoreSocialApp = defineStore({
    id: 'SocialApp',
    state: (): SocialState =>({
        posts: [],
        loader: false,
        dataPost: {
            title: '',
            body: '',
        },
        likes: 0,
        reqPost: false,
        reqComments: false,
        postsItem: [],
        comment: [],
        search: {
            searchText:''
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
        getPostId(id:number) {
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
                    console.log(res.data)
                    this.posts = res.data.posts
                    this.search.searchText = ''
                })
        },
        searchQuery(event) {
            this.search.searchText = event.target.value;
            this.search()
        },

    }
})
