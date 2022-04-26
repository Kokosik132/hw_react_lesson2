import {useReducer} from "react";


const init = (initCount) => {
    return {count1: initCount, count2: initCount}
}


const reducer = (state, action) => {
    switch (action.type) {
        case 'inc':
            return {...state, count1: state.count1 + 1}
        case 'dec':
            return {...state, count1: state.count1 - 1}
        case 'reset':
            return {...state, count1: 0}
        case 'set':
            return {...state, count1: action.payload}
        case 'inc2':
            return {...state, count2: state.count2 + 1}
        case 'dec2':
            return {...state,count2: state.count2 - 1}
        case 'reset2':
            return {...state, count2: 0}
        case 'set2':
            return {...state, count2: action.payload}
    }
}

function App() {

    const [state, dispatch] = useReducer(reducer, 0, init);




    return (
        <div>
            <div>
                {state.count1}
                <button onClick={() => dispatch({type:'inc'})}>inc</button>
                <button onClick={() => dispatch({type:'dec'})}>dec</button>
                <button onClick={() => dispatch({type:'reset'})}>reset</button>
                <button onClick={() => dispatch({type:'set', payload:10})}>setTo10</button>
            </div>
            <hr/>
            <div>
                {state.count2}
                <button onClick={()=> dispatch({type:'inc2'})}>inc2</button>
                <button onClick={()=> dispatch({type:'dec2'})}>dec2</button>
                <button onClick={()=> dispatch({type:'reset2'})}>reset2</button>
                <button onClick={()=> dispatch({type:'set2', payload:20})}>setTo20</button>
            </div>
        </div>
    );
}

export default App;
