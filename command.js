// Clase que representa un comando
class Command {
    constructor(receiver) {
      this.receiver = receiver;
    }
  
    execute() {
      // Implementación específica en las subclases
    }
  }
  
  // Clase que representa un comando para copiar
  class CopyCommand extends Command {
    execute() {
      this.receiver.copy();
    }
  }
  
  // Clase que representa un comando para pegar
  class PasteCommand extends Command {
    execute() {
      this.receiver.paste();
    }
  }
  
  // Clase que representa un comando para deshacer
  class UndoCommand extends Command {
    execute() {
      this.receiver.undo();
    }
  }
  
  // Clase que representa el receptor de los comandos (editor de texto)
  class TextEditor {
    copy() {
      console.log("Texto copiado al portapapeles");
    }
  
    paste() {
      console.log("Texto pegado desde el portapapeles");
    }
  
    undo() {
      console.log("Acción deshecha");
    }
  }
  
  // Cliente que utiliza los comandos
  class Client {
    constructor() {
      this.textEditor = new TextEditor();
      this.copyCommand = new CopyCommand(this.textEditor);
      this.pasteCommand = new PasteCommand(this.textEditor);
      this.undoCommand = new UndoCommand(this.textEditor);
    }
  
    executeCopy() {
      this.copyCommand.execute();
    }
  
    executePaste() {
      this.pasteCommand.execute();
    }
  
    executeUndo() {
      this.undoCommand.execute();
    }
  }
  
  // Uso de los comandos
  const client = new Client();
  client.executeCopy();   // Imprime: "Texto copiado al portapapeles"
  client.executePaste();  // Imprime: "Texto pegado desde el portapapeles"
  client.executeUndo();   // Imprime: "Acción deshecha"
  

/* 
En este ejemplo, el patrón Command se utiliza 
para encapsular diferentes acciones de edición 
de texto. La clase Command es la clase base que 
define la estructura de un comando y tiene un 
método execute(). Luego, se definen subclases 
concretas de Command para cada acción específica, 
como CopyCommand, PasteCommand y UndoCommand. 
Estas subclases implementan el método execute() 
de acuerdo con su acción correspondiente.

El receptor de los comandos es representado por 
la clase TextEditor, que tiene métodos para 
realizar las acciones de copiar, pegar y deshacer. 
El cliente crea instancias de los comandos y los 
asocia con el receptor correspondiente. Luego, el 
cliente puede ejecutar las acciones invocando el 
método execute() en el objeto de comando correspondiente.

En el ejemplo, se crea una instancia de Client y 
se ejecutan diferentes acciones a través de los 
comandos. Al ejecutar executeCopy(), se invoca 
el método execute() del objeto CopyCommand, lo 
que a su vez llama al método copy() del receptor 
TextEditor, imprimiendo "Texto copiado al 
portapapeles" en la consola. De manera similar, 
al ejecutar executePaste() y executeUndo(), 
se ejecutan las acciones correspondientes a través 
de los comandos y se imprimen los mensajes correspondientes.
*/