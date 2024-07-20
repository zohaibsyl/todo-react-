import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from "./form.module.css"
import { useState } from 'react';
function BasicExample() {
    const [user, setUser] = useState({
        name: "",
        lastname: "",
        email: "",
        password: "",
        organizationName: "",
        organizationSize: "",
        indestry: "",
      });
    
      const handleInputs = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUser({ ...user, [name]: value });
      };
    
    const input=()=>{
    
    
      
    
    
    }
    


  return (
    
    <Form className={styles.main}>
        <h1>Rigestration Form</h1>
        <Form.Label>First Name</Form.Label>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control  value={user . name}  name='name' onChange={handleInputs} autoComplete='off'   className={styles.mb} type="text" placeholder="Enter Your FirstName" /><br/>
      </Form.Group>



        <Form.Label>Last Name</Form.Label>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control  value={user . lastname}  name='lastname' onChange={handleInputs} autoComplete='off'  className={styles.mb} type="text" placeholder="Enter Your Last Name" /><br/>
      </Form.Group>



        <Form.Label>Email address</Form.Label>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control  value={user . email}  name='email' onChange={handleInputs} autoComplete='off'  className={styles.mb} type="email" placeholder="Enter email" /><br/>
      </Form.Group>


        <Form.Label>Password</Form.Label>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control   value={user . password}  name='password' onChange={handleInputs} autoComplete='off' className={styles.mb} type="password" placeholder="Password" />
      </Form.Group>




        <Form.Label>organization Name</Form.Label>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control  value={user . organizationName}  name='organizationName' onChange={handleInputs} autoComplete='off' className={styles.mb} type="organization Name" placeholder="Enter organization Name" /><br/>
      </Form.Group>



        <Form.Label>organization  size</Form.Label>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control  value={user . organizationSize}  name='organizationSize' onChange={handleInputs} autoComplete='off' className={styles.mb} type="organization" placeholder="Enter organization size" /><br/>
      </Form.Group>




        <Form.Label>indestry</Form.Label>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control value={user . indestry}  name='indestry' onChange={handleInputs} autoComplete='off' className={styles.mb} type="indestry" placeholder="Enter indestry" /><br/>
      </Form.Group>

<br />


    
      <Button className={styles.btn} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default BasicExample;




// import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import styles from "./form.module.css";

// function BasicExample() {
//   const [user, setUser] = useState({
//     name: "",
//     lastname: "",
//     email: "",
//     password: "",
//     organizationName: "",
//     organizationSize: "",
//     industry: "",
//   });

//   const handleInputs = (e) => {
//     const { name, value } = e.target;
//     setUser({ ...user, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(user);
//     // Add your form submission logic here
//   };

//   return (
//     <Form onSubmit={handleSubmit}>
//       <h1>Registration Form</h1>
      
//       <Form.Group className="mb-3" controlId="formFirstName">
//         <Form.Label>First Name</Form.Label>
//         <Form.Control
//           value={user.name}
//           name='name'
//           onChange={handleInputs}
//           autoComplete='off'
//           className={styles.mb}
//           type="text"
//           placeholder="Enter Your First Name"
//         />
//       </Form.Group>
      
//       <Form.Group className="mb-3" controlId="formLastName">
//         <Form.Label>Last Name</Form.Label>
//         <Form.Control
//           value={user.lastname}
//           name='lastname'
//           onChange={handleInputs}
//           autoComplete='off'
//           className={styles.mb}
//           type="text"
//           placeholder="Enter Your Last Name"
//         />
//       </Form.Group>
      
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Email address</Form.Label>
//         <Form.Control
//           value={user.email}
//           name='email'
//           onChange={handleInputs}
//           autoComplete='off'
//           className={styles.mb}
//           type="email"
//           placeholder="Enter email"
//         />
//       </Form.Group>
      
//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Password</Form.Label>
//         <Form.Control
//           value={user.password}
//           name='password'
//           onChange={handleInputs}
//           autoComplete='off'
//           className={styles.mb}
//           type="password"
//           placeholder="Password"
//         />
//       </Form.Group>
      
//       <Form.Group className="mb-3" controlId="formOrganizationName">
//         <Form.Label>Organization Name</Form.Label>
//         <Form.Control
//           value={user.organizationName}
//           name='organizationName'
//           onChange={handleInputs}
//           autoComplete='off'
//           className={styles.mb}
//           type="text"
//           placeholder="Enter Organization Name"
//         />
//       </Form.Group>
      
//       <Form.Group className="mb-3" controlId="formOrganizationSize">
//         <Form.Label>Organization Size</Form.Label>
//         <Form.Control
//           value={user.organizationSize}
//           name='organizationSize'
//           onChange={handleInputs}
//           autoComplete='off'
//           className={styles.mb}
//           type="text"
//           placeholder="Enter Organization Size"
//         />
//       </Form.Group>
      
//       <Form.Group className="mb-3" controlId="formIndustry">
//         <Form.Label>Industry</Form.Label>
//         <Form.Control
//           value={user.industry}
//           name='industry'
//           onChange={handleInputs}
//           autoComplete='off'
//           className={styles.mb}
//           type="text"
//           placeholder="Enter Industry"
//         />
//       </Form.Group>
      
//       <Button variant="primary" type="submit">
//         Submit
//       </Button>
//     </Form>
//   );
// }

// export default BasicExample;
