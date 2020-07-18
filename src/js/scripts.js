
let app = new Vue({
    el: '#app',
    data: {
        a: 0,
        b: 0
    },
    methods: {
        addA() {
            console.log('addToA');
            this.a++;
            
        },

        addB() {
            console.log('addToB');
            this.b++;
        },

        addS() {
            console.log('substractToA');
            this.a = 0;
        },
  
    },

})




