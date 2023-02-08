<template>
  <div class="border">
    <Header title="The Dog Finder" />
    <div
      class="
        flex
        gap-2
        text-sm
        sm:text-base
        px-2
        sm:px-4
        border
        sm:w-1/2
        border-black
        mx-4
        rounded-md
        mb-4
      "
    >
      <input
        type="text"
        v-model="searchTerm"
        class="w-3/4 px-2 rounded"
        placeholder="e.g hound"
      />
      <button
        @click="search"
        class="text-white bg-black px-4 py-2 rounded my-2"
      >
        Search By Breed
      </button>
    </div>
    <div v-if="loading" class="text-base font-bold px-4">Loading Images...</div>
    <ul v-else>
      <li v-for="(image, index) in filteredImages" :key="index">
        <img
          :src="image"
          @click="showDetails(image)"
          class="object-cover h-48 w-96"
        />
      </li>
    </ul>
  </div>
</template>
  
  <script>
import axios from "axios";
import Header from "../components/Header.vue";

export default {
  name: "HomePage",
  data() {
    return {
      images: [],
      searchTerm: "",
      filteredImages: [],
      loading: true,
      cache: {},
      error: "",
    };
  },

  components: {
    Header,
  },

  created() {
    if (!this.cache["images"]) {
      axios
        .get("https://dog.ceo/api/breeds/image/random/100")
        .then((response) => {
          this.images = response.data.message;
          this.filteredImages = response.data.message;
          this.loading = false;
          this.cache["images"] = response.data.message;
        })
        .catch((error) => {
          console.error(error);
          this.loading = false;
        });
    } else {
      this.images = this.cache["images"];
      this.filteredImages = this.cache["images"];
      this.loading = false;
    }
  },
  methods: {
    showDetails(dog_link) {
      console.log(dog_link);
      let breed = dog_link.split("/")[4];
      this.$router.push({ name: "dog-details", params: { breed } });
    },

    search() {
        this.loading = true;
      axios
        .get(`https://dog.ceo/api/breed/${this.searchTerm}/images`)
        .then((response) => {
          this.images = response.data.message;
          this.filteredImages = response.data.message;
          this.loading = false;
          this.cache["images"] = response.data.message;
          
          
        }).catch(error => {
            this.loading = false;
            this.error = error.message;
        });
    },
  },
};
</script>
  
  
  <style>
img[v-lazy] {
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}

.container {
  display: grid;
  place-items: center;
}

li {
  display: inline-block;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 20%;
  padding: 10px;
}

@media (max-width: 1199px) {
  li {
    width: 25%;
  }
}

@media (max-width: 767px) {
  li {
    width: 50%;
  }

  img {
    height: 150px;
  }
}
</style>
  