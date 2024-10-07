import React from 'react'
import { styled } from '@mui/system';
import { Button } from '@mui/material';
import { BorderColor, Margin, WidthFull } from '@mui/icons-material';

const CustomButton = ({
    backgroundColor,
    color,
    buttonText,
    welcomeBtn,
    guideBtn,
    getStartedBtn,
}) => {
    const CustomButton = styled(Button)(({ theme }) => ({
        backgroundColor:backgroundColor,
        color:color,
        fontWeight:'700px',
        fontSize:'14px',
        cursor:'pointer',
        padding:'0.5rem 1.25rem',
        borderRadius:'7px',
        textTransform:'none',
        display:'block',
        border:'2px solid transparent',
        '&:hover':{
            backgroundColor:color,
        color:backgroundColor,
        BorderColor:backgroundColor
        },
        [theme.breakpoints.down("md")]: {
            Margin:(welcomeBtn || getStartedBtn) && theme.spacing(0, 'auto', 0 , 'auto'),
            Width:(welcomeBtn || getStartedBtn) && '90%',
        },
        [theme.breakpoints.down("sm")]: {
            marginTop:guideBtn && theme.spacing(3),
            width:guideBtn && '90%',
        },
    }));
    return (
        <CustomButton>
            {buttonText}
        </CustomButton>
    )
};

export default CustomButton
