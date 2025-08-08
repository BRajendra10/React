// here i am trying to create a custom hook for persisting todo data in localstorage
export function useLocalStorage(param) {
    if(param !== undefined) {
        localStorage.setItem("todos", JSON.stringify(param));
    }

    let data = JSON.parse(localStorage.getItem("todos"));
    const setData = (setParam) => localStorage.setItem("todos", JSON.stringify(setParam));


    return [data, setData]
}