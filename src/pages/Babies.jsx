import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import ItemsContent from '../components/ItemsContent'
import Loader from '../components/Loader';
import { SERVER_PATH } from '../util/const';
import { useUserContext } from '../context/context';
const Babies = () => {
  const [baby, setBaby] = useState([]);
  const [loader, setLoader] = useState(true);
  const { update } = useUserContext()

  useEffect(() => {
    setLoader(true);
    fetch(`${SERVER_PATH}/baby`, {
      method: 'GET'
    })
      .then((res) => res.json())
      .then((response) => {
        setBaby(response);
        setLoader(false);
        
      })
      .catch(() => setLoader(false))
      .finally(() => setLoader(false))
  }, [update])

  return (
    <div className="min-h-screen">
      {
        (loader && !baby.length) ?
          <Loader />
          :
          <>
            <Header status={baby[0].status} />
            <ItemsContent data={baby} />
          </>
      }
    </div>
  )
}
export default Babies