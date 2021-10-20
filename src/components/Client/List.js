import { useQuery } from 'react-query'
import * as api from '../../api/client'
import Loader from 'react-loader-spinner'

const ClientList = () => {
  const { data, error, isLoading, isError } = useQuery(
    'clients',
    api.getClients,
  )

  if (isLoading) {
    return <Loader type="ThreeDots" color="#ccc" height={30} />
  }

  if (isError) {
    return <span>ERROR: {error.message}</span>
  }

  return (
    <div>
      {data.map((client) => {
        return <div>{client._id}</div>
      })}
    </div>
  )
}

export default ClientList
