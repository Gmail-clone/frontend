import { Box, CircularProgress, Typography } from "@mui/material";



const SuspenseLoader = () => {
    return (
        <Box >
        <CircularProgress style={{margin: 'auto' , justifyContent: 'center', alignItems: 'center'}}/>
       <Typography>Loading...</Typography>
        </Box>
    )
}
export default SuspenseLoader;