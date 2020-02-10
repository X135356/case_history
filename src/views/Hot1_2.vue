<template>
    <div class="content">
        <Top1 />
        <div>
            <div class="cc">
                <p>参与成功，<span style="font-size:16px;color:#FE6714;font-weight:800;">分享给朋友</span>一起领取(获得口罩几率会更大)</p>
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
