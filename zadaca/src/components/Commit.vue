<template>
  <div class="p-2" >
    <a href="/details" @click="setCommit()">
      {{sha}}
    </a>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'Commit',
  props: {
    sha: String
  },
  methods: {
    setCommit() {
      localStorage.setItem("currentCommit",this.sha)
    },
  },
}
</script>