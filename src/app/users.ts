export class Users {
    public Id: number;
   // public name: string;
    public pwd:string;
    public email:string;
    public firstname:string;
    public lastname:string;
    public educational_qualification:string;
    public profession:string;
    public date_of_birth:string;
    public contact_no:number;
    public father_name:string;
    //public parent_number:number;
    public district:string;
    public location_id:number

    constructor(Id:number,pwd:string,email:string,firstname:string,lastname:string,educational_qualification:string,profession:string,date_of_birth:string,contact_no:number,father_name:string,district:string,location_id:number) {
    this.Id = Id;
    //this.name = name;
    this.pwd = pwd;
    this.email = email;
    this.firstname=firstname;
    this.lastname=lastname;
    this.educational_qualification=educational_qualification;
    this.profession=profession;
    this.date_of_birth=date_of_birth;
    this.contact_no=contact_no;
    this.father_name=father_name;
    //this.parent_number=parent_number;
    this.district=district;
    this.location_id=location_id;
    }
    }
