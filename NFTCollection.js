/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.

//Instantiates a list of NFTs
const NFTList = [];

function mintNFT(_name, _color, _expression, _code) {
  const NFT = {
    "Name": _name,
    "Color": _color,
    "Expression": _expression,
    "Code": _code
  };

  NFTList.push(NFT);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
  for (let i = 0; i < NFTList.length; i++) {
    console.log(NFTList[i]["Name"]);
    console.log(NFTList[i]);
  }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
  console.log(NFTList.length);
}

// call your functions below this line

//Adding NFTs
mintNFT("Jackie", "Orange", "Shocked", "TX1-964-5KL");
mintNFT("Leon", "Yellow", "Happy", "43D-KR9-0FC");
mintNFT("Kayla", "Purple", "Tired", "89D-FTK-RK9");
mintNFT("Boris", "Black", "Sleepy", "54F-TQR-369");
mintNFT("Amanda", "Pink", "Joyous", "HPY-FT4-OFR");


//Lists all of the NFTs
listNFTs();

//Gets the total amount of NFTs
getTotalSupply();