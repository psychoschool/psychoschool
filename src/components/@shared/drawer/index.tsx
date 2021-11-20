import React from 'react'
import { Outlet } from 'react-router-dom'

export const Drawer = () => {
  return (
    <div>
      <header>
        <ul>
          <li>nav 1</li>
          <li>nav 2</li>
          <li>nav 3</li>
        </ul>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  )
}
