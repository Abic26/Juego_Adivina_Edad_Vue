var app = new Vue({
  el: '#app',
  data: {
    informacionJuego: 'El sistema tiene 5 personas registradas con su año de nacimiento, el juego consiste en que tienes que adivinar el año de nacimiento de una de las personas que se eligen aleatoriamente, solo tienes 4 intentos',
    datosPersona: [
      {"nombre": "andres", "añoNacimiento": 1998},
      {"nombre": "elsa", "añoNacimiento": 1965},
      {"nombre": "oswaldo", "añoNacimiento": 1968},
      {"nombre": "anny", "añoNacimiento": 1985},
      {"nombre": "felipe", "añoNacimiento": 1999}
    ],
    edadIngresada: null,
    participante: '',
    intentos: [],
    contadorIntentos: 0,
    verMensaje: false,
    mostrarPista: false,
    mensaje: '',
    datoAleatorio: null
  },
  methods: {
    añosAleatorio() {
      this.datoAleatorio = this.datosPersona[Math.floor(Math.random() * this.datosPersona.length)].añoNacimiento;
    },
    comparar() {

      let edadIngresada = parseInt(this.edadIngresada);

      edadIngresada !== Number ? 'ingrese edad':Number;

      this.datoAleatorio === null ? this.añosAleatorio() : null;


      if (edadIngresada > this.datoAleatorio) {
        console.log('mayor');
        console.log(this.datoAleatorio);

        this.mostrarPista = true;
        this.mensaje = `mayor y te hace falta quitarle: ${edadIngresada - this.datoAleatorio} años`;
      } else if (edadIngresada < this.datoAleatorio) {
        console.log('menor');
        console.log(this.datoAleatorio);

        this.mostrarPista = true;
        this.mensaje = `menor y te hace falta sumarle: ${this.datoAleatorio - edadIngresada} años`;
      } else if (edadIngresada === this.datoAleatorio) {
        console.log('acertó');
        this.mostrarPista = true;
        this.mensaje = 'Acertaste a la edad';
      }

      this.guardarIntentos();

      if (this.contadorIntentos === 5 && edadIngresada !== this.datoAleatorio) {
        this.mostrarPista = true;
        this.mensaje = 'Excediste los intentos';
      }
    },
    guardarIntentos() {
      if(this.participante===''){
        this.mostrarPista = true;
        this.mensaje = 'Ingrese nombre del participante';
      }
      this.intentos.push({ nombre: this.participante, edadIngresada: this.edadIngresada, intentos: this.contadorIntentos });
      this.contadorIntentos++;
       
      this.contadorIntentos===5?this.añosAleatorio():5

      // if (this.contadorIntentos === 5) {
      //   this.añosAleatorio();
      // }
      
    },
    verIntentos() {
      this.verMensaje = !this.verMensaje;
    },
    edadRandom() {
      this.añosAleatorio();
    }
  },

});
