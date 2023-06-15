// Clase que representa una colección de tareas
class TaskCollection {
    constructor() {
      this.tasks = [];
    }
  
    addTask(task) {
      this.tasks.push(task);
    }
  
    // Método que devuelve un iterador para recorrer la colección
    createIterator() {
      return new TaskIterator(this.tasks);
    }
  }
  
  // Clase que representa un iterador para recorrer una colección
  class TaskIterator {
    constructor(tasks) {
      this.tasks = tasks;
      this.currentIndex = 0;
    }
  
    // Método que devuelve el siguiente elemento del iterador
    next() {
      const hasNext = this.currentIndex < this.tasks.length;
      if (hasNext) {
        const task = this.tasks[this.currentIndex];
        this.currentIndex++;
        return task;
      } else {
        return null;
      }
    }
  }
  
  // Uso del iterador
  const taskCollection = new TaskCollection();
  taskCollection.addTask("Tarea 1");
  taskCollection.addTask("Tarea 2");
  taskCollection.addTask("Tarea 3");
  
  const iterator = taskCollection.createIterator();
  
  while (iterator.next()) {
    const task = iterator.next();
    console.log(task);
  }
  
/* 
En este ejemplo, el patrón Iterator se utiliza 
para recorrer una colección de tareas. La clase 
TaskCollection representa la colección de tareas 
y tiene un método createIterator() que devuelve un 
iterador para recorrer la colección. La clase 
TaskIterator implementa el iterador y tiene un 
método next() que devuelve el siguiente elemento 
de la colección.

En el uso del iterador, se crea una instancia 
de TaskCollection y se agregan varias tareas a 
la colección. Luego, se crea un iterador invocando 
el método createIterator() en la colección. 
Mediante un bucle while, se llama repetidamente 
al método next() en el iterador para obtener el 
siguiente elemento de la colección. El bucle se 
ejecuta hasta que ya no haya más elementos en la 
colección (cuando next() devuelve null).

En cada iteración del bucle, se obtiene una 
tarea del iterador y se muestra en la consola. 
Esto permite recorrer las tareas de la colección 
secuencialmente sin necesidad de conocer los 
detalles de implementación de la colección.

Cabe destacar que este ejemplo es una simplificación 
del patrón Iterator y su implementación real puede 
ser más compleja, especialmente si se agregan más 
funcionalidades al iterador, como la posibilidad de 
eliminar elementos de la colección o recorrerla en 
orden inverso.
*/