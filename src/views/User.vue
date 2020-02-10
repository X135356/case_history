<template>
    <div class="content">
        <Top1 />
        <div>
            <div class="a1">
                <ul style="margin-top:30px;">
                    <li style="width:150px;height:150px;margin:auto;overflow:hidden;border-radius:50%;background:#eee;"><img style="width: 100%;" src="http://a1.a/img/logo.jpg" /></li>
                    <li style="text-align:center;font-size:22px;font-weight:600;margin-top:10px;">名称</li>
                </ul>
                <ul class="block" style="background:#aa6999;">
                    <a href="/user_editor">
                        <li class="left"><i class="iconfont_ch">&#xe62a;</i></li>
                        <li class="centre">修改个人资料</li>
                        <li class="right"><i class="iconfont_ch">&#xe905;</i></li>
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
        },
        mounted(){
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
