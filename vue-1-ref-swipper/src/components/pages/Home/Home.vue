<template>
    <div class="home">
        <app-banner></app-banner>
        <app-banner></app-banner>
        <app-banner></app-banner>
        <app-footer></app-footer>
    </div>
</template>

<script>
import AppBanner from './Banner'
import AppFooter from '../../commons/Footer/Footer'
export default {
    name: 'Home',
    components: {
        AppFooter,
        AppBanner
    }
}

</script>

<style lang="scss" scoped>
    
</style>


