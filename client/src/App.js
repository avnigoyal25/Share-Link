import './App.css';
import {useRef,useState,useEffect} from 'react';
import { uploadFile } from './services/api';

function App() {

  const[file,setFile]=useState('');
  const[result,setResult]=useState('')

  const fileInputRef= useRef();
 
  const logo="https://i.postimg.cc/RF5HCsxJ/Best-File-Sharing-Apps-For-Android.jpg";

  useEffect(()=>{
    const getImage=async()=>{
      if(file){
        const data=new FormData();
        data.append("name",file.name);
        data.append("file",file);

        const response=await uploadFile(data);
        setResult(response.path)
      }
    }
    getImage();
  },[file])

  const onuploadClick=()=>{
    fileInputRef.current.click();
  }

  return (
    <div className='container'>
      <img src={logo} alt="banner"/>
      <div className='wrapper'>
        <h1>Simple Fire sharing application !</h1>
        <p>Upload and share the download link</p>
        <button onClick={()=>onuploadClick()}>Upload</button>
        <input type="file"
          ref={fileInputRef}
          style={{display:'none'}}
          onChange={(e)=> setFile(e.target.files[0])}
        />
        <a href={result} target='_blank'>{result}</a>
      </div>
    </div>
  );
}

export default App;
