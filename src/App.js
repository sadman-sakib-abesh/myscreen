import React, {useRef, useState} from 'react';
import './App.css'

const App =() =>{

  const[data,setData]=useState('')
  const [down,setDown]=useState('')
 
  const video=useRef('')
const arr=[]


let media;

const start=()=>{
  navigator.mediaDevices.getDisplayMedia({video:true,audio:true}).then((stream)=>{
media=new  MediaRecorder(stream)



media.start(1000)

media.ondataavailable=(e)=>{
  arr.push(e.data)
}

    video.current.srcObject=stream
    video.current.play()
    
      }).catch((err)=>{
    alert(err)

      })
}


const stop=()=>{
media.stop()
const blob=new Blob(arr,{
type:'video/webm'
})

const url=window.webkitURL.createObjectURL(blob)
setDown(url)

}




    return (
      <div>
        <br/><br/><br/>
<center><h1>Claps stream studio</h1>
<br/><br/><br/>
<p>**Only for claps store tutorial video**</p>
</center>
   
      <center><br/><br/>
      <input id='in' type='text' onChange={(e)=>setData(e.target.value)} placeholder='file name'/><br/><br/><br/><br/>
  
        <video ref={video} id='video'></video>&nbsp;<iframe id='video' src={down}/>
<br/><br/><br/><br/><br/>
       <button id='btn' onClick={()=>{start()}}>start recording</button>&nbsp;&nbsp;
        <button id='btn' onClick={()=>{stop()}}>stop recording</button><br/><br/>
        <a id='btn' href={down} download={`${data}.webm`}>download</a>
</center>

<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      </div>
    );
}

export default App;


