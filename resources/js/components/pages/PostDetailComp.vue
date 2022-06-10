<template>
  <div>
    <h2>{{post.title}}</h2>
    <p>{{post.content}}</p>
    <p>{{post.category.name}}</p>
    <ul>
        <li v-for="item in post.tag" :key="item.id">
            {{item.name}}
        </li>
    </ul>
  </div>
</template>

<script>
export default {
    name: "PostDetailComp",
    data(){
        return{
            post: Object
        }
    },
    mounted(){
        const slug = this.$route.params.slug;
        console.log(slug);

        window.axios.get("http://127.0.0.1:8000/api/posts/" + slug).then(r => {
            this.post = r.data;
        }).catch(e => {
            console.log(e);
        })
    }

}
</script>

<style>

</style>
