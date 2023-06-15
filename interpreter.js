// Clase que representa un contexto
class Context {
    constructor(input) {
      this.input = input;
    }
  }
  
  // Clase base que define la interfaz de interpretación
  class Expression {
    interpret(context) {
      // Implementación específica en las subclases
    }
  }
  
  // Clase que representa una expresión numérica
  class NumberExpression extends Expression {
    constructor(value) {
      super();
      this.value = value;
    }
  
    interpret(context) {
      return this.value;
    }
  }
  
  // Clase que representa una expresión de suma
  class AddExpression extends Expression {
    constructor(leftExpression, rightExpression) {
      super();
      this.leftExpression = leftExpression;
      this.rightExpression = rightExpression;
    }
  
    interpret(context) {
      const leftValue = this.leftExpression.interpret(context);
      const rightValue = this.rightExpression.interpret(context);
      return leftValue + rightValue;
    }
  }
  
  // Cliente que utiliza las expresiones
  class Client {
    constructor() {
      this.context = new Context();
      this.context.input = "2 + 3";
  
      const expression = this.parseExpression(this.context.input);
      const result = expression.interpret(this.context);
      console.log(`El resultado de la expresión "${this.context.input}" es: ${result}`);
    }
  
    parseExpression(input) {
      // Aquí se implementaría la lógica para parsear el input y construir las expresiones correspondientes
      // Por simplicidad, se crea un ejemplo estático
      const number1 = new NumberExpression(2);
      const number2 = new NumberExpression(3);
      return new AddExpression(number1, number2);
    }
  }
  
  // Uso del intérprete
  const client = new Client();
  
/* 
En este ejemplo, el patrón Interpreter se utiliza 
para interpretar expresiones matemáticas sencillas. 
La clase Context representa el contexto en el que 
se evalúan las expresiones, y contiene la entrada 
(input) que se va a interpretar.

La clase base Expression define la interfaz 
de interpretación y tiene un método interpret() 
que toma un contexto y devuelve el resultado de 
la interpretación. Luego, se definen subclases 
concretas de Expression para cada tipo de expresión, 
como NumberExpression que representa un número y 
AddExpression que representa una suma. 
Estas subclases implementan el método interpret() 
para evaluar la expresión según la gramática definida.

El cliente (Client) utiliza el intérprete para 
evaluar una expresión específica. En el ejemplo, 
se crea una instancia de Context y se asigna una 
entrada (input) que representa la expresión 
matemática "2 + 3". Luego, se utiliza el método 
parseExpression() para parsear el input y 
construir las expresiones correspondientes. 
En este caso, se crea una expresión de suma 
(AddExpression) con dos expresiones numéricas 
(NumberExpression). Finalmente, se invoca el 
método interpret() en la expresión resultante y 
se muestra el resultado en la consola.

Cabe destacar que este ejemplo es bastante 
simplificado y estático para ilustrar el concepto 
del patrón Interpreter. En una implementación real, 
se requeriría una lógica más compleja para parsear 
y construir las expresiones a partir del input.
*/