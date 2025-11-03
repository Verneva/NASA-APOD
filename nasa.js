let dateEl = document.querySelector('input[type="date"]');

function checkDate(){

        if (!dateEl.checkValidity()) {
            const date = new Date();
            const todaysDate = date.toLocaleDateString('en-ca');
            console.log(todaysDate);
            return todaysDate;
            
        }
        let date = dateEl.value;
        console.log(date);
        return date;   
}

async function fetchData() {
    try{
        const date = checkDate()

        const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`);
        
        if (!response.ok){
            throw new Error("Could not fetch resources")
        }
        const data = await response.json();
        // console.log(data)
        const spaceImage = data.url;
        const explanation = data.explanation;
        const title = data.title;



        const imgElement = document.getElementById("spaceImage");
        imgElement.src = spaceImage;
        imgElement.style.display = "block";

        const imageTitle = document.getElementById("imageTitle");
        imageTitle.textContent=title; 

        const imageExplanation = document.getElementById("imageExplanation");
        imageExplanation.textContent = explanation;   
    }
    catch(error){
        console.error(error);
    }
    
}