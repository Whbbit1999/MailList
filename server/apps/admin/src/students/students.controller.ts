import { Controller, Get } from '@nestjs/common';
import { Crud } from 'nestjs-mongoose-crud'
import { Student } from '@libs/db/models/student.module';
import { InjectModel } from 'nestjs-typegoose';
import { ApiTags } from '@nestjs/swagger';

@Crud({
    model: Student
})
@Controller('students')
@ApiTags('学生信息')
export class StudentsController {
    constructor(@InjectModel(Student) private readonly model ){}

    @Get('option')
    option(){
        return {
            title: '学生信息管理',
    column: [
      {prop: 'studentId', label: '学号', sortable: true, search: true, regex: true},
      {prop: 'studentName', label: '姓名', sortable: true, search: true, regex: true},
      {prop: 'studentClass', label: '学生班级'},
      {prop: 'studentAddress', label: '居住地址'},
      {prop: 'studentNumber', label: '联系电话'},
    ]
        }
    }
}
