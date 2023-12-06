import { Routes, Route } from 'react-router-dom';

import { useRef } from 'react'

import { AuthProvider } from './contexts/AuthContext';

import Navigation from "./components/navigation/Navigation"
import IndexPage from "./components/index-page/IndexPage"
import AddBook from './components/add-book/AddBook';
import BooksList from './components/list-books/BooksList';
import BookDetails from './components/book-details/BookDetails';
import Register from './components/register/Register';
import Login from './components/login/Login';
import Logout from './components/logout/Logout';
import OthersBooksList from './components/list-books/OthersBooksList';
import Path from './paths';
import BookEdit from './components/book-edit/BookEdit';
import SpecificFavourites from './components/list-books/SelectedUserFavourites';

function App() {
    return (
        <AuthProvider>
            <>
                <Navigation />
                <Routes>
                    <Route path={Path.Home} element={<IndexPage />} />
                    <Route path='/create-book' element={<AddBook/>} />
                    <Route path={Path.BooksList} element={<BooksList />} />
                    <Route path='/others-books' element={<OthersBooksList />} />
                    <Route path='/book-details/:bookId' element={<BookDetails />} />
                    <Route path='/selected-user-books/:username' element={<SpecificFavourites />} />
                    <Route path={Path.BookEdit} element={<BookEdit />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/logout' element={<Logout />} />
                </Routes>
            </>
        </AuthProvider>
    )
}

export default App
