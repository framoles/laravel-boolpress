<template>
  <div>
      <ul>
          <li v-for="(menu,index) in navMenu" :key="index">
            <router-link :to="{name: menu.path}">{{menu.label}}</router-link>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    name: "Header",
    data(){
        return{
            navMenu : [
                {
                    path: "home",
                    label: "Home"
                },
                {
                    path: "contacts",
                    label: "Contatti"
                },
                {
                    path: "post",
                    label: "Visualizza i post"
                }
            ]
        }
    }
}
</script>

<style>

</style>
