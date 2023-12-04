import React from "react";
import './App.scss'
import {Flex} from "./components/FlexBox/FlexBox.tsx";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {AppHeader} from "./components/AppHeader.tsx";
import {AppMenus} from "./config.tsx";

function App() {
    return (
        <Flex.Col className={'app'}>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <AppHeader/>
                <Routes>
                    <Route path="/" element={<Navigate replace to="/company"/>}/>
                    {Object.entries(AppMenus).map(([menu, {Component = <>{menu}</>, subMenu}]) => (
                        <React.Fragment key={menu}>
                            {
                                subMenu
                                    ? (
                                        <>
                                            {
                                                Object.entries(subMenu).map(
                                                    ([submenu, {Component}]) => (
                                                        <Route
                                                            key={menu}
                                                            path={`/${menu}/${submenu}`}
                                                            element={Component}
                                                        />
                                                    ))
                                            }
                                            <Route path={`/${menu}`} element={<Navigate replace to={`/${menu}/${Object.keys(subMenu)[0]}`}/>}/>
                                        </>
                                    )
                                    : <Route path={`/${menu}`} element={Component}/>
                            }
                        </React.Fragment>
                    ))}
                </Routes>
            </BrowserRouter>
        </Flex.Col>
    )
}

export default App
