
<template>
    <footer class="app-footer">
       
        <router-link exact active-class="actived" class="nav-item" :to="nav.path" v-for = " nav in navs " :key = "nav.id">                
            <i  class="fa" :class="'fa-' + nav.icon"></i>
            {{ nav.title }}             
        </router-link>
            

    </footer>
</template>

<script>
import { Tabbar, TabItem } from "mint-ui";
export default {
  data() {
    return {
      selected: null,
      navs: [
        { id: 1, title: "首页", path: "/", icon: "home" },
        { id: 2, title: "购物车", path: "/buycar", icon: "shopping-cart" },
        { id: 3, title: "我的", path: "/mine", icon: "user" }
      ]
    };
  },
  name: "app-footer"
};
</script>

<style lang="scss" >
    .app-footer {
        display: flex;
        position: fixed;
        width: 100%;
        bottom: 0;
        height: 50px;
        .nav-item {
            flex-grow: 1;
            display: flex;
            flex-flow: column;
            justify-content: space-around;
            align-items: center;

            i {
                font-size: 20px;
            }

            &.actived {
                color: deeppink;
            }
        }
    }
</style>

