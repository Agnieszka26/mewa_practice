import { useEffect, useState } from "react";
import { APIResponse, State, User } from "../app/types";

export const useApi = <Data>(url: string) => {
    const [state, setState] = useState<State<Data>>({
        data: undefined,
        isLoading: true,
        isError: false
    });
    useEffect(() => {
        fetch(`https://randomuser.me/api/?results=5`).then(response => {
            if (response.ok) {
                return response.json()
            }
        }
        ).then((responseData) => setState(
            {
                data: (responseData as APIResponse<Data>).results,
                isLoading: false,
                isError: false
            }

        )).catch(() => {
            setState({
                data: undefined,
                isLoading: false,
                isError: true,
            })
        })
    }, []);

return state
 }
