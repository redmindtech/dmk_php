import { Component } from '@angular/core';
import { first, Subscription } from 'rxjs';
import { Product } from 'src/app/demo/api/product';
import { ProductService } from 'src/app/demo/service/product.service';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { ApiService } from 'src/app/api.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';

@Component({
    templateUrl: './formlayoutdemo.component.html'
})
export class FormLayoutDemoComponent {

    selectedState: any = null;
    cities: any[] = [
        { label: 'Ariyalur', value: { id: 1, name: 'Ariyalur', code: 'AL' } },
        { label: 'Chengalpattu', value: { id: 2, name: 'Chengalpattu', code: 'CP' } },
        { label: 'Chennai', value: { id: 3, name: 'Chennai', code: 'CN' } },
        { label: 'Coimbatore', value: { id: 4, name: 'Coimbatore', code: 'CB' } },
        { label: 'Cuddalore', value: { id: 5, name: 'Cuddalore', code: 'CD' } },
        { label: 'Dharmapuri', value: { id: 6, name: 'Dharmapuri', code: 'DP' } },
        { label: 'Dindigul', value: { id: 7, name: 'Dindigul', code: 'DG' } },
        { label: 'Erode', value: { id: 8, name: 'Erode', code: 'ED' } },
        { label: 'Kallakurichi', value: { id: 9, name: 'Kallakurichi', code: 'KU' } },
        { label: 'Kancheepuram', value: { id: 10, name: 'Kancheepuram', code: 'KC' } },
        { label: 'Kanyakumari', value: { id: 11, name: 'Kanyakumari', code: 'KK' } },
        { label: 'Karur', value: { id: 12, name: 'Karur', code: 'KR' } },
        { label: 'Krishnagiri', value: { id: 13, name: 'Krishnagiri', code: 'KG' } },
        { label: 'Madurai', value: { id: 14, name: 'Madurai', code: 'MD' } },
        { label: 'Mayiladuthurai', value: { id: 15, name: 'Mayiladuthurai', code: 'MT' } },
        { label: 'Nagapattinam', value: { id: 16, name: 'Nagapattinam', code: 'NP' } },
        { label: 'Namakkal', value: { id: 17, name: 'Namakkal', code: 'NK' } },
        { label: 'Perambalur', value: { id: 18, name: 'Perambalur', code: 'PB' } },
        { label: 'Pudukottai', value: { id: 19, name: 'Pudukottai', code: 'PK' } },
        { label: 'Ramanathapuram', value: { id: 18, name: 'Ramanathapuram', code: 'RT' } },
        { label: 'Ranipet', value: { id: 20, name: 'Ranipet', code: 'RP' } },
        { label: 'Salem', value: { id: 21, name: 'Salem', code: 'SL' } },
        { label: 'Sivagangai', value: { id: 22, name: 'Sivagangai', code: 'SG' } },
        { label: 'Tenkasi', value: { id: 23, name: 'Tenkasi', code: 'TS' } },
        { label: 'Thanjavur', value: { id: 24, name: 'Thanjavur', code: 'TJ' } },
        { label: 'Theni', value: { id: 26, name: 'Theni', code: 'TE' } },
        { label: 'Thiruvallur', value: { id: 27, name: 'Thiruvallur', code: 'TL' } },
        { label: 'Thiruvarur', value: { id: 28, name: 'Thiruvarur', code: 'TI' } },
        { label: 'Thoothukudi', value: { id: 29, name: 'Thoothukudi', code: 'TK' } },
        { label: 'Thiruchirappalli', value: { id: 30, name: 'Thiruchirappalli', code: 'TC' } },
        { label: 'Thirunelveli', value: { id: 31, name: 'Thirunelveli', code: 'TN' } },
        { label: 'Thirupathur', value: { id: 32, name: 'Thirupathur', code: 'TP' } },
        { label: 'Thiruppur', value: { id: 33, name: 'Thiruppu', code: 'TR' } },
        { label: 'Thiruvainnamala', value: { id: 34, name: 'Thiruvainnamala', code: 'TV' } },
        { label: 'Nilgiris', value: { id: 35, name: 'Nilgiris', code: 'NG' } },
        { label: 'Vellore', value: { id: 36, name: 'Vellore', code: 'VL' } },
        { label: 'Viluppuram', value: { id: 37, name: 'Viluppuram', code: 'VP' } },
        { label: 'Virudhunagar', value: { id: 38, name: 'Virudhunagar', code: 'VD' } }



    ];
    selectedDrop: any = { value: '' };
    districtadmin: boolean = false;
    valCheck: string[] = [];
    createdistrictadmin: boolean = false;
    selfregistration: boolean = false;
    display0: boolean = false;
    display1: boolean = false;
    display2: boolean = false;
    home: boolean = false;
    dashboard: boolean = true;
    visibleSidebar4: boolean = false;
    visibleSidebar5: boolean = false;
    stateadmin: boolean = false;


