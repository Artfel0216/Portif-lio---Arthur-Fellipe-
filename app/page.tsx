import Header from './components/header/page';
import NodeServerTerminal from './components/NodeServerTerminal/page';


export default function Home() {
  return (
    <div className='items-center justify-center flex flex-col'>
      <Header />
      <NodeServerTerminal />
    </div>
  );
}
