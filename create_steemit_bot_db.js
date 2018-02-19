var mysql = require('mysql');

var conn = mysql.createConnection({
  host: '10.10.1.24',
  user: 'root',
  password: 'password'
});

conn.connect(function(err){
  if(err) throw err;
  console.log('Connected!');
  con.query('CREATE DATABASE steemBotDB', function(err, result){
    if(err) throw err;
    console.log('Database created!');
  })
})
