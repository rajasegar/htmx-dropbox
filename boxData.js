const { v4 : uuid } = require('uuid');

module.exports = [
  {
    name: 'Development',
    type: 'folder',
    id: uuid(),
    contents: [
      {
        name: 'htmx',
        type: 'folder',
        id: uuid(),
        contents: []
      },
      {
        name: 'hyperscript',
        type: 'folder',
        id: uuid(),
        contents: []
      },
      {
        name: 'Bootstrap',
        type: 'folder',
        id: uuid(),
        contents: []
      },
      {
        name: 'JavaScript',
        type: 'folder',
        id: uuid(),
        contents: []
      },
      {
        name: 'Node',
        type: 'folder',
        id: uuid(),
        contents: []
      },
      {
        name: 'Express',
        type: 'folder',
        id: uuid(),
        contents: []
      },
    ]
  },
  {
    name: 'Documents',
    type: 'folder',
    id: uuid(),
    contents: [],
  },
  {
    name: 'Media',
    type: 'folder',
    id: uuid(),
    contents: [],
  },
  {
    name: 'Music',
    type: 'folder',
    id: uuid(),
    contents: [],
  },
  {
    name: 'Pictures',
    type: 'folder',
    id: uuid(),
    contents: [],
  },
  {
    name: 'Videos',
    type: 'folder',
    id: uuid(),
    contents: [],
  },
  {
    name: 'delete.me',
    type: 'file',
    id: uuid()
  },
  {
    name: 'drag_and_drop.me',
    type: 'file',
    id: uuid()
  },
  {
    name: 'rename.me',
    type: 'file',
    id: uuid()
  },
  {
    name: 'Untitled.png',
    type: 'file',
    id: uuid()
  },
];
