import React, {useEffect, useState} from "react";
import axios from "axios";

const Context = React.createContext();

function ContextProvider(props){
    const [uglyThing, setUglyThing] = useState({
        title: "",
        imgUrl: "",
        description: ""
    })

    const [uglyThingList, setUglyThingList] = useState([]);
    const [editId, setEditId] = useState(null);

    
    useEffect(() => {
        axios.get("https://api.vschool.io/miket/thing/")
            .then(res => setUglyThingList(res.data))
            .catch(err => console.log(err))
    }, [])


    function handleChange(event){
        const {name, value} = event.target;
        setUglyThing(prevThing => ({
            ...prevThing,
            [name]: value
        }))
    }


    function handleSubmit(event){
        event.preventDefault();
        if (editId) {
            axios.put(`https://api.vschool.io/miket/thing/${editId}`, uglyThing)
            .then(res => {
                setUglyThingList(prevList => prevList.map(thing => {
                    return thing._id === editId ? res.data : thing;
                }));
                setUglyThing({title: "", imgUrl: "", description: ""});
                setEditId(null);
            })
            .catch(err => console.log(err))
        } else {
            axios.post("https://api.vschool.io/miket/thing/", uglyThing)
            .then(res => {
                setUglyThingList(prevList => [...prevList, res.data]);
                setUglyThing({title: "", imgUrl: "", description: ""});
            })
            .catch(err => console.log(err))
        }
    }
    

    function deleteThing(id){
        axios.delete(`https://api.vschool.io/miket/thing/${id}`)
        .then(res => {
            console.log(res)
            setUglyThingList(prevList => prevList.filter(thing => thing._id !== id))
        })
        .catch(err => console.log(err))
    }

    function handleEdit(id){
        const currentThing = uglyThingList.find(thing => thing._id === id);
        setUglyThing({
            title: currentThing.title,
            imgUrl: currentThing.imgUrl,
            description: currentThing.description
        });
        setEditId(id);
    }
    

    return (
        <Context.Provider value={{
            uglyThing, 
            uglyThingList,
            handleChange,
            handleSubmit,
            deleteThing,
            handleEdit
        }}>
            {props.children}
        </Context.Provider>
    )
}


export {Context, ContextProvider}