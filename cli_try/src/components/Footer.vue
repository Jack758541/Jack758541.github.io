<template>
    <div class="footer">
       <div class="train">
           <div class="locomotive">
           </div>
           <div class="carriage">
           </div>       
       </div>
       <div class="rail">
           <div v-for="index in n" :key="index">
           </div>    
       </div>        
    </div>
</template>

<script>
    export default {
        name: 'Footer',
        props: {
            msg: String
        },
        data(){
            return{
                n: 25
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .footer{
        position: absolute;
        width: 100%;
        height: 10%;
        bottom: 0%;
        background-color: #00fb00d4;
    }
    .rail{
        position: absolute;
        background-color: #940202;
        width: 100%;
        height: 30%;
        bottom: 5%;
        display: flex;
        align-items: flex-end;
        >div{
            display: inline-block;
            width: 3%;
            height: 40%;
            margin: 0 0.5%;
            background-color: #00fb00d4;
        }
    }
</style>
