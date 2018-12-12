<template>
<div>

    <div class="modal is-active">
  <div class="modal-background">
<div class="modal-content">
      <section class="hero is-light is-medium">
      <div class="container is-fullhd">
           <div class="notification">
      <h1 class="title">¡Felicitaciones!</h1>
    <h2 class="subtitle" v-on:cruzGana="ganoCruz" v-show="cruz">
       Ganó {{jugador1.nombre}}.
       Perdió {{jugador2.nombre}}.
      </h2>
      <h2 class="subtitle" v-on:circuloGana="ganoCirculo" v-show="circulo">
       Ganó {{jugador2.nombre}}.
       Perdió {{jugador1.nombre}}.
      </h2>
        <div>
        <router-link :to="{ name: 'Ranking' }"  class="button is-medium is-success" > Ver ranking  </router-link>
        </div>
         <div>
        <router-link :to="{ name: 'Inicio' }"  class="button is-medium is-primary" > Ir a Inicio  </router-link>
        </div>
      </div>
      </div>
      </section>
   </div>
    </div>
  <button class="modal-close is-large" aria-label="close" @click="cerrarModal"></button>
</div>
</div>
</template>

<script>
export default {
    name: 'Modal',
    data(){
        return{
            cruz: false,
            circulo: false
        }
    },
    methods: {
        cerrarModal(){ 
            this.$emit('modal')
        },
        //estas funciones deberían mostrar las secciones de código correspondientes a cada v-show, pero no lo pude hacer.
        ganoCruz(evento){
            this.cruz = true
            console.log(evento)
        },
        ganoCirculo(evento){
            this.circulo = true
            console.log(evento)
        },
    },
    props: {
        jugador1: {
            type: Object,
            required: true
        },
        jugador2: {
            type: Object,
            required: true
        }
    }
}
</script>

<style>

</style>
