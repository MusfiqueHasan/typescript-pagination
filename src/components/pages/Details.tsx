import React from "react";
import {useLocation} from "react-router-dom";
import { InitPost } from "./interfaces";

const Details: React.FC = () => {

    const {state} = useLocation();

    const post = state as InitPost;

    return (
        <div data-testid="details">
            <p>
                {
                    JSON.stringify(post, null, 2)
                }
            </p>
        </div>
    )
}

export default Details;