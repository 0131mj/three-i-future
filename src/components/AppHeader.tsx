import {Link, useLocation} from "react-router-dom";
import {AppMenus} from "../App.tsx";
import {Flex} from "./FlexBox/FlexBox.tsx";
import cl from "classnames";

export const AppHeader: React.FC<{}> = () => {

    const {pathname} = useLocation();
    return (
        <Flex.Between fullWidth className={'app-header'}>
            <Link className={'ci'} to={'/'}>CI</Link>
            <Flex.Between className={'menu'} gap={16}>
                {
                    Object.entries(AppMenus).map(([k, {title}]) => {
                        const selected = pathname.startsWith(`/${k}`);
                        return (
                            <Link
                                key={k}
                                to={`/${k}`}
                                className={cl({
                                    'menu': true,
                                    'selected': selected,
                                })}>
                                {title}
                            </Link>
                        )
                    })
                }
            </Flex.Between>
        </Flex.Between>
    );
};