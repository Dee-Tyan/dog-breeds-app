<template>
  <div>
    <h1>{{ dogName }}</h1>
    <img :src="dogImage" />
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: {
    images: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      dogName: '',
      dogImage: '',
    };
  },
  created() {
    const index = this.$route.params.index;
    axios.get(`https://dog.ceo/api/breed/${this.images[index]}/images/random`)
      .then(response => {
        this.dogName = this.images[index];
        this.dogImage = response.data.message;
      })
      .catch(error => {
        console.error(error);
      });
  },
};
</script>
