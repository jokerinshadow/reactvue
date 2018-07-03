<template>
    <div>
        <router-view></router-view>
        <app-footer></app-footer>
    </div>
</template>

<script>
import AppFooter from '../../commons/Footer/Footer'
import { mapState } from 'vuex'
export default {
    name: 'Home',
    computed: {
        ...mapState({
            userInfo: state => state.commons.userInfo
        })
    },
    //当路由属性变化的时候，路由组件就能得知
    beforeRouteUpdate (to, from, next) {
        //路由钩子，当路由属性变化的时候执行
        //当要从login或者info返回到mine的时候，就阻止跳转
       if ( to.name !== 'mine' ) next();   
    },
    created () { 
        //在这里已经能得到store里的数据
        if ( !this.userInfo ) {
            //跳转到login
            this.$router.replace({name: 'login'})
        }else {
            //跳转到mine
            this.$router.replace({name: 'info'})
        }
    },
    components: {AppFooter}
}
</script>

<style lang="scss" scoped>

</style>


