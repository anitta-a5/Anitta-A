import { useState } from "react";
import { Row, Col, Container, Card, Table, Alert } from "react-bootstrap";
import DeleteConfirmation from "./forms/DeleteConfirmation";
import "./text.css";
import "bootstrap/dist/css/bootstrap.min.css";
import EditUserForm from "./forms/EditUserForm";
 
const Match = () => {
  // Set up a list of users and vegetables
  const [users,setUsers] = useState([
    {id:1,name:'RCB',date:'14.02.2023',status:'live'},
    {id:2,name:'CSK',date:'12.01.2022',status:'end'},
    {id:3,name:'MI',date:'12.10.2023',status:'upcoming'},
  ]);


 
  // Set up some additional local state
  const [type, setType] = useState(null);
  const [id, setId] = useState(null);
  const [displayConfirmationModal, setDisplayConfirmationModal] = useState(false);
  const [deleteMessage, setDeleteMessage] = useState(null);
  const [userMessage, setUserMessage] = useState(null);
  
  // Handle the displaying of the modal based on type and id
  const showDeleteModal = (type, id) => {
    setType(type);
    setId(id);
    setUserMessage(null);
  
 
    if (type === "user") {
      setDeleteMessage(`Are you sure you want to delete the user '${users.find((x) => x.id === id).name}'?`);
    } else if (null) {
     }
 
    setDisplayConfirmationModal(true);
  };
 
  // Hide the modal
  const hideConfirmationModal = () => {
    setDisplayConfirmationModal(false);
  };
 
  // Handle the actual deletion of the item
  const submitDelete = (type, id) => {
    if (type === "user") {
      setUserMessage(`The user '${users.find((x) => x.id === id).name}' was deleted successfully.`);
      setUsers(users.filter((user) => user.id !== id));
    } else if (null) {
      }
    setDisplayConfirmationModal(false);
  };

  const[editing,setEditing]=useState(false);
  

  const initialFormState = {id:'',name:'',date:'',status:''}

  const [currentUser,setCurrentUser] = useState(initialFormState);

  const editRow = (user)=>{
      setEditing(true);
      setCurrentUser({id:user.id,name:user.name,date:user.date,status:user.status});
  }
  const updatedUser=(id,updatedUser)=>{
    setEditing(false);
    setUsers(users.map((user)=>(user.id===id?updatedUser:user)))
  }
  

  return (
    <Container className="mt-4">
      <Row>
        <Col md={{ span: 10, offset: 1 }}>
          <h1>Matches</h1>
          <Card className="mt-2">
          {editing?(<div>
            <EditUserForm
            setEditing={setEditing}
            currentUser={currentUser}
            updatedUser={updatedUser}
            />
          </div>):(<div></div>)}
            <Card.Header>Users</Card.Header>
            <Card.Body>
              {userMessage && <Alert variant="success">{userMessage}</Alert>}
              <Table className="flex-large">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.length>0?
                  (users.map((user) => {
                    return (
                      <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.date}</td>
                        <td>{user.status}</td>
                        <td >
                          <button onClick={()=>{
                            editRow(user)
                        }} className="button muted-button">Edit</button><button  className="button muted-button" onClick={() => showDeleteModal("user", user.id)}>Delete</button>
                        </td>
                      </tr>
                    )}
                  )):(
                    <tr>
                        <td colSpan={3}>No users</td>
                    </tr>
                )
                  }
                </tbody>
          </Table>
         </Card.Body>
        </Card>
       </Col>
      </Row>
     <DeleteConfirmation showModal={displayConfirmationModal} confirmModal={submitDelete} hideModal={hideConfirmationModal} type={type} id={id} message={deleteMessage}  />
    </Container>
  );
};
 
export default Match;