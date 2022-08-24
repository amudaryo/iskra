import CreateSeal from "./Components/CreateSeal";
import Nerpa from "./Components/Nerpa";

export default function Seals() {
    return (
        <div>
            <CreateSeal
                sealAdvice={"Be careful seal"}
                sealFood={"fibhs"}
                sealRings={[1, 2, 4, 1, 4, 5, 333]}
            />
            <Nerpa />
        </div>
    );
}
