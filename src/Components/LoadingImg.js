import React from "react";
import {ThreeDots} from 'react-loader-spinner';
import "./LoadingImg.css"

export default function Loader(){

    return(
        <ThreeDots 
            visible={true}
            height="80"
            width="80"
            radius="9"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass="loader-div"
            color="#393E46"
        />
    )

}