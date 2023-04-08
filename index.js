async function getAdvice() {
    console.log("Pidiendo un consejo....");
    let advice;
    await fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => {
          console.log(data.slip.advice);
          console.log(data.slip.id);
          advice = data.slip;
      });
  
      const adviceIdElement = document.querySelector('#advice-id');
      adviceIdElement.textContent = advice?.id;
  
      const adviceContentElement = document.querySelector('#advice-content');
      adviceContentElement.textContent = advice?.advice;
  }
  
  document.querySelector("button").addEventListener("click", getAdvice);
  
  getAdvice();