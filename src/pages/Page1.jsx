import React from "react";
import Carousel from "../components/Carousel";
import Countdown from "../components/Countdown";
import Gallery from "../components/Gallery";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Itinerary from "../components/Itinerary";
import RSVP from "../components/RSVP";
import { useSearchParams } from "react-router-dom";
import { getFirestore } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
import { useEffect } from 'react'
import { app } from '../components/firbase'
import { useState } from "react";
import { motion } from "framer-motion";
import { Hearts } from 'react-loader-spinner'
import Whatsapp from "../components/Whatsapp";

function Page1() {
  const queryParameters = new URLSearchParams(window.location.search)
  const email = queryParameters.get("email")
  console.log(email)
  const db = getFirestore(app);

  const [rsvp, setrsvp] = useState(true)
  const [groom, setGroom] = useState('Caleb')
  const [bride, setBride] = useState('Amaya')
  const [date, setDate] = useState(null)
  const [addres, setAdress] = useState('This Address, Street 71,Amsterdam')
  const [topgallery, setTopgalley] = useState([])
  const [itinerary, setIntinerary] = useState([])
  const [spinner, setSpineer] = useState(true)

  useEffect(() => {

    const retrivedata = async () => {
      console.log("ifwnin")
      const docRef = doc(db, "Users", email);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setrsvp(docSnap.data().rsvp)
        setGroom(docSnap.data().groom)
        setBride(docSnap.data().bride)
        setDate(docSnap.data().date)
        setAdress(docSnap.data().address)
        let data = []
        data.push(docSnap.data().pics[0] || "./images/save the date images/Rectangle 65.png")
        data.push(docSnap.data().pics[1] || "./images/save the date images/Rectangle 66.png")
        data.push(docSnap.data().pics[2] || "./images/save the date images/Rectangle 67.png")
        data.push(docSnap.data().pics[3] || "./images/save the date images/Rectangle 67.png")
        data.push(docSnap.data().pics[4] || "./images/save the date images/Rectangle 67.png")
        data.push(docSnap.data().pics[5] || "./images/save the date images/Rectangle 67.png")
        data.push(docSnap.data().pics[6] || "./images/save the date images/Rectangle 67.png")
        setTopgalley(data)

        setIntinerary(docSnap.data()?.itineraryfields)



      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");

      }
    }
    retrivedata()
    setTimeout(function () { setSpineer(false) }, 4000);

  }, [])

  if (spinner) {
    return (
      <motion.div
        initial={{ opacity: 0, y: "-1000px" }}
        animate={{ opacity: 1, y: "0" }}
        onexit={{ opacity: 1, y: "100px" }}
        className="min-h-screen flex m-auto justify-center items-center">
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
      </motion.div>
    )
  }

  return (
    <>



      <motion.div
        className=""
        initial={{ opacity: 0, y: "-1000px" }}
        animate={{ opacity: 1, y: "0" }}
        onexit={{ opacity: 1, y: "100px" }}
        transition={{ duration: 0.5 }}
      >
        <Header />
       
        <HeroSection groom={groom} bride={bride} />

        <Carousel Gallery={topgallery} />
        <Countdown date={date} address={addres} />
        <Itinerary date={date} itinerary={itinerary} />
        {

          <Gallery Gallery={topgallery} />
        }
        {
          rsvp ?
            <RSVP /> : null
        }
      </motion.div>






    </>
  );
}

export default Page1;
