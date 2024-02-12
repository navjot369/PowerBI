import {createContext} from 'react';

const CourseContext = createContext({
    module: Array,
    title: String,
});

export default CourseContext;