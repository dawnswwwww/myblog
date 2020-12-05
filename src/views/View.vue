<template>
    <keep-alive>
        <div class="main">
        <div class="viewTitle">dawnswwwwww</div>
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
            min-height: 100vh;
            
            .viewTitle {
                // border-bottom: 1px solid #bbbbbb;
                font-weight: 900;
                font-size: 24px;
            }

            .lineGroup {
                .lineItem {
                    height: 2px;
                }
            }
            // background-color: red;
            .articleList {
                min-height: 100vh;
                // background-image: linear-gradient(#ffffff, rgba(26, 237, 247, 0.5) ,#ffffff);
                // background-color: #eeeeee;
                box-sizing: border-box;
                padding-top: 30px;
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
            pageSize: 10,
            pageNum: 1,
            firstEnter: true
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
                    pageNum: this.pageNum,
                    pageSize: this.pageSize
                }
            }).then((result) => {
                this.firstEnter = false
                this.pageNum += 1
                this.articleList.push(...result)
                console.log(result)
            })
        }
    },
    computed: {
        getPageSize () {
            return this.pageSize
        }
    },
    provide() {
        return {
            pageSize: () => this.pageSize
        }
    },
    mounted() {
        console.log('viewMounted')
        this.firstEnter && this.getArticleList()
        setTimeout(() => {
            console.log('pageSize changed')
            this.pageSize = 100
            console.log(this.pageSize)
        }, 5000)
    },
    beforeDestroy() {
        console.log('beforeDestroy')
    },
}
</script>