<template>
    <div>
    <h1 class="title"> Ranking </h1>
    <div v-for="jugador1 in jugadores1" :key="jugador1.nombre">
    <h2 class="subtitle"> {{jugador1.nombre}} {{jugador1.puntos}}</h2>
    </div>
    <div v-for="jugador2 in jugadores2" :key="jugador2.nombre">
    <h2 class="subtitle"> {{jugador2.nombre}} {{jugador2.puntos}}</h2>
    </div> 
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Ranking',
    data(){
        return{
            jugadores1: {},
            jugadores2: {},
            
        }
    },
    mounted(){
         var comp = this
      axios.get('http://localhost:4500/jugador1')
      .then(function(respuesta){
        comp.jugadores1 = respuesta.data
        
        console.log(respuesta)
        
      }).catch(function(error){
        console.error(error)
      }),
      axios.get('http://localhost:4500/jugador2')
      .then(function(respuesta){
        comp.jugadores2 = respuesta.data 
        console.log(respuesta)
      }).catch(function(error){
        console.error(error)
      })
    
    }


}
</script>

<style>

</style>
