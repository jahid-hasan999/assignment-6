import DetailsCard from '@/app/component/shared/DetailsCard';
import { FitlogData } from '@/type/page';


interface DetailsPrams{
  params: Promise<{
    id:string,
  }>
}

const getData = async (): Promise<FitlogData[]> => {
  const res = await fetch('https://api.abcz.workers.dev/api/fitlog');
  if (!res.ok) {
    throw new Error('Failed to fetch workout data');
  }
  return res.json();
};
const DetailsData = async ({ params }:DetailsPrams) => {
  
  const { id } = await params;
  const datas = await getData();
  const workout = datas.find(item => String(item.id) === id);

  if (!workout) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        {' '}
        <h1 className="text-3xl font-bold">Workout not found</h1>{' '}
      </div>
    );
  }
  
  return (
    <div>
      <DetailsCard user={workout} />
    </div>
  );
};

export default DetailsData;