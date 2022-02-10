function feetToMile(feet)
{
    let mile = feet/5280;
    return mile;
}

function woodCalculator(chair, table, bed)
{
    let wood = chair*1 + table*3 + bed*5;
    return wood;
}

function brickCalculator(storays)
{
    let totalBrick;
    let totalFeet = 0;
    for(let i=1; i<=storays; i++)
    {
        if(i<=10)
        {
            totalFeet = totalFeet + 15;
        }
        else if(i>10 && i<=20)
        {
            totalFeet = totalFeet + 12;
        }
        else
        {
            totalFeet = totalFeet + 10;
        }
    }

    totalBrick = totalFeet * 1000;
    return totalBrick;
}

function tinyFriend(friendsNameArray)
{
    let tinyFriendName = friendsNameArray[0];
    for(let i=0; i<friendsNameArray.length; i++)
    {
        if(tinyFriendName.length > friendsNameArray[i].length)
        {
            tinyFriendName = friendsNameArray[i];
        }
    }
    return tinyFriendName;
}


// feetToMile Function Call
let mile = feetToMile(15840);
console.log(mile);

// woodCalculator Function Call
let totalWood = woodCalculator(10,5,3);
console.log(totalWood); 

// brickCalculator Function Call
let brick = brickCalculator(70);
console.log(brick);

// tinyFriend Function Call
let friendsName = ["kabir", "Chabir","Debu", "pinku", "nayeem", "sayeemma", "Habib Ullah", "Emu"];
let result = tinyFriend(friendsName);
console.log(result);