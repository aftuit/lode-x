import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import ItemsContent from '../components/ItemsContent'
import { SERVER_PATH } from '../util/const';
import Loader from '../components/Loader'
import { useUserContext } from '../context/context';
const Men = () => {

  const [men, setMen] = useState([]);
  const [loader, setLoader] = useState(true);
  const { update } = useUserContext();

  useEffect(() => {
    setLoader(true);
    fetch(`${SERVER_PATH}/men`, {
      method: 'GET'
    })
      .then((res) => res.json())
      .then((response) => {
        setMen(response);
        setLoader(false);
      })
      .catch(() => setLoader(false))
      .finally(() => setLoader(false))
  }, [update])

  return (
    <div className="min-h-screen">
      {
        (loader && !men.length) ?
          <Loader />
          :
          <>
            <Header status={men[0].status} />
            <ItemsContent data={men} />
          </>
      }
    </div>
  )
}

export default Men