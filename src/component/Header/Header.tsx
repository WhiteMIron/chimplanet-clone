/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import {
    BookMark,
    Container,
    HeaderBottom,
    HeaderTop,
    Logo,
    Nav,
    Search,
    SearchImage,
    SearchInput,
    LogoTitle,
    HeaderContent,
    HeaderTopContent,
    NavTitle,
} from './style';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBookmark, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isClickedSearch, setIsClickedSearch] = useState(false);

    return (
        <Container>
            <HeaderContent>
                <HeaderTop>
                    <HeaderTopContent>
                        <Logo />
                        <LogoTitle>CHIMPLANET</LogoTitle>
                        <Search>
                            <SearchInput placeholder="#태그검색"></SearchInput>

                            <SearchImage>
                                {
                                    <FontAwesomeIcon
                                        icon={faMagnifyingGlass}
                                        size="lg"
                                        className="fa-thin"
                                    />
                                }
                            </SearchImage>
                        </Search>
                    </HeaderTopContent>
                    <BookMark>
                        <Link to={''}>
                            <span style={{ marginRight: '5px', fontSize: '12px' }}>북마크</span>
                            <FontAwesomeIcon icon={faBookmark} style={{ color: '#00e5b3' }} />
                        </Link>
                    </BookMark>
                </HeaderTop>
                <HeaderBottom>
                    <Nav>
                        <Link to={''}>
                            <div style={{ marginTop: '-3px' }}>
                                <FontAwesomeIcon icon={faBars} size="lg" />
                            </div>
                            <NavTitle>
                                {'\u00A0'}
                                {'\u00A0'}
                                카테고리
                            </NavTitle>
                        </Link>
                        <Link to={''}>
                            <NavTitle>
                                {'\u00A0'}
                                {'\u00A0'}
                                공식
                            </NavTitle>
                        </Link>
                        {/* <ul>
                        <li>카테고리</li>
                        <li>공식</li>
                        <li></li>{' '}
                    </ul> */}
                    </Nav>
                </HeaderBottom>
            </HeaderContent>
        </Container>
    );
};

export default Header;
