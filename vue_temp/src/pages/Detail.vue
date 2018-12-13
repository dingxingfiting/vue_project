<template>
  <div id="container">
    <img :src="imgUrl" >
    <p>{{title}}</p>
  </div>
</template>
<script>
import { MovieModel } from "../models/MovieModel.js";
const movieModel = new MovieModel();
export default {
  name: "Detail",
  data() {
    return {
      imgUrl: "",
      title: ""
    };
  },
  mounted() {
    /* 接受参数 */
    var id = this.$route.params.id;
    movieModel.getDetail(id).then(res => {
      var title = res.title;
      var imgUrl = res.images.small;
      this.title = title;
      this.imgUrl = imgUrl;
    });
  }
};
</script>
<style scoped>
#container{
    text-align: center;
}
</style>


