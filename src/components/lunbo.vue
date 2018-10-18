<template>
    <div class="lunbo" @mouseover="stop" @mouseout="go">
        <div class="lunbo-content" ref="lbcontent" style="left: -736px;transition-duration: 0.5s;" :style="{width:(imglist.length+2)*736+'px'}">
            <img :src="imglist[imglist.length - 1].imgsrc" width="736" height="254">
            <img v-for="(imgobj, index) in imglist" :key="index" :src="imgobj.imgsrc" width="736" height="254">
            <img :src="imglist[0].imgsrc" width="736" height="254">
        </div>
        <div class="lunbo-button">
            <div v-for="(imgobj, index) in imglist" :key="index" class="buttons" ref="buttons" @click="buttonclick(index)"></div>
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            imglist: {
                type: Array
            }
        },
        data () {
            return {
                timer: null,
                boolen: false,
                lightedbutton: 0,
                timer2: null
            }
        },
        methods: {
            stop: function () {
                clearInterval(this.timer);
            },
            prev: function () {
                if (this.boolen) {
                    return;
                }
                this.stop();
                this.lightedbutton--;
                if (this.lightedbutton == -1) {
                    this.lightedbutton = this.imglist.length - 1;
                }
                this.move(736);
                this.lightbutton();
                this.go();
            },
            next: function () {
                if (this.boolen) {
                    return;
                }
                this.stop();
                this.lightedbutton++;
                if (this.lightedbutton == this.imglist.length) {
                this.lightedbutton = 0;
                }
                this.move(-736);
                this.lightbutton();
                this.go();
            },      
            go:  function () {
                this.timer = setInterval( ()=> {
                    this.next();
                }, 3000);
            },
            move: function (distance) {
                    this.boolen = true;
                    try {
                        if (parseInt(this.$refs.lbcontent.style.left) >= (-736 * this.imglist.length) && parseInt(this.$refs.lbcontent.style.left) <= -736) {
                            this.$refs.lbcontent.style.transitionDuration = "0.5s";
                        }
                        this.$refs.lbcontent.style.left = parseInt(this.$refs.lbcontent.style.left) + distance + 'px';
                        this.timer2 = setTimeout( () =>{
                            if (parseInt(this.$refs.lbcontent.style.left) > -736) {
                                this.$refs.lbcontent.style.transitionDuration = "0s"
                                this.$refs.lbcontent.style.left = -736 * this.imglist.length + 'px';
                            }
                            if (parseInt(this.$refs.lbcontent.style.left) < -736 * this.imglist.length) {
                                this.$refs.lbcontent.style.transitionDuration = "0s";
                                this.$refs.lbcontent.style.left = -736 + 'px';
                            }
                            this.boolen = false;
                        }, 500);
                    } catch(err) {
                        
                    }
            },
            lightbutton: function () {
                try {
                    for (let i = 0; i < this.$refs.buttons.length; i++) {
                        if ( this.$refs.buttons[i].id == 'lightbutton') {
                            this.$refs.buttons[i].id = '';
                            break;
                        }
                    }
                    this.$refs.buttons[this.lightedbutton].id = 'lightbutton';
                } catch(err) {
                    
                }
            },
            buttonclick:function (i) {
                if ( this.$refs.buttons[i].id == 'lightbutton' || this.boolen) {
                    return;
                }
                this.stop();
                this.$refs.lbcontent.style.transitionDuration = '0.5s';
                this.$refs.lbcontent.style.left = -736 * (i + 1) + 'px';
                this.lightedbutton = i;
                this.lightbutton();
            }
        },
        mounted () {
            this.$refs.buttons[0].id = 'lightbutton';
            this.go();
        },
        beforeDestroy() {
            this.stop();
            clearTimeout(this.timer2);
        }
    }
</script>

<style scoped>
    .lunbo {
        width: 736px;
        height: 254px;
        overflow: hidden;
        border-radius: 5px;
        display: flex;
        position: relative;
    }
    .lunbo-content {
        display: flex;
        flex-wrap: nowrap;
        position: relative;
        height: 100%;
     }
    .lunbo-button {
        display: flex;
        align-self: flex-end;
        position: absolute;
        left: 50%;
        transform: translate(-50%);
    }
    .buttons {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color:white;
        margin-left: 3px;
        margin-right: 3px;
        margin-bottom: 8px;
        transition-duration: 0.5s;
        cursor: pointer;
    }
    #lightbutton {
        width: 20px;
        height: 10px;
        border-radius: 5px;
        background-color: #5785fb;
    }
</style>