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


/**
 * Note
 * For larger scale project create initialState object for each reducer separately.
 */
const initialState = {
    number : 0,
    anotherNumber : 0
}

//Reducer 1
function numberReducer(initialObject = initialState, action){
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
        default : {
            return initialObject;
        }
    }
}

//Reducer 2
function anotherNumberReducer(initialObject = initialState, action){
    switch(action.type){
        case 'INCREMENT' : {
            return {
                ...initialObject,
                anotherNumber : initialObject.anotherNumber + 1
            }
        }
        case 'DECREMENT' : {
            return {
                ...initialObject,
                anotherNumber : initialObject.anotherNumber -1
            }
        }
        default : {
            return initialObject;
        }
    }
}

// Combine reducers
const rootReducers = combineReducers({
    number : numberReducer,                             // These are key value pairs where key is the name of the reducer and value of the reducer function.
    anotherNumber : anotherNumberReducer
});

const store = createStore(rootReducers);

store.subscribe(() => {
    console.log("The state has changed", store.getState())
})

console.log("The initial state of the object is : ",store.getState());  // {number : 0} getState will return the current state of the object.

// Dispatch takes an action object as an argument.
store.dispatch({type : 'ADD', payload : 15});
store.dispatch({type : 'INCREMENT', payload : null});
console.log("The updated state of the object is : ",store.getState());