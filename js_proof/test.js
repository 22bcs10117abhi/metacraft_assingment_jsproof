/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be? - array
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


let mybankNfts = [];

function bankNFT(_bankname, _stockprice, _buyer, _seller, _marketCap) {
    const banknewNft = {
        "bankname": _bankname,
        "stockprice": _stockprice,
        "buyer": _buyer,
        "seller": _seller,
        "marketCap": _marketCap
    };
    mybankNfts.push(banknewNft);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
    for (let counter = 0; counter < mybankNfts.length; counter++) {
        console.log(mybankNfts[counter]);
    }
}

// print the total number of bankNFTs we have minted to the console
function getTotalSupply() {
    console.log("total number of available banknfts are: " + mybankNfts.length);
}

// call your functions below this line

bankNFT("sbi", "830.65", 15488, 13833, "7403.16000000000");
bankNFT("hdfc", "1458.80", 18374, 16385, "11.090000000000");
bankNFT("axis", "1137.65", 18574, 18783, "3.5000000000000");
bankNFT("kotak", "1698.25", 24687, 23421, "3.370000000000");
bankNFT("pnb", "126.40", 73853, 69355, "1.390000000000000");
bankNFT("idfc", "77.45", 69289, 53858, "1.86000000000");

listNFTs();
getTotalSupply();