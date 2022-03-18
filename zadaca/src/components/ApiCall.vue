<template>
    <div>
        <h1>Test</h1>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name:"ApiCall",
    mounted(){
        axios.get("https://api.github.com/repos/vuejs/vue/commits")
        .then((resp)=>{
            console.log(resp)
        })

    },
}
</script>