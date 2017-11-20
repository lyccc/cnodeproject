<template>
    <div class="wrapper">
        <main-com></main-com>
    </div>
</template>

<script>
import MainCom from '../components/MainCom'
    export default {
        name: 'CommentList',
        data () {
            return {

            }
        },
        components: {
            MainCom
        }
    }
</script>

<style scoped>
.wrapper{
    padding: 15px 52px;
}
</style>