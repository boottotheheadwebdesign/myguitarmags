async function getSingleMag(magIdParam) {
  let response = await fetch(`http://localhost:3000/api/mags/${magIdParam}`, {
    cache: 'no-store',
    method: 'GET'
  });

  response = await response.json();
  return response;
} 

export default async function ViewSingeMag(params) {
  const result = await getSingleMag(params.magid);
  const mag = result.data;
  console.log(mag);
  return (
    <div>
      <h1>Magazine Details!!</h1>
      {/* <pre>{JSON.stringify(mag, null, 2)}</pre> */}
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
