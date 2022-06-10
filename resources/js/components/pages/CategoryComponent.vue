<template>
  <div>
    <ul>
        <li v-for="cat in categories" :key="cat.id">
            {{cat.name}}
        </li>
    </ul>
  </div>
</template>

<script>
export default {
    data(){
        return{
            categories: Object
        }
    },
    mounted(){
        window.axios.get("http://127.0.0.1:8000/api/categories").then(r => {
            this.categories = r.data;
        }).catch(e => {
            console.log(e);
        })
    }

}
</script>

<style>

</style>
