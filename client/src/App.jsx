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
import Footer from './components/footer/Footer';

function App() {
    return (
        <AuthProvider>
            <>
                <Navigation />
                <div className="main-container">
                <Routes>
                    <Route path={Path.Home} element={<IndexPage />} />
                    <Route path={Path.BookCreate} element={<AddBook/>} />
                    <Route path={Path.BooksList} element={<BooksList />} />
                    <Route path={Path.OthersBooks} element={<OthersBooksList />} />
                    <Route path='/book-details/:bookId' element={<BookDetails />} />
                    <Route path='/selected-user-books/:username' element={<SpecificFavourites />} />
                    <Route path={Path.BookEdit} element={<BookEdit />} />
                    <Route path={Path.Register} element={<Register />} />
                    <Route path={Path.Login} element={<Login />} />
                    <Route path={Path.Logout} element={<Logout />} />
                </Routes>
                </div>
                <Footer />
            </>
        </AuthProvider>
    )
}

export default App
