import './App.css'
import { NavLinks } from './components/NavLinks'
import { SearchPanel } from './components/SearchPanel'
import { Services } from './components/Services'
import { LatestNewsSection } from './components/LatestNewsSection'

function App() {

  return (
    <>
    <LatestNewsSection title="Сейчас в СМИ">
      <li>
        <a href="/news1">
          🔥 Путин — выступил с заявлением о будущем экспорта газа
        </a>
      </li>
      <li>
        <a href="/news2">
        📉 Экономика — рубль укрепился на фоне новых санкций
        </a>
      </li>
      <li>
        <a href="/news3">
          ⚽ Спорт — Россия сыграет с Францией в новом турнире
        </a>
      </li>
    </LatestNewsSection>

      <NavLinks>
          <a href="/Video">Видео</a>
          <a href="/Pictures">Картинки</a>
          <a href="/News">Новости</a>
          <a href="/Maps">Карты</a>
          <a href="/Shop">Маркет</a>
          <a href="/Translate">Переводчик</a>
          <a href="/Boadcast">Эфир</a>
          <a href="/Other">Еще</a>
      </NavLinks>
      <SearchPanel />
      <Services />
    </>
  )
}

export default App
