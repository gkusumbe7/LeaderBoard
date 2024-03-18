let playerCard = document.getElementById("playerCard");
let fName = document.querySelector(".firstName");
let lName = document.querySelector(".lastName");
let pCountry = document.querySelector(".countryName");
let pScore = document.querySelector(".playerScore");
let submitBtn = document.getElementById("submitBtn");

// console.log(fName,lName,pCountry,pScore);

// console.log(playerCard);









submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    let pCountry = document.querySelector(".countryName");


    if (fName.value == "" || lName.value == "" || pCountry.value == "" || pScore.value == "") {
        console.log(fName.value);
        alert("Add data on fileds");
    } else {
        let newPlayerAdded = {
            firstName: fName.value,
            lastName: lName.value,
            country: pCountry.value,
            playerScore: Number(pScore.value) 
        };

        console.log(newPlayerAdded);
        playerData.push(newPlayerAdded);
        updateData();

        fName.value = "";
        lName.value = "";
        pCountry.value = "";
        pScore.value = "";
    }
  
});



function updateData() {
        playerData.sort((p1, p2) => {
        return p2.playerScore - p1.playerScore;
    })
    // console.log(playerData);
    let innerHTML = "";

    playerData.forEach((item) => {
        innerHTML += `
        <div class="m-5 flex  justify-center	border h-24 justify-center border-green-200	 bg-green-100 font-semibold">
        <p class="w-24 pt-8 border text-center">${item.firstName}</p>
            <p class="w-24	pt-8 border text-center">${item.lastName}</p>
            <p class="w-24	pt-8 border text-center">${item.country}</p>
            <p class="w-24	pt-8 border text-center">${item.playerScore}</p>
            <button class="w-24	border pl-9">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                    <path fill-rule="evenodd"
                        d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
                        clip-rule="evenodd" />
                </svg>
            </button>
            <button   class="add w-24 border">+5</button>
            <button  class="sub w-24 border">-5</button>
        </div>
            `
    });

    playerCard.innerHTML = innerHTML;
    
}


let addBtn = document.querySelector("add");
console.log(addBtn);

document.onload = updateData();

// document.addEventListener('load',updateData);