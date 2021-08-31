import operations from "./operations.js";
import multiply from "./otherOperations.js";
import {division, mod} from "./namedOperations.js";


console.log(operations.sum(2,5));
console.log(operations.subtract(10,2));
console.log(multiply(2,5));
console.log(division(10,2));
console.log(mod(7,2));