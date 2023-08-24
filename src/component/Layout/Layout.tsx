import styled from '@emotion/styled';
import Header from 'component/Header/Header';
import React from 'react';

const Container = styled.div`
    /* display: flex;
    justify-content: center;
    align-items: center; */
    margin: 0 auto;
`;

const Layout = () => {
    return (
        <Container>
            <Header></Header>
        </Container>
    );
};

export default Layout;
