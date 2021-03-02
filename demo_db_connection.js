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
});

con.query('SELECT * from product', function(err,results,fields){
    if(err)
    throw err;

    results.forEach( result => {
        console.log(result)
    });
})

con.end();