<template>
    <div class="a1">
        <div class="b1">
            <div class="logo">
                <img src="http://a1.a/img/logo.jpg" />
                <p class="des1">火神山健康助手</p>
                <p class="des2">记录你的健康，祝您一生平安</p>
            </div>
        </div>
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
        width: 100%;
        height:120px;
        text-align: center;
        border-bottom:solid 10px #eee;
        background:#1494ea;
        .b1{
            position:relative;
            width:95%;
            height:100%;
            margin:auto;
            .logo{
                position:absolute;
                height:50px;
                top: 30%;
                left:50%;
                transform: translate(-50%,-50%);
                font-size:12px;
                img{
                    height:100%;
                }
                .des1{
                    font-size:14px;
                    font-weight:800;
                    color:#fff;
                }
                .des2{

                    color:#fff;
                }
            }
        }
    }
</style>
