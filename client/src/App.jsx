import { Routes, Route } from 'react-router-dom';

import { useRef } from 'react'

import { AuthProvider } from './contexts/AuthContext';

import Navigation from "./components/navigation/Navigation"
import IndexPage from "./components/index-page/IndexPage"
import AddBook from './components/add-book/AddBook';
import ListBooks from './components/list-books/ListBooks';
import BookDetails from './components/book-details/BookDetails';
import Register from './components/register/Register';
import Login from './components/login/Login';
import Logout from './components/logout/Logout';

function App() {
    return (
        <AuthProvider>
            <>
                <Navigation />
                <Routes>
                    <Route path='/' element={<IndexPage />} />
                    <Route path='/create-book' element={<AddBook/>} />
                    <Route path='/list-books' element={<ListBooks />} />
                    <Route path='/book-details/:bookId' element={<BookDetails />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/logout' element={<Logout />} />
                </Routes>
            </>
        </AuthProvider>
    )
}

export default App
