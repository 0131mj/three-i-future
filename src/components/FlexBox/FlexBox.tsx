import React from 'react';
import cl from "classnames";
import styles from "./FlexBox.module.scss";

type flexBoxProp = {
    children: any;
    style?: React.CSSProperties;
    className?: string;
    fullWidth?: boolean;
    fullHeight?: boolean;
    Tag?: keyof HTMLElementTagNameMap;
    id?: string;
    grow?: boolean;
    noShrink?: boolean;
    gap?: number;
    onClick?: () => void;
    dataId?: string;
    title?: string;
}

enum FlexBoxType {
    Row = "Row",
    RowCenter = "RowCenter",
    Col = "Col",
    ColCenter = "ColCenter",
    End = "End",
    Between = "Between",
    Center = "Center",
}

const flexBoxClasses = {
    [FlexBoxType.Row]: styles.flexRow,
    [FlexBoxType.RowCenter]: styles.flexRowCenter,
    [FlexBoxType.End]: styles.flexEnd,
    [FlexBoxType.Col]: styles.flexCol,
    [FlexBoxType.ColCenter]: styles.flexColCenter,
    [FlexBoxType.Center]: styles.flexCenter,
    [FlexBoxType.Between]: styles.flexBetween,
};

const FlexBox: React.FC<{
    flexBoxProps: flexBoxProp;
    flexBoxType: FlexBoxType;
}> = (props) => {
    const {flexBoxProps, flexBoxType = FlexBoxType.Row} = props;
    const {
        children,
        style = {},
        className,
        fullWidth,
        fullHeight,
        Tag = "div",
        id,
        grow,
        noShrink,
        gap,
        onClick,
        dataId,
        title
    } = flexBoxProps;

    const flexBoxClass = flexBoxClasses[flexBoxType];
    return (
        <Tag
            title={title}
            data-id={dataId}
            id={id}
            onClick={onClick}
            style={{
                gap,
                ...style,
            }}
            className={cl(
                {
                    [flexBoxClass]: true,
                    [styles.flexBox]: true,
                    [styles.flexGrow]: grow,
                    [styles.fullWidth]: fullWidth,
                    [styles.fullHeight]: fullHeight,
                    [styles.noShrink]: noShrink,
                },
                className
            )}>
            {children}
        </Tag>
    );
};

const FlexRow: React.FC<flexBoxProp> = (props) => {
    return <FlexBox flexBoxProps={props} flexBoxType={FlexBoxType.Row}/>;
};

const FlexRowCenter: React.FC<flexBoxProp> = (props) => {
    return <FlexBox flexBoxProps={props} flexBoxType={FlexBoxType.RowCenter}/>;
};


const FlexEnd: React.FC<flexBoxProp> = (props) => {
    return <FlexBox flexBoxProps={props} flexBoxType={FlexBoxType.End}/>;
};

const FlexCol: React.FC<flexBoxProp> = (props) => {
    return <FlexBox flexBoxProps={props} flexBoxType={FlexBoxType.Col}/>;
};

const FlexColCenter: React.FC<flexBoxProp> = (props) => {
    return <FlexBox flexBoxProps={props} flexBoxType={FlexBoxType.ColCenter}/>;
};

const FlexCenter: React.FC<flexBoxProp> = (props) => {
    return <FlexBox flexBoxProps={props} flexBoxType={FlexBoxType.Center}/>;
};

const FlexBetween: React.FC<flexBoxProp> = (props) => {
    return <FlexBox flexBoxProps={props} flexBoxType={FlexBoxType.Between}/>;
};

export const Flex = {
    Row: FlexRow,
    RowCenter: FlexRowCenter,
    Between: FlexBetween,
    End: FlexEnd,
    Col: FlexCol,
    Center: FlexCenter,
    ColCenter: FlexColCenter,
}