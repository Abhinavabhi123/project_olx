import React, { Fragment,useContext,useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import {FirebaseContext,AuthContext} from "../../store/Context"

const Create = () => {
  const {firebase} = useContext(FirebaseContext)
  const {user} = useContext(AuthContext)
  const [name,setName]=useState('')
  const [category,setCategory]=useState('')
  const [price,setPrice]=useState('')
  const [image,setImage] = useState(null);
  const handleSubmit=()=>{
    
    firebase.storage().ref(`/image/${image.name}`).put(image).then(({ref})=>{
        console.log("podeeeey");
      ref.getDownloadURL().then((url)=>{
        console.log(url);
      })
    }).catch((error)=>{
      alert(error.message)
    })
  }
  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          <form>
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              name="Name"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              value={category}
              onChange={(e)=>setCategory(e.target.value)}
              name="category"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input className="input"
             type="number"
             id="fname"
             value={price}
             onChange={(e)=>setPrice(e.target.value)}
             name="Price" />
            <br />
          </form>
          <br />
          <img alt="ProductImage" width="auto" style={{maxWidth:"1000px"}} height="200px" src={image ? URL.createObjectURL(image) : ""}></img>
          <form>
            <br />
            <input type="file" onChange={(e)=>{
              setImage(e.target.files[0]);
            }}/>
            <br />
            <button className="uploadBtn" onClick={handleSubmit}>upload and Submit</button>
          </form>
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
