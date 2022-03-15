import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
        <h1>Trang chủ</h1>
        <Link to="/">Đăng nhập</Link>
    </div>
  )
}

export default Home