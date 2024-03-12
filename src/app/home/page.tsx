import { getData } from '@/app/lib/data';
import Card from './card/card';

const Home = async () => {
  const data = await getData();

  return (
    <div>
      <h1>Home</h1>
      <Card data={data} />
    </div>
  )
}

export default Home;
