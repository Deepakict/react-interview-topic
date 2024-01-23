import { useState } from "react";

export default function AdvanceUseStateHook(initalState:any) {
    const [state, setState] = useState(initalState);

    function increaseIt(){
        setState(state+initalState)
    }

    return [state, increaseIt]

}