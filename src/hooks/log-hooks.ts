import { useEffect } from "react"

function useEffectLog(componenteName?: string, log: boolean = false) {
    if (componenteName) {
        console.log("The component " + componenteName + " is rendered.") 
    }
    else {
        console.log("The component is rendered.")
    }
}

export {
    useEffectLog
}