const getCurrentDate = () => {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();

    if (dd < 10) {
        dd = '0' + dd
    }

    if (mm < 10) {
        mm = '0' + mm
    }

    return today = mm + '/' + dd + '/' + yyyy;
}

const getDistress = (level) => {
    distressString = 'No Distress';
    if (level < 3) {
        distressString = 'No Distress';
    } else if (level < 5) {
        distressString = 'Mild Distress';
    } else if (level < 7) {
        distressString = 'Moderate Distress';
    } else if (level < 9) {
        distressString = 'Severate Distress';
    } else if (level < 11) {
        distressString = 'Extreme Distress';
    }

    return distressString;
}

export {
    getCurrentDate,
    getDistress
}