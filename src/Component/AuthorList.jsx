import React, { useEffect, useState } from 'react';

const AuthorList = () => {
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        const fetchAuthors = async () => {
            try {
                const response = await fetch('http://localhost:5173');
                const data = await response.json();
                if (Array.isArray(data)) {
                    setAuthors(data);
                } else {
                    console.error('Expected an array, but got', data);
                    setAuthors([]); // Handle the error case
                }
            } catch (error) {
                console.error('Error fetching authors:', error);
                setAuthors([]); // Handle fetch error
            }
        };

        fetchAuthors();
    }, []);

    return (
        <div>
            {Array.isArray(authors) && authors.length ? (
                authors.map(author => <Author key={author.id} {...author} />)
            ) : (
                <p>No authors available.</p>
            )}
        </div>
    );
};

export default AuthorList;