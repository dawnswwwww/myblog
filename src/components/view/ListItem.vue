<template>
    <div class="ListItemContainer" @click="skip">
        <div class="titleContainer">
            <span class="sq"></span>
            <span class="title">{{Adata.title}}</span>
        </div>
        <div class="brief">{{Adata.content}}</div>
        <!-- <div class="brief">asdasdasdasdasjajkhajasdasjhdjasdhasdkjaskdajjqubxqhbdjksabdjsabdjkasdjkhasjkdhasjkdasjkdjakshdjkashjdkashdjkksjkdashjkdsanb,asdhasjdbjabsdjbaskjbdasjbdasjkbakjsb</div> -->
    </div>
</template>
<style lang="less" scoped>
    .ListItemContainer {
        height: 180px;
        // background-color: green;
        border-bottom: 1px solid #ccc;
        border-radius: 10px;
        margin-top: 20px;
        box-shadow: 5px 5px 12px 2px;
        box-sizing: border-box;
        padding: 10px;
        display: flex;
        flex-direction: column;
        background-color: #fff;

        .titleContainer {
            // height: 30px;
            text-align: left;
            font-weight: 700;
            font-size: 48px;
            padding-left: 25px;
            border-bottom: 2px solid #ccc;
            position: relative;

            .sq {
                position: absolute;
                height: 30%;
                width: 10px;
                background-color: rgb(21, 168, 219);
                top: 50%;
                transform: translateY(-50%);
                left: 0;
            }

            .title {
                // border-bottom: 2px solid #ccc;
            }
        }

        .brief {
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
    methods: {
        skip () {
            this.$router.push({name: 'viewDetail', params: {id: this.Adata.article_id}})
        }
    },
}
</script>