<template>
        <div>
          <div v-for="item in list" v-bind:key="item.id">
            
            <p>{{item}}</p>
          
          </div>
        </div>
</template>

<script>
import axios from "axios";

export default {
    name:"ApiCall",
    data(){
      return {list:undefined}
    },
    mounted(){
        axios.get("https://api.github.com/repos/vuejs/vue/commits")
        .then((resp)=>{
            this.list=resp.data;
            console.log(resp)
        })

    },
}
</script>