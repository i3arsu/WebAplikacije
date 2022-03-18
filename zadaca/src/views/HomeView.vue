<template>
        <div>
          <table>
            <th>Testing</th>
            <tr>Nesto</tr>
            <tr v-for="item in list" v-bind:key="item.id">
              <td>{{item[0]}}</td>
            </tr>
          </table>
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
            this.list=resp.data.data;
            console.log(resp)
        })

    },
}
</script>