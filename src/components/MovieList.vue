<template>
    <div>
        <ul>
            <li v-for="(movie, index) in this.$MovieList" :key="index">
              <router-link :to="{name : 'DetailPage', params : {movieTitle : index}}">
                {{movie.title}}
              </router-link>
            </li>
          </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>