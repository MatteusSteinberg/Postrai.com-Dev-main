import React, { useState, useEffect } from 'react'
import { Form, Button, Alert } from "react-bootstrap";
import { signIn } from "next-auth/react";

export default function GithubButton({ authState = "login" }) {
    const [loading, setLoading] = useState(false);

    const handleClick = () => {
        if (loading == false) {
            setLoading(true);
            signIn("github")
        }
    }

    useEffect(() => {


        return () => {

        }
    }, [loading])

    return (
        <>
            <Button
                variant="secondary"
                type="button"
                className={`${authState}-github-btn loading-btn ${loading ? 'is-loading' : ''}`}
                onClick={handleClick}
            >
                <span className="btn-loading-text">
                    <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M14 0C6.265 0 0 6.42347 0 14.3541C0 20.7058 4.0075 26.0707 9.5725 27.9726C10.2725 28.0982 10.535 27.6676 10.535 27.2908C10.535 26.9498 10.5175 25.8195 10.5175 24.6173C7 25.2812 6.09 23.7381 5.81 22.9307C5.6525 22.518 4.97 21.2441 4.375 20.9032C3.885 20.634 3.185 19.9702 4.3575 19.9522C5.46 19.9343 6.2475 20.9929 6.51 21.4235C7.77 23.5946 9.7825 22.9845 10.5875 22.6077C10.71 21.6747 11.0775 21.0467 11.48 20.6879C8.365 20.329 5.11 19.091 5.11 13.6005C5.11 12.0395 5.6525 10.7476 6.545 9.74285C6.405 9.384 5.915 7.91271 6.685 5.93901C6.685 5.93901 7.8575 5.56222 10.535 7.41031C11.655 7.08734 12.845 6.92586 14.035 6.92586C15.225 6.92586 16.415 7.08734 17.535 7.41031C20.2125 5.54428 21.385 5.93901 21.385 5.93901C22.155 7.91271 21.665 9.384 21.525 9.74285C22.4175 10.7476 22.96 12.0216 22.96 13.6005C22.96 19.1089 19.6875 20.329 16.5725 20.6879C17.08 21.1364 17.5175 21.9977 17.5175 23.3434C17.5175 25.2632 17.5 26.8063 17.5 27.2908C17.5 27.6676 17.7625 28.1161 18.4625 27.9726C21.2417 27.0105 23.6567 25.1791 25.3676 22.7362C27.0785 20.2932 27.9992 17.3616 28 14.3541C28 6.42347 21.735 0 14 0Z"
                            fill="white"
                        />
                    </svg>
                </span>
            </Button>
        </>
    )
}
