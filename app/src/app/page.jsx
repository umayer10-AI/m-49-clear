import React from 'react';

const g = async () => {
  const res = await fetch("http://localhost:5000")
  return res.json()
}

const page = async () => {

  const data = await g()
  console.log(data)

  return (
    <div>
      <h2>Home Page</h2>
      <h2>Cards: {data.length}</h2>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    data.map(v => (
                        <div key={v.id} className='border border-amber-50 p-3 rounded-2xl'>
                            <h2 className='text-2xl font-bold'>{v.id}</h2>
                            <h2 className='text-2xl font-bold text-green-500'>{v.name}</h2>
                            <h2 className='text-2xl font-bold text-yellow-500'>{v.email}</h2>
                        </div>
                    ))
                }
            </div>
    </div>
  );
};

export default page;