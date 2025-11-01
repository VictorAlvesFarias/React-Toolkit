function useEffectLog(componenteName, log = false) {
    if (componenteName) {
        console.log("The component " + componenteName + " is rendered.");
    }
    else {
        console.log("The component is rendered.");
    }
}
export { useEffectLog };
