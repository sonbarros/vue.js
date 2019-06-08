
var root = new Vue({
  el: '#root',
  data: {
    nome: 'Jesus'
  },
  methods: {
    executar: function(){
      this.nome = 'António'
    }
  }
});