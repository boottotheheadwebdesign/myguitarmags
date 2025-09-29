async function getSingleMag(magIdParam: string) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/mags/${magIdParam}`, {
    cache: 'no-store',
    method: 'GET'
  });

  const data = await response.json();
  return data;
} 

type ViewMagProps = {
  params: {
    magid: string;
  };
};

export default async function viewMag(props: ViewMagProps) {
  const { params } = props;
  const awaitedParams = await params;
  const response = await getSingleMag(awaitedParams.magid);
  const mag = response.data;
  return (
    <div>
      <h1>Magazine Details!!</h1>
      <pre>{JSON.stringify(mag, null, 2)}</pre>
      <h2>{mag.publication}</h2>
      <p>{mag.title}</p>
      <p>{mag.issue}</p>
      <p>{mag.volume}</p>
      <p>{mag.pubYear}</p>
      <p>{mag.pubMonth}</p>
      <p>{mag.fullDate}</p>
      
    </div>
  );
}
