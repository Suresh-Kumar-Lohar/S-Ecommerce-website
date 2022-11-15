import Content from './components/Content/Content'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Title from './components/Title/Title'

function App() {
  return (
    <div>
      <Header />
      <main>
        <Title />
        <Content />
      </main>
      <Footer />
    </div>
  )
}

export default App
