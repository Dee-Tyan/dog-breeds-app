<template>
  <div>

    <div v-if="loading" class="text-base font-bold px-4">Loading Image...</div>
    <div v-else class="px-4 my-8">
    <img :src="dogImage" />
     <h1 class="text-4xl font-bold">{{dogName.toUpperCase()}}</h1>
    </div>
  </div>

  <router-link to="/" class="text-sm font-bold ml-4"> Back to Home</router-link>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      dogName: "",
      dogImage: '',
      loading: true,
    };
  },
  created() {
    const breed = this.$route.params.breed;
    axios.get(`https://dog.ceo/api/breed/${breed}/images/random`)
      .then(response => {
        this.dogName = breed;
        this.dogImage = response.data.message;
        this.loading = false;
      })
      .catch(error => {
        console.error(error);
      });
  },
};
</script>