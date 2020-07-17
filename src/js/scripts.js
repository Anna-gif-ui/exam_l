
let app = new Vue({
    el: '#app',
    data: {
        a: {
            first: 1,
            second: 1
        },
       
        first: '',
        out: 0,
        b: 0

    },
    methods: {
        addA(item) {
            this.setLikes(this.a)
            this.getLikes()
            
           console.log(Object.values(this.a));
           
            if(this.a.hasOwnProperty(item)){
                console.log(this.a)
        
                this.amountLikes()
                ++this.a[item]
                return 
            } 

            this.e.push(item)
            console.log(this.e);
            return this.a[item] = 1;
        },

        addB() {
            console.log('addToB');
            this.b++;
        },
        amountLikes: function() {
            return this.out = Object.values(this.a).reduce((a,b) => a + b)
        },
        setLikes: function(r=[]) {
            
            localStorage.setItem('likes', JSON.stringify(r))
        },
        getLikes: function() {
            let storage = localStorage.getItem('likes')
            // this.a = JSON.parse(localStorage.getItem('likes'))
            console.log(storage);
            this.a = JSON.parse(storage)
            console.log(JSON.parse(storage));
            
        }
        
    },
    created() {
        // this.setLikes()
        this.getLikes()
        this.amountLikes()
        
        
    }
  
    // computed: {
    //     addA: function() {
    //         // console.log('addToA');
    //         return this.a++;
    //     },
    //     addB: function() {
    //         // console.log('addToB');
    //         return this.b++;
    //     }
    // }

})


$(function () {
    $("#filter__range").slider({
       min: 0,
       max: 20000,
       values: [5000,15000],
       range: true,
       stop: function(event, ui) {
       $("input#priceMin").val($("#filter__range").slider("values",0));
       $("input#priceMax").val($("#filter__range").slider("values",1));
 
       $('.price-range-min.value').html($("#filter__range").slider("values",0));
       $('.price-range-max.value').html($("#filter__range").slider("values",1));
     },
     slide: function(event, ui){
       $("input#priceMin").val($("#filter__range").slider("values",0));
       $("input#priceMax").val($("#filter__range").slider("values",1));
 
       $('.price-range-min.value').html($("#filter__range").slider("values",0));
       $('.price-range-max.value').html($("#filter__range").slider("values",1));
     }
   });
 
   $("input#priceMin").on('change', function(){
       var value1=$("input#priceMin").val();
       var value2=$("input#priceMax").val();
     if(parseInt(value1) > parseInt(value2)){
           value1 = value2;
           $("input#priceMin").val(value1);
       $('.price-range-min.value').html(value1);
       }
       $("#filter__range").slider("values", 0, value1);
     $('.price-range-min.value').html(value1);
   });
 
   $("input#priceMax").on('change', function(){
       var value1=$("input#priceMin").val();
       var value2=$("input#priceMax").val();
       if (value2 > 20000) { value2 = 20000; $("input#priceMax").val(35000)}
       if(parseInt(value1) > parseInt(value2)){
           value2 = value1;
           $("input#priceMax").val(value2);
       $('.price-range-max.value').html(value2);
       }
       $("#filter__range").slider("values",1,value2);
     $('.price-range-max.value').html(value2);
   });
 
   $('.ui-slider-handle:eq(0)').append('<span class="price-range-min value">' + $('#filter__range').slider('values', 0 ) + '</span>');
   $('.ui-slider-handle:eq(1)').append('<span class="price-range-max value">' + $('#filter__range').slider('values', 1 ) + '</span>');
 });

