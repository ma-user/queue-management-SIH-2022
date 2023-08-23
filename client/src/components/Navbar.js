import {React,useState,useEffect,createContext,useContext} from 'react';
 import Container from 'react-bootstrap/Container';
    import Nav from 'react-bootstrap/Nav';
    import Navbar from 'react-bootstrap/Navbar';
    import NavDropdown from 'react-bootstrap/NavDropdown';
    import { MDBInputGroup, MDBInput, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';
    import "./navbar.css"
    import {MdQrCodeScanner,MdLogin,MdSearch} from "react-icons/md";
    import MidPage from './MidPage'
    import { Link } from "react-router-dom";
    
    import { FaBars, FaTimes } from "react-icons/fa";
import Home from '../pages/LoginPage';

       import {DistrictContext, DistrictProvider} from './DistrictContext'
      //  export const DistrictContext=createContext();

function NavBar(props){
  let [dis,setDis]=useState("");
  let [dist,setdist] = useState([]);
  const fetchDist =async()=>{
  const resp = await fetch("https://one-queue-server.herokuapp.com/api/_v1/District");
  const data = await resp.json();


  // console.log(data.districts);
  setdist(data.districts);
}
useEffect(()=>{
  fetchDist();
},[])

  

  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
      
  const handleFilter = (event) => {

    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = dist.filter((value) => {
      
      return value.toLowerCase().includes(searchWord.toLowerCase());
    });

    
    console.log(wordEntered);

    if (searchWord === "") {
      setFilteredData([]);
      return "no data found";
    } else {
      setFilteredData(newFilter);
    }
  };

 
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileView = () => setClick(false);
  const showButton = () => {
      if (window.innerWidth <= 960) {
          setButton(false);
      } else {
          setButton(true);
      }
  };

  useEffect(() => {  
      showButton();
  }, []);

  window.addEventListener('resize', showButton);
  const getInitialState = () => {
    const value = "";
    return value;
  };

  //  const [value,setValue] = useContext(DistrictContext);
  const array =useContext(DistrictContext);
 const [value,setValue]=array[0];
 const [type,setType]=array[1];

  function handleChange(e) {
    setValue(e.target.value);
    // console.log(e.target.value);
  }
  function handleType(e) {
    setType(e.target.value);
    console.log(e.target.value);
  }
    
      return (
        <>
        <nav className="navbar">
                <div className="navbar-container">
                    <Link to='/' className="navbar-logo">
                       One Queue 
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        {click ? <FaTimes/> : <FaBars/>} 
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <a href='/' className='nav-links' onClick={closeMobileView}>
                                Home
                    </a>
                        </li>
                          
                        <li className='nav-item'>
                          <div className="nwrapper">
                          <label>Type of organization</label>
                        <select name="category" id="category" onChange={handleType} value={value}className="form-control nav-links aa" >
                    <option value="">Select</option>
                    <option value="hospital">Hospital and related Facility</option>
                    <option value="government">Government Offices & Facilities</option>
                    <option value="stands">Bus Stands/ Railway Station</option>
                    <option value="other">Other</option>
                </select>
                </div>
                        </li>  
                        <li className='nav-item'>
                        <a className="btn btn-info btn-outline "><MdQrCodeScanner/> Open Scanner</a>
                        </li>  
                        
                        <li className='nav-item'>
                          <div className='wrapper'>
                        <select name="category" id="category" className="form-control  aa" value={value} onChange={handleChange} >
               
                   <option ><MdSearch/>Select District</option>
                    {dist.map((data,key) => {
            return (
              
             
              
              <option  value={data} >
               
              {data}</option>
                   
                    
                
             
              
            );
            
          })}
          
                </select>
                </div>
                        </li>
                        <li className='nav-item'>
                        <a href="/login"className="btn btn-info btn-outline "><MdLogin/>Login</a>
                        </li>
                        
                    </ul>
                    
                </div>
            </nav>

       


{/* <div className="navbar navbar-expand-md navbar-custom bg-custom mb-4" role="navigation">
      <a className="navbar-brand" href="/">One-Queue</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav " >
              <li className="nav-item">
                  <a className="nav-link" href="/example">Example</a>
              </li>
              <li className="nav-item">
                <select name="category" id="category" class="form-control" >
                    <option value="">Select</option>
                    <option value="hospital">Hospital and related Facility</option>
                    <option value="government">Government Offices & Facilities</option>
                    <option value="stands">Bus Stands/ Railway Station</option>
                    <option value="other">Other</option>
                </select>
            </li>
            <li className="nav-item">
               
                <a href="/"className="btn btn-info btn-outline"><MdQrCodeScanner/> Open Scanner</a>
            </li>
            <li className="nav-item">
             
            <a href="/"className="btn btn-info btn-outline"><MdLogin/>Login</a>
            </li>
            <li className="nav-item">
              
              <a href="/" className="btn btn-info "><i class="fa fa-directory"></i> District <i className="fa fa-search"></i></a>
            </li>
            <li className="nav-item">
                <select name="category" id="category" class="form-control"  >
                <option value="">Search<MdSearch/></option>
                   
                    {dist.map((value, key) => {
            return (
              
             
              
              <option value="">{value}</option>
                   
                    
                
             
              
            );
            
          })}
                </select>
            </li>
          </ul>
         {/* <form className="form-inline"></form>
              <div className="form-control ">
              
  
          
          
          <input id="location" className="form-control " type="text" name="location"value={wordEntered}
          onChange={handleFilter} placeholder="Jaipur.."/>
           </div>
           <select   className="form-control" >
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <ul>
              
              <option value="">
              
                   {value}</option>
          
                  </ul> 
                     
                
             
              
            );
            
          })}
          </select>
        </form> 
                     </div> */}
            
 
</>

      );

}
export default NavBar;

