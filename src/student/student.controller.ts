import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
    constructor(private studentservice: StudentService) {}

    @Get()
    getStudents(){
        return this.studentservice.getStudents();

    }
    @Get(':index')
    getSpecificStudent(@Param() params:{index}){
        return params;
    }
    @Post()
    createStudent(@Body() student){
        this.studentservice.createStudent(student);

    }

}
