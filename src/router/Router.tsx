import Main from 'page/Main/Main';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

const Router = () => {
    return (
        <Routes>
            {/* <Route path="/" element={<Navigate to="/login"></Navigate>}></Route> */}
            <Route path="/" element={<Main />} />
            <Route path="/test" element={<Main />} />
        </Routes>
    );
};

export { Router };
