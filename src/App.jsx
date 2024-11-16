import React from 'react'; // Import React
import { Routes, Route, useLocation } from "react-router-dom"; // Import from react-router-dom
import AuthorList from "./Component/AuthorList";
import BookList from "./Component/BookList";

import CategoryList from "./Component/CategoryList";
import './App.css';

function App() {
    const location = useLocation(); // This will be useful if you need to use location for routing

    return (
        <div>
            <Routes>
                <Route path='/auth' element={<AuthorList />} />
                <Route path='/books' element={<BookList />} />
                <Route path='/categories' element={<CategoryList />} />
            </Routes>
        </div>
    );
}

export default App;