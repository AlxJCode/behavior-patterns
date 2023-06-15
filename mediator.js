// Clase que representa el mediador del chat de grupo
class ChatMediator {
    constructor() {
      this.users = [];
    }
  
    addUser(user) {
      this.users.push(user);
    }
  
    sendMessage(message, sender) {
      this.users.forEach(user => {
        if (user !== sender) {
          user.receiveMessage(message);
        }
      });
    }
  }
  
  // Clase que representa un usuario del chat
  class User {
    constructor(name, mediator) {
      this.name = name;
      this.mediator = mediator;
    }
  
    sendMessage(message) {
      console.log(`${this.name} envió el mensaje: ${message}`);
      this.mediator.sendMessage(message, this);
    }
  
    receiveMessage(message) {
      console.log(`${this.name} recibió el mensaje: ${message}`);
    }
  }
  
  // Uso del mediador y los usuarios
  const chatMediator = new ChatMediator();
  
  const user1 = new User("Usuario 1", chatMediator);
  const user2 = new User("Usuario 2", chatMediator);
  const user3 = new User("Usuario 3", chatMediator);
  
  chatMediator.addUser(user1);
  chatMediator.addUser(user2);
  chatMediator.addUser(user3);
  
  user1.sendMessage("¡Hola a todos!");
  user2.sendMessage("¡Hola usuario 1!");
  
/* 
En este ejemplo, el patrón Mediator se utiliza 
para facilitar la comunicación entre usuarios 
en un chat de grupo. La clase ChatMediator 
representa el mediador del chat, que mantiene 
una lista de usuarios registrados y proporciona 
un método sendMessage() para enviar mensajes a 
todos los usuarios excepto al remitente.

La clase User representa un usuario del chat 
y tiene un método sendMessage() para enviar 
un mensaje al mediador, y un método receiveMessage() 
para recibir un mensaje del mediador.

En el uso del mediador y los usuarios, se crea 
una instancia de ChatMediator y se agregan varios 
usuarios al mediador mediante el método addUser(). 
Cada usuario envía un mensaje llamando a su método 
sendMessage(), que a su vez llama al método sendMessage() 
del mediador. El mediador se encarga de distribuir 
el mensaje a todos los usuarios registrados, 
excepto al remitente.

En la consola, se mostrarán los mensajes enviados 
y recibidos por cada usuario. Esto demuestra cómo 
el patrón Mediator permite la comunicación indirecta 
entre los usuarios a través del mediador, evitando 
el acoplamiento directo entre ellos.
*/