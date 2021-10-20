import * as React from 'react'
import Layout from '../components/Layout'
import Form from '../components/Client/Form'
import ClientList from '../components/Client/List'

export default function Clients() {
  return (
    <Layout title={'Liste des patients'}>
      <div>Formulaire de recherche des patients</div>
      <Form></Form>
      <ClientList></ClientList>
    </Layout>
  )
}
