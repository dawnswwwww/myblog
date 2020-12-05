<template>
    <div>
        <div class="navigaror"><span class="back" @click="back"><img class="backimg" src="../assets/test/back.png" alt=""></span></div>
        <div class="titleContainer"><h1 class="title">{{articleData.title}}</h1></div>
        <div class="contentContainer">
            <div class="content-info">
                <span class="insert-block"></span>
                <span class="info-updatetime">{{updateTime}}</span>
                </div>
            <div class="content" v-html="getMarked(articleData.content)"></div>
        </div>
    </div>
</template>
<style lang="less" scoped>
    .navigaror {
        text-align: right;
        padding: 20px 30px 0 0;

        .back {
            display: inline-block;
            width: 60px;
            height: 60px;
            
            .backimg {
                width: 100%;
                height: 100%;
            }
        }
    }

    .titleContainer {
        min-height: 120px;
        // background-color: red;
        box-sizing: border-box;
        padding: 5px 30px;
        display: flex;
        align-items: flex-end;

        .title {
            flex: 1;
            text-align: left;
            // border-bottom: 2px solid blueviolet;
        }
    }

    .contentContainer {
        box-sizing: border-box;
        padding: 5px 30px;

        .content-info {
            color: gray;
            text-align: right;
            display: flex;

            .insert-block {
                flex: 1;
                border-bottom: 4px dashed #cccccc;
            }
            
            .info-updatetime {
                font-size: 12px;
                box-sizing: border-box;
                padding: 2px 10px;
                border-bottom: 4px solid #cccccc;
            }
        }

        .content {
            text-align: left;
            // text-indent: 2em;
            word-break: break-all;
            padding: 20px 0 20px 20px;
        }
    }
</style>
<script>
import marked from 'marked'
import { markdown } from 'markdown'
import dayjs from 'dayjs'

export default {
    data() {
        return {
            id: '',
            title: 'example titleexample titleexample title',
            content: 'expample contentexpample contentexpample contentexpample contentexpample contentexpample contentexpample contentexpample contentexpample contentexpample contentexpample content',
            articleData: {}
        }
    },
    beforeMount () {
        this.id = this.$route.params.id
        this.getArtileDetail()
    },
    computed: {
        getMarked () {
            return (content) => {
                if (content) {
                    return marked(content)
                }
            }
        },
        parseMarkdown () {
            return (content) => {
                if (content) {
                    return markdown.toHTML(content)
                }
            }
        },
        updateTime( ) {
            if (this.articleData.update_time) {
                console.log(dayjs(this.articleData.update_time))
                return dayjs(this.articleData.update_time).locale('zh-cn').format('YYYY-MM-DD HH:mm:ss')
            }
        }
    },
    methods: {
        getArtileDetail () {
            this.plugins.api.request({
                url: '/api/ViewArticleDetail',
                params: {
                    id: this.id
                }
            }).then((result) => {
                console.log(result)
                this.articleData = result[0]
            })
        },
        back () {
            this.$router.back()
        }
    }
}
</script>