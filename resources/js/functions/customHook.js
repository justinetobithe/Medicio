import axios from "axios";
import { useState, useEffect } from "react";

export const useFetch = (req) => {
    const [response, setResponse] = useState({
        data: [],
        loading: false,
    })
    useEffect(() => {
        if (!req.url.length) return;

        const fetch = async () => {
            try {
                setResponse({
                    data: [],
                    loading: false
                })

                await axios.get("/sanctum/csrf-cookie");
                let { data } = await axios(req);
                setResponse({
                    data: data,
                    loading: false,
                })
            } catch (e) {
                setResponse({
                    data: [],
                    loading: false
                })
            }
        }

        fetch();

        return () => {
            setResponse({
                data: [],
                loading: false
            })
        }

    }, [req.url])
    return response;
}

export const useHttpRequest = (fn) => {
    const [response, setResponse] = useState({
        data: null,
        loading: false,
        error: ""
    }) 
    const [request, setRequest] = useState()

    useEffect(() => {
        if (!request) return

        const apiRequest = async () => {
            try {
                setResponse({
                    data: null,
                    loading: true,
                    error: ""
                })

                await axios.get("/sanctum/csrf-cookie");
                const { data } = await axios(request)
                setResponse({
                    data: data,
                    loading: true,
                    error: ""
                });
            } catch (e) {
                let status = e.response.status;
                setResponse({
                    data: null,
                    loading: false,
                    error:
                        status !== 400
                            ? e.response.data.message
                            : e.response.statusText
                })
            }
        }

        apiRequest();

    }, [request])
    return [response, (...args) => setRequest(fn(...args))]
}