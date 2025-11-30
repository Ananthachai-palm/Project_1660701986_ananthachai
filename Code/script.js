function goUserPage(){
    window.location.href = "user.html";
}
function calculate(){
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // แปลงเป็นเมตร

    if (!weight || !height) {
        alert("Please Input first");
        return;
    }

    const bmi = weight / (height * height);
    let status = "";

    if (bmi < 18.5) {
        status = "low weight / skinny";
    } else if (bmi < 24.9) {
        status = "regular / slim";
    } else if (bmi < 29.9) {
        status = "Overweight";
    } else {
        status = "Fat";
    }

    document.getElementById('output').innerText = `Your BMI is ${bmi.toFixed(2)} (${status})`;
}

let click = document.getElementById("use");
click.addEventListener("click", goUserPage)