    states: any[] = [
        { name: 'Arizona', code: 'Arizona' },
        { name: 'California', value: 'California' },
        { name: 'Florida', code: 'Florida' },
        { name: 'Ohio', code: 'Ohio' },
        { name: 'Washington', code: 'Washington' }
    ];

    dropdownItems = [
        { name: 'Option 1', code: 'Option 1' },
        { name: 'Option 2', code: 'Option 2' },
        { name: 'Option 3', code: 'Option 3' }
    ];

    cities1: any[] = [];

    cities2: any[] = [];

    city1: any = null;

    city2: any = null;
    valRadio: string = '';

    customers2: any = [];
    customers3: any = [];
    customers4: any = [];
    officebearerapp: boolean;
    dataService: any;
    rq: any=[];
    // obupdateform: FormGroup<{ email2: FormControl<string>; firstname2: FormControl<string>; lastname2: FormControl<string>; age: FormControl<string>; father_name: FormControl<string>; educational_qualification: FormControl<string>; date_of_birth: FormControl<string>; additional_qualification: FormControl<string>; contact_no: FormControl<string>; whatsapp_no: FormControl<string>; profession: FormControl<string>; address1: FormControl<string>; applied_role: FormControl<string>; party_comments: FormControl<string>; location_id: FormControl<string>; mode: FormControl<string>; }>;
    toggle(a: any) {
        this.customers2 = [];
        for (const prop in this.ApiService.tabledataDA) {
            this.customers2.push(this.ApiService.tabledataDA[prop])
        }
        this.customers2.pop();
        console.log(this.customers2);
        this.createdistrictadmin = false;
        this.selfregistration = false;
        this.home = false;
        this.dashboard = false;
        this.stateadmin = false;
        this.districtadmin = false;
        this.officebearerapp = false;
        this.meeting = false;
        return this.districtadmin = true;
    }
    toggle1(a: any) {
        this.createdistrictadmin = !this.createdistrictadmin;
        this.districtadmin = false;
        this.selfregistration = false;
        this.home = false;
        this.officebearerapp = false;
        this.dashboard = false;
    }
    toggle2(a: any) {
        this.selfregistration = !this.selfregistration;
        this.districtadmin = false;
        this.createdistrictadmin = false;
        this.home = false;
        this.officebearerapp = false;
        this.dashboard = false;
    }
    toggle3(a: any) {
        this.customers3 = [];
        for (const prop in this.ApiService.tabledataOB) {
            this.customers3.push(this.ApiService.tabledataOB[prop])
        }
        this.customers3.pop();
        console.log(this.customers3);
        this.districtadmin = false;
        this.createdistrictadmin = false;
        this.selfregistration = false;
        this.dashboard = false;
        this.districtadmin = false;
        this.officebearerapp = false;
        return this.home = true;
    }
    toggle4(stateadmin: any) {
        this.customers1 = [];
        for (const prop in this.ApiService.tabledata) {
            this.customers1.push(this.ApiService.tabledata[prop])
        }
        this.customers1.pop();
        //console.log(this.customers1);
        this.districtadmin = false;
        this.createdistrictadmin = false;
        this.selfregistration = false;
        this.dashboard = false;
        this.districtadmin = false;
        this.meeting = false;
        this.home = false;
        this.officebearerapp = false;
        return this.stateadmin = true;
    }
    toggle5(a: any) {
        this.customers4 = [];
        for (const prop in this.ApiService.tabledataOBapprove) {
            this.customers4.push(this.ApiService.tabledataOBapprove[prop])
        }
        this.customers4.pop();

        this.stateadmin = false;
        this.districtadmin = false;
        this.createdistrictadmin = false;
        this.selfregistration = false;
        this.dashboard = false;
        this.districtadmin = false;
        this.meeting = false;
        this.home = false;
        return this.officebearerapp = true;
    }


