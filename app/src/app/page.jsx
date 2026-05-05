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
    </div>
  );
};

export default page;