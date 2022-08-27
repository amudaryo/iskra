import { useStorage, useStorageByDay } from "../../hooks/useLocalStorage";
import CreateSeal from "./Components/CreateSeal";
import Nerpa from "./Components/Nerpa";

export default function Seals() {
    const [today] = useStorage("today");
    const [nerpi] = useStorageByDay("seals", today);
    return (
        <div>
            <CreateSeal
                sealAdvice={"Be careful seal"}
                sealFood={"fibhs"}
                sealRings={[1, 2, 4, 1, 4, 5, 333]}
            />
            <Nerpa />
            {nerpi && nerpi.map((item) => <Nerpa sealDirective={item.text} />)}
        </div>
    );
}
