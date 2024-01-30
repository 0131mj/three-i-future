import React from "react";
import {Link, useLocation} from "react-router-dom";
import {Flex} from "./FlexBox/FlexBox.tsx";
import cl from "classnames";
import {AppMenus} from "../config.tsx";

export const AppHeader: React.FC = () => {

    const {pathname} = useLocation();
    return (
        <Flex.Between fullWidth className={'app-header'}>
            <Link className={'ci'} to={'/'}>
                <img src="img/logo2.png" alt="메인 로고"/>
            </Link>
            <Flex.Between className={'menus'} gap={16}>
                {
                    Object.entries(AppMenus).map(([k, {title, subMenu}]) => {
                        const selected = pathname.startsWith(`/${k}`);
                        return (
                            <div key={k} className={'menu'}>
                                <Link
                                    to={`/${k}`}
                                    className={cl({
                                        'selected': selected,
                                    })}>
                                    {title}
                                </Link>
                                {
                                    subMenu && (
                                        <Flex.Col className={'submenus'}>
                                            {
                                                Object.entries(subMenu).map(([subMenuKey, {title}])=>{
                                                    return (
                                                        <Link key={subMenuKey} to={`/${k}/${subMenuKey}`}>{title}</Link>
                                                    )
                                                })
                                            }
                                        </Flex.Col>
                                    )
                                }
                            </div>
                        )
                    })
                }
            </Flex.Between>
        </Flex.Between>
    );
};