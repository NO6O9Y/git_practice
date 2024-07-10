
function generateRandomNumber(num){
    return Math.floor( Math.random() * num)
}

const prediction = {
    zodiacSign:[ 'Leo', 'Scorpion', 'Cancer', 'Aries' ],
    sphere:[ 'buisness', 'realationship' , 'friendship', 'sport'],
    advice:[' go for a run ', 'do nothing', 'eat something delicious']
}


let zodiacPrediction = [];

for (let part in prediction){
    let idVariable = generateRandomNumber(prediction[part].length);

    switch(part){
        case 'zodiacSign' :
            zodiacPrediction.push(`For the ${prediction[part][idVariable]}`)
            break;
        case 'sphere': 
            zodiacPrediction.push(`Today you will have success in ${prediction[part][idVariable]}`)
            break;
        case 'advice': 
            zodiacPrediction.push(`Its better for you today ${prediction[part][idVariable]}`)
            break;
    }

};

function formatPredict(predict){
    const formatted = zodiacPrediction.join('\n')
    console.log(formatted);
}

formatPredict(zodiacPrediction);    