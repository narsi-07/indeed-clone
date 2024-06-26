import { useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../GeneralComponents/Nav';
import Footer from '../GeneralComponents/Footer';
import '../../App.css';
import Jobs from '../../Jobs.json'
import Data from '../../Data.json'
import BlueButton from '../../ElementComponents/bluebutton';
import { useEffect } from 'react';
function Home() 

{
   const [search,setsearch]=useState('');
   const[wheresearch,setwhere]=useState('')
   const [apidata, setapidata] = useState([]);
   const [jobapidata, setjobapidata] = useState([]);
   const [exists,setexists]=useState(true);
   const [wherexist,setwherexists]=useState(true);
   function change(e) {
      
      let changed = e.target.value;
    setsearch(changed)

    const newFilter = Jobs.filter((value) => {
        return value.name.toLowerCase().includes(search.toLowerCase()) ;
      
      });

if (changed === "") {
  setjobapidata([]);
} else {
  setjobapidata(newFilter);
}


}
function wherechange(e) {

   let changedd = e.target.value;
   setwhere(changedd)

   const newFilter = Data.filter((value) => {
       return value.name.toLowerCase().includes(wheresearch.toLowerCase());  
     });
if (changedd === "") {
 setapidata([]);
} else {
 setapidata(newFilter);
}
}
 
const submit =(e)=>{
e.preventDefault();

}
 
return (
   <div className='thelargestdiv' style={{margin:'auto'}}>
  <Nav/>
   <form className='inputdiv' onSubmit={submit}>
<input placeholder='job title,keywords,company' name='what' value={search} onChange={change} autoComplete="off"></input>
{jobapidata.length !=0 && exists &&(
<div className="dataResult2">
 
        {jobapidata.slice(0, 15).map((value, key) => {
    return(
    <div className="dataItem2" onClick={()=>{
        setsearch(value.name) 
         setexists(false)}}  >
        <p>{value.name}</p>
        </div>
)})}
    </div>
    )}
 
<input placeholder='city or postcode'  name='where' value={wheresearch} onChange={wherechange} autocomplete="off"></input>
{apidata.length !=0 && wherexist &&(
<div className="dataResult"> 
  { apidata.slice(0, 15).map((value,key) => {

    return(

    <div className="dataItem" key ={key}
     onClick={()=>{setwhere(value.name)
     setwherexists(false)
     }}>
          <p>{value.name}</p>
        </div>
)})}
    </div>
    )}
<Link to='/searched'state={{whered:wheresearch, whatd:search}} className='linksmall'
style={{marginLeft:'10px',  }}>
   <BlueButton text={'Find jobs'}/>
   </Link>

   </form>

<div className='div5'>
<h3>Popular seaches</h3>
<button className='suggestedbutton' onClick={()=>setsearch('Web developer')}>Web developer</button>
<button className='suggestedbutton'onClick={()=>setsearch('Typing jobs')}>Typing jobs</button>
<button className='suggestedbutton' onClick={()=>setsearch('full stack inten')}>full stack inten</button>
<button className='suggestedbutton' onClick={()=>setsearch('Developer')}>Developer</button>
<button className='suggestedbutton' onClick={()=>setsearch('Java')}>Java</button>
</div>
<Footer/>
   </div>

  );
}

export default Home;
