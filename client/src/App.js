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

    //console.log(forms);

    const sortedForms = forms?.sort(
        (a, b) => new Date(a.date) - new Date(b.date)
    );

    console.log(sortedForms);
    return (
        <div className="app">
            {!authToken && <Auth />}
            {authToken && (
                <>
                    <ListHeader
                        listName={"🏝️Forest Health App"}
                        getData={getData}
                    />
                    <p className="user-email">👋 Hello! {userId}</p>
                    {sortedForms?.length == 0 ? (
                        <p className="empty-form">
                            🔎You have not made any research yet.
                        </p>
                    ) : (
                        <></>
                    )}
                    {sortedForms?.map((form) => (
                        <ListItem
                            key={form.formid}
                            form={form}
                            getData={getData}
                        />
                    ))}
                </>
            )}
            <p className="copyright">
                © 2813ICT Software Engineering Fundamentals - Group 22
            </p>
        </div>
    );
};

export default App;
