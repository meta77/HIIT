var vm = new Vue({
    el: '#app',
    data: {
        timeCount:30,
        setCount:8,
        time1:'',
        time30:'',
        isActive:'',
        selected:8,
        isStart:false,
        isSetting:true,
    },
    methods: {
        startCount: function(){
                this.isSetting = false;
                this.time1 = setInterval(function () {
                    this.timeCount = this.timeCount - 1;
                }.bind(this),1000)
                this.time30 = setInterval(function () {
                    this.timeCount =  30;
                    this.setCount = this.setCount - 1;
                }.bind(this),30000)
                this.time1();
                this.time30();
        },
        resetCount: function(){
            this.isSetting = true;
            clearInterval(this.time1);
            clearInterval(this.time30);
            this.timeCount = 30;
            this.setCount = this.selected;
        },
        startSetting: function(){
            this.isStart = true;
        },
        setOn: function(){
            this.setCount = this.selected;
            this.isStart = false;
        }
    },
    computed: {
        timeNameAction(){
            return (this.timeCount < 11 ? 'BREAK TIME!!' : 'WORK OUT!!')
        },
        timeNamePicture(){
            return (this.timeCount < 11 ? 'https://cdn.pixabay.com/photo/2016/10/14/23/17/girl-lying-on-the-grass-1741487__480.jpg' : 'https://cdn.pixabay.com/photo/2017/01/11/18/35/blur-1972569_1280.jpg' )
        },
        timeCountAction(){
            return (this.setCount === 0 ? this.resetCount() : this.timeCount)
        },

        startState(){
            return ((this.timeCount === 30 && this.setCount === this.selected) ? this.isActive = true : this.isActive = false);
        }

    }
});