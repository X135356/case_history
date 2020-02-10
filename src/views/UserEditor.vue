<template>
    <div class="content">
        <Top1 />
        <div>
            <div class="a1">
                <ul style="margin-top:30px;">
                    <li style="position:relative;width:150px;height:150px;margin:auto;overflow:hidden;border-radius:50%;background:#eee;"><!--<i class="iconfont_ch" style="position:absolute;top:50%;left:50%;transform: translate(-50%,-50%);color:#000;font-size:48px;">&#xe66a;</i><div style="position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.6);"></div>--><img style="width: 100%;" src="http://a1.a/img/logo.jpg" /></li>
                    <li style="text-align:center;font-size:22px;font-weight:600;margin-top:10px;">名称：<input type="text" name="name" /></li>
                    <li style="text-align:center;font-size:22px;font-weight:600;margin-top:10px;"><input type="submit" style="width:80%;height:40px;margin-top:15px;color:#fff;border:none;background:#ff9b00;" /></li>
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
