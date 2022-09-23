import React from 'react'
import { Route, Routes,Navigate} from 'react-router'
import LoginPage from './components/pages/LoginPage'
import RegisterPage from './components/pages/RegisterPage'

type Props = {}

export default function App({}: Props) {
  return (
    <>
    <Routes>
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/register" element={<RegisterPage/>} />
      <Route path="/" element={<Navigate to="/login" />} />

    </Routes>
    </>
    )
}
