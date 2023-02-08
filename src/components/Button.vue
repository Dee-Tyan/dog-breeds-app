<template>
    <button
        @click={{command}}
        class="text-white bg-black px-4 py-2 rounded my-2"
      >
        {{text}}
      </button>
</template>



<script>
export default {
    name: "ButtonItem",
    props: {
        command: String,
        text: String,
    }
}
</script>