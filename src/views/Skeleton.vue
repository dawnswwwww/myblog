<template>
    <div>
        <div class="skeleton-contaniner">
            <div class="title" style="background-image: radial-gradient(#ccc 5%, #fff 84%, white 11%);height: 40px">123</div>
            <div class="list">
                <div class="listItem"
                    v-for="(item, index) in 6"
                    :key="index"
                    style="display: flex; align-items: center;height: 100px;padding-left: 10px"
                >
                    <div class="circle" style="width: 20px; height: 20px;background-image: radial-gradient(#ccc 5%, #fff 94%, white 1%);border-radius: 50%"></div>
                    <div class="content" style="width: 80%;height: 20px;background-image: radial-gradient(#ccc 5%, #fff 94%, white 1%); margin-left: 10px"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="less">
    .skeleton-contaniner {
        .title {
            background-color: gray;
            background-image: linear-gradient(white, #fff ,white);
            text-align: center;
        }
    }
</style>
<script>
export default {}
</script>