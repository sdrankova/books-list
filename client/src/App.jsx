import { Routes, Route } from 'react-router-dom';

import { useRef } from 'react'

import Navigation from "./components/navigation/Navigation"
import IndexPage from "./components/index-page/IndexPage"
import AddBook from './components/add-book/AddBook';
import ListBooks from './components/list-books/ListBooks';

function App() {
  const formRef = useRef();

    return (
        <>
            <Navigation />
            <Routes>
                <Route path='/' element={<IndexPage />} />
                <Route path='/create-book' element={<AddBook formRef={formRef} />} />
                <Route path='/list-books' element={<ListBooks />} />
            </Routes>
        </>
    )
}

export default App
