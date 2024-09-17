import React from 'react'
import Client from './Client';

export default function Bank() {
    const amount = 10000;
  return (
    <div>
        <h1>Bank</h1>
        <Client money ={amount} />
    </div>
  )
}
