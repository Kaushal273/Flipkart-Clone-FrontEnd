import { Box, Button, styled } from "@mui/material";
import {ShoppingCart as Cart} from '@mui/icons-material';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { useNavigate } from "react-router-dom";

const LeftContainer = styled(Box)(({theme}) => ({
    minWidth:'40%',
    padding: '40px 0 0 80px',
    [theme.breakpoints.down('lg')]: {
        padding: '20px 40px'
    }
}))
    

const Image = styled('img')({
    width: '95%',
    padding:'15px'

});

const StyledButton = styled(Button)(({theme}) => ({
    width: '48%',
    height: '50px',
    borderRadius: '2px',
    [theme.breakpoints.down('lg')] : {
        width: '46%'
    },
    [theme.breakpoints.down('sm')] : {
        width: '48%'
    }
}))
    


const ActionItem = ({ product }) => {

    const navigate = useNavigate();
    
    const addItemToCart = () => {
        navigate('/cart');
    }
    return(
        <LeftContainer>
            <Box style={{ padding:'15px 20px',
                 border:'1px solid #f0f0f0', }}>
            <Image src={product.detailUrl}  />
            </Box>
            <StyledButton variant='contained' onClick={ () =>addItemToCart()} style={{marginRight: 10, background: '#ff9f00' }}><Cart/>Add to cart</StyledButton>
            <StyledButton variant='contained' style={{ background: '#fb541b'}}><FlashOnIcon />Buy Now</StyledButton>
        </LeftContainer>
    )
}

export default ActionItem;