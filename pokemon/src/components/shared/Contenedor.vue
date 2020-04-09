<template>
    <div class="container">
        <NavComponent></NavComponent>
        <router-view></router-view>
    </div>
</template>

<script>
import NavComponent from './Nav'
export default {
    name: 'ContenedorComponent',
    components:{
        NavComponent
    }
}
</script>