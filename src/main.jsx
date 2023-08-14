import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "@picocss/pico"

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <App />
  </>
)


/*
- [x] Default olarak hiçbir görsel seçilmesin ve bu durumda Görsel Seçilmedi Componenti gözüksün.
- [x]  Products içinde id , name , imgName , thumbnail , isAvailable(true/false) , isActive(false) olcak
- [x]  Lorem Picsum görselleri imgName içinde ve thumbnail içinde tutulsun.
- [x]  Bölün sonu çalışması bir önceki proje uygulansın
- [x]  Img thumbnail altında seç butonu olsun ve seç dediğimizdfe isActive true olsun.

*/