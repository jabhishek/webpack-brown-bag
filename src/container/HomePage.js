import {Page} from "../components/Page";
import React from "react";
import Switch from '@material-ui/core/Switch';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import LinearProgress from "@material-ui/core/LinearProgress";

const SomeLargeComponent = React.lazy(() => import(/* webpackChunkName: "large-component" */'../components/SomeLargeComponent'))

export const Home = () => {
    const [shouldDisplayDetails, toggleShouldDisplayDetails] = React.useState(false);
    return <Page>
        <h1>Home</h1>
        <FormControlLabel control={<Switch
            checked={shouldDisplayDetails}
            onChange={(event) => toggleShouldDisplayDetails(event.target.checked)}
        />} label="Show Details"/>

        {shouldDisplayDetails &&
        <React.Suspense fallback={<LinearProgress/>}>
            <SomeLargeComponent/>
        </React.Suspense>
        }
    </Page>
};

export default Home;
