<template>
  <div class="p-2">
    <p>
      {{commit.commit.author.name}}
    </p>
    <p>
      {{commit.commit.author.email}}
    </p>
    <p>
      {{commit.commit.author.date}}
    </p>
    <p>
      {{commit.commit.message}}
    </p>
    <a :href="commit.html_url">
      {{commit.html_url}}
    </a>
    <div>
      <button onclick="location.href='/'">
        Back
      </button>
    </div>
  </div>
</template>

<script>
import DataService from '@/store.js'
export default {
  name: 'DetailView',
  data() {
    return {
      commit : {}
    }
  },
  created() {
    DataService.getData().then((data) => {this.commit = data.find(
          (com) => com.sha === localStorage.getItem("currentCommit")
        );})
  }
}
</script>

<style lang="scss">
  .username {
    display: inline; 
    margin-left: 1rem;
  }
</style>