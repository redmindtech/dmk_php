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
    //public age:number;
    public district:string;
    public location_id:number
    public designation:string;
    public party_designation:string;
    public approval_status:string;
    public age:number;
    public additional_qualification:string;
    public whatsapp_no:number;
    public address1:string;
    public applied_role:string;
    public party_comments:string;
    public mode:number;

    constructor(Id:number,pwd:string,email:string,firstname:string,lastname:string,educational_qualification:string,profession:string,date_of_birth:string,contact_no:number,father_name:string,district:string,location_id:number,designation:string,party_designation:string,approval_status:string,age:number,additional_qualification:string,whatsapp_no:number,address1:string,applied_role:string,party_comments:string,mode:number) {
    this.Id = Id;
    this.pwd = pwd;
    this.email = email;
    this.firstname=firstname;
    this.lastname=lastname;
    this.educational_qualification=educational_qualification;
    this.profession=profession;
    this.date_of_birth=date_of_birth;
    this.contact_no=contact_no;
    this.father_name=father_name;
    this.district=district;
    this.location_id=location_id;
    this.designation=designation;
    this.party_designation=party_designation;
    this.approval_status=approval_status;
    this.age=age;
    this.additional_qualification=additional_qualification;
    this.whatsapp_no=whatsapp_no;
    this.address1=address1;
    this.applied_role=applied_role;
    this.party_comments=party_comments;
    this.mode=mode;
    }
    }
