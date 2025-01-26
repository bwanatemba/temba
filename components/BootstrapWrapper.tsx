'use client'

import { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

export default function BootstrapWrapper({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Bootstrap JS initialization
    require('bootstrap/dist/js/bootstrap.bundle.min.js')
  }, [])

  return <>{children}</>
}