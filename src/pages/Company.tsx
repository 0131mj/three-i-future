import React from "react";
import {Flex} from "../components/FlexBox/FlexBox.tsx";

export const Company: React.FC<{}> = () => {
    const companyInfo = [
        ["회사명", "쓰리아이퓨처 주식회사"],
        ["대표이사", "고훈석"],
        ["설립일", "2020년 3월 11일"],
        ["주소", "서울특별시 송파구 법원로11길 7 1315호(문정현대지식산업센터 C동)"],
        ["연구소", "부산광역시 해운대구 센텀중앙로 48 1015호(우동, 에이스하이테크 21)"],
        ["연락처", "(T)02-2148-6250 / (F)02-2148-6260"],
    ]
    return (
        <Flex.ColCenter className={'company'}>
            <section>
                <h3>회사 개요</h3>
                <p>
                    당사는 독자적인 기술력을 바탕으로 산업용 영상/음향/통신 시장을 선도하고 있는 IT분야 벤처기업으로<br/>
                    인공지능 기반의 보안/방범, 방재, ITS, 통합관제 솔루션 개발 및 구축을 수행하고 있는 연구개발, 설계, 생산, 시공 전문 업체입니다.
                </p>
                <dl className={'company-info'}>
                    {companyInfo.map(([k, v]) => (
                        <React.Fragment key={k}>
                            <dt>{k}</dt>
                            <dd>{v}</dd>
                        </React.Fragment>
                    ))}
                </dl>
                <h4>R&D를 위한 기술연구소 운영</h4>
                정보통신기술자 (4명)<br/>
                소프트웨어개발자 (4명)<br/>
                <h5>아이디어 혁신과 기술력 배양을 통해 고품질 솔루션 개발 노력</h5>
                <h4>전국지점 및 구축지원</h4>
                당사는 전국 서비스를 지원하기 위해 서울 본사, 부산 연구소를 갖고 있으며, 당사의 시스템이 구축된 지역의 서비스를 지원하고 있습니다.<br/>
                <h5>설립 후 매출 및 기술 수준이 지속적으로 성장하고 있는 유망 중소기업</h5>
            </section>
            <section>
                <h3>당사 현황</h3>
                <h4>지속적인 연구 개발로 소프트웨어 시장에서의 기술을 선도</h4>
                <br/>종합상황실 구축 컨설팅
                <br/>디지털 정보처리
                <br/>AI 기반 영상인식 솔루션
                <br/>통합 CCTV 구축 및 모니터링
            </section>
            <section>
                <h3>경영 전략</h3>
                <h4>고객만족</h4>

                <h5>연구개발</h5>
                다양한 구축경험의 최고의 전문가 투입<br/>
                연구개발 전담인력 보유<br/>

                <h5>최적의 기본설계</h5>
                설계도서 및 시방서의 분석을 통한 솔루션 제공<br/>
                센터 구축 표준지침과의 연계를 위한 제안<br/>

                <h5>철저한 사업관리</h5>
                지속적이고 철저한 관리체계 수립<br/>
                품질보증방안 및 일정관리 방안 제시<br/>

                <h5>안전관리</h5>
                통합일정관리를 통한 공기지연 사전예방<br/>
                숙련공 투입으로 안전사고 사전예방<br/>

                <h5>완벽한 교육 및 사후관리</h5>
                구축 설비 전반에 대한 운영교육 및 기술이전<br/>
                센터 구축 운영을 위한 전문교육 및 사후관리<br/>

                <h5>품질관리</h5>
                정확한 시공에 따른 철저한 품질 관리<br/>
                최고의 장비 선정과 최고의 자재선정<br/>
            </section>

            <section>
                <h3>비전</h3>
                <Flex.ColCenter>
                    <h4>최고의 제품과 서비스를 창출하여
                        고객만족 실현</h4>
                    <p>영상분석 및 전송기술 개발 성공으로
                        영상처리 선도기업 도약</p>
                    <Flex.Between fullWidth style={{alignItems: "flex-start"}}>
                        <Flex.Col fullHeight>
                            <h5>안정적인 회사운영</h5>
                            <ul>
                                <li><b>표준화된 업무관리 도구 개발 및 활용</b></li>
                                <li>
                                    <b>기술력을 확보한 선도기업으로 도약</b><br/>
                                    : 지능형 영상 처리<br/>
                                    : 고화질 비디오 전송<br/>
                                </li>
                                <li><b>전담 인력구성으로 전문가 배출</b></li>
                            </ul>
                        </Flex.Col>
                        <Flex.Col fullHeight>
                            <h5>주요 개발 사항</h5>
                            <ul>
                                <li>표준화된 업무관리 도구 개발 및 활용</li>
                                <li>
                                    고화질 영상 전송 분야<br/>
                                    : H.264 고화질 전송<br/>
                                    : SD/HD급 연상 전송<br/>
                                    <br/>
                                </li>
                                <li>AI 기반 영상 분석 분야<br/>
                                    : 터널 유고<br/>
                                    : 화재 검출<br/>
                                    : 보안, 방범<br/>
                                </li>
                            </ul>
                        </Flex.Col>
                        <Flex.Col fullHeight>
                            <h5>주요 사업 영역</h5>
                            <ul>
                                <li>
                                    화상감시 전송 시스템<br/>
                                    한국전력공사<br/>
                                    한수원
                                </li>
                                <li>
                                    영상 화재 분석 시스템<br/>
                                    : 한국전력공사 화재검출<br/>
                                    : 한국가스공사 등
                                    <br/>
                                </li>
                                <li> ITS 관련<br/>
                                    : 한국도로공사 사고자동감지시스템<br/>
                                    : 한국도로공사 차세대 ITS 시범사업
                                </li>
                            </ul>
                        </Flex.Col>
                    </Flex.Between>
                </Flex.ColCenter>
            </section>
            <section>
                <h3>CI</h3>
            </section>
            <section>
                <h3>오시는 길</h3>
            </section>
        </Flex.ColCenter>
    );
};