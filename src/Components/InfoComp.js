import React from 'react';
import styled from 'styled-components'
const InfoComp = props => {
    
    const Style = styled.div`
        position: relative;
        &:hover .Bg{
            transition: 1s;
            filter: brightness(20%);
        }
    
    `
    const StyledContent = styled.div`
        background-size: 100% 100%;
        background-position: center;
        background-repeat: no-repeat;
        background-image: url(${props.url});
    
    ` 

    const StyledContent2 = styled.div`
        &:hover a{
            color: white;
            transition: 1s;
        };
        &:hover p{
            color: white;
            transition: 1s;
        };
    `
    let toRet = null;

    if(props.href === undefined){
        toRet = (
            <Style className = "Header">
                <StyledContent className = "Bg"></StyledContent>
                    <StyledContent2 className = "ContentWrapper">
                        <p className = "TextContent">
                            {props.info}
                        </p>
                    </StyledContent2>
             </Style>
            
        );
    }
    else {
        toRet = (
            <Style className = "Header">
                <StyledContent className = "Bg"></StyledContent>
                    <StyledContent2 className = "ContentWrapper">
                        <a href = {props.href} className = "TextContent">
                            {props.info}
                        </a>
                    </StyledContent2>
             </Style>
            
        );
    }


    return  toRet
}
export default InfoComp;