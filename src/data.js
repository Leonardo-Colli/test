const data = async () =>{

    const users = await (await fetch("http://3.219.136.91:8080/api/restaurantes")).json();
    return users
}
export default data