const isMobileOrTablet = (limit) => {
    const screenWidth = window.innerWidth;
    const isMobileOrTablet = screenWidth < limit;

    return isMobileOrTablet;
}

export default isMobileOrTablet;