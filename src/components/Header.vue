<template>
    <h1 class="text-6xl sm:text-8xl font-extrabold text-center my-8">
      {{title}}
    </h1>
</template>


<script>
export default {
  name: "HeaderItem",
  props: {
    title: String,
  }
};
</script>