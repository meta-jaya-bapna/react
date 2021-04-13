import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import BlogsEntity from './BlogsEntity.js';
import BlogPosts from './BlogPosts.js';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

function BlogsData() {

  const blogs = [
    {title: 'Post Title 1', description: 'Post Description 1'},
    {title: 'Post Title 2', description: 'Post Description 2'},
    {title: 'Post Title 3', description: 'Post Description 3'},
    {title: 'Post Title 4', description: 'Post Description 4'}
  ];

  return (
    <div style = {{ borderStyle: "solid",
    borderColor: "black",
    width: '300px',
    padding: '50px',
    margin: '2px'}}>
      <BlogPosts/>
      <BlogsEntity blogs={blogs} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<BlogsData />, rootElement);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
