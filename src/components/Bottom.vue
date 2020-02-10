<template>
    <div class="a1">
        <table class="bottom">
            <tr>
                <td>
                    <a href="/">
                        <i class="iconfont_ch">&#xe608;</i>
                        <p>首页</p>
                    </a>
                </td>
                <td>
                    <a href="/record">
                        <i class="iconfont_ch">&#xe6b3;</i>
                        <p>健康状况</p>
                    </a>
                </td>
                <td>
                    <a href="/user">
                        <i class="iconfont_ch">&#xe658;</i>
                        <p>个人中心</p>
                    </a>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        props: {
            msg: String
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .a1{
        position:fixed;
        width: 100%;
        height:65px;
        bottom:0;
        text-align: center;
        background:#eee;
        .bottom{
            width:100%;
            td{
                width:33.3%;
            }
        }
    }
</style>
