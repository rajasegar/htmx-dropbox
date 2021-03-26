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

app.listen(PORT);

console.log('Listening on port: ', PORT);



