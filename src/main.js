Messenger.options = {
    theme: 'air'
};

new Vue({
   el: '#app',
   data: {
      todos: [],
      users: {
         nombre: '',
         correo: '',
         clave: '',
         confirmar:''
      }
   },
   created(){
      var self = this;
      axios.get('http://localhost:3030/todos')
         .then(function(response){
            self.todos = response.data;
         })
         .catch(function(error){
            console.error('Error en getAll', error);
         });
   },
   methods:{
      addToList(){
         var self = this;
         if(self.users.nombre && self.users.correo && self.users.clave && self.users.confirmar){
            axios.post('http://localhost:3030/todos', self.users)
               .then(function(response){
                  Messenger().post("Usuario registrado correctamente");
               })
               .catch(function(error){
                  console.error('Error en addToList', error);
               });

         }else{
            Messenger().error("Debe rellenar todos los campos");
         }
      }
   }
})
