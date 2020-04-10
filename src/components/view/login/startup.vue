<template>
    <div class="startup">
        <div class="bkhimg">
            <img src="../../../../static/img/bkh@2x.png" />
        </div>
        <p class="copyright"><img src="../../../../static/img/Copyright@2x.png" /></p>
        
    </div>
</template>
<style lang="less" scoped>
 @import "../../../assets/css/public.less";

    .startup{
        .fullscreen;
        .bkhimg{
            position: absolute;
            top:35%;
            left: 50%;
            transform: translate(-50%);
            img{
                width: 8.5rem;
            }
        }
        .copyright{
            text-align: center;
            text-align: center;
            position: absolute;
            left: 0;
            right: 0;
            bottom: 16px;
            img{
                 width: 8.4rem;
            }
           
        }
    }
</style>