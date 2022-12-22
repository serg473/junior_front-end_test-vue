import {createRouter, createWebHashHistory} from "vue-router";
import SoloPostItem from './components/SocialAppPosts/SoloPostItem/SoloPostItem.vue';

export default createRouter({
    history: createWebHashHistory(),
    routes:[
        {path:'/postsItem', component:SoloPostItem},
    ]
})
