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
                <h3>회사 소개</h3>
                <div>
                    우수한 통합관제, AI 기업 (대표 문구)<br/>
                    쓰리아이퓨처는… (간략한 소개)
                </div>
                <dl className={'company-info'}>
                    {companyInfo.map(([k, v]) => (
                        <React.Fragment key={k}>
                            <dt>{k}</dt>
                            <dd>{v}</dd>
                        </React.Fragment>
                    ))}
                </dl>
            </section>
            <section>
                <h3>비전</h3>
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