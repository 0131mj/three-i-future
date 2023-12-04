import React from "react";
import {Flex} from "../components/FlexBox/FlexBox.tsx";

export const DeepLearning: React.FC = () => {
    return (
        <Flex.ColCenter>
            <section>
                <h3>딥러닝 영상분석 솔루션</h3>
                <p>딥러닝 기반 영상분석 솔루션은 광범위한 통합 업체와 협력하여 고객을 위한 비용 효율적인 맞춤형 시스템을 구축합니다.</p>
                <h4>구성도</h4>
                <Flex.Center style={{padding: "2rem 0"}}>
                    <img src="../img/deep/diargram.png" alt="딥러닝 구성도"/>
                </Flex.Center>
                <ul>
                    <li>
                        딥러닝 서버 : CCTV 카메라 영상과 연계하여 딥러닝 기술을 조합하여 이상상황(학교폭력, 화재 등)을 영상분석 검지
                    </li>
                    <li>모니터링 PC / App기반 상황전파 시스템 : 이벤트 표출, 실시간 감시, 영상저장
                    </li>
                </ul>
                <h4>주요기능</h4>
                <ul>
                    <li>딥러닝 기반 지능형 영상처리 기술 분석을 통해 이상상황 신속/정확하게 감지</li>
                    <li>이벤트 발생 시 검출 이벤트별 화면 표출</li>
                    <li>각종 영상분석 이벤트, 시스템관리, 권한 관리 등 시스템 운영</li>
                    <li>App 설치 후 로그인을 하면 이벤트 발생 시 푸시 알림 발생</li>
                    <li>이벤트 상세 정보 확인(발생시각, 장비, 이벤트종류 등)</li>
                </ul>
                <h4>실제 구축 사례</h4>
                <Flex.Between fullWidth>
                    <Flex.ColCenter gap={8}>
                        <img src="../img/deep/example_01.png" alt="딥러닝 영상처리 및 분석"/>
                        딥러닝 영상처리 및 분석
                    </Flex.ColCenter>
                    <Flex.ColCenter gap={8}>
                        <img src="../img/deep/example_02.png" alt="통합관제모니터링"/>
                        통합관제모니터링
                    </Flex.ColCenter>
                    <Flex.ColCenter gap={8}>
                        <img src="../img/deep/example_03.png" alt="APP기반 상황전파"/>
                        APP기반 상황전파
                    </Flex.ColCenter>
                </Flex.Between>


            </section>
        </Flex.ColCenter>
    );
};