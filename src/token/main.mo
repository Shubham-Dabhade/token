import Principal "mo:base/Principal";
import HashMap "mo:base/HashMap";

actor Token{

    //to assign the principal value of the user
    var owner =Principal.fromText("55evk-4xtoy-apf6s-eoore-qixkm-tmjif-hpwoz-wa3qq-vwnql-77qpr-tqe");//using the base principal id which is in the form string so to convert it in principal ID


    var totalSupply:Nat= 1000000000;//to keep track of total supply of our coin and we have set the default value as 1 billion
    var symbol:Text="URSA";// making a symbol for our token calliing it"URSA TOKEN"
    

    //creating a hash map to store the balances of the user/canisters balance of the token

    var balances = HashMap.HashMap<Principal,Nat>(1, Principal.equal,Principal.hash);  //it will take 3 inputs 1)the inital size,2)the method that take user key and find the same key in the hashTable(luckily as the keys are Principal we have a method call 'equal' to check)
    //3)how to hash the key and as the keys are principals we have its method called .hash which hashes the principal key

    balances.put(owner,totalSupply);


    //creating a query to check the balance of a user


    //we are sending the principal id as the input and we created a async function which returns Nat value
    public query func balanceOf(who:Principal): async Nat {
        //setting the balance ,creating a switch statement which takes the principal as input and set the value to .get(Principal)
        //which matches the value in the parameter
        let balance : Nat = switch (balances.get(who)){
            //if the value is null set balance as 0
            case null 0;
            //if value is an ooptional vatiable set the balance as the result
            case (?result) result;
        };
        //return the balance 
        return balance;
    };


    //creating a query function for sending the symbol of our Token
    public query func getSymbol(): async Text{
        return symbol;
    };


}