    toggledashboard(a: any) {
        this.home = false;
        return this.dashboard = true;
    }
    meeting: boolean = false;
    togglemeeting(meeting: boolean) {
        //console.log(this.meeting)
        this.districtadmin = false;
        this.createdistrictadmin = false;
        this.selfregistration = false;
        this.dashboard = false;
        this.stateadmin = false;
        this.home = false;
        this.officebearerapp = false;
        return this.meeting = true;


    }
    customers: any = [{ name: 'Salem', country: 'Ramesh', company: 'Secretary', status: 'District Secretary', date: '01/01/2022', comment: 'Reason....' },
    { name: 'Coimbatore', country: 'Suresh', company: 'Secretary', status: 'District Secretary', date: '20/01/2022', comment: 'Reason....' },
    { name: 'Trichy', country: 'Vignesh', company: 'District Secretary', status: 'Secretary', date: '31/01/2022', comment: 'Reason....' },
    { name: 'Perambalur', country: 'Boopathi', company: 'Secretary', status: 'District Secretary', date: '14/04/2022', comment: 'Reason....' },
    { name: 'Chennai', country: 'Mohan', company: 'Secretary', status: 'District Secretary', date: '30/01/2022', comment: 'Reason....' },
    { name: 'Namakkal', country: 'Raju', company: 'Secretary', status: 'District Secretary', date: '14/01/2022', comment: 'Reason....' },
    { name: 'Ariyalur', country: 'kalaiyarasan', company: 'Secretary', status: 'District Secretary', date: '09/01/2022', comment: 'Reason....' }
    ];

    // customers1:any=[{name:'Ramesh', country:'District Secretary',company:'Salem',status:'Active',date:'ramesh34@gmail.com'},
    // {name:'Suresh', country:'District Secretary',company:'Coimbatore',status:'No-Active',date:'suresh2.KgK@gmail.com'},
    // {name:'Rajesh', country:'District Secretary',company:'Trichy',status:'Active',date:'rajesh.0508@gmail.com'},
    // {name:'Boopathi', country:'Secretary',company:'Perambalur',status:'Active',date:'boopathi839@gmail.com'},
    // {name:'kalaiyarasan', country:'District Secretary',company:'Ariyalur',status:'Active',date:'kalaiyarasan5734@gmail.com'},
    // {name:'Raju', country:'Secretary',company:'Namakkal',status:'No-Active',date:'raja.kg@gmail.com'},
    // {name:'Malleswaran', country:'District Secretary',company:'Perambalur',status:'No-Active',date:'chinni.malleswaran@gmail.com'}
    // ];
    customers1: any = [];
    //customers1=this.ApiService.tabledata[0].name;


    items = [
        { label: 'Add New', icon: 'pi pi-fw pi-plus' },
        { label: 'Remove', icon: 'pi pi-fw pi-minus' }
    ];
    chartData: any;
    chartOptions: any;
    subscription!: Subscription;
    products!: Product[];
    //stateadminform !:FormGroup;

