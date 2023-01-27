const zodiac = document.getElementById("zodiac");

const body =document.body;
// body.style.backgroundColor="BLUE"
const changeBackground=()=>{
    // console.log(zodiac.value);
    switch(zodiac.value){
        case "arise":
            body.style.backgroundColor="#fc0303";
            break;
            case "arise":
            body.style.backgroundColor="blue";
            break;
            case "tarus":
            body.style.backgroundColor="green";
            break;
            case "gemini":
            body.style.backgroundColor="gray";
            break;
            case "cancer":
            body.style.backgroundColor="yellow";
            break;
            case "leo":
            body.style.backgroundColor="yellow";
            break;
            case "virgo":
            body.style.backgroundColor="orange";
            break;
            default:
                break;
    }


};