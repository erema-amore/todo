import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './components/Home/Home';
import Layout from './components/layout/Layout';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <Layout>
      
    <Home />
    </Layout>

    </>
  
);

