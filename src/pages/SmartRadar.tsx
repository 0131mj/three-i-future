import { Flex } from "../components/FlexBox/FlexBox.tsx";
import React from "react";

export const SmartRadar: React.FC = () => {
    return (
        <Flex.ColCenter>
            <Flex.Center style={{ width: "100%", position: "relative" }}>
                <section style={{ width: 1200, paddingTop: 120, color: "white" }}>
                    <Flex.Between>
                        <h2 style={{ fontSize: 64 }}>Smart Radar</h2>
                        <a className="catalogue-download-btn" href= "../pdf/쓰리아이퓨처_카탈로그.pdf" download >↓ 카탈로그 다운로드</a>
                    </Flex.Between>
                    <div style={{ lineHeight: 1.5, marginTop: 48, wordBreak: 'keep-all', backgroundColor: "rgba(0,0,0, 0.5)", padding: '8px 32px' }}>
                        <p>
                            Edge 디바이스에 카메라와 레이더 센서가 탑재되어 있으며 카메라 영상을 딥러닝으로 분석하고 레이더 센서 감지 신호와 듀얼 센싱을 통해 객체를 탐지하는 스마트 장치입니다.
                        </p>
                        <p>
                            네트워크 연결을 통해 사용자 PC에 이벤트를 전송할 수 있으며 장치 웹뷰어를 통해 다양한 설정 및 정보 확인 기능을 제공합니다.<br />
                        </p>
                        <p>
                            사람, 동물을 구분할 수 있으며 불법침입 탐지, 사람 쓰러짐 탐지 등의 다양한 영상분석 기능을 제공합니다.
                        </p>
                    </div>
                    <Flex.Center style={{ padding: "0", margin: "100px 0 40px" }}>
                        <img src="../img/smart/Smart Radar AI Model.png" alt="스마트레이더 모델" style={{ width: 1200 }} />
                    </Flex.Center>
                </section>
                <video autoPlay muted loop style={{ position: "absolute", zIndex: -1, top: 0, left: 0, height: '100%' }} >
                    {/* <source src="../video/violet.mp4" type="video/mp4" /> */}
                    <source src="../video/blue2.mp4" type="video/mp4" />
                </video>
            </Flex.Center>
            <section>
                <Flex.Between style={{ marginBottom: '3rem' }}>
                    <Flex.Col>
                        <h3 style={{ fontSize: 48 }}>스마트 레이더감지기</h3>
                        <h5 style={{ margin: 0, textAlign: "left" }}>3IF-SRC-2CH</h5>
                        <ul style={{ marginLeft: -36 }}>
                            <li>2채널 레이더센서의 듀얼센서 감시장치 + AI융합 임베디드 보드로 구성</li>
                            <li>일반적 침입감지 기능 + AI 기반 영상분석, 통신, 데이터 처리를 한 번에!</li>
                        </ul>
                    </Flex.Col>
                    <Flex.Center style={{ padding: "0" }}>
                        <img src="../img/smart/smart_02.png" alt="스마트레이더" />
                    </Flex.Center>
                </Flex.Between>
                <ul className={'feature'}>
                    <li>외곽 경계면 폴/벽면에 설치할 수 있는<br /> 옥내외 겸용 구조<br />(설치용 브라켓 제공)</li>
                    <li>영상분석과 레이더센서의 AND 조건으로 환경적 요인(바람, 연기, 폭우, 폭설 및 주변 열, 강한 빛 등)에 의한 오감지 최소화</li>
                    <li>나뭇가지, 꽃, 풀 흔들림 등의 외부 오감지 요인(환경노이즈) 제거 엔진 탑재</li>
                    <li>딥러닝 영상분석에 의한 감지거리 내의 사람을 인지한 경우 알람 발생<br />(사람 / 동물 분류 AI 알고리즘 내장)</li>
                </ul>
                <Flex.Between style={{ alignItems: "flex-start" }}>
                    <dl>
                        <dt>검출 방식</dt>
                        <dd>딥러닝 영상분석 & 레이더 감지</dd>
                        <dt>CPU</dt>
                        <dd>쿼드코어 ARM 1.992㎓</dd>
                        <dt>
                            최대 측정거리
                            <br />
                            (빔폭 좌우/상하)
                        </dt>
                        <dd>
                            Center Radar : 50m (25°/12°)<br />
                            Under Radar : 15m (80°/34°) Memory 4GB LPDDR4<br />
                            영상분석 : 50m Storage 16GB
                        </dd>
                        <dt>AI Accelerator</dt>
                        <dd>NPU 0.8Tops@INT8</dd>
                        <dt>경계거리</dt>
                        <dd>옥외 50m(max)</dd>
                        <dt>이미지 센서</dt>
                        <dd>Sony STARVIS 2.07Mega Pixel Image Sensor</dd>
                        <dt>주파수 범위</dt>
                        <dd>24.05 ㎓ ~ 24.25 ㎓</dd>
                        <dt>최대 해상도</dt>
                        <dd> Full HD(1920×1080)</dd>
                        <dt>검출속도</dt>
                        <dd> 2㎞/h ~ 10㎞/h</dd>
                    </dl>
                    <dl>
                        <dt>영상 스트리밍</dt>
                        <dd>TSP, H.264/H.265RTP/R</dd>
                        <dt>하우징 방수</dt>
                        <dd> IP66</dd>
                        <dt>프로토콜</dt>
                        <dd> Onvif 지원</dd>
                        <dt>사용전원</dt>
                        <dd>DC 12V</dd>
                        <dt>AI 객체인식</dt>
                        <dd> 딥러닝 영상분석 (사람, 동물)</dd>
                        <dt>검출대상</dt>
                        <dd>사람</dd>
                        <dt>출력 정보</dt>
                        <dd>감지 알람, 감지 거리</dd>
                        <dt>부가기능</dt>
                        <dd>테스트모드 지원 (LED)</dd>
                        <dt>인터페이스</dt>
                        <dd>Ethernet(TCP/IP) , 감지접점</dd>
                    </dl>
                </Flex.Between>
            </section>
            <section>
                <Flex.Between style={{ marginBottom: '3rem' }}>
                    <Flex.Col>
                        <h3 style={{ fontSize: 48 }}>스마트 영상분석기</h3>
                        <h5 style={{ margin: 0, textAlign: "left" }}>3IF-SRC-AI</h5>
                        <ul style={{ marginLeft: -36 }}>
                            <li>제공되는 실시간 영상입력에 대한 지능형 알고리즘 적용</li>
                            <li>AI 기반 영상분석, 통신, 데이터 처리 기능을 구현할 수 있는 스마트 영상감지기</li>
                        </ul>
                    </Flex.Col>
                    <Flex.Center gap={24}>
                        <img src="../img/smart/smart_03.png" alt="스마트 영상분석기" />
                        <img src="../img/smart/smart_04.png" alt="딥러닝 영상분석장치" />
                    </Flex.Center>
                </Flex.Between>
                <ul className={'feature'}>
                    <li>Rack, 함체 등 기 시설물 내부에 설치할 수 있는 전천후 형</li>
                    <li>학습에 의한 환경적 요인(바람, 연기, 폭우, 폭설 및 주변 열, 강한 빛 등)에 의한 오감지 최소화</li>
                    <li>나뭇가지, 꽃, 풀 흔들림 등의 외부 오감지 요인(환경노이즈) 제거 엔진 탑재</li>
                    <li>딥러닝 영상분석에 의한 감지거리 내의 사람을 인지한 경우 알람 발생(동물분석 AI 알고리즘 내장)</li>
                </ul>
                <Flex.Between style={{ alignItems: "flex-start" }}>
                    <dl>
                        <dt>검출 방식</dt>
                        <dd>딥러닝 영상분석</dd>
                        <dt>CPU</dt>
                        <dd>쿼드코어 ARM 1.992㎓</dd>
                        <dt>최대 측정거리</dt>
                        <dd>영상분석 : 50m</dd>
                        <dt>AI Accelerator</dt>
                        <dd>NPU 0.8Tops@INT8</dd>
                        <dt>사용전원</dt>
                        <dd>DC 12V</dd>
                        <dt>Memory</dt>
                        <dd>4GB LPDDR4</dd>
                    </dl>
                    <dl>
                        <dt>최대 인식해상도</dt>
                        <dd>Full HD(1920×1080)</dd>
                        <dt>Storage</dt>
                        <dd>6GB</dd>
                        <dt>프로토콜</dt>
                        <dd>Onvif 지원</dd>
                        <dt>출력 정보</dt>
                        <dd>감지 알람, 감지 거리</dd>
                        <dt>AI 객체인식</dt>
                        <dd>딥러닝 영상분석 (사람, 동물)</dd>
                        <dt>인터페이스</dt>
                        <dd>Ethernet(TCP/IP) , 감지접점</dd>
                    </dl>
                </Flex.Between>
            </section>
        </Flex.ColCenter>
    );
};