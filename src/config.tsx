import React from "react";
import {Company} from "./pages/Company.tsx";
import {Flex} from "./components/FlexBox/FlexBox.tsx";
import {DeepLearning} from "./pages/DeepLearning.tsx";

interface AppMenu {
    [key: string]: {
        title: string;
        Component?: React.ReactNode,
        subMenu?: AppMenu
    }
}

export const AppMenus: AppMenu = {
    company: {
        title: "쓰리아이퓨처",
        Component: <Company/>,
    },
    solution: {
        title: "솔루션 소개",
        subMenu: {
            deepLearning: {
                title: "딥러닝 영상분석 솔루션",
                Component: <DeepLearning/>,
            },
            dual: {
                title: "듀얼 카메라 기반 다중센서 시스템",
                Component: <Flex.ColCenter>
                    <section>: 듀얼 카메라 기반 다중센서는 단일 제품에서 RGB영상과 열화상 듀얼 스트리밍을 지원하는 제품입니다.</section>
                </Flex.ColCenter>,
            },
            car: {
                title: "기간시설 보안관리를 위한 차량 하부 감시 시스템",
                Component: <Flex.ColCenter>
                    <section>
                        차량 하부 감시 시스템은 보안이 필요한 장소에 출입하는 차량의 하부구조에서 숨겨진 위협을 자동식별하는 안전한 솔루션을 제공합니다.
                    </section>
                </Flex.ColCenter>,
            },
            security: {
                title: "스마트 시큐리티 센서",
                Component: <Flex.ColCenter>
                    <section>
                        스마트 시큐리티센서로 주변환경을 실시간 모니터링(무단침입, 화재 등)하고 사용자의 App을 통해 상황전파하여 범죄행위를 예방합니다.
                    </section>
                </Flex.ColCenter>,
            },
        }
        ,
    },
    product: {
        title: "제품소개",
        subMenu: {
            smartRadar: {
                title: "Smart Radar",
            },
        }
    },
    contact: {
        title: "고객문의",
        Component: <Flex.ColCenter>
            <section><h3>고객문의</h3></section>
        </Flex.ColCenter>,
    },
}