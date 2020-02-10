<template>
    <div class="content">
        <Top1 />
        <div>
            <div class="a1">
                <form @submit.prevent="recordF()">
                    <table>
                        <tr>
                            <td width="40%"></td>
                            <td width="60%">
                                内科<input style="width:30%;" type="radio" v-model="record.part" value="内科" required />
                                外科<input style="width:30%;" type="radio" v-model="record.part" value="外科" required />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>病痛情况：</p>
                            </td>
                            <td><input type="text" v-model="record.state" required /></td>
                        </tr>
                        <tr>
                            <td>
                                <p>症状发生日期：</p>
                            </td>
                            <td>
                                <input type="date" v-model="record.time" required />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>近几日饮食：</p>
                            </td>
                            <td><input type="text" v-model="record.diet" /></td>
                        </tr>
                        <tr>
                            <td>
                                <p>有无就医：</p>
                            </td>
                            <td><input type="text" v-model="record.remedy" required /></td>
                        </tr>
                    </table>
                    <div style="text-align:center;font-size:22px;font-weight:600;margin-top:10px;"><input type="submit" style="width:80%;height:40px;margin-top:15px;color:#fff;border:none;background:#ff9b00;" /></div>
                    <div v-if="submit_ok">
                        <div class="zhe_zhao" style=""></div>
                        <div style="position:fixed;top:50%;left:50%;transform: translate(-50%,-50%);z-index: 9;color:#fff;font-size:24px;font-weight:600;">成功</div>
                    </div>
                </form>
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
        data(){
            return {
                record:{
                    part:'',
                    state:'',
                    time:'',
                    diet:'',
                    remedy:'',
                },
                submit_ok:0
            }
        },
        methods:{
            recordF()
            {
                let cTime = new Date(this.record.time);
                this.record.time=cTime.getTime()/1000;
                this.Data.postStore(this.record).then(()=>{
                    this.submit_ok = 1;
                    setTimeout(()=>{
                        this.submit_ok = 0;
                    }, 1000);
                });
            }
        },
        mounted(){
        }
    }
</script>
<style scoped lang="scss">
    .a1{
        font-size:16px;
        table{
            margin-top:20px;
            text-align:left;
            border:none;
            tr{
                border:none;
            }
            td{
                border:none;
            }
            p{
                padding:10px;
            }
            input{
                width:97%;
                border:solid 1px #eee;
            }
        }
    }
</style>
