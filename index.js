const express = require('express');
const pug = require('pug');
const bodyParser = require('body-parser');
const { v4 : uuid } = require('uuid');
const boxData = require('./boxData');


const PORT = process.env.PORT || 3000;
const app = express();


app.set('view engine', 'pug');
app.use(express.static('assets'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.render('index', { boxData });
});

app.get('/folders/:id', (req, res) => {
  const { id } = req.params;
  const item = boxData.find(b => b.id === id) || { contents: [] };
  res.render('folders', { boxData: item.contents , currentFolder: item });
});

app.get('/files/:id', (req, res) => {
  const { id } = req.params;
  const item = boxData.find(b => b.id === id);
  res.render('files', { currentFile: item });
});

app.get('/list-view', (req, res) => {
  const { id } = req.query;
  const template = pug.compileFile('views/_list-view.pug');
  if(id) {
    const item = boxData.find(b => b.id === id);
    const markup = template({ boxData: item.contents, currentFolder: item});
    res.send(markup);
  } else {
    const markup = template({ boxData });
    res.send(markup);
  }
});

app.get('/grid-small', (req, res) => {
  const { id } = req.query;
  const template = pug.compileFile('views/_grid-small.pug');
  if(id) {
    const item = boxData.find(b => b.id === id);
    const markup = template({ boxData: item.contents, currentFolder: item });
    res.send(markup);
  } else {
    const markup = template({ boxData });
    res.send(markup);
  }
});

app.get('/grid-view', (req, res) => {
  const { id } = req.query;
  const template = pug.compileFile('views/_grid-view.pug');
  if(id) {
    const item = boxData.find(b => b.id === id);
    const markup = template({ boxData: item.contents, currentFolder: item });
    res.send(markup);
  } else {

    const markup = template({ boxData });
    res.send(markup);
  }
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
    new: true,
    id: uuid()
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
    new: true,
    id: uuid()
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

app.get('/edit', (req, res) => {
  const { id } = req.query;
  const item = boxData.find(b => b.id === id);
  const template = pug.compileFile('views/_edit-item.pug');
  const markup = template({ item });
  res.send(markup);
});

app.post('/update/:id', (req, res) => {
  const { id } = req.params;
  console.log(req.params);
  const { name } = req.body;
  console.log(req.body);
  const item = boxData.find(b => b.id === id);
  console.log(item);
  item.name = name.slice(0, 30);

  const template = pug.compileFile('views/_list-view.pug');
  const markup = template({ boxData });
  res.send(markup);
});
app.listen(PORT);

console.log('Listening on port: ', PORT);



