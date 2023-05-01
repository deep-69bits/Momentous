import { app } from '../components/firbase'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Checkbox from "react-custom-checkbox";
import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from "react-router-dom";
import { useEffect } from 'react';
import {
    getDownloadURL,
    getStorage,
    ref as storageRef,
    uploadBytesResumable,
} from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { Hearts } from 'react-loader-spinner'
import Whatsapp from '../components/Whatsapp';

const Form = () => {

    const [grom, setGroom] = useState('')
    const [bride, setbride] = useState('')
    const [eventdate, setEventDate] = useState('')
    const [eventadress, SetEventAdress] = useState('')
    const [needpics, setNeedPics] = useState(true)
    const [rsvp, setRsvp] = useState(true);
    const [gallery, setGalelry] = useState([])
    const [email, setEmail] = useState('')
    const history = useHistory()
    const [selectedImages, setSelectedImages] = useState([])
    const [itinerary, setItinerary] = useState(true)
    const [previewimages, setPreviewimages] = useState([])
    const auth = getAuth(app);
    const db = getFirestore(app);
    const [spinner,setSpineer]=useState(true)
    const onDrop = useCallback(acceptedFiles => {
        setSelectedImages(acceptedFiles)
        const slectedfilearray = Array.from(acceptedFiles)
        console.log(slectedfilearray)
        const imagearray = slectedfilearray.map((item) => {
            return URL.createObjectURL(item)
        })
        console.log("blah", imagearray)
        setPreviewimages(imagearray)

    }, [selectedImages, auth])

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setEmail(user.email)
                const getdata = async () => {
                    const docRef = doc(db, "Users", user.email);
                    const docSnap = await getDoc(docRef);
                    if (docSnap.exists()) {
                        // console.log("Document data:", docSnap.data());
                        setGroom(docSnap.data().groom)
                        setbride(docSnap.data().bride)
                        SetEventAdress(docSnap.data().address)
                        setRsvp(docSnap.data().rsvp)
                        console.log(docSnap.data().itineraryfields)
                        setFromfields(docSnap.data().itineraryfields || [])
                        // setSelectedImages(docSnap.data().pics)
                        setSpineer(false)
                    } else {
                        console.log("No such document!");
                        setSpineer(false)

                    }
                }
                getdata();

            }
            else {
                history.push('/login')
            }
        });
    }, [auth])
    console.log(selectedImages)
    const setdate = (e) => {
        setEventDate(e.target.value)
        console.log(eventdate)
    }
    const [load, setLoaad] = useState(false)
    const storage = getStorage(app);

    const [formfields, setFromfields] = useState([
        { time: '', title: '', description: '' },
    ])

    const handleFormchange = (event, index) => {
        console.log(index)
        console.log(event.target.name)
        let data = [...formfields]
        data[index][event.target.name] = event.target.value
        setFromfields(data)
    }

    const addfields = () => {
        let object = {
            time: '', title: '', description: ''
        }
        setFromfields([...formfields, object])
        setLoaad(load)
    }

    const removefield = (index) => {
        let data = [...formfields]
        data.splice(index, 1)
        setFromfields(data)
    }
    const submitdata = () => {
        if (needpics) {
            console.log("hello")

            selectedImages.map((item, index) => {
                if (item) {
                    const fileRef = storageRef(storage, `/files/${email + item.name + Math.random() * 10000}`);
                    const uploadTask = uploadBytesResumable(fileRef, item);
                    uploadTask.on(
                        "state_changed",
                        (snapshot) => {
                            const progress =
                                (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                            console.log("Upload is " + progress + "% done");
                            switch (snapshot.state) {
                                case "paused":
                                    console.log("Upload is paused");
                                    break;
                                case "running":
                                    console.log("Upload is running");
                                    break;
                            }
                        },
                        (error) => { },
                        async () => {
                            await getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                                let data = gallery
                                data.push(url)
                                setGalelry(data);
                                if (index + 1 === selectedImages.length) {
                                    setLoaad(true)
                                }
                            });
                        }
                    );
                }
            })
            const func = async () => {
                const docref = await setDoc(doc(db, "Users", email), {
                    groom: grom,
                    bride: bride,
                    date: eventdate,
                    gallery: needpics,
                    rsvp: rsvp,
                    address: eventadress,
                    pics: gallery,
                    itinerary: itinerary,
                    itineraryfields: formfields
                });
                console.log(docref)
            }
            if (load) {
                console.log("fuck")
                func()
                setLoaad(false)
                history.push(`/invite?email=${email}`)
            }
        }
        else {
            const func = async () => {
                const docref = await setDoc(doc(db, "Users", email), {
                    groom: grom,
                    bride: bride,
                    date: eventdate,
                    gallery: needpics,
                    rsvp: rsvp,
                    address: eventadress,
                    pics: gallery,
                    itinerary: itinerary,
                    itineraryfields: formfields

                });
                console.log(docref)
            }

            console.log("fuck")
            func()
            setLoaad(false)
            history.push(`/invite?email=${email}`)

        }

    }
    const showimages = () => {

    }
    return (
        <div>
           
      {
        spinner? <div className="min-h-screen flex m-auto justify-center items-center">
        <Hearts
          height="170"
          width="170"
          color="#f536ce"
          ariaLabel="hearts-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          className="translate-y-[-30px]"
        />
         </div> :<div>
         <Header />
         <Whatsapp/>

         <h1 className='text-md font-semibold my-10 text-center'>Personal Information</h1>
         <div className='lg:w-2/4 w-full my-10 m-auto lg:flex  block justify-between '>

             <div >
                 <label htmlFor="groom">Groom Name</label>
                 <input onChange={(e) => { setGroom(e.target.value) }} value={grom} className='border-[1px] my-1  shadow-lg  shadow-pink-200 border-pink-500 focus:outline-none focus:border-pink-700  block rounded-2xl px-3 py-2' type="text" name='groom' />
             </div>

             <div >
                 <label htmlFor="bride">Bride Name</label>
                 <input onChange={(e) => { setbride(e.target.value) }} value={bride} className='border-[1px] my-1  shadow-lg  shadow-pink-200 border-pink-500 focus:outline-none focus:border-pink-700  block rounded-2xl px-3 py-2' type="text" name='bride' />
             </div>

             <div>
                 <label htmlFor="date">Event Date</label>
                 <input type="date" onChange={setdate} name="date" className='border-[1px] w-[200px] my-1  shadow-lg  shadow-pink-200 border-pink-500 focus:outline-none focus:border-pink-700  block rounded-2xl px-3 py-2' />
             </div>
             </div>


         <div className='lg:w-2/4 w-full bg my-10 m-auto lg:flex block  justify-between '>
             <div className='w-full'>
                 <label htmlFor="date">Event Adress</label>
                 <textarea value={eventadress} onChange={(e) => { SetEventAdress(e.target.value) }} type="text" name="address" className='  shadow-lg  shadow-pink-200 border-[1px] h-20 w-full my-1 border-pink-500 focus:outline-none focus:border-pink-700  block rounded-2xl px-3 py-2' />
             </div>
         </div>

         <div className='lg:w-2/4 w-full bg my-10 m-auto lg:flex block  justify-between '>
             <label htmlFor="events">Add Pictures</label>
             <Checkbox
                 name="my-input"
                 checked={true}
                 onChange={(value, event) => {
                     let p = {
                         isTrue: value,
                     };
                     setNeedPics(!needpics)
                     console.log(event);
                 }}
                 borderColor="pink"
                 style={{ cursor: "pointer" }}
                 borderRadius={10}
                 className="text-pink-500"
                 labelStyle={{ marginLeft: 5, userSelect: "none" }}
                 label="Post some picture for Gallery..."
             />
         </div>
         {
             needpics ?
                 <div className='m-auto w-full  shadow-lg  shadow-pink-200 rounded-2xl lg:w-1/2 border-[1px] border-pink-500 py-10 px-10' {...getRootProps()}>
                     <input  onChange={showimages} {...getInputProps()} />
                     {
                         isDragActive ?
                             <p>Drop the files here ...</p> :
                             <p className='text-center'>Drag 'n' drop 7 images here, or click to select files</p>
                     }

                 </div> :
                 null
         }
         <div className='m-auto w-full lg:w-1/2 gap-x-3 grid grid-flow-row grid-cols-3 py-10 px-10 ' >
             {
                 needpics ?
                     previewimages.map((it) => {
                         return (
                             <img src={it} className="w-full my-5  h-40" alt="" />
                         )
                     })

                     : null
             }

         </div>
         <div className='lg:w-2/4 w-full bg my-10 m-auto lg:flex block  justify-between '>
             <label htmlFor="events">Itinerary</label>
             <Checkbox
                 name="my-input"
                 checked={true}
                 onChange={(value, event) => {
                     let p = {
                         isTrue: value,
                     };
                     setItinerary(!itinerary)
                     console.log(event);
                 }}
                 borderColor="pink"
                 style={{ cursor: "pointer" }}
                 borderRadius={10}
                 className="text-pink-500"
                 labelStyle={{ marginLeft: 5, userSelect: "none" }}
                 label=""
             />
         </div>

         {
             itinerary ?
                 <div className='lg:w-2/4 w-full bg my-10 m-auto '>
                     { formfields!=undefined &&
                         formfields.map((item, index) => {
                             return (
                                 <div key={index} className="my-8 rounded-md shadow-lg transition-all hover:scale-105  duration-500 cursor-pointer px-4 py-10 shadow-pink-200" >
                                     <button className=" py-2 mt-[-100px] hover:scale-110 duration-500 transition-all " onClick={() => { removefield(index) }}>
                                         <svg width="25px" height="25px " viewBox="0 0 32 32" version="1.1" >
                                             <g id="icomoon-ignore">
                                             </g>
                                             <path d="M6.576 6.576c-5.205 5.205-5.205 13.643 0 18.849s13.643 5.205 18.849-0c5.206-5.206 5.206-13.643 0-18.849s-13.643-5.205-18.849 0zM24.67 24.67c-4.781 4.781-12.56 4.781-17.341 0s-4.781-12.56 0-17.341c4.781-4.781 12.56-4.781 17.341 0s4.78 12.56-0 17.341z" fill="#000000">

                                             </path>
                                             <path d="M10.722 9.969l-0.754 0.754 5.278 5.278-5.253 5.253 0.754 0.754 5.253-5.253 5.253 5.253 0.754-0.754-5.253-5.253 5.278-5.278-0.754-0.754-5.278 5.278z" fill="#000000">

                                             </path>
                                         </svg>
                                     </button>
                                     <div className=' flex justify-between'>
                                         <input type="text" placeholder='time'
                                             name='time'
                                             onChange={event => handleFormchange(event, index)}
                                             value={item.time}
                                             className='w-full mr-3 border-[1px] my-1 border-pink-500 focus:outline-none focus:border-pink-700  block rounded-2xl px-3 py-2'
                                         />

                                         <input type="text" placeholder='title'
                                             name='title'
                                             onChange={event => handleFormchange(event, index)}
                                             value={item.title}
                                             className='border-[1px] w-full my-1 border-pink-500 focus:outline-none focus:border-pink-700  block rounded-2xl px-3 py-2'
                                         />


                                     </div>
                                     <textarea type="text" placeholder='description'
                                         name='description'
                                         onChange={event => handleFormchange(event, index)}
                                         value={item.description}
                                         className='border-[1px] w-full h-28 my-1 border-pink-500 focus:outline-none focus:border-pink-700  block rounded-2xl px-3 py-2'
                                     />
                                 </div>
                             );
                         })
                     }
                 </div>
                 :
                 <div></div>

         }
         {
             itinerary ?
                 <div className='flex items-center'>
                     <button className='w-1/2 mx-auto border-[1px] border-pink-500 text-center py-2 text-xl  font-bold' onClick={addfields}> + </button>
                 </div>
                 : <div></div>
         }


         <div className='lg:w-2/4 w-full bg my-10 m-auto lg:flex block  justify-between '>
             <label htmlFor="events">RSVP</label>
             <Checkbox
                 name="my-input"
                 checked={true}
                 onChange={(value, event) => {
                     let p = {
                         isTrue: value,
                     };
                     setRsvp(!rsvp)
                     console.log(event);
                 }}
                 borderColor="pink"
                 style={{ cursor: "pointer" }}
                 borderRadius={10}
                 className="text-pink-500"
                 labelStyle={{ marginLeft: 5, userSelect: "none" }}
                 label=""
             />
         </div>
         <div className='flex items-center text-center  '>
             <button onClick={submitdata} className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs  uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600  focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700  bg-pink-500 font-bold text-white mx-auto ">Submit</button>
         </div>

         <div className='bg-pink-500 mt-10' >
             <Footer />
         </div>

         
         </div>
     }
           

     </div>
    )
}

export default Form