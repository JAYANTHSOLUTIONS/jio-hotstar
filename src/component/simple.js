
const handleapi= async()=>{

const data = await fetch("https://fooapi.com/api/movies")

const res = await data.json()

const dat = res.data



dat.map((da)=>{

    console.log(da.title)
    console.log(da.poster);
    
})


}

handleapi();