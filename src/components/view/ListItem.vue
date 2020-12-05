<template>
    <div class="ListItemContainer">
        <div class="line"></div>
        <div class="contentContainer">
            <div class="titleContainer">
            <span class="circle"></span>
            <span class="title" @click="skip">{{Adata.title}}</span>
        </div>
        <div class="brief">{{Adata.content}}</div>
        </div>
    </div>
</template>
<style lang="less" scoped>
    .ListItemContainer {
        height: 180px;
        // background-color: green;
        // border-bottom: 1px solid #ccc;
        // border-radius: 10px;
        // box-shadow: 1px 1px 1px;
        box-sizing: border-box;
        position: relative;
        padding-left: 30px;
        display: flex;
        flex-direction: column;
        background-color: #fff;

        .line {
            position: absolute;
            height: 100%;
            width: 5px;
            background-color: black;
        }

        &:first-child {
            .line {
                // height: 50%;
                bottom: 0;
            }
        }

        &:last-child {
            .line {
                height: 0;
                top: 0;
            }
        }

        .contentContainer {
            // position: relative;
            // top: 50%;
            // transform: translateY(-30px);
        }

        .titleContainer {
            // height: 30px;
            text-align: left;
            font-weight: 700;
            font-size: 36px;
            padding-left: 25px;
            // border-bottom: 2px solid #ccc;
            position: relative;

            .circle {
                position: absolute;
                height: 30px;
                width: 30px;
                border-radius: 50%;
                background-color: white;
                border: 5px solid black;
                // top: 50%;
                // transform: translateY(-50%);
                left: -18px;    
            }

            .title {
                padding-left: 10px;
                // border-bottom: 2px solid #ccc;
            }
        }

        .brief {
            padding-left: 25px;
            margin-top: 15px;
            max-height: 120px;
            text-align: left;
            text-indent: 20px;
            word-break: break-all;
            text-overflow: ellipsis;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            padding-bottom: 10px;
            font-size: 12px;
        }
    }
</style>
<script>
export default {
    props: {
        Adata: {
            required: true
        }
    },
    inject:['pageSize'],
    methods: {
        skip (e) {
            console.log(this.pageSize())
            // this.$router.push({name: 'viewDetail', params: {id: this.Adata.article_id}})
            // this.$router.push('/login')
        }
    },
    mounted() {
        console.log(this.pageSize())
    },
}
</script>