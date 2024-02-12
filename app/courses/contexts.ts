import {createContext} from 'react';

interface courseObject {
    title: string,
    modules: object[]
}
const CourseContext = createContext({title: "", modules: []} as courseObject);

export default CourseContext;