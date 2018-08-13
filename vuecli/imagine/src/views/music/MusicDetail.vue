<template>
    <div>
        <aplayer autoplay
            :music="{
            title: 'secret base~君がくれたもの~',
            artist: 'Silent Siren',
            src: 'https://moeplayer.b0.upaiyun.com/aplayer/secretbase.mp3',
            pic: 'https://moeplayer.b0.upaiyun.com/aplayer/secretbase.jpg'
        }"
/>
    </div>
</template>
<script>
import Aplayer from 'vue-aplayer'
export default {
    components: {
        Aplayer
    },
    data(){
        return{
            dataList:[]
        }
    },
    created(){
        this.getData()
    },
    methods:{
        getData(){
            axios.get('./data/musicdata.json')
            .then((response)=>{

            })
            .catch((response)=>{

            })
        }
    }
}
</script>

