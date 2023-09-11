import React, { useState,useEffect } from "react";
import Litstitem from "./Litstitem";



const getlocalitem=()=>{

  let list= localStorage.getItem('ListItem')
  if(list){
    return JSON.parse(localStorage.getItem('ListItem'))
  }
  else{
    return[];
  }
}

const CreateTask = ({}) => {
  const [taskname, settaskname] = useState("");
  const [getval, setgetval] = useState(getlocalitem());
  const [togglebtn, settogglebtn] = useState(true);
  const [edititem, setedititem] = useState("");




  const handleclick = (e) => {
    e.preventDefault();
    if (taskname === "") {
      alert("Please Enter Some text...");
    } else if (taskname && !togglebtn) {
      setgetval(
        getval.map((elem) => {
          if (elem.id === edititem) {
            return { ...elem, name: taskname };
          }
          return elem;
        })
      );
      settogglebtn(true);
      settaskname("");
      setedititem("");
    } else {
      let allinputdata = {
        id: new Date().getTime().toString(),
        name: taskname,
      };
      setgetval((oldval) => {
        return [...oldval, allinputdata];
      });
    }
    settaskname("");
  };






  useEffect(() => {
   localStorage.setItem('ListItem' , JSON.stringify(getval))
  }, [getval])
  




  const handlechange = (e) => {
    settaskname(e.target.value);
  };

  const handledelete = (ids) => {
    setgetval((oldval) => {
      return oldval.filter((arrelem) => {
        return ids !== arrelem.id;
      });
    });
  };






  const handleedit = (ids) => {
    let itemid = getval.find((arrelem) => {
      return arrelem.id === ids;
    });
    settogglebtn(false);
    settaskname(itemid.name);
    setedititem(ids);
  };





  return (
    <>
      <form className="todoForm">
        <input
          type="text"
          value={taskname}
          onChange={handlechange}
          name="Text"
          placeholder="✍🏻... Your Task"
        />
        {togglebtn ? (
          <button type="submit" onClick={handleclick}>
            Create
          </button>
        ) : (
          <button type="submit" onClick={handleclick}>
            Edit
          </button>
        )}
      </form>
      <ul className="allTodos">
        {getval.map((getitem) => {
          return (
            <Litstitem
              items={getitem.name}
              key={getitem.id}
              ids={getitem.id}
              onSelect={handledelete}
              Editvideo={handleedit}
            />
          );
        })}
      </ul>
    </>
  );
};

export default CreateTask;
