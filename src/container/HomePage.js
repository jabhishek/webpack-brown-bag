import {Page} from "../components/Page";
import React from "react";
import {SomeLargeComponent} from "../components/SomeLargeComponent";
import Switch from '@material-ui/core/Switch';
import FormControlLabel from "@material-ui/core/FormControlLabel";

export const Home = () => {
    const [shouldDisplayDetails, toggleShouldDisplayDetails] = React.useState(false);
    return <Page>
        <h1>Home</h1>
        <FormControlLabel control={<Switch
            checked={shouldDisplayDetails}
            onChange={(event) => toggleShouldDisplayDetails(event.target.checked)}
        />} label="Show Details"/>

        {shouldDisplayDetails && <SomeLargeComponent/>}
    </Page>
};
