import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/demo/api/product';
import { ProductService } from 'src/app/demo/service/product.service';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
    templateUrl: './emptydemo.component.html'
})
export class EmptyDemoComponent {
    selectedState: any = null;
    cities:any[] = [

    ];
    selectedDrop:any = { value: '' };
    districtadmin:boolean=false;
    valCheck: string[] = [];
    createdistrictadmin:boolean=false;
    selfregistration:boolean=false;
    display: boolean = false;
    home:boolean=false;
    dashboard:boolean=true;
    visibleSidebar5: boolean = false;
    value5: any;
    visibleSidebar6: boolean =false;


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
    items = [
        { label: 'Add New', icon: 'pi pi-fw pi-plus' },
        { label: 'Remove', icon: 'pi pi-fw pi-minus' }
    ];

    cities1: any[] = [];

    cities2: any[] = [];

    city1: any = null;

    city2: any = null;
    valRadio: string = '';

    toggle(a:any){
        this.districtadmin = !this.districtadmin;
        this.createdistrictadmin=false;
        this.selfregistration=false;
        this.home=false;
       }

    toggle1(a:any){
        this.districtadmin=false;
        this.selfregistration=false;
        this.home=false;
        this.dashboard=false;
        return this.createdistrictadmin=true;

       }
    toggle2(a:any){
        this.selfregistration = !this.selfregistration;
        this.districtadmin=false;
        this.createdistrictadmin=false;
        this.home=false;
       }
    toggle3(a:any){
        this.home = !this.home;

    }
    toggledashboard(a:any){
        this.dashboard=!this.dashboard;
        this.home=false;
        this.createdistrictadmin=false;
        return this.dashboard=true;


 }
 toggle5(a:any){
    this.districtadmin = !this.districtadmin;
    this.createdistrictadmin=false;
    this.selfregistration=false;
    this.home=false;
    this.dashboard=false;
}

customers1:any=[{name:'Ramesh', country:'Secretary',company:'Namakkal',status:'Active',date:'ramesh@mail.com'},
    {name:'Suresh', country:'District Secretary',company:'Erode',status:'Non-active',date:'suresh@yahoomail.com'},
    {name:'Rajesh', country:'Secretary',company:'Salem',status:'Non-active',date:'rajeshsh08@email.com'},
    {name:'Dinesh', country:'District Secretary',company:'Madurai',status:'Active',date:'dinesh2022@mail.com'},
    {name:'Vijay Kumar', country:'District Secretary',company:'Thirunelveli',status:'Non-active',date:'vijayk11@gmail.com'},
    ];


chartData: any;
chartOptions: any;
subscription!: Subscription;
products!: Product[];

constructor(private productService: ProductService, public layoutService: LayoutService) {
    this.subscription = this.layoutService.configUpdate$.subscribe(() => {
        this.initChart();
    });
}
// eslint-disable-next-line @angular-eslint/use-lifecycle-interface
ngOnInit() {
    this.initChart();
    this.productService.getProductsSmall().then(data => this.products = data);

    this.items = [
        { label: 'Add New', icon: 'pi pi-fw pi-plus' },
        { label: 'Remove', icon: 'pi pi-fw pi-minus' }
    ];
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
}
