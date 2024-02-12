import {createContext} from 'react';

interface courseObject {
    title: string,
    modules: object[]
}
const CourseContext = createContext({} as courseObject);

export default CourseContext;