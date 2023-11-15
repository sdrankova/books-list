import { Routes, Route } from 'react-router-dom';

import { useRef } from 'react'

import Navigation from "./components/navigation/Navigation"
import IndexPage from "./components/index-page/IndexPage"
import AddBook from './components/add-book/AddBook';

function App() {
  const formRef = useRef();

    return (
        <>
            <Navigation />
            <Routes>
                <Route path='/' element={<IndexPage />} />
                <Route path='/create-book' element={<AddBook formRef={formRef} />} />
            </Routes>
        </>
    )
}

export default App
