<template>
  <div>
    <div>
      <slot name="title"></slot>
      <p>I am the child component!</p>
      <slot v-if="shouldShowContent" name="content"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props : {
      shouldShowContent: {
        type: Boolean,
        default: false
      }
    }
  }
</script>
