import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

const ViewAll = () => {
   const[token,setToken]=useState(
    sessionStorage.getItem("token")
   )
    
    const [data, setData] = useState([])

    const fetchData=()=>{
        console.log(token)
        axios.post("http://localhost:3030/view",{},{
            headers:{"token":token,"Content-Type":"application/json"}
        }).then(
            (response)=>{
                console.log(response.data)
                setData(response.data)
            }
        ).catch(
            (error)=>{
                console.log(error)
            }
        )
    }

    useEffect(()=>
        {fetchData()},[])
    return (
        <div>
             <Navbar/>
            <br></br>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                           {data.map(
                            (value,index)=>{
                                return <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <div class="card mb-3" >
                                    <div class="row g-0">
                                        <div class="col-md-4">
                                            <img src="https://bcassetcdn.com/public/blog/wp-content/uploads/2019/07/18094848/kingfisher-2.png" class="img-fluid rounded-start" alt="..."></img>
                                        </div>
                                        <div class="col-md-8">
                                            <div class="card-body">
                                                <h5 class="card-title">{value.Message}</h5>
                                               
                                                <p class="card-text"><small class="text-body-secondary">Posted on {value.postedDate}</small></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            }
                           )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAll
