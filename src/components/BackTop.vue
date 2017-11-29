<template>
    <div>
        <div class="back-top" v-show="show" @click="backtotop">回到顶部</div>
    </div>
</template>

<script>
    export default {
        name: 'BackTop',
        data () {
            return {
                show: false,
                timer: null,
                isTop: true
            }
        },
        mounted: function () {
            let self = this
            document.addEventListener('scroll', function() {
                // console.log(self.getScrollTop())
                if (self.getScrollTop() > 600) {
                    self.show = true
                } else {
                    self.show = false 
                }
                //主要用于判断当 点击回到顶部按钮后 滚动条在回滚过程中，若手动滚动滚动条，则清除定时器
                if (!self.isTop) {
                    clearInterval(self.timer);
                }
                self.isTop = false
            })
        },
        methods: {
            getScrollTop() {
			let scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
			　　if(document.body){
			　　　　bodyScrollTop = document.body.scrollTop;
			　　}
			　　if(document.documentElement){
			　　　　documentScrollTop = document.documentElement.scrollTop;
			　　}
			　　scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
			　　return scrollTop;
            },
            backtotop() {
                //设置一个定时器
                let self = this
                this.timer = setInterval(function(){
                    //获取滚动条的滚动高度
                    let osTop = document.documentElement.scrollTop || document.body.scrollTop
                    //用于设置速度差，产生缓动的效果
                    let speed = Math.floor(-osTop / 6)
                    document.documentElement.scrollTop = document.body.scrollTop = osTop + speed
                    self.isTop = true;  //用于阻止滚动事件清除定时器
                    if(osTop == 0){
                        console.log(234)
                        clearInterval(self.timer)
                    }
                },30)
            }
        }
    }
</script>

<style scoped>
.back-top{
    width: 24px;
    color: gray;
    padding: 12px 0 12px 5px;
    top: 356px;
    right: 0px;
    position: fixed;
    cursor: pointer;
    text-align: center;
    z-index: 20;
    background-color: #fff;
    border-radius: 12px 0 0 12px;
    border:1px solid #ccc;
    border-right: 0;
}

</style>