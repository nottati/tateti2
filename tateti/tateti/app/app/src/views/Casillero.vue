<template>
<div  @click.right="cruzFun" @click.left="circuloFun">
    
   <div class="casilla" > 
       <!-- {{casillero}} -->
    <cruz v-show="cruz"/>
       <circulo v-show="circulo"/> 
      </div>
     </div>     
</template>

<script>
import cruz from '../components/cruz.vue'
import circulo from '../components/circulo.vue'  

export default {
    name: 'Casillero',
    data(){
      return{
       cruz: false,
       circulo: false,
       
      }
    },  
    props: {
        casillero: String
    },
    
    methods: {
      cruzFun: function(){
        this.cruz = true
        this.$emit('funCruz',  this.casillero)
       
},
      circuloFun: function(){
        this.circulo = true
        this.$emit('funCirculo',  this.casillero)
        }
    },
    components:{
         cruz,
         circulo
    }
}
  

</script>

<style>

</style>
