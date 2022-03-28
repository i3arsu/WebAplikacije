<template>
  <div class="card">
    <div class="card-header text-left">Featured</div>
    <div class="card-body p-0">
      <img
        class="card-img-top"
        src="https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f469-200d-1f4bb.svg"
        alt="Čovjek sa zlatnim zubima"
      />
    </div>
    <div class="card-footer text-muted text-left"></div>
  </div>
</template>

<script>
export default {
  name: "InstagramCard",
  props: {
    msg: String,
  },
};
</script>
