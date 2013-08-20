var fs = require('fs')
var path = require('path');
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
var testpath = path.resolve('.', 'testrepos')
var deploydir = path.join(testpath, 'deploy');
fs.mkdir(testpath, function(){})
fs.mkdir(deploydir, function(){})
