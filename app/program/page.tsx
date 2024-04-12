"use client";

import { useState, useEffect } from "react";
import NavMenu from "../ui/home/navbar";
import HeroSec from "../ui/program/heroSec";
import StatSec from "../ui/program/statSec";
import CurriculumSec from "../ui/program/curriSec";
import VideoSec from "../ui/program/videoSec";
import SpeakerSec from "../ui/program/SpeakerSec";
import FeatureSec from "../ui/program/featSec";
import PaymentSec from "../ui/program/paymentSec.js";
import Footer from "../ui/footer";
import axios from "axios";
import { apiLink } from "../api";

export default function Page() {
  // const [logged, setLogged] = useState(false);
  // useEffect(() => {
  //     if(localStorage.getItem("user") !== null) {
  //         setLogged(true);
  //     }
  // }, []);
  const [user, setUser] = useState({
    name: "",
    email: "",
    username: "",
    selectedCourses: [],
  });
  useEffect(() => {
    let str = localStorage.getItem("user");
    if (str != null && str.length > 0) {
      try {
        const getData = async () => {
          const response = await axios.get(apiLink + "/user/" + str);
          setUser(response.data.user);
        };
        getData();
      } catch {
        console.log("No user with this record exists");
      }
    }
  }, []);
  return (
    <div>
      <NavMenu login="Simran" />
      <HeroSec />
      <StatSec />
      <CurriculumSec user={user} />
      {/* <VideoSec /> */
      /* Will be shown after correct video provided */}
      <SpeakerSec />
      <FeatureSec />
      <PaymentSec user={user} />
      <Footer />
    </div>
  );
}
