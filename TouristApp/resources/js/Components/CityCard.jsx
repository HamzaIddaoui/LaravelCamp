import { Card } from "antd";

export default function CityCard({name, appearences, image}) { 

    return (
        
        <Card
         hoverable
         cover= {<img src={`/images/${image}.jpg`} style={{height:'max-content'}}/>}
        >
            <span className="city-name-card-title flex justify-center">
                {name}
            </span> 
        </Card>
 
    )
}