function calculateRate(mailType, weight) {

    var cost = 0;
    weight = Number(weight);

    console.log("mailType: " + mailType);
    console.log("weight: " + weight);
    console.log("type - " + typeof weight);

    switch (mailType) {
        case "stamped":
            mailType = "Letters (Stamped)";
            if (weight <= 1) {
                cost = 0.49;
            } else if (weight <= 2) {
                cost = 0.70;
            } else if (weight <= 3) {
                cost = 0.91;
            } else if (weight <= 3.5) {
                cost = 1.12;
            } else {
                cost = "Your " + mailType +" should not weigh this much."
            }
            break;
        case "metered":
            mailType = "Letters (Metered)";
            if (weight <= 1) {
                cost = 0.46;
            } else if (weight <= 2) {
                cost = 0.67;
            } else if (weight <= 3) {
                cost = 0.88;
            } else if (weight <= 3.5) {
                cost = 1.09;
            } else {
                cost = "Your " + mailType + " should not weigh this much."
            }
            break;
        case "flats":
            mailType = "Large Envelopes (Flats)";
            if (weight <= 1) {
                cost = 0.98;
            } else if (weight <= 2) {
                cost = 1.19;
            } else if (weight <= 3) {
                cost = 1.40;
            } else if (weight <= 4) {
                cost = 1.61;
            } else if (weight <= 5) {
                cost = 1.82;
            } else if (weight <= 6) {
                cost = 2.03;
            } else if (weight <= 7) {
                cost = 2.24;
            } else if (weight <= 8) {
                cost = 2.45;
            } else if (weight <= 9) {
                cost = 2.66;
            } else if (weight <= 10) {
                cost = 2.87;
            } else if (weight <= 11) {
                cost = 3.08;
            } else if (weight <= 12) {
                cost = 3.29;
            } else if (weight <= 13) {
                cost = 3.50;
            } else {
                cost = "Your " + mailType + " should not weigh this much."
            }
            break;
        case "parcels":
            mailType = "Parcels";
            if (weight <= 4) {
                cost = 2.67;
            } else if (weight <= 5) {
                cost = 2.85;
            } else if (weight <= 6) {
                cost = 3.03;
            } else if (weight <= 7) {
                cost = 3.21;
            } else if (weight <= 8) {
                cost = 3.39;
            } else if (weight <= 9) {
                cost = 3.57;
            } else if (weight <= 10) {
                cost = 3.75;
            } else if (weight <= 11) {
                cost = 3.93;
            } else if (weight <= 12) {
                cost = 4.11;
            } else if (weight <= 13) {
                cost = 4.29;
            } else {
                cost = "Your " + mailType + " should not weigh this much."
            }
            break;
        default:
            mailType = "Error in defining mailType in postage.js";
            break;
    }

    cost = "$" + cost;

    return {
        "mailType": mailType,
        "weight": weight,
        "cost": cost
    };
}

module.exports = {
    calculateRate: calculateRate
}
