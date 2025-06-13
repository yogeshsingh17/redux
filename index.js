// const { createStore } = require("redux");
import {createStore, combineReducers} from "redux";

// function numberReducer (initialObject, action){
//     if(action.type === 'ADD'){
//         const numberToAdd = action.payload;
        
//         // Lets say initial number object = {number : 0}
//         return {
//             ...initialObject,
//             number : initialObject.number + numberToAdd
//         }
//     } else if (action.type === 'SUBTRACT'){
//         const numberToSubtract = action.payload;

//         // Lets say the initial object is {number : 5}
//         return {
//             ...initialObject,
//             number : initialObject.number - numberToSubtract
//         }
//     } else if (action.type === 'INCREMENT'){
//         // Increment the number by 1
//         // No payload is needed for increment.
//         // action : {type : 'INCREMENT', PAYLOAD : null}

//         return {
//             ...initialObject,
//             number : initialObject.number + 1
//         }
//     } else if(action.type === 'DECREMENT'){
//         // Decrement the number by 1
//         // No payload is needed for decrement.
//         // action : {type : 'DECREMENT', PAYLOAD : null}
        
//         return {
//             ...initialObject,
//             number : initialObject.number - 1
//         }
//     } else {
//         return initialObject;
//     }
// }

function numberReducer(initialObject, action){
    switch(action.type){
        case 'ADD' : {
            return {
                ...initialObject,
                number : initialObject.number + action.payload
            }
        }
        case 'SUBTRACT' : {
            return {
                ...initialObject,
                number : initialObject.number + action.payload
            }
        }
        case 'INCREMENT' : {
            return {
                ...initialObject,
                number : initialObject.number + 1
            }
        }
        case 'DECREMENT' : {
            return {
                ...initialObject,
                number : initialObject.number -1
            }
        }
        default : {
            return initialObject;
        }
    }
}

const initialState = {
    number : 0
}

const store = createStore(numberReducer, initialState);

console.log(store); 
console.log(store.getState());  // {number : 0} getState will return the current state of the object.

// Dispatch takes an action object as an argument.
store.dispatch({type : 'ADD', payload : 15});
console.log(store.getState());
