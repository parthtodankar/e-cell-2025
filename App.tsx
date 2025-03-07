import React from 'react';
import InfiniteMenu from './components/InfinteMenu';



const items = [
  {
    image: 'e-cell/public/assets/ptich_perfect_sales.jpg',
    link: '',
    title: 'Pitch Perfect Sales',
    description: 'Refine your startup pitch with guidance from industry experts.'
  },
  {
    image: 'e-cell/public/assets/case_chornicles.jpg',
    link: '',
    title: 'Case Chronicles',
    description: 'Explore real-world business cases.'
  },
  {
    image: 'e-cell/public/assets/eureka.jpg',
    link: 'https://google.com/',
    title: 'Item 1',
    description: 'This is pretty cool, right?'
  },
  {
    image: 'e-cell/public/assets/vyapaar_pe_vichaar.jpg',
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
