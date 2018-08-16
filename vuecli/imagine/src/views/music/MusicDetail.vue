<template>
    <div>
        <aplayer v-if="isif" autoplay
            :music="dataList[0]"
            :list="dataList"
            :showLrc="true"
/>
    </div>
</template>
<script>
import Aplayer from 'vue-aplayer'
import axios from 'axios'
export default {
    components: {
        Aplayer
    },
    data(){
        return{
            isif:false,
            dataList:[]
        }
    },
    created(){
        this.getData();
    },
    methods:{
        getData(){
            axios.get('./data/musicdata.json')
            .then((response)=>{
                this.dataList=response.data.musicData;
                this.isif=true;

                for (var i=0;i<response.data.musicData.length;i++) {
                    this.dataList[i].lrc=location.origin+location.pathname+response.data.musicData[i].lrc;
                    // console.log(this.dataList[i].lrc);
                    
                }
            })
            .catch(()=>{

            })
        }
    }
}
</script>

