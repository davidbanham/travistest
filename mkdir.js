fs = require('fs')
path = require('path');
fs.mkdir('./test', function(err) {
  if(err) {
    throw err
  }
});
fs.writeFile('./testfile', 'oh hey, travis', function(err) {
  if(err) {
    throw err
  }
});
fs.mkdir(path.resolve('./hmm'), function(err) {
  if(err) {
    throw err
  }
});
