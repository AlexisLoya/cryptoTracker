
class Http{
    static instance = new Http();

    //Get
    get = async (url) =>{
        try{
            let request = await fetch(url)
            let json = await request.json()
            return json

        }catch (err){
            console.log("http get method err: ",err)
            throw Error(err);
        }
    }


    //Post
    post = async(url, body) =>{
        try{
            let request = await fetch(url,{
                method: "POST",
                body
            });
            let json = await request.json()
            return json
        }catch(err){
            console.log("http post method err: ",err)
            throw Error(err)
        }
    }
    //Delete
    delete = async (url) =>{
        try{
            let request = await fetch(url, {
                method: "DELETE"
            });
            let json = await request.json()
            return json
        }catch(err){
            console.log("http delete method err: ",err)
            throw Error(err)
        }
    }


    //Put
    put = async(url, body) =>{
        try{
            let request = await fetch(url, {
               method: "PUT",
               body 
            });
        }catch(err){
            console.log("http put method err: ",err)
            throw Error(err)
        }
    }
}


export default Http;