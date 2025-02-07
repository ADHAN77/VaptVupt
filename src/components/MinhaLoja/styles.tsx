import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    height: 100vh;
    `;

    export const Sidebar = styled.nav`
    width: 200px;
    background-color: rgb(0, 4, 255);
    display: flex;
    flex-direction: column;
    padding: 20px;
    `;


    export const MenuItem = styled.button<{ active: boolean }>`
    display: flex;
    align-items: center;
    gap: 10px;
    border: 1px solid ${({ active }) => (active ? "rgb(0, 245, 192)" : "rgb(0, 4, 255)")};
    background-color: rgb(0, 4, 255);
    color: #fff;
    padding: 10px 20px;
    text-align: left;
    font-size: 16px;
    cursor: pointer;
    border-radius: 5px;
    margin-bottom: 10px;
    transition: 0.3s;

    img {
        width: 24px;
        height: 24px;
        display: block;
    }

    &:hover {
        border: 1px solid rgb(0, 245, 192);
    }
    `;

    export const Content = styled.div`
    flex: 1;
    padding: 20px;
    background: #ecf0f1;
`;
