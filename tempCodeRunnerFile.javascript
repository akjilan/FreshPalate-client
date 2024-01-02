var addTwoPromises = async function(promise1, promise2) {
    Promise.all([promise1,promise2])
    .then(([value1,value2])=>{
        return(parseInt(value1)+parseInt(value2));
    }) 
    .catch(error => console.error(error));
};