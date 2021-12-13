export default function (state, { type: payload }) {
    switch (type) {
        case "TOGGLE_LOADING":
            return {
                ...state,
                loading: payload,
            }
        case "TOGGLE_MODAL":
            return {
                ...state,
                modal: payload
            }
    }
}