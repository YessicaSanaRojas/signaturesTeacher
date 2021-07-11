import { SignatureStudent } from './signature-student';
import { Course } from '../Classes/course';

export class Signature {

    id : number;
    name : string;
    listStudentSignat : SignatureStudent[];
    course : Course;
}
