// Clase base que define la estructura de un objeto receptor en la cadena
class SupportHandler {
  constructor(level) {
    this.level = level;
    this.nextHandler = null;
  }

  setNextHandler(handler) {
    this.nextHandler = handler;
  }

  // Método para manejar la solicitud
  handleRequest(request) {
    if (this.canHandleRequest(request)) {
      this.processRequest(request);
    } else if (this.nextHandler) {
      this.nextHandler.handleRequest(request);
    } else {
      console.log("No se pudo manejar la solicitud");
    }
  }

  // Método abstracto que determina si el receptor puede manejar la solicitud
  canHandleRequest(request) {
    // Implementación específica en las subclases
    return false;
  }

  // Método abstracto para procesar la solicitud
  processRequest(request) {
    // Implementación específica en las subclases
  }
}

// Clase concreta que maneja solicitudes de nivel básico
class BasicSupportHandler extends SupportHandler {
  constructor() {
    super("Básico");
  }

  canHandleRequest(request) {
    return request.level === "Básico";
  }

  processRequest(request) {
    console.log("El soporte básico está manejando la solicitud: " + request.message);
  }
}

// Clase concreta que maneja solicitudes de nivel intermedio
class IntermediateSupportHandler extends SupportHandler {
  constructor() {
    super("Intermedio");
  }

  canHandleRequest(request) {
    return request.level === "Intermedio";
  }

  processRequest(request) {
    console.log("El soporte intermedio está manejando la solicitud: " + request.message);
  }
}

// Clase concreta que maneja solicitudes de nivel avanzado
class AdvancedSupportHandler extends SupportHandler {
  constructor() {
    super("Avanzado");
  }

  canHandleRequest(request) {
    return request.level === "Avanzado";
  }

  processRequest(request) {
    console.log("El soporte avanzado está manejando la solicitud: " + request.message);
  }
}

// Objeto que representa una solicitud de soporte
const supportRequest = {
  level: "Intermedio",
  message: "Tengo un problema con mi conexión a internet"
};

// Configuración de la cadena de responsabilidad
const basicHandler = new BasicSupportHandler();
const intermediateHandler = new IntermediateSupportHandler();
const advancedHandler = new AdvancedSupportHandler();

basicHandler.setNextHandler(intermediateHandler);
intermediateHandler.setNextHandler(advancedHandler);

// Pasar la solicitud a través de la cadena de responsabilidad
basicHandler.handleRequest(supportRequest);

/* En este ejemplo, cada nivel de soporte 
(básico, intermedio, avanzado) es representado 
por una clase concreta que hereda de la clase 
base SupportHandler. Cada receptor en la cadena 
implementa el método canHandleRequest() para determinar 
si puede manejar la solicitud y el método processRequest() 
para procesarla. Si un receptor no puede manejar 
la solicitud, la pasa al siguiente receptor en la 
cadena utilizando el método handleRequest(). 
Finalmente, la solicitud se pasa al primer receptor 
en la cadena (basicHandler.handleRequest(supportRequest)) 
y se va pasando a través de los diferentes niveles 
de soporte según sea necesario.

En este caso, el soporte intermedio es el receptor 
que manejará la solicitud, ya que coincide con 
el nivel especificado en la solicitud. El 
resultado será la impresión del mensaje "El 
soporte intermedio está manejando la solicitud: 
Tengo un problema con mi conexión a internet" 
en la consola. */