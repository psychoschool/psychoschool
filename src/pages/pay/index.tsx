import React, { FormEvent } from 'react'
import { useScript } from 'utils/script.util'

const PayPage = () => {
  useScript('https://securepay.tinkoff.ru/html/payForm/js/tinkoff_v2.js')

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    window.pay()
  }

  return (
    <div>
      <p>Pay page</p>
      <form name='TinkoffPayForm' onSubmit={onSubmit}>
        <input className='tinkoffPayRow' type='hidden' name='terminalkey' value='TinkoffBankTest' />
        <input className='tinkoffPayRow' type='hidden' name='frame' value='true' />
        <input className='tinkoffPayRow' type='hidden' name='language' value='ru' />
        <input className='tinkoffPayRow' type='text' placeholder='Сумма заказа' name='amount' required />
        <input className='tinkoffPayRow' type='text' placeholder='Номер заказа' name='order' />
        <input className='tinkoffPayRow' type='text' placeholder='Описание заказа' name='description' />
        <input className='tinkoffPayRow' type='text' placeholder='ФИО плательщика' name='name' />
        <input className='tinkoffPayRow' type='text' placeholder='E-mail' name='email' />
        <input className='tinkoffPayRow' type='text' placeholder='Контактный телефон' name='phone' />
        <input className='tinkoffPayRow' type='submit' value='Оплатить' />
      </form>
    </div>
  )
}

export default PayPage
