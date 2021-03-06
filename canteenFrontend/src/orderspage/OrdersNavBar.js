import React from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import styles from "../components/styles";

import RoundSearchBar from "../components/RoundSearchBar";
import BarButton from "../components/BarButton";
import BorderAppBar from "../components/BorderAppBar";
import LargeToolbar from "../components/LargeToolbar";

function OrdersNavBar(props) {
    let style1 = styles.firstColorsm;
    let style2 = styles.secondsm;
    if (props.pos === "completed") {
        style1 = styles.firstsm;
        style2 = styles.secondColorsm;
    }

    return (
        <BorderAppBar
            position='static'
            color='#ffffff'
            style={styles.padLeftZero}
        >
            <LargeToolbar style={styles.ordersToolbar}>
                <div>
                    <BarButton
                        style={style1}
                        component={Link}
                        to='/orders/pending'
                    >
                        Pending
                    </BarButton>
                    <BarButton
                        style={style2}
                        component={Link}
                        to='/orders/completed'
                    >
                        Completed
                    </BarButton>
                </div>
                <span>
                    <RoundSearchBar />
                </span>
            </LargeToolbar>
        </BorderAppBar>
    );
}

export default withStyles(styles)(OrdersNavBar);
