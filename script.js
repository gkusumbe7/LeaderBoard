

function updateData(){
    playerData.sort((p1,p2)=>{
        return p2.playerScore - p1.playerScore;
    })   
    console.log(playerData);
}


document.onload = updateData();

// document.addEventListener('load',updateData);