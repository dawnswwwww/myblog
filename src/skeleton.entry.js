import Vue from 'vue'
import Skeleton from './views/Skeleton.vue'

export default new Vue({
    name: 'skeleton',
    components: {
        Skeleton
    },
    template:  `
    <div>
    <skeleton id="home" style="display:none"/>
    </div>
    `
})