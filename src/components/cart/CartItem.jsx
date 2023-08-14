import { Box } from "@mui/material";



const CartItem = ({ item }) => {
    return(
        <Box>
            <Box>
                <img src={item.url} alt="product" />
            </Box>
            <Box>

            </Box>
        </Box>
    )
}

export default CartItem;