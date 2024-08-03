function login(name)
{
    if(!name)
    {
        console.log("please enter your name");
        
    }
    else
    {
        return(`${name} logged In`)
    }

}
console.log(login("sanjay"))