    constructor(private productService: ProductService, public layoutService: LayoutService,
        private ApiService: ApiService, public router: Router, private messageService: MessageService,
        private fb: FormBuilder) {
        this.subscription = this.layoutService.configUpdate$.subscribe(() => {
            this.initChart();
        });
        this.stateadminupdateform = this.fb.group({ //angForm
            said: [''],
            email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
            firstname: ['', [Validators.required, Validators.pattern('[A-Za-z]{1,32}')]],
            lastname: ['', [Validators.required, Validators.pattern('[A-Za-z]{1,32}')]],
            //district:['',Validators.required],
            designation: [''],
            party_designation: [''],
            approval_status: [''],
            location_id: ['1'],
            mode: ['0']
        });
        this.districtadminupdateform = this.fb.group({ //angForm
            // this.constituencies = this.dataService.constituencies,
            daid: [''],
            email1: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
            firstname1: ['', [Validators.required, Validators.pattern('[A-Za-z]{1,32}')]],
            lastname1: ['', [Validators.required, Validators.pattern('[A-Za-z]{1,32}')]],
            district1: ['', Validators.required],
            designation1: [''],
            party_designation1: [''],
            approval_status1: [''],
            location_id1: ['1'],
            mode1: ['0']

        });

        this.obupdateform = this.fb.group({ //angForm
            obid: [''],
            email2: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
            firstname2: ['', [Validators.required, Validators.pattern('[A-Za-z]{1,32}')]],
            lastname2: ['', [Validators.required, Validators.pattern('[A-Za-z]{1,32}')]],
            age2: ['', Validators.required],
            father_name2: ['', [Validators.required, Validators.pattern('[A-Za-z]{1,32}')]],
            educational_qualification2: ['', Validators.required],
            date_of_birth2: [''],
            additional_qualification2: [''],
            contact_no2: ['', [Validators.required, Validators.pattern('[789][0-9]{9}')]],
            whatsapp_no2: ['', [Validators.required, Validators.pattern('[789][0-9]{9}')]],
            profession2: [''],
            address12: [''],
            applied_role2: ['', Validators.required],
            party_comments2: [''],
            location_id2: ['1', Validators.required],
            mode2: ['2', Validators.required]
        });

    }
    // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
    ngOnInit() {
        this.initChart();
        this.gettabledata();
        this.productService.getProductsSmall().then(data => this.products = data);

        this.items = [
            { label: 'Add New', icon: 'pi pi-fw pi-plus' },
            { label: 'Remove', icon: 'pi pi-fw pi-minus' }
        ];
        this.gettabledata();

    }

