import { Box, Typography } from '@mui/material';
import React from 'react';
import { styled } from '@mui/system';

import buyIcon from '../../assets/assets/buy_icon.png';
import sellIcon from '../../assets/assets/sell_icon.png';
import rentIcon from '../../assets/assets/sell_icon.png'; 
import ArrowRightAlt from '@mui/icons-material/ArrowRightAlt';
import CustomButton from '../../components/Header/CustomButton/CustomButton';

function Booking() {
    const CustomBox = styled(Box)(({ theme }) => ({
        width: '30%',
        [theme.breakpoints.down('md')]: {
            width: '85%',
        },
    }));

    const GuidesBox = styled(Box)(({ theme }) => ({
        width: '70%',
        display: 'flex',
        justifyContent: 'space-around',
        marginTop: theme.spacing(5),
        [theme.breakpoints.down('md')]: {
            width: '100%',
        },
        [theme.breakpoints.down('sm')]: {
            marginBottom: '0',
            flexDirection: 'column',
        },
    }));

    const GuideBox = styled(Box)(({ theme }) => ({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: theme.spacing(5),
        [theme.breakpoints.down('sm')]: {
            margin: theme.spacing(2, 0, 2, 0),
        },
    }));

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '40px',
            }}
        >
            <div
                style={{
                    width: '5%',
                    height: '5px',
                    backgroundColor: '#000339',
                    margin: '0 auto',
                }}
            />

            <Typography
                variant="h3"
                sx={{ fontSize: '35px', fontWeight: 'bold', color: '#000339', my: 3 }}
            >
                How to Book??
            </Typography>

            <CustomBox>
                <Typography
                    variant="body2"
                    sx={{
                        fontSize: '16px',
                        fontWeight: '500',
                        color: '#5A6473',
                        textAlign: 'center',
                    }}
                >
                    Everything you need to know when you book for advance slot
                </Typography>
            </CustomBox>

            <GuidesBox>
                <GuideBox>
                    <img src={buyIcon} alt="buy icon" />
                    <Typography
                        variant="body2"
                        sx={{
                            fontWeight: '500',
                            fontSize: '20px',
                            color: '#3B3C45',
                            my: 1,
                        }}
                    >
                        Order Guides
                    </Typography>
                    <Box
                        sx={{
                            cursor: 'pointer',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Typography
                            variant="body2"
                            sx={{
                                fontWeight: 'bold',
                                fontSize: '14px',
                                color: '#0689FF',
                                my: 1,
                            }}
                        >
                            How to Order
                        </Typography>
                        <ArrowRightAlt style={{ color: '#0689FF' }} />
                    </Box>
                </GuideBox>

                <GuideBox>
                    <img src={rentIcon} alt="rent icon" /> {/* Corrected alt attribute */}
                    <Typography
                        variant="body2"
                        sx={{
                            fontWeight: '500',
                            fontSize: '20px',
                            color: '#3B3C45',
                            my: 1,
                        }}
                    >
                        Booking Guides
                    </Typography>
                    <Box
                        sx={{
                            cursor: 'pointer',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Typography
                            variant="body2"
                            sx={{
                                fontWeight: 'bold',
                                fontSize: '14px',
                                color: '#0689FF',
                                my: 1,
                            }}
                        >
                            How to Book
                        </Typography>
                        <ArrowRightAlt style={{ color: '#0689FF' }} />
                    </Box>
                </GuideBox>

                <GuideBox> {/* Removed the duplicate GuideBox */}
                    <img src={sellIcon} alt="sell icon" />
                    <Typography
                        variant="body2"
                        sx={{
                            fontWeight: '500',
                            fontSize: '20px',
                            color: '#3B3C45',
                            my: 1,
                        }}
                    >
                        Payment Guides
                    </Typography>
                    <Box
                        sx={{
                            cursor: 'pointer',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Typography
                            variant="body2"
                            sx={{
                                fontWeight: 'bold',
                                fontSize: '14px',
                                color: '#0689FF',
                                my: 1,
                            }}
                        >
                            Payment Method
                        </Typography>
                        <ArrowRightAlt style={{ color: '#0689FF' }} />
                    </Box>
                </GuideBox>
            </GuidesBox>

            <CustomButton
                backgroundColor="#0F1B4C"
                color="#fff"
                buttonText="See Full Guides"
                guidebtn={true}
            />
        </Box>
    );
}

export default Booking;
