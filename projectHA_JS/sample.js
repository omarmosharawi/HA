const sqlite3 = require ('sqlite3').verbose();

let db = new sqlite3.Database('blog.db', (err) => {
    if (err){
        return console.err(err.message);
    }
    console.log('Connected sqlite3 blog database.');
});



// db.run(
//     'Create Table Articles (ArticleId INTEGER PRIMARY KEY, ArticleName TEXT, Author TEXT, Date TEXT)',
//     function(err){
//         if (err){
//         return console.err(err.message);
//     }
//     console.log('Table is created.');
// });

// db.run(
//     'Create Table Comments (CommentID INTEGER PRIMARY KEY, Name TEXT, Content TEXT, Date TEXT, ArticleId INTEGER, FOREIGN KEY (ArticleId) REFERENCES Articles (ArticleId))',
//     function(err){
//         if (err){
//         return console.err(err.message);
//     }
//     console.log('Table is created.');
// });

// db.run('INSERT INTO Articles(ArticleId,ArticleName,Author,Date)'+'VALUES(111,"Python","Omar","2017"),'+
//                                                                        '(222,"JS","Mahmoud","2023"),'+
//                                                                        '(333,"R","Omar","2017"),'+
//                                                                        '(444,"HTML","Adel","2023"),'+
//                                                                        '(555,"PHP","Mohamed","2020"),'+
//                                                                        '(666,"C++","Ahmed","2023"),'+
//                                                                        '(777,"Ruby","Omar","2017")',
//      function(err){
//          if (err){
//           return console.log(err.message);
//          }
//          console.log('Data inserted into Articales Tabel.');});

// db.run('INSERT INTO Comments(CommentID,Name,Content,Date,ArticleId)'+'VALUES(11111,"Omar","Welcome thats great","2017",111),'+
//                                                                            '(22222,"Mahmoud","Welcome thats great","2023",222),'+
//                                                                            '(33333,"Omar","Welcome thats great","2017",333),'+
//                                                                            '(44444,"Adel","Welcome thats great","2023",444),'+
//                                                                            '(55555,"Mohamed","Welcome thats great","2020",555),'+
//                                                                            '(66666,"Ahmed","Welcome thats great","2023",666),'+
//                                                                            '(77777,"Omar","Welcome thats great","2017",777),'+
//                                                                            '(88888,"Mariam","Welcome thats great","2017",777),'+
//                                                                            '(99999,"Abdelrahman","Welcome thats great","2017",777)',
//     function(err){
//         if (err){
//          return console.log(err.message);
//         }
//         console.log('Data inserted into Comment Tabel.');});

// db.all('SELECT * FROM Articles WHERE Date="2017"',
// function(err,table){
//     if(err){
//         return console.log(err.message);
//     }
//     console.log(table);
// });

// db.run('UPDATE Comments SET Content = "Hello World" WHERE CommentId=33333',
// function(err){
//     if(err){
//         return console.error(err.message);
//         }
//         console.log('Data is updated.');
// });

// db.run('DELETE FROM Comments WHERE CommentId = 88888',
// function(err){
//     if(err){
//          return console.error(err.message);
//      }
//      console.log('Data is deleted.');
// });



db.close( (err)=> {
    if(err){
        return console.err(err.message);
    }
    console.log('Close the database is done.');
});
