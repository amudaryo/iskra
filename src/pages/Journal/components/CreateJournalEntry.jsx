import { useState } from "react";
import { useStorageByDay } from "../../../hooks/useLocalStorage";
import { v4 as uuid } from "uuid";

export default function CreateJournalEntry({ day, ...props }) {
    const [inputText, setInputText] = useState("");
    const [journalEntries, setjournalEntries] = useStorageByDay(
        "journalEntries",
        day
    );
    const textHandler = (e) => {
        setInputText(e.target.value);
    };
    const saveHandler = () => {
        const payload = { id: uuid(), text: inputText };
        journalEntries([...journalEntries, payload]);
    };

    return (
        <div>
            <form onSubmit={saveHandler}>
                <input
                    autoFocus
                    onChange={textHandler}
                    placeholder="...something happened today"
                />
            </form>
        </div>
    );
}
