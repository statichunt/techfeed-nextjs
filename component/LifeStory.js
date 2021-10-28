import { Data } from "./Data"
import Image from "next/image"


const  LifeStory=()=> {
    console.log(Data)

    return (
        <div>
            {
                Data.map((data)=>(   <div key={data.id}>
                    <h4>{data.title}</h4>
                <h1>{data.heading}</h1>
                <p>{data.date}<span>{data.writer}</span></p>
                <Image
                alt="abc"
                src={data.image}
                height={400}
                width={300}
                ></Image>
                </div>))
            }
            <h1>hi hello</h1>
        </div>
    )
}

export default LifeStory
