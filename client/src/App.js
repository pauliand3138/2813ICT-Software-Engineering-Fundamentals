import { useEffect, useState } from "react";
import ListItem from "./components/ListItem";
import ListHeader from "./components/ListHeader";

const App = () => {
    const userId = "paul@test.com";
    const [forms, setForms] = useState(null);

    const getData = async () => {
        try {
            const response = await fetch(
                `http://localhost:8000/forms/${userId}`
            );
            const json = await response.json();
            setForms(json);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    console.log(forms);

    const sortedForms = forms?.sort(
        (a, b) => new Date(a.date) - new Date(b.date)
    );

    return (
        <div className="app">
            <ListHeader listName={"🏝️Forest Health App"} />
            {sortedForms?.map((form) => (
                <ListItem key={form.formid} form={form} />
            ))}
        </div>
    );
};

export default App;
