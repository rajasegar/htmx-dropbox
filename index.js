const express = require('express');
const pug = require('pug');
const bodyParser = require('body-parser');


const PORT = process.env.PORT || 3000;
const app = express();

const boxData = [
  {
    name: 'Development',
    type: 'folder'
  },
  {
    name: 'Documents',
    type: 'folder'
  },
  {
    name: 'Media',
    type: 'folder'
  },
  {
    name: 'Music',
    type: 'folder'
  },
  {
    name: 'Pictures',
    type: 'folder'
  },
  {
    name: 'Videos',
    type: 'folder'
  },
  {
    name: 'delete.me',
    type: 'file'
  },
  {
    name: 'drag_and_drop.me',
    type: 'file'
  },
  {
    name: 'rename.me',
    type: 'file'
  },
  {
    name: 'Untitled.png',
    type: 'file'
  },
];

app.set('view engine', 'pug');
app.use(express.static('assets'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.render('index', { boxData });
});

app.get('/list-view', (req, res) => {
  const template = pug.compileFile('views/_list-view.pug');
  const markup = template({ boxData });
  res.send(markup);
});

app.get('/grid-small', (req, res) => {
  const template = pug.compileFile('views/_grid-small.pug');
  const markup = template({ boxData });
  res.send(markup);
});

app.get('/grid-view', (req, res) => {
  const template = pug.compileFile('views/_grid-view.pug');
  const markup = template({ boxData });
  res.send(markup);
});

function clearNewFlags() {
  setTimeout(() => {
    boxData.forEach(b => { 
      if(b.new) b.new = false
    })
  }, 2000);
}

app.get('/new-folder', (req, res) => {
  boxData.unshift({
    name: 'New Folder',
    type: 'folder',
    new: true
  });

  const template = pug.compileFile('views/_list-view.pug');
  const markup = template({ boxData });
  res.send(markup);
  clearNewFlags();
});

app.get('/new-file', (req, res) => {
  boxData.unshift({
    name: 'New File',
    type: 'file',
    new: true
  });

  const template = pug.compileFile('views/_list-view.pug');
  const markup = template({ boxData });
  res.send(markup);
  clearNewFlags();


});

app.delete('/', (req, res) => {
  const { name } = req.query;
  boxData.splice(boxData.findIndex(d => d.name === name), 1);
  const template = pug.compileFile('views/_list-view.pug');
  const markup = template({ boxData });
  res.send(markup);
});

app.listen(PORT);

console.log('Listening on port: ', PORT);