    //---------datatable-------
    gettabledata() {
        this.ApiService.viewtableSA();
        this.ApiService.viewtableDA();
        this.ApiService.viewtableOB();
        this.ApiService.viewtableOBapprove();
    }
    initChart() {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

        this.chartData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    backgroundColor: documentStyle.getPropertyValue('--bluegray-700'),
                    borderColor: documentStyle.getPropertyValue('--bluegray-700'),
                    tension: .4
                },
                {
                    label: 'Second Dataset',
                    data: [28, 48, 40, 19, 86, 27, 90],
                    fill: false,
                    backgroundColor: documentStyle.getPropertyValue('--green-600'),
                    borderColor: documentStyle.getPropertyValue('--green-600'),
                    tension: .4
                }
            ]
        };

        this.chartOptions = {
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                }
            }
        };

    }



    sa_name: string;
    sa_email: string;
    sa_designation: string;
    sa_party_designation:string
    sa_district: string;
    sa_approval_status:string;
    showstateadminDialog(customer: any, email: any, sa_designation: any,  sa_approval_status:any, sa_party_designation:any) {
        console.log("sa");
        console.log(customer);
        this.sa_name = customer;
        this.sa_email = email;
        this.display0 = true;
        this.sa_designation = sa_designation;
        this.sa_party_designation=sa_party_designation;
        this.sa_approval_status=sa_approval_status;

    }

    da_name: string;
    da_email: string;
    da_designation: string;
    da_district: string;
    da_party_designation:string;
    da_approval_status:string;
    showdistadminDialog(customer: any, email: any, da_designation: any, da_district: any,party_designation:any, da_approval_status:any) {
        console.log(customer);
        this.da_name = customer;
        this.da_email = email;
        this.display1 = true;
        this.da_designation = da_designation;
        this.da_district = da_district;
         this.da_party_designation=party_designation;
         this.da_approval_status=da_approval_status;


    }

    ob_name: string;
    ob_email: string;
    ob_designation: string;
    ob_district: string;
    ob_age:string;
    ob_date_of_birth:string;
    ob_father_name:string;
    ob_educational_qualification:string;
    ob_additional_qualification:string;
    ob_contact_no:string;
    ob_whatsapp_no:string;
    ob_profession:string;
    ob_address1:string;
    ob_applied_role:string;
    ob_party_comments:string;

    showofficebearerDialog(customer: any, email: any, ob_designation: any, ob_district: any, ob_age:any,ob_date_of_birth:any,ob_father_name:any,
        ob_educational_qualification:any,ob_additional_qualification:any, ob_contact_no:any,ob_whatsapp_no:any,ob_profession:any,
       ob_address1:any,ob_applied_role:any,ob_party_comments:any) {
        console.log(customer);
        this.ob_name = customer;
        this.ob_email = email;
        this.display2 = true;
        this.ob_designation = ob_designation;
        this.ob_district = ob_district;
       this.ob_age=ob_age;
       this.ob_date_of_birth=ob_date_of_birth;
       this.ob_father_name =ob_father_name;
      this.ob_educational_qualification= ob_educational_qualification;
      this.ob_additional_qualification=ob_additional_qualification
      this.ob_contact_no=ob_contact_no;
      this.ob_whatsapp_no=ob_whatsapp_no;
      this.ob_profession=ob_profession;
      this.ob_address1=ob_address1;
     this.ob_applied_role=ob_applied_role;
     this.ob_party_comments=ob_party_comments;
    }

    approve_role_change(user_id : any,new_role : any ,status:any)
    {
        console.log(new_role);
        this.ApiService.approve_role(user_id,new_role,status)
            .pipe()
            .subscribe(
            data => {

                this.router.navigate(['uikit/formlayout']);
                if(status == 'approve'){
                alert("Approved !")}
                else{
                    alert("Rejected!")
                }
            },

            error => {
                console.log(error);
            });
    }
    delete_sa(user_id: any) {

         if(confirm("Are you sure to delete ")){
        console.log(user_id)
        this.ApiService.delete_admin(user_id)
            .pipe()
            .subscribe(
                data => {
                    alert("State admin detail was successfully Deleted !")
                    window.location.reload()
                },

                error => {
                    console.log(error);
                });
            }
           

    }


    delete_da(user_id: any) {
        console.log(user_id)
        if(confirm("Are you sure to delete ")){
        this.ApiService.delete_admin(user_id)
            .pipe()
            .subscribe(
                data => {

                    alert("District admin detail has been deleted !")
                },

                error => {
                    console.log(error);
                });
            }

    }


    delete_ob(user_id: any) {
        if(confirm("Are you sure to delete ")){
        console.log(user_id)
        this.ApiService.delete_admin(user_id)
            .pipe()
            .subscribe(
                data => {

                    this.router.navigate(['uikit/formlayout']);
                    alert("Office Bearer detail has been deleted !")
                },

                error => {
                    console.log(error);
                });
            }
    }
    public request_OB(user_id:any,name:any,applied_role,email){
        //console.log(name,user_id,designation,email);
        this.router.navigate(['uikit/misc']);
        let object = {id:user_id,name:name ,applied_role:applied_role,email:email};
        this.rq.push(object);
        this.ApiService.request_admin(this.rq)
       
    
      }
    


    //     SAname:any;
    //     SAlastname:any;
    //     SAdesig:any;
    //     SAparty_desig:any;
    //     SAmail:any;
    //     SAstatus:any;
    //     editbuttonviewSA(a:any){
    //        let fullname=a.name.split(" ");
    //     //    console.log(fullname[0]);
    //     //    console.log(fullname[1]);

    //        this.SAname=fullname[0];
    //        this.SAlastname=fullname[1];
    //        this.SAdesig=a.designation;
    //        this.SAparty_desig=a.party_designation;
    //        this.SAmail=a.email;
    //        this.SAstatus=a.approval_status;
    //     }

    //     stateadminupdateform !:FormGroup;
    //     postdata(angForm1 : any) //angForm1
    //      {  console.log(angForm1.value);
    //         this.ApiService.updateSA('0','sasa',this.SAlastname,this.SAdesig,this.SAparty_desig,this.SAmail,this.SAstatus)
    //         .pipe(first())
    //         .subscribe(
    //         data => {
    //             alert("State admin detail was updated!");
    //         //this.router.navigate(['']);
    //         angForm1.reset();
    //         },

    //         error => {
    //             console.log(error);
    //         });
    //         if(this.stateadminupdateform.valid==true && this.email!=null && this.firstname!=null && this.lastname!=null)
    //     {

    //     }
    //     else{
    //         alert("Please enter the valid details");
    //     }
    //   }

    SAid: any;
    SAname: any;
    SAlastname: any;
    SAdesig: any;
    SAparty_desig: any;
    SAmail: any;
    SAstatus: any;

    editbuttonviewSA(a: any) {
        let fullname = a.name.split(" ");
        //    console.log(fullname[0]);
        //    console.log(fullname[1]);
        console.log(a.id);
        this.SAid = a.id;
        console.log(this.SAid);
        this.SAname = fullname[0];
        this.SAlastname = fullname[1];
        this.SAdesig = a.designation;
        this.SAparty_desig = a.party_designation;
        this.SAmail = a.email;
        this.SAstatus = a.approval_status;
    }

    stateadminupdateform !: FormGroup;
    postdata(angForm1: any) //angForm1
    {

        //  console.log(angForm1.value);
        //  console.log(angForm1.get('firstname').value);
        console.log(angForm1.get('said').value);
        console.log(angForm1)
        this.ApiService.updateSA('0', this.SAid, angForm1.get('firstname').value, angForm1.get('lastname').value,
            angForm1.get('designation').value,
            angForm1.get('party_designation').value,
            angForm1.get('email').value,
            angForm1.get('approval_status').value)
            .pipe(first())
            .subscribe(
                data => {
                    alert("State admin detail was updated!");
                },

                error => {
                    console.log(error);
                });
        //     if(this.stateadminupdateform.valid==true && this.email!=null && this.firstname!=null && this.lastname!=null)
        // {

        // }
        // else{
        //     alert("Please enter the valid details");
        // }
    }
    get email() { return this.stateadminupdateform.get('email'); }
    get firstname() { return this.stateadminupdateform.get('firstname'); }
    get lastname() { return this.stateadminupdateform.get('lastname'); }
    //get district() { return this.stateadminform.get('district'); }
    get designation() { return this.stateadminupdateform.get('designation'); }
    get party_designation() { return this.stateadminupdateform.get('party_designation'); }
    get approval_status() { return this.stateadminupdateform.get('approval_status'); }
    get location_id() { return this.stateadminupdateform.get('location_id'); }
    get mode() { return this.stateadminupdateform.get('mode'); }

    DAid: any;
    DAname: any;
    DAlastname: any;
    DAdesig: any;
    DAparty_desig: any;
    DAmail: any;
    DAdistrict: any;
    DAstatus: any;
    editbuttonviewDA(a: any) {
        let fullname = a.name.split(" ");
        //    console.log(fullname[0]);
        //    console.log(fullname[1]);
        console.log(a.id);
        this.DAid = a.id;
        console.log(this.SAid);
        this.DAname = fullname[0];
        this.DAlastname = fullname[1];
        this.DAdesig = a.designation;
        this.DAdistrict = a.district;
        this.DAparty_desig = a.party_designation;
        this.DAmail = a.email;
        this.DAstatus = a.approval_status;
    }
    districtadminupdateform !: FormGroup;
    postdata1(angForm2: any) //angForm1
    {

        //  console.log(angForm1.value);
        //  console.log(angForm1.get('firstname').value);
        console.log(angForm2.get('daid').value);
        console.log(angForm2)
        this.ApiService.updateDA('1', this.DAid, angForm2.get('firstname1').value, angForm2.get('lastname1').value,
            angForm2.get('designation1').value,
            angForm2.get('party_designation1').value,
            angForm2.get('district1').value,
            angForm2.get('email1').value,
            angForm2.get('approval_status1').value)
            .pipe(first())
            .subscribe(
                data => {
                    alert("district admin detail was updated!");
                },

                error => {
                    console.log(error);
                });



    }
    get email1() { return this.districtadminupdateform.get('email1'); }
    get firstname1() { return this.districtadminupdateform.get('firstname1'); }
    get lastname1() { return this.districtadminupdateform.get('lastname1'); }
    get district1() { return this.districtadminupdateform.get('district1'); }
    get designation1() { return this.districtadminupdateform.get('designation1'); }
    get party_designation1() { return this.districtadminupdateform.get('party_designation1'); }
    get approval_status1() { return this.districtadminupdateform.get('approval_status1'); }
    get location_id1() { return this.districtadminupdateform.get('location_id1'); }
    get mode1() { return this.districtadminupdateform.get('mode1'); }

    OBid:any;
    OBemail:any; 
    OBfirstname:any;
    OBlastname:any;
    OBage:any;
    OBfather_name:any;
   OBeducational_qualification:any; 
    OBdate_of_birth:any; 
   OBadditional_qualification:any; 
    OBcontact_no:any;
    OBwhatsapp_no:any; 
    OBprofession: any;
   OBaddress1:any;
    OBapplied_role:any; 
    OBparty_comments:any; 
    OBlocation_id: any;
    OBmode: any;
    editbuttonviewOB(a: any) {
        let fullname = a.name.split(" ");
       
        // console.log(a.id);
        this.OBid = a.id;
        // console.log(this.SAid);
       this.OBfirstname =fullname[0];    
      this.OBlastname=fullname[1];
      this.OBemail=a.email; 
      this. OBage=a.age;
      this.OBfather_name=a.father_name;
      this.OBeducational_qualification=a.educational_qualification;
      this.OBadditional_qualification=a.additional_qualification; 
      this. OBdate_of_birth=a.date_of_birth; 
     
      this. OBcontact_no=a.contact_no;
      this. OBwhatsapp_no=a.whatsapp_no; 
      this. OBprofession=a.profession;
      this.OBaddress1=a.address1;
      this. OBapplied_role=a.applied_role; 
      this. OBparty_comments=a.party_comments; 
      this.OBlocation_id= a.location_id;
      this.OBmode=a.mode;
      
     
    }
    obupdateform !: FormGroup;
    postdata3(angForm3: any) //angForm1
    {

        //  console.log(angForm1.value);
        //  console.log(angForm1.get('firstname').value);
        console.log(angForm3.get('obid').value);
        console.log(angForm3)
        this.ApiService.updateOB('2', 
        this.OBid,
         angForm3.get('firstname2').value, 
         angForm3.get('lastname2').value,
        angForm3.get('email2').value,
            angForm3.get('age2').value,
            angForm3.get('father_name2').value,
            angForm3.get('educational_qualification2').value,
            angForm3.get('additional_qualification2').value,
            angForm3.get('date_of_birth2').value,
            angForm3.get('contact_no2').value,
            angForm3.get('whatsapp_no2').value,
            angForm3.get('profession2').value,
            angForm3.get('address12').value,        
            angForm3.get('party_comments2').value,
            angForm3.get('applied_role2').value,           
            angForm3.get('location_id2').value)
                 
          



            .pipe(first())
            .subscribe(
                data => {
                    alert("Office b admin detail was updated!");
                },

                error => {
                    console.log(error);
                });



    }
    get email2() { return this.obupdateform.get('email2'); }
    get firstname2() { return this.obupdateform.get('firstname2'); }
    get lastname2() { return this.obupdateform.get('lastname2'); }
    get age2() { return this.obupdateform.get('age2'); }
    get father_name2() { return this.obupdateform.get('father_name2'); }
    get educational_qualification2() { return this.obupdateform.get('educational_qualification2'); }
    get additional_qualification2() { return this.obupdateform.get('additional_qualification2'); }
    get date_of_birth2() { return this.obupdateform.get('date_of_birth2'); }
    get contact_no2() { return this.obupdateform.get('contact_no2'); }

    get whatsapp_no2() { return this.obupdateform.get('whatsapp_no2'); }
    get profession2() { return this.obupdateform.get('profession2'); }
    get address12() { return this.obupdateform.get('address12'); }
    get applied_role2() { return this.obupdateform.get('applied_role2'); }
    get party_comments2() { return this.obupdateform.get('party_comments2'); }
    get location_id2() { return this.obupdateform.get('location_id2'); }
    get mode2() { return this.obupdateform.get('mode2'); }






}
