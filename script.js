fetch("https://fakestoreapi.com/products").then((data) => {
    //console.log(data); Data still in JSON format
    return data.json();  // Data Converted to Object
}).then((objectData) => {
    console.log(objectData[0].title);

    let tableData="";
    objectData.map((values) => {
        tableData += `<tr>
                        <td>${values.title}</td>
                        <td>${values.description}</td>
                        <td>${values.price}</td>
                        <td><img src="${values.image}"></td>
                        </tr>
                    `;
    });

    document.getElementById("tbody").innerHTML = tableData;
}).catch((err) => {
    console.log(err);
});