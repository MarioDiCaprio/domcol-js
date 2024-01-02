import React from "react";
import {useGraphByIdQuery} from "@/redux/api/complexifyApi";
import {Card, CardBody, CardHeader} from "@nextui-org/react";


interface GraphCardProps {
    graphId: string
}

const GraphCard: React.FC<GraphCardProps> = ({ graphId }) => {
    const { data, isLoading, isError } = useGraphByIdQuery(graphId);
    
    if (isError) {
        // TODO Add error render
        return <></>
    }
    
    if (isLoading || !data) {
        // TODO Add loading card
        return <></>
    }
    
    return (
        <Card className="w-fit h-fit">
            <CardHeader className="pb-0">
                <span className="text-sm">
                    { data.title }
                </span>
            </CardHeader>
            <CardBody>
                <div className="w-[200px] h-[100px] rounded bg-gradient-to-br from-indigo-600 to-indigo-400">
                    
                </div>
            </CardBody>
        </Card>
    );
}

export default GraphCard;