<template>
  <div>
    <Commit v-for="com in this.commits" :key="com" :sha="com.sha"/>
  </div>
</template>

<script>
import Commit from '@/components/Commit.vue'
import DataService from '@/store.js'
// @ is an alias to /src
export default {
  name: 'HomeView',
  components: {Commit},
  data() {
    return {
      commits : []
    }
  },
  created() {
    DataService.getData().then((value) => {this.commits = value})
  }
}
</script>