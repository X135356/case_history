<template>
    <div class="content">
        <Top1 />
        <div>
            <div class="cc">
                <p>抢完啦</p>
            </div>
        </div>
        <Bottom />
    </div>
</template>

<script>
    import Top1 from '@/components/Top'
    import Bottom from '@/components/Bottom'

    export default {
        name: 'home',
        components: {
            Top1,
            Bottom,
        },
        mounted(){
        }
    }
</script>
<style scoped lang="scss">
    .cc{
        p{
            margin:20px;
            text-align:center;
            font-size:14px;
            font-weight:500;
        }
    }
</style>
