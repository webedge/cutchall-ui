/** @jsxRuntime classic */
/** @jsx jsx */
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { DataStore } from "@aws-amplify/datastore";
import { useState, useEffect } from "react";
import { jsx, ThemeProvider } from "@emotion/react";
import Amplify, { AuthModeStrategyType } from "aws-amplify";
//constants
import { ROUTES } from "./constants/routes";
import { theme } from "./constants/theme";
//components
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
//containers
import Home from "./containers/Home/Home";
import CorporateTeam from "./containers/CorporateTeam/CorporateTeam";
import { W2 as W2Schema } from "./models";
import FoundersStory from "./containers/FoundersStory/FoundersStory";
import Restaurant from "./containers/Restaurant/Restaurant";
import Cater from "./containers/Cater/Cater";
import Vending from "./containers/Vending/Vending";
import Contact from "./containers/Contact/Contact";
import W2 from "./containers/W2/W2";
import GiftCards from './containers/GiftCards/GiftCards';
import awsconfig from "./aws-exports";
import { AWS_URL } from "./constants";
import { getAllW2 } from "./services/retrievedata";
import Intranet from "./containers/Intranet/Intranet";

Amplify.configure({
    ...awsconfig,
    DataStore: {
        authModeStrategyType: AuthModeStrategyType.MULTI_AUTH,
    },
});

function App() {
    const [w2, setW2] = useState();

    useEffect(() => {
        fetchData();
        async function fetchData() {
            const W2 = await getAllW2();
            setW2(W2[0]);
        }

        DataStore.observe(W2Schema).subscribe(() => {
            fetchData();
        });
    }, []);

    return (
        <Router>
            <ThemeProvider theme={theme}>
                <Navigation />
                <div
                    style={{
                        position: "relative",
                        paddingBottom: "75px",
                        background: "#F3F4F6",
                    }}
                >
                    <Switch>
                        <Route path={ROUTES.HOME} exact component={Home} />
                        <Route path={ROUTES.GIFTCARDS} component={GiftCards} />
                        <Route path={ROUTES.CORPORATE.TEAM} component={CorporateTeam} />
                        <Route path={ROUTES.CORPORATE.FOUNDERSSTORY} component={FoundersStory} />
                        <Route path={ROUTES.RESTAURANTS} component={Restaurant} />
                        <Route path={ROUTES.CATERING.CATEROMAHA} component={Cater} />
                        <Route path={ROUTES.CATERING.VENDING} component={Vending} />
                        <Route path={ROUTES.CONTACT} component={Contact} />
                        <Route path={ROUTES.INTRANET} component={Intranet} />
                        <Route
                            path={ROUTES.W2}
                            component={() => <W2 download={`${AWS_URL}/${w2?.pdfKey}`} />}
                        />
                    </Switch>
                </div>
                <Footer
                    image={`${AWS_URL}/${w2?.imageKey}`}
                    isVisible={w2?.isVisible}
                />
            </ThemeProvider>
        </Router>
    );
}

export default App;
