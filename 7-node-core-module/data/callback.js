function fetchData(callback) {
    const data = { name: "John" };
    callback(data);
}

fetchData((data) => {
  console.log(data.name); 
});
