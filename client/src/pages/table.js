import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BookTable() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/book')
      .then(res => {
        setBooks(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Publish Date</th>
            <th>Writer</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {books.map(book => (
            <tr key={book._id}>
              <td>{book._id}</td>
              <td>{book.name}</td>
              <td>{book.description}</td>
              <td>{book.publishDate}</td>
              <td>{book.writer.firstName}</td>
              <td>{book.writer.country.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BookTable;
