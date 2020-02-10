<template>
    <div class="content">
        <Top1 />
        <div>
            <div class="a1">
                <h1 style="text-align:center;margin-top:20px;">每天晚上9点开始抢口罩。每天赠送500个口罩，每人最多能领取5个口罩。邮费自付。</h1>
                <!--<form action="/hot1_3">-->
                    <!--<table>
                        <tr>
                            <th width="40%">
                                <p>姓名：</p>
                            </th>
                            <td width="60%"><input type="text" name="name"></td>
                        </tr>
                        <tr>
                            <th>
                                <p>电话：</p>
                            </th>
                            <td>
                                <input type="text" name="phone">
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <p>地址：</p>
                            </th>
                            <td><input type="text" name="address"></td>
                        </tr>
                    </table>-->
                    <div style="text-align:center;font-size:22px;font-weight:600;margin-top:10px;"><a href="/hot1_2" style="display:inline-block;width:80%;height:40px;line-height:40px;margin-top:15px;color:#fff;border:none;background:#ff9b00;">点击领取</a></div>
                    <div style="text-align:center;font-size:22px;font-weight:600;margin-top:10px;"><a href="/hot1_3" style="display:inline-block;width:80%;height:40px;line-height:40px;margin-top:15px;color:#fff;border:none;background:#0aaa99;">分享给朋友一起领取</a></div>
                <!--</form>-->
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
        table{
            margin-top:20px;
            p{
                padding:3px;
            }
            input{
                width:97%;
                padding:3px;
                border:solid 1px #eefefe;
            }
        }
    }
</style>
