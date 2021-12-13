export const LoadingOverlay = ({ loading }) => {
    if (!loading) return null;
    return (
        <div id="preloader"></div>
    )
}