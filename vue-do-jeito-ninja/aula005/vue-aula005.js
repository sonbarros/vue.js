var app = new Vue({
  el: '#app',
  data: {
    title: 'Contacts VueJs',
    contact: {
      //id: Math.ceil(Math.random()*100),
      nome: '',
      telefone: '',
      email: '',
      genero: '',
      como_conheceu: '',
      img_src: '',
      img_alt: '',
      interesse: [],
      receber_novidade: '',
    }
  }
});