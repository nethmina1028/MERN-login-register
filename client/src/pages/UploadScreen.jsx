import React, { useState } from 'react';


import axios from 'axios';
function UploadScreen() {

    const [file, setFile] =  useState(null);

    const upload = async () => {
                 const formData = new FormData();
                 formData.append('file', file);

                 try{
                    await axios.post('/uploads/fileUpload', formData);

                 }catch(err){
                     console.log(err);
                 }
    }

  return (
    <div>
        <input type="file" onChange={(e) => setFile(e.target.files[0]) } />
        <button type='button' onClick={upload}>Upload</button>
    </div>
  )
}

export default UploadScreen