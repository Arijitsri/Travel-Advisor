import React from "react";
import { CssBaseline, Grid2} from "@mui/material";


import Header from "./component/Header/Header";
import List from "./component/List/List";
import Map from "./component/Map/Map";


const App = () => {

    return (
        <>
            <CssBaseline />
           <Header />
           <Grid2 container spacing={3} style={{width: '100%' }}>
                <Grid2 items xs={12} md={4}>
                    <List />
                </Grid2>
                <Grid2 items xs={12} md={8}>
                    <Map />
                </Grid2>
           </Grid2>
        </>
    );
}

export default App;