<template>
  <div>{{getPost()}}</div>
</template>

<script>
export default {
    name: "PostComponent",
    data(){
        return{
            allPost: Array
        }
    },
    mounted(){
        window.axios.get("http://127.0.0.1:8000/api/posts").then(r => {
            this.allPost = r.data;
        }).catch(e => {
            console.log(e);
        })
    },
    methods:{
        getPost(){
            return this.allPost;
        }
    }

}
</script>

<style>

</style>
