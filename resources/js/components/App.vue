<template>
<header>
    <Header/>
    <router-view></router-view>
</header>

</template>

<script>
import Header from "./Header.vue";

export default {
    name: "App",
    components:{
        Header
    }
}
</script>

<style>

</style>
