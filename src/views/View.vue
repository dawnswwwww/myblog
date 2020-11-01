<template>
    <div class="main">
        view page
        <div class="articleList">
            <li
                v-for="(item, index) in articleList"
                :key="index"
            >{{item.content}}</li>
        </div>
    </div>
</template>
<style lang="less" scoped>
    @media screen and (max-width: 780px){
        .main {
            background-color: red;
        }
    }

    @media screen and (min-width: 780px){
        .main {
            background-color: blue;
        }
    }
</style>
<script>
export default {
    data () {
        return {
            articleList: []
        }
    },
    methods: {
        getArticleList () {
            this.plugins.api.request({
                url: '/api/ViewArticleList',
                params: {
                    pageNum: 1,
                    pageSize: 5
                }
            }).then((result) => {
                this.articleList = result
                console.log(result)
            })
        }
    },
    mounted () {
        console.log('viewMounted')
        this.getArticleList()
    }
}
</script>