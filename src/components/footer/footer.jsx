import React from 'react';
import "./footer.css";
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Ticker from "react-ticker";


export default function Footer({ channel, description, song}) {
    return (
        <div className="footer">
            <div className="footer__text">
                <h3>@{channel}</h3>
                <p>{description}</p>
                <div className="footer__ticker">
                    <MusicNoteIcon className="footer__icon"/>
                    <Ticker mode="smooth">
                        {({index}) => (
                            <>
                                <p>{song}</p>
                            </>
                        )}
                    </Ticker>
                </div>
            </div>
            <img className="footer__disc" src="https://static.thenounproject.com/png/934821-200.png" alt=""/>
        </div>
    )
}
