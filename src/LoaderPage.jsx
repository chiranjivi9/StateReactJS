import React from 'react'


export default function LoaderPage(props) {
    return (
        <div className="ui active dimmer">
            <div class="ui big text loader">{props.message}</div>
        </div>
    )
}


// Delcaring default props
//.. anytime you dont declare||pass {props.message} into your component...
//.. the default prop will be used

LoaderPage.defaultProps = {
    message:"Loading..."
}
