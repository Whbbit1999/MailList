import { prop, modelOptions } from '@typegoose/typegoose'
import { ApiProperty } from '@nestjs/swagger'

@modelOptions({
    schemaOptions: {
        timestamps: true,
    }
})
export class Student { 

    @ApiProperty({description: '学号', example: '2017220188'})
    @prop()
    studentId: string

    @ApiProperty({description: '姓名', example: '史蒂夫'})
    @prop()
    studentName: string

    @ApiProperty({description: '班级', example: '软件17-1班'})
    @prop()
    studentClass: string

    @ApiProperty({description: '家庭住址', example: '天津市大港区天津工程职业技术学院'})
    @prop()
    studentAddress: string

    @ApiProperty({description: '联系电话', example: '18233333333'})
    @prop()
    studentNumber: string
    }