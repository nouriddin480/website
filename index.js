//function
//get values
//calculate
//output
//bmi formula:  weight / height squared * 703

function calculateBmi() {
  let weight = document.getElementById('weight').value
  let height = document.getElementById('height').value

  let bmi = (weight / ((height * height) / 10000)).toFixed(2)

  document.getElementById('heading').innerHTML  = 'Your BMI is :'
  document.getElementById('bmi-output').innerHTML = bmi

  if (bmi <= 27.9) {
    document.getElementById('message').innerHTML = 'This is considered underweight'
  }
    else if (bmi >= 25 && bmi <= 29.9){
  document.getElementById('message').innerHTML = 'This is considered normal'}

  else {
    document.getElementById('message').innerHTML = 'This is considered obese'
}

}

function reload(){
    window.location.reload()
}




