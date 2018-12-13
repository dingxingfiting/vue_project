<template>
    <div>
       <div class="container" @click="handleClick">
           <img :src="movie.images.small">
           <p>{{movie.title}}</p>
       </div>
    </div>
</template>
<script>
export default {
    name:"MovieItem",
    props:{
        movie:{
            type:Object
        }
    },
    methods:{
        handleClick(){
            var id=this.movie.id;
            this.$router.push('/detail/'+id)
        }
    }
}
</script>
<style scoped>
.container img{
    width: 200px;
}
</style>


