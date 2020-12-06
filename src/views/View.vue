<template>
    <keep-alive>
        <div class="main" @scroll="scroll">
        <div :class="['viewTitle']">dawnswwwwww</div>
        <transition name="titleFixed">
        <!-- <div :class="['viewTitle', titleFixed ? 'fixed' : '']" v-show="titleFixed">dawnswwwwww</div> -->
        </transition>
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
        <div class="bottom" v-if="bottom">已经到底啦</div>
    </div>
    </keep-alive>
</template>
<style lang="less" scoped>
    @media screen and (max-width: 780px){
        .main {
            min-height: 100vh;
            height: 100vh;
            overflow-y: auto;
            overflow-x: hidden;
            
            .viewTitle {
                // border-bottom: 1px solid #bbbbbb;
                font-weight: 900;
                font-size: 24px;

                &.fixed {
                    position: fixed;
                    top: 0;
                    height: 30px;
                    width: 100%;
                    z-index: 999;
                    background-color: #fff;
                    border-bottom: 1px solid black;


                }

                .titleFixed-enter-active .fade-leave-active {
                        transition: opacity 1s;
                }
            }

            .lineGroup {
                .lineItem {
                    height: 2px;
                }
            }
            // background-color: red;
            .articleList {
                // min-height: 100vh;
                // background-image: linear-gradient(#ffffff, rgba(26, 237, 247, 0.5) ,#ffffff);
                // background-color: #eeeeee;
                box-sizing: border-box;
                padding-top: 30px;
            }

            .bottom {
                color: gray;
                font-size: 12px;
                padding-bottom: 10px;
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
            firstEnter: true,
            requestFlag: false,
            bottom: false,
            titleFixed: false
        }
    },
    components: {
        ListItem
    },
    methods: {
        getArticleList() {
            if (this.bottom && this.requestFlag) return
            this.requestFlag = true
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
                if (result.length < this.pageSize) {
                    this.bottom = true
                }
                this.requestFlag = false
            })
        },
        scroll (e) {
            // console.log(e)
            // console.log(e.target.scrollHeight)
            if (e.target.scrollTop >=  e.target.scrollHeight - e.target.clientHeight - 100) {
                console.log('reach botoom')
                this.getArticleList()                
            }
            this.titleFixed = (e.target.scrollTop > 100 ? true : false)
        }
    },
    computed: {
        getPageSize () {
            return this.pageSize
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