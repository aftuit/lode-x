import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import ItemsContent from '../components/ItemsContent'
import { SERVER_PATH } from '../util/const';
import Loader from '../components/Loader';
import { useUserContext } from '../context/context';

const Women = () => {
  const [women, setWomen] = useState([]);
  const [loader, setLoader] = useState(true);
  const { update } = useUserContext()

  useEffect(() => {
    setLoader(true);
    fetch(`${SERVER_PATH}/women`, {
      method: 'GET'
    })
      .then((res) => res.json())
      .then((response) => {
        setWomen(response);
        setLoader(false);
      })
      .catch(() => setLoader(false))
      .finally(() => setLoader(false))
  }, [update])

  return (
    <div className="min-h-screen">
      {
        (loader && !women.length) ?
          <Loader />
          :
          <>
            <Header status={women[0].status} />
            <ItemsContent data={women} />
          </>
      }
    </div>
  )
}

export default Women