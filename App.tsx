import React from 'react';
import InfiniteMenu from './components/InfinteMenu';



const items = [
  {
    image: '',
    link: 'https://google.com/',
    title: 'Item 1',
    description: 'This is pretty cool, right?'
  },
  {
    image: 'https://postimg.cc/hhQ4M6gp',
    link: 'https://google.com/',
    title: 'Item 2',
    description: 'This is pretty cool, right?'
  },
  {
    image: './assets/case_chronicels.jpg',
    link: 'https://google.com/',
    title: 'Item 3',
    description: 'This is pretty cool, right?'
  },
  {
    image: 'https://picsum.photos/600/',
    link: 'https://google.com/',
    title: 'Item 4',
    description: 'This is pretty cool, right?'
  }
];

const App: React.FC = () => (
  <div style={{ height: '600px', position: 'relative' }}>
    <InfiniteMenu items={items} />
  </div>
);

export default App;
