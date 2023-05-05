import React from 'react';

function ComponentA(props) {
  return (
    <>   
      <label>Input Box : </label>
      <input type="text" name={props.name} onChange={props.handleChange}/>
    </>
  );
}

function ComponentC(props) {
    return (
      <>
        <label>Select Box : </label>
        <select name={props.name} onChange={props.handleChange}>
            <option value="">Select</option>
            {props.option.map(data=><option value={data} key={data}>{data}</option>)}
        </select>
      </>
    );
  }


function App() {
let json=[
        {
          name:'address',
          type:'input'
        },
        {
          name:'gender',
          type:'select',
          option:['Male','Female']
        }
        ]
  const componentsData = {
     input:  {component:ComponentA },
     select: {component:ComponentC },
  };
  const handleChange=(e)=>{
    setFormData((values)=>({...values,[e.target.name]:e.target.value}))
  }
  const handleChangeDynamic=(e)=>{
    setFormData(prevFormData => ({
        ...prevFormData,
        additional: { ...prevFormData.additional, [e.target.name]: e.target.value }
      }));
  }
  const handleSubmit=(e)=>{
    console.log(formData)
  }
  const [formData,setFormData]=React.useState({
    name:'',
    additional:{}
  })
  return (
    <div>
      <h1>My App</h1>
      <label>Parent Label </label>
      <input type="text" name="name" onChange={handleChange}/>
      {
        json.map((data,index)=>{       
            const Component=componentsData[data.type].component
            let option=data?.option ? data.option :'';
            let change=data?.option ? handleChangeDynamic :handleChangeDynamic;
            let props = {name:data.name,option:option,handleChange:change};
            return <Component key={index} {...props}/>
        })
      }
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App