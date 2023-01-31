import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/demo/api/product';
import { ProductService } from 'src/app/demo/service/product.service';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { ApiService } from 'src/app/api.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: './formlayoutdemo.component.html'
})
export class FormLayoutDemoComponent {

    selectedState: any = null;
    cities:any[] = [
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
    selectedDrop:any = { value: '' };
    districtadmin:boolean=false;
    valCheck: string[] = [];
    createdistrictadmin:boolean=false;
    selfregistration:boolean=false;
    display0: boolean = false;
    display1: boolean = false;
    display2: boolean = false;
    home:boolean=false;
    dashboard:boolean=true;
    visibleSidebar4: boolean = false;
    visibleSidebar5: boolean = false;
    stateadmin:boolean=false;


    states: any[] = [
        {name: 'Arizona', code: 'Arizona'},
        {name: 'California', value: 'California'},
        {name: 'Florida', code: 'Florida'},
        {name: 'Ohio', code: 'Ohio'},
        {name: 'Washington', code: 'Washington'}
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

    customers2: any=[];
    customers3: any=[];
    toggle(a:any){
        for(const prop in this.ApiService.tabledataDA) {
            this.customers2.push(this.ApiService.tabledataDA[prop])
          }
        console.log(this.customers2);
        this.createdistrictadmin=false;
        this.selfregistration=false;
        this.home=false;
        this.dashboard=false;
        this.stateadmin=false;
        return this.districtadmin = true;
       }
    toggle1(a:any){
        this.createdistrictadmin= !this.createdistrictadmin;
        this.districtadmin=false;
        this.selfregistration=false;
        this.home=false;
        this.dashboard=false;
       }
    toggle2(a:any){
        this.selfregistration = !this.selfregistration;
        this.districtadmin=false;
        this.createdistrictadmin=false;
        this.home=false;
        this.dashboard=false;
       }
       toggle3(a:any){
        this.customers1=[];
        for(const prop in this.ApiService.tabledataOB) {
            this.customers3.push(this.ApiService.tabledataOB[prop])
          }
          this.customers3.pop();
        console.log(this.customers3);
        this.districtadmin=false;
        this.createdistrictadmin=false;
        this.selfregistration=false;
        this.dashboard=false;
        return this.home =true;
    }
    toggle4(stateadmin:any){
        for(const prop in this.ApiService.tabledata) {
            this.customers1.push(this.ApiService.tabledata[prop])
          }
        //console.log(this.customers1);
        this.districtadmin=false;
        this.createdistrictadmin=false;
        this.selfregistration=false;
        this.dashboard=false;
        return this.stateadmin =true;
    }


    toggledashboard(a:any){
        this.home=false;
        return this.dashboard=true;
    }
    meeting:boolean=false;
    togglemeeting(meeting:boolean){
        //console.log(this.meeting)
        this.districtadmin=false;
        this.createdistrictadmin=false;
        this.selfregistration=false;
        this.dashboard=false;
        this.stateadmin =false;
        return this.meeting= true;

    }
    customers:any=[{name:'Salem', country:'Ramesh',company:'Secretary',status:'District Secretary',date:'01/01/2022',comment:'Reason....'},
    {name:'Coimbatore', country:'Suresh',company:'Secretary',status:'District Secretary',date:'20/01/2022',comment:'Reason....'},
    {name:'Trichy', country:'Vignesh',company:'District Secretary',status:'Secretary',date:'31/01/2022',comment:'Reason....'},
    {name:'Perambalur', country:'Boopathi',company:'Secretary',status:'District Secretary',date:'14/04/2022',comment:'Reason....'},
    {name:'Chennai', country:'Mohan',company:'Secretary',status:'District Secretary',date:'30/01/2022',comment:'Reason....'},
    {name:'Namakkal', country:'Raju',company:'Secretary',status:'District Secretary',date:'14/01/2022',comment:'Reason....'},
    {name:'Ariyalur', country:'kalaiyarasan',company:'Secretary',status:'District Secretary',date:'09/01/2022',comment:'Reason....'}
    ];

    // customers1:any=[{name:'Ramesh', country:'District Secretary',company:'Salem',status:'Active',date:'ramesh34@gmail.com'},
    // {name:'Suresh', country:'District Secretary',company:'Coimbatore',status:'No-Active',date:'suresh2.KgK@gmail.com'},
    // {name:'Rajesh', country:'District Secretary',company:'Trichy',status:'Active',date:'rajesh.0508@gmail.com'},
    // {name:'Boopathi', country:'Secretary',company:'Perambalur',status:'Active',date:'boopathi839@gmail.com'},
    // {name:'kalaiyarasan', country:'District Secretary',company:'Ariyalur',status:'Active',date:'kalaiyarasan5734@gmail.com'},
    // {name:'Raju', country:'Secretary',company:'Namakkal',status:'No-Active',date:'raja.kg@gmail.com'},
    // {name:'Malleswaran', country:'District Secretary',company:'Perambalur',status:'No-Active',date:'chinni.malleswaran@gmail.com'}
    // ];
    customers1:any=[];
    //customers1=this.ApiService.tabledata[0].name;


    items = [
        { label: 'Add New', icon: 'pi pi-fw pi-plus' },
        { label: 'Remove', icon: 'pi pi-fw pi-minus' }
    ];
    chartData: any;
    chartOptions: any;
    subscription!: Subscription;
    products!: Product[];

    constructor(private productService: ProductService, public layoutService: LayoutService,
        private ApiService:ApiService ,public router:Router) {
        this.subscription = this.layoutService.configUpdate$.subscribe(() => {
            this.initChart();
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
    gettabledata(){
    this.ApiService.viewtableSA();
    this.ApiService.viewtableDA();
    this.ApiService.viewtableOB();
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



    sa_name:string;
    sa_email:string;
    sa_designation:string;
    sa_district:string;
    showstateadminDialog(customer:any,email:any,sa_designation:any,sa_district:any) {
        console.log(customer);
        this.sa_name=customer;
        this.sa_email=email;
        this.display0 = true;
        this.sa_designation=sa_designation;
        this.sa_district=sa_district;
    }

    da_name:string;
    da_email:string;
    da_designation:string;
    da_district:string;
    showdistadminDialog(customer:any,email:any,da_designation:any,da_district:any) {
        console.log(customer);
        this.da_name=customer;
        this.da_email=email;
        this.display1 = true;
        this.da_designation=da_designation;
        this.da_district=da_district;
    }

    ob_name:string;
    ob_email:string;
    ob_designation:string;
    ob_district:string;
    showofficebearerDialog(customer:any,email:any,ob_designation:any,ob_district:any) {
        console.log(customer);
        this.ob_name=customer;
        this.ob_email=email;
        this.display2 = true;
        this.ob_designation=ob_designation;
        this.ob_district=ob_district;
    }


    delete_sa(user_id : any)
    {
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


    delete_da(user_id : any)
    {
        console.log(user_id)
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


    delete_ob(user_id : any)
    {
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
