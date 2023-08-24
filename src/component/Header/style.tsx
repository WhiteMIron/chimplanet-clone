import styled from '@emotion/styled';
import monky from '@assets/monky.png';
import { css } from '@emotion/react';

export const Container = styled.header`
    padding-top: 12px;
    position: sticky;
    top: 0;
    width: 100%;
    z-index: 100;
    border-bottom: 1px solid rgb(219, 222, 226);
`;

export const HeaderContent = styled.div`
    width: 1060px;
    margin: 0 auto;
`;
export const HeaderTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 10px;
`;

export const HeaderBottom = styled.div`
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    ul {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        li {
            font-size: 20px;
            height: 100%;
            display: flex;
            align-items: center;
            list-style: none;
        }
    }
`;

export const Logo = styled.div`
    width: 24px;
    height: 24px;
    background-image: url(${monky});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
    margin-right: 10px;
`;

export const Search = styled.div`
    display: grid;
    grid-template-columns: auto 16px;
    width: 350px;

    padding: 10px 20px;
    border-radius: 100px;
    background-color: rgb(245, 246, 247);
`;

export const SearchImage = styled.div`
    display: inline-block;
    text-align: center;

    cursor: pointer;
`;

export const SearchInput = styled.input`
    width: 100%;
`;

export const BookMark = styled.div`
    border: 1px solid rgb(219, 222, 226);
    border-radius: 100px;
    padding: 6px 10px;
    font-size: 12px;
    cursor: pointer;
    transition: background-color ease-in-out 200ms;
    &:hover {
        background-color: rgba(0, 0, 0, 0.05);
    }
`;

export const LogoTitle = styled.a`
    cursor: pointer;
    margin-right: 30px;
`;
export const Nav = styled.div`
    display: flex;
    justify-content: space-between;

    a {
        display: flex;
        padding-right: 23px;
        height: 35px;
    }
`;

export const HeaderTopContent = styled.div`
    display: flex;
    align-items: center;
`;

export const LargeSearchBox = styled.div``;

export const NavTitle = styled.span`
    font-size: 14px;
`;
