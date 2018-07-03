<template>
    <div ref = "container" class="app-banner swiper-container" id="a">
        <div class="swiper-wrapper">
            <div 
             v-for = " billboard in billboards "
             :key = " billboard.id "
             class="swiper-slide">
                <img width="100%" :src="billboard.imageUrl" alt="">
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import Swiper from 'swiper'
export default {
    name: 'app-banner',
    data () {
        return {
            billboards: [],
            a: 1
        }
    },
    methods: {
        getBillBoards () {
            //跨域问题一直都是前端面试中必问的，因为只有咱们web前端有，因为浏览器有同源策略，所以才有跨域问题
            // 服务器之后进行数据交互是没有跨域问题的，我们就可以自己配置一个代理服务器，让我们的页面去请求代理服务器，然后再让代理服务器去请求目标服务器

            //在vue-cli脚手架中所使用的webpack工具可以快速的去配置跨域

            //在config/index.js中找到proxyTable进行配置
            // https://m.maizuo.com/toumz/v4/api/billboard/home
            axios.get('http://localhost:3000/toumz/v4/api/billboard/home', {
                params: {__t: Date.now()}
            }).then(res => {
                console.log(res.data.data.billboards)
                this.billboards = res.data.data.billboards

                //传入的函数会在上一次的数据改变所引起的页面rerender完成后执行
                //既可以保证，数据已经重新渲染了，又可以保证不受其他数据改变的影响
                Vue.nextTick(() => {
                    console.log('haha')
                    //初始化swiper
                    //在这里，如果我们传入类名的话，页面中如果有多个同类名元素就会受到影响
                    //其实，我们在这里只想找到对应的某一个dom，可以使用ref
                    new Swiper(this.$refs.container,{
                        loop: true,
                        pagination: {
                            el: '.swiper-pagination'
                        }
                    })
                })
            })
        }
    },
    created () {
        //初始数据获取
        this.getBillBoards()
    },
    mounted () {
        //因为数据获取是异步的，在这个时候，数据还没有获取到，也就是说页面中就没有图片，在这里实例化swiper 的时候，会出问题
    },
    updated () {
        //在这里，数据变化所引起的rerender已经完成，页面中已经出现图片了
        //但是，组件内的任何数据更改都会引起updated执行，如果有跟轮播无关的数据变化的时候，也会执行updated，就会导致重复的实例化swiper，效果也出问题
    }
}
</script>

<style lang="scss" scoped>



</style>
