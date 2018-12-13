<template>
  <div id="home">
    <p>hello world</p>
    <movie-item v-for="(item,index) of movies" :key="index" :movie="item"></movie-item>
  </div>
</template>
<script>
import { MovieModel } from "../../models/MovieModel";
const movieModel = new MovieModel();
import MovieItem from "./components/item";
export default {
  data(){
    return{
      movies:[]
    }

  },
  mounted() {
    movieModel.getTop250().then(res => {
      var subjects=res.subjects;
      this.movies=subjects;
    })
  },
  components: {
    MovieItem
  }
};
</script>
<style>
</style>



