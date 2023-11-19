import { useSelector } from "react-redux"
import { useEffect, useRef, useState } from "react"
import { getStorage, ref, uploadBytesResumable } from "firebase/storage"
import { app } from "../firebase.js"
 
function Profile() {
    const { currentUser } = useSelector((state) => state.user)
    const [file, setFile] = useState(null)
    console.log(file);
    const fileRef = useRef()
    const [filePerc, setFilePerc] = useState(0);
    console.log(filePerc);
    
    useEffect(() => {
        if(file){
            handleFileUpload(file);
        }
    },[file]);

    const handleFileUpload = async (file) => {
        const storage = getStorage(app);
        const fileName = new Date().getTime() + file.name;
        const storageRef = ref(storage, fileName);
        const upLoadTask = uploadBytesResumable(storageRef, file);
        

        upLoadTask.on(
            "state_changed",
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setFilePerc( Math.round(progress));
            },
        )
        
    }


    return (
        <div className="p-3 max-w-lg mx-auto" >
            <h1 className="text-4xl font-bold my-7 text-center">Profile</h1>
            <form className="flex flex-col gap-4" >
                <input 
                    onChange={(e) => setFile(e.target.files[0])}
                    type="file" 
                    ref={fileRef}  
                    hidden accept="image/*" />

                <img 
                    onClick={() => fileRef.current.click()}
                    src={currentUser.avatar} 
                    alt="avatar" 
                    className="w-32 h-32 rounded-full self-center cursor-pointer mt-4 object-cover" />
                
                <input 
                    type="text" 
                    placeholder="name" 
                    className="border p-3 rounded-lg " id="name"  />
                
                <input 
                    type="text" 
                    placeholder="email" 
                    className="border p-3 rounded-lg " id="email"  />
                
                <input 
                    type="text" 
                    placeholder="password" 
                    className="border p-3 rounded-lg " id="password"  />
                
                <button
                
                className="bg-slate-700 text-white p-3 rounded-lg hover:opacity-95 disabled:opacity-80 uppercase  "
                >update</button>
            </form>

            <div className="flex justify-between gap-4 mt-5" >
                <span className="text-red-700 cursor-pointer uppercase font-bold " >delete account</span>
                <span className="text-red-700 cursor-pointer uppercase font-bold " >Sign Out</span>
            </div>
        </div>
    )
}

export default Profile