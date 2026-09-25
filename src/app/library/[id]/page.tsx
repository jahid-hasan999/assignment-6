import DetailsCard from '@/app/component/shared/DetailsCard';
import { FitlogData } from '@/type/page';
import { notFound } from 'next/navigation';

interface DetailsParams {
  params: Promise<{
    id: string;
  }>;
}

const getData = async (): Promise<FitlogData[]> => {
  const res = await fetch('https://api.abcz.workers.dev/api/fitlog');

  if (!res.ok) {
    throw new Error('Failed to fetch workout data');
  }

  return res.json();
};

const DetailsData = async ({ params }: DetailsParams) => {
  const { id } = await params;

  const datas = await getData();

  const workout = datas.find(item => String(item.id) === id);

  if (!workout) {
    notFound();
  }

  return (
    <div>
      <DetailsCard user={workout} />
    </div>
  );
};

export default DetailsData;
