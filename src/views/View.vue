<template>
    <keep-alive>
        <div class="main">
        <div class="viewTitle">view page</div>
        <div class="lineGroup">
            <!-- <div class="lineItem" :style="`backgroundColor: rgba(26, 237, 247, ${1 - index / 1000})`" v-for="(item, index) in 999" :key="index"></div> -->
             <!-- <div class="lineItem" style="backgroundColor: rgba(26, 237, 247, 0.8)"></div> -->
            <!-- <div class="lineItem" style="backgroundColor: rgba(26, 237, 247, 0.6)"></div> -->
            <!-- <div class="lineItem" style="backgroundColor: rgba(26, 237, 247, 0.4)"></div> -->
            <!-- <div class="lineItem" style="backgroundColor: rgba(26, 237, 247, 0.2)"></div> -->
            <!-- <div class="lineItem" style="backgroundColor: rgba(26, 237, 247, 0.2)"></div> -->
        </div>
        <div class="articleList">
            <ListItem
                v-for="(item, index) in articleList"
                :key="index"
                :Adata="item"
            ></ListItem>
        </div>
    </div>
    </keep-alive>
</template>
<style lang="less" scoped>
    @media screen and (max-width: 780px){
        .main {
            
            .viewTitle {
                border-bottom: 3px solid #bbbbbb;
            }

            .lineGroup {
                .lineItem {
                    height: 2px;
                }
            }
            // background-color: red;
            .articleList {
                background-image: linear-gradient(#ffffff, rgba(26, 237, 247, 0.5) ,#ffffff);
                box-sizing: border-box;
                padding: 0 20px;
            }
        }
    }

    @media screen and (min-width: 780px){
        .main {
            // background-color: blue;
        }
    }
</style>
<script>
import ListItem from '@/components/view/ListItem.vue'
export default {
    data() {
        return {
            articleList: [],
            pageSize: 10
        }
    },
    components: {
        ListItem
    },
    methods: {
        getArticleList() {
            this.plugins.api.request({
                url: '/api/ViewArticleList',
                params: {
                    pageNum: 1,
                    pageSize: this.pageSize
                }
            }).then((result) => {
                this.articleList = result
                console.log(result)
            })
        }
    },
    mounted() {
        console.log('viewMounted')
        this.getArticleList()
    }
}
</script>