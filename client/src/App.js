import { useEffect, useState } from "react";
import ListItem from "./components/ListItem";
import ListHeader from "./components/ListHeader";
import Auth from "./components/Auth";
import { useCookies } from "react-cookie";

const App = () => {
    const [cookies, setCookie, removeCookie] = useCookies(null);
    const authToken = cookies.AuthToken;
    const userId = cookies.Email;
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
        if (authToken) {
            getData();
        }
    }, []);

    console.log(forms);

    const sortedForms = forms?.sort(
        (a, b) => new Date(a.date) - new Date(b.date)
    );

    return (
        <div className="app">
            {!authToken && <Auth />}
            {authToken && (
                <>
                    <ListHeader
                        listName={"🏝️Forest Health App"}
                        getData={getData}
                    />
                    {sortedForms?.map((form) => (
                        <ListItem
                            key={form.formid}
                            form={form}
                            getData={getData}
                        />
                    ))}
                </>
            )}
        </div>
    );
};

export default App;
