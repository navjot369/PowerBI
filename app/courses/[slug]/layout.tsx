'use client';
import CourseContext from "../contexts";
import {useState, useEffect} from 'react';
import { apiLink } from "@/app/api";
import axios from 'axios';

export default function Layout({children, params} : {
    children : JSX.Element,
    params: {
        slug: string
    }
}) {
    const [course, setCourse] = useState({});
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(apiLink + '/course/' + params.slug);
                setCourse(response.data.course);
            }
            catch(error) {
                console.error("Error fetching data: " + error);
            }
        }
        fetchData();
    }, []);

    useEffect(() => {
        console.log(course);
    }, [course]);

    return(
        <CourseContext.Provider value={course}>
            {children}
        </CourseContext.Provider>);
}