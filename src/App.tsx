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
                    {Object.entries(AppMenus).map(([key, {Component = <>{key}</>}]) => (
                            <Route key={key} path={`/${key}`} element={Component}/>
                        )
                    )}
                </Routes>
            </BrowserRouter>
        </Flex.Col>
    )
}

export default App
