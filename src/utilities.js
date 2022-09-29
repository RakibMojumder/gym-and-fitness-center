

const addToDb = (secondValue) => {
    localStorage.setItem('second', secondValue);
};

const getFromLocalStorage = () => {
    const second = JSON.parse(localStorage.getItem('second'));
    return second;
}


export { addToDb, getFromLocalStorage }