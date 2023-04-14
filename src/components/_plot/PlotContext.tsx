import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import DomainColoringGL from "./domainColoring/DomainColoringGL/DomainColoringGL";
import RiemannSphereGL from "./riemannSphere/RiemannSphereGL/RiemannSphereGL";


export interface OpenGLPlotAlgorithm {
    code: string;
    reload: boolean;
}

const PlotContext: React.FC<OpenGLPlotAlgorithm> = (props) => {
    const [mounted, setMounted] = useState<boolean>(false);
    const algorithm = useSelector((state: RootState) => state.plotSettings.activePlotAlgorithm);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <></>;
    }

    if (algorithm === 'domain-coloring') {
        return <DomainColoringGL {...props} />;
    }

    if (algorithm === 'riemann-sphere') {
        return <RiemannSphereGL {...props} />;
    }

    return <></>;
}


export default PlotContext;