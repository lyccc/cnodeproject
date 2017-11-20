<template>
    <div class="wrapper">
        <article-com></article-com>
    </div>
</template>

<script>
import ArticleCom from '../components/ArticleCom'
    export default {
        name: 'Details',
        data () {
            return {

            }
        },
        components: {
            ArticleCom
        }
    }
</script>

<style scoped>
.wrapper{
    padding: 15px 52px;
}
</style>