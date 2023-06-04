import React,{useState} from "react"
import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form';
const Usertable = ({items,index})=> {
 
    const [checked, setChecked] = useState(false); 
    const handleChange = (e) => { 
    
        setChecked(!checked); 
        
      }; 
    return (
      <>  
     {/* <p>
    {checked ? 'Checked' : 'Not checked'}
    </p>  */}
    <Table responsive striped bordered hover variant="dark" >
    <thead >
      <tr >
   
<th> <Form.Check onChange={handleChange} aria-label="option 1" /></th>  
<th   > Key </th>  
<th > Value</th>
      </tr>
    </thead>
    <tbody>
   
    
    {Object.keys(items).map((key) => { 
      return (

      
        <tr key={index+key}><td></td>
              <td key={key + items.id}  >{key}</td>
              <td key={items.id+key}>{checked? items[key]: ""}</td>
            </tr>
              ) 
             
            })}
           

          

   
     
  
    </tbody>
  </Table>
  </>
  );
}

export default Usertable;