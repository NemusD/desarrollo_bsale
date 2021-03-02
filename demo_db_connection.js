var mysql = require('mysql');

//Conexión de inicialización

var con = mysql.createConnection({
    host: "mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com",
    database: "bsale_test",
    user: "bsale_test",
    password: "bsale_test",
});

//Crear la base de datos "MySQL"
con.connect(function(err) {
    if (err){throw err;
    }else{console.log("Connected!");
}
});
    
    /* con.query("CREATE DATABASE bsale_test", function (err, result) {
        if (err) throw err;
        console.log("Database created");
    }); */

    //Creación de tablas
    /* var sql = "INSERT INTO product (id, name, url_image, price, discount, category) VALUES (`${id}, ${name}, ${url_image}, ${price}, ${discount}, ${category}`)";
    con.query(sql, function (err, result) {
        if (err) {throw err;
        }else{console.log("Record inserted")};
    }); */
    /* var category = "CREATE TABLE category (id INT, name VARCHAR (255)";
    con.query(category, function (err, result) {
        if (err) throw err;
        console.log("Table category created");
    }); */

//Se detalla tabla de productos
con.query('SELECT * from product', function(err,results,fields){
    if(err)
    throw err;

    results.forEach( result => {
        console.log(result)
    });
})
//Se observan todas las categorias
con.query('SELECT * from category', function(err, result, fields){
    if(err)
    throw err;
    result.forEach(result => {
        console.log(result);
    });
});

//Consulta por id
con.query("SELECT * from product WHERE id = id", function (err, result){
    if (err) throw err;
    console.log(result);
    
});
//Consulta por name
con.query("SELECT * from product WHERE name = name", function (err, result){
    if (err) throw err;
    console.log(result);
    
});
//Orden decreciente por id
con.query('SELECT * from product ORDER BY id DESC', function (err,result) {
    if(err) throw err;
    console.log(result);
});

<button onclick="document.getElementById('demo').innerHTML = Date()">The time is?</button>


/* const inputBtn  =  document.querySelector('button[type="submit"]')
​inputBtn.addEventListener('click', searchProduct)
function searchProduct(e){
    let productName = e
    if(typeof(e)=='object'){
        productName = nameInput.value
    };
    if(validate(productName)){
        state.people.push(productName.titleize())
        render()
    }} */

con.end();