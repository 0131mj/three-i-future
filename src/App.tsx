import './App.scss'
import {Flex} from "./components/FlexBox/FlexBox.tsx";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import React from "react";
import {Company} from "./pages/Company.tsx";
import {AppHeader} from "./components/AppHeader.tsx";

export const AppMenus: {
    [key: string]: {
        title: string;
        Component: React.ReactNode,
    }
} = {
    company: {
        title: "쓰리아이퓨처",
        Component: <Company/>,
    },
    solution: {
        title: "솔루션 소개",
        Component: <Flex.ColCenter>
            <section><h3>구성도</h3></section>
            <section><h3>특징</h3></section>
        </Flex.ColCenter>
        ,
    },
    product: {
        title: "제품소개",
        Component: <Flex.ColCenter>
            <section><h3>구성도</h3></section>
            <section><h3>특징</h3></section>
        </Flex.ColCenter>
        ,
    },
    contact: {
        title: "고객문의",
        Component: <Flex.ColCenter>
            <section><h3>고객문의</h3></section>
        </Flex.ColCenter>,
    },
    // ai: {
    //     title: "AI 기반 영상통합관제",
    // },
    // SmartRadar: {
    //     title: "Smart Radar",
    // },
}

function App() {
    return (
        <Flex.Col className={'app'}>
            <BrowserRouter>
                <AppHeader/>
                <Routes>
                    <Route path="/" element={<Navigate replace to="/company"/>}/>
                    {Object.entries(AppMenus).map(([key, {Component}]) => (
                            <Route key={key} path={`/${key}`} element={Component}/>
                        )
                    )}
                </Routes>
            </BrowserRouter>
        </Flex.Col>
    )
}

export default App
