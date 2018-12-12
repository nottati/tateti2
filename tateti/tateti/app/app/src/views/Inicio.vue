<template>
    <div>
        <div class="columns">
    <div class="column">
        <h1> Jugador 1: </h1>
        <input type="text" placeholder="Escriba su nombre" v-model="jugador1.nombreJ1">
        <button class="button is-primary" @click.prevent="guardarNombre1"> Aceptar </button>
    </div>
    
    <div class="column">
        <h1> Jugador 2: </h1>
        <input type="text" placeholder="Escriba su nombre" v-model="jugador2.nombreJ2">
        <button class="button is-primary" @click.prevent="guardarNombre2"> Aceptar </button>
    </div>
    </div>
    <div>
        <router-link :to="{ name: 'Tateti'}"  class="button is-medium is-success" > ¡Jugar!  </router-link>
        </div>
       <div>
        <router-link :to="{ name: 'Ranking' }"  class="button is-medium is-light" > Ver ranking  </router-link>
        </div>
    </div>
</template>

<script>
import axios from 'axios'


export default {
    name: 'Inicio',
    data (){
        return{
            jugador1:{
                nombreJ1: '',
                _id: '',
                partidas: [],
            },
            jugador2: {
                nombreJ2: '',
                _id: '',
                partidas: [],
            
            }
        }
    },
    
    methods: {
        guardarNombre1 (){
            //tenemos que enviar el nombre al servidor para que lo guarde en la base
            //de datos.
            var comp = this
            axios.post('http://localhost:4500/jugador1', { nombre: this.jugador1.nombreJ1})
            .then(function(resultado){
                comp.jugador1._id = resultado.data._id
                console.log('se guardó el nombre del juagdor 1', resultado )
                console.log('el id es: ', comp.jugador1._id)
            }).catch(function(error){
                console.error(error)
            })
    
            },
          guardarNombre2 (){
            //tenemos que enviar el nombre al servidor para que lo guarde en la base
            //de datos.
            axios.post('http://localhost:4500/jugador2', { nombre: this.jugador2.nombreJ2})
            .then(function(resultado){
                console.log('se guardó el nombre del juagdor 2', resultado)
            }).catch(function(error){
                console.error(error)
            })
          }
    },
   
}
</script>

<style>


</style>
