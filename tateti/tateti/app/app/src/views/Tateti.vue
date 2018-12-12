<template>
  <div>
   Id de partida: {{partida}}
   <div class="title">
    
     {{jugador1.nombre}}: X (click derecho)
   </div>
   <div class="title">
   {{jugador2.nombre}}: O (click izquierdo)
   </div>
    <div class="tablero" >
       
     <Casillero class="casilla" casillero="1" v-on:funCruz="cruzFun"  v-on:funCirculo="circuloFun"/>  
     <Casillero class="casilla" casillero="2" v-on:funCruz="cruzFun"  v-on:funCirculo="circuloFun"/>
     <Casillero class="casilla" casillero="3" v-on:funCruz="cruzFun"  v-on:funCirculo="circuloFun"/>      
     <Casillero class="casilla" casillero="4" v-on:funCruz="cruzFun"  v-on:funCirculo="circuloFun"/> 
     <Casillero class="casilla" casillero="5" v-on:funCruz="cruzFun"  v-on:funCirculo="circuloFun"/> 
     <Casillero class="casilla" casillero="6" v-on:funCruz="cruzFun"  v-on:funCirculo="circuloFun"/> 
     <Casillero class="casilla" casillero="7" v-on:funCruz="cruzFun"  v-on:funCirculo="circuloFun"/> 
     <Casillero class="casilla" casillero="8" v-on:funCruz="cruzFun"  v-on:funCirculo="circuloFun"/> 
     <Casillero class="casilla" casillero="9" v-on:funCruz="cruzFun"  v-on:funCirculo="circuloFun"/>
     
    </div>
<Modal v-show="mostrarModal"  v-on:modal="cerrarModal" :jugador1="jugador1" :jugador2="jugador2"/>
  <div>
  <button class="button is-danger" @click="ganoCruz" > ¡Ganó la cruz! </button>
  </div>
  <div>
  <button class="button is-link" @click="ganoCirculo"> ¡Ganó el círculo! </button>
  </div>
  </div>
</template>

<script>
import axios from 'axios'  
import Casillero from './Casillero.vue'
import Modal from './Modal.vue'

export default {
    name: 'Tateti',
    data(){
      return{
        jugador1: {
          nombre: '',
          _id: ''
        },
        jugador2: {
          nombre: '',
          _id: ''
        },
        partida: '',
        mostrarModal: false
      }
    },
  
   mounted(){
      var comp = this;
     //me traigo los nombres de los jugadores para mostrarlos en pantalla
     
      axios.get('http://localhost:4500/jugador1')
      .then(function(respuesta){
         comp.jugador1 = respuesta.data[respuesta.data.length - 1],
         comp.jugador1.nombre = respuesta.data[respuesta.data.length - 1].nombre
      }).catch(function(error){
        console.error(error)
      }),
      
      axios.get('http://localhost:4500/jugador2')
      .then(function(respuesta){
        comp.jugador2 = respuesta.data[respuesta.data.length - 1]
        comp.jugador2.nombre = respuesta.data[respuesta.data.length - 1].nombre
      }).catch(function(error){
        console.error(error)
      }),
      axios.post('http://localhost:4500/partidas', )
      .then(function(respuesta){
          comp.partida = respuesta.data._id
          console.log('partida:', respuesta)
      }).catch(function(error){
          console.error(error)
      }),
      //la idea de este put era asociarle  al jugador1 la partida actual, no lo pude llevar a cabo.
      axios.put('http://localhost:4500/jugador1/:id')
      .then(function(respuesta){
         var jugador1 = respuesta.data
         console.log(jugador1)
      }).catch(function(error){
        console.error(error)
      })

    },
    methods: {
      cerrarModal: function(){
        this.mostrarModal = false
      },
      ganoCruz: function(){
        this.mostrarModal = true,
        this.$emit('cruzGana')
      },
      ganoCirculo: function(){
        this.mostrarModal = true,
        this.$emit('circuloGana')
      },
      cruzFun: function(evento){
        console.log(evento)
      },
      circuloFun: function(evento){
        console.log(evento)
      }
    },
    
    components: {
      Casillero,
      Modal
    
    }
  }
</script>

<style scoped>
  .tablero {
    width: 500px;
    height: 500px;
    background-color:rgba(215, 223, 192, 0.842);  
  }
  .casilla {
    width: 33.3%;
    height: 33.3%;
    outline:1px solid black;
    float: left;
    cursor: pointer;
  }
  .casilla:hover {
    box-shadow: 3px 3px skyblue
  }
  .casilla:nth-of-type(3n + 1) {
    clear:left
  }
  .pieza {
    width: 100%;
    height: 100%;
    cursor: default;
  }

</style>
