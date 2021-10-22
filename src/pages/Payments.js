import * as React from 'react';
import Layout from '../components/Layout';
import PaymentForm from '../components/Payment/PaymentForm'
export default function Payments() {
  return (
      <Layout title={"Liste des paiements"}>
        <PaymentForm />
      </Layout>
  );
}
