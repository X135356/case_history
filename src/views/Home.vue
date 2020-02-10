<template>
    <div class="content">
        <Top1 />
        <div>
            <div class="a1">
                <ul class="block" style="background:#0a6999;">
                    <a href="/record">
                        <li class="left"><i class="iconfont_ch">&#xe62a;</i></li>
                        <li class="centre">我的健康情况</li>
                        <li class="right"><i class="iconfont_ch">&#xe676;</i></li>
                    </a>
                </ul>
                <ul class="block" style="background:#0aaa99;">
                    <a href="/record_editor">
                        <li class="left"><i class="iconfont_ch">&#xe62a;</i></li>
                        <li class="centre">记录我的不舒服</li>
                        <li class="right"><i class="iconfont_ch">&#xe66a;</i></li>
                    </a>
                </ul>
                <ul class="block" style="background:#aa6999;">
                    <a href="/hot1">
                        <li class="left"><i class="iconfont_ch">&#xe62a;</i></li>
                        <li class="centre">口罩免费领</li>
                        <li class="right"><i class="iconfont_ch">&#xe667;</i></li>
                    </a>
                </ul>
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
        }
    }
</script>
<style scoped lang="scss">
    .a1{
        .block{
            width:90%;
            height:80px;
            line-height:80px;
            margin:10px auto;
            text-align:center;
            border-radius:10px;
            color:#fff;
            .left{
                width:10%;
                float:left;
            }
            .centre{
                width:60%;
                float:left;
                font-size:16px;
            }
            .right{
                width:30%;
                float:right;
                .iconfont_ch{
                    font-size:48px;
                }
            }
        }
    }
</style>
