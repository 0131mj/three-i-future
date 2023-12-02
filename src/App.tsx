import React from "react";
import './App.scss'
import {Flex} from "./components/FlexBox/FlexBox.tsx";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {AppHeader} from "./components/AppHeader.tsx";
import {AppMenus} from "./config.tsx";

function App() {
    return (
        <Flex.Col className={'app'}>
            <BrowserRouter>
                <AppHeader/>
                <Routes>
                    <Route path="/" element={<Navigate replace to="/company"/>}/>
                    {Object.entries(AppMenus).map(([key, {Component = <>{key}</>, subMenu}]) => (
                        <React.Fragment key={key}>
                            {
                                subMenu
                                    ? Object.entries(subMenu).map(
                                        ([submenuKey, {Component}]) => (
                                            <Route
                                                key={key}
                                                path={`/${key}/${submenuKey}`}
                                                element={Component}
                                            />
                                        ))
                                    : <Route path={`/${key}`} element={Component}/>
                            }
                        </React.Fragment>
                    ))}
                </Routes>
            </BrowserRouter>
        </Flex.Col>
    )
}

export default App
