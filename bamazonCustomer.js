var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'password',
    database: 'bamazon_db'
});

connection.connect(function (err) {
    if (err) throw err;
    console.log('Connected to DB');
    start();
});

function start() {
    getAllItems()
}

function getItemById() {
    inquirer.prompt([{
        name: 'id',
        type: 'input',
        message: 'give me a product id (ctrl c to exit)',
    }]).then(function (answer) {
        console.log(answer);
        connection.query('SELECT * FROM products WHERE item_id = ?', [answer.id], function (error, result) {
            if (error) throw error;
            console.table(result);
            // get quantity function below
            inquirer.prompt([{
                name: 'quantity',
                type: 'input',
                message: 'what is the quantity you want? (ctrl c to exit)',
            }]).then(function (answer) {
                console.log(answer.quantity);
                var userQuantity = answer.quantity;
                var stockQuantity = result[0].stock_quantity;
                console.log(result[0].stock_quantity);
                if (userQuantity > stockQuantity) {
                    console.log("insufficent stock");
                    start()
                } else {
                    console.log(stockQuantity - userQuantity);
                    // make the query to the database
                    // use the same id as before
                    // use that id to select that item again 
                    // use the equation from line 46 to update the new stock level
                }


            })

        })
    })
}

function getAllItems() {
    connection.query('SELECT * from products', function (error, results) {
        if (error) throw error;
        console.table(results);
        getItemById()
    });
}
