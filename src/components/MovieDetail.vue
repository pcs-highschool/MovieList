<template>
  <div>
    <img :src="this.$MovieList[this.$route.params.movieTitle].img">
    <p>{{this.$MovieList[this.$route.params.movieTitle].number}}</p>
    <p>{{this.$MovieList[this.$route.params.movieTitle].title}}</p>
    <p>{{this.$MovieList[this.$route.params.movieTitle].actors}}</p>
    <p>{{this.$MovieList[this.$route.params.movieTitle].releaseDate}}</p>
    <router-link :to="{name : 'ListPage'}">목록으로</router-link>
  </div>
</template>

<script>
export default {
}
</script>

<style>

</style>
