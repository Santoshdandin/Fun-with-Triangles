const input = document.querySelectorAll(".input");
const checkBtn = document.querySelector("#area-btn");
const outputE1 = document.querySelector("#output");


function formula(a,b) {
    const area = 1/2*a*b;
    return area;
}


function calculateAreaOfTriangle() {
    const area = formula(Number(input[0].value),Number(input[1].value));
    
    outputE1.innerText = "The area of Triangle is " + area +"cm"

}



checkBtn.addEventListener("click", calculateAreaOfTriangle);