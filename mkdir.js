fs = require('fs')
fs.mkdir('./test', function(err) {
  if(err)
    throw err
});
fs.writeFile('./testfile', 'oh hey, travis', function(err) {
  if(err)
    throw err
